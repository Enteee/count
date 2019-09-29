with (import <nixpkgs> {
  config = {
    allowUnfree = true;
    android_sdk.accept_license = true;
  };
});

let
  drvName = "count";

  jdk = openjdk;
  node = nodejs;

  androidComposition = androidenv.composeAndroidPackages {
    toolsVersion = "26.1.1";
    platformToolsVersion = "28.0.1";
    platformVersions = [
      "28"
    ];
    includeExtras = [
    ];
  };

  fhsEnv = buildFHSUserEnv rec {
    name = "${drvName}-fhs-env";

    multiPkgs = pkgs: with pkgs; [
      coreutils
      jdk
      gradle
      androidComposition.androidsdk
    ];

    extraInstallCommands = ''

      cat <<'EOF' >$out/bin/init-${name}

        # make writable sdk copy
        mkdir -p "$ANDROID_SDK_ROOT"
        cp -Lr "${androidComposition.androidsdk}/libexec/android-sdk/." "$ANDROID_SDK_ROOT"
        chmod -R u+w "$ANDROID_SDK_ROOT"

      EOF
      chmod +x "$out/bin/init-${name}"

      source ${makeWrapper}/nix-support/setup-hook
      wrapProgram $out/bin/${name} \
        --set ANDROID_SDK_ROOT "./android-sdk" \
        --set ANDROID_HOME "./android-sdk" \
        --run "init-${name}"
    '';
  };

in
  stdenv.mkDerivation {
    name = "${drvName}";

    nativeBuildInputs = [
      fhsEnv
    ];

    buildInputs = [
      coreutils
      node
      androidComposition.androidsdk
      gradle
    ];

    shellHook = ''
      export NPM_CONFIG_PREFIX="$PWD/.npm-global"
      export PATH="''${PATH}:''${NPM_CONFIG_PREFIX}/bin"
      npm set prefix "''${NPM_CONFIG_PREFIX}/.npm-global"

      export JAVA_HOME=${jdk}

      npm install
      npm install -g --no-save \
        ionic \
        native-run \
        cordova \
        cordova-res

      #mkdir .android
      #(
      #  cd .android
      #  ln -s ${androidComposition.androidsdk}/libexec/android-sdk/*
      #)
      #export ANDROID_SDK_ROOT="$PWD/.android"
      #export ANDROID_SDK_ROOT="$PWD/.android"
      export ANDROID_HOME="${androidComposition.androidsdk}/libexec/android-sdk"
      export ANDROID_SDK_ROOT="${androidComposition.androidsdk}/libexec/android-sdk"

      #export ANDROID_HOME=$PWD/.android/
      #export PATH="$ANDROID_SDK_ROOT/bin:$PWD/node_modules/.bin:$PATH"
    '';

    exitHook = ''
      rm -rf ''${NPM_CONFIG_PREFIX}
    '';
  }
