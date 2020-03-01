with (import <nixpkgs> {
  config = {
    allowUnfree = true;
    android_sdk.accept_license = true;
  };
});

let
  drvName = "count";

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
      gradle
    ];

    extraInstallCommands = ''

      cat <<'EOF' >$out/bin/init-${name}

        # make writable sdk copy
        mkdir -p "$ANDROID_SDK_ROOT"
        cp -Lr \
          "${androidComposition.androidsdk}/libexec/android-sdk/." \
          "$ANDROID_SDK_ROOT"
        chmod -R u+w "$ANDROID_SDK_ROOT"

      EOF
      chmod +x "$out/bin/init-${name}"

      source ${makeWrapper}/nix-support/setup-hook
      wrapProgram $out/bin/${name} \
        --set JAVA_HOME "${openjdk}" \
        --set CHROME_BIN "${chromium}/bin/chromium" \
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
      androidComposition.androidsdk
      nodejs
      gradle

      peek # screen recorder
    ];

    shellHook = ''
      export NPM_CONFIG_PREFIX="$PWD/.npm-global"
      export PATH="''${PATH}:''${NPM_CONFIG_PREFIX}/bin"
      ${nodejs}/bin/npm set prefix "''${NPM_CONFIG_PREFIX}/.npm-global"

      ${nodejs}/bin/npm install
      ${nodejs}/bin/npm install -g --no-save \
        @ionic/cli \
        native-run \
        cordova \
        cordova-res \
        @angular/cli \
        npm-check-updates

      export ANDROID_SDK_ROOT="$PWD/.android-sdk"
      export ANDROID_HOME="$ANDROID_SDK_ROOT"
      exec ${fhsEnv}/bin/${drvName}-fhs-env
    '';
  }
