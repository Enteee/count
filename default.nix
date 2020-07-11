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
    platformToolsVersion = "29.0.6";
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
      git
      androidComposition.androidsdk
      nodejs
      gradle
      openjdk

      peek # screen recorder
      unzip
    ];

    shellHook = ''
      export NPM_CONFIG_PREFIX="$PWD/.npm-global"
      export PATH="''${PATH}:''${NPM_CONFIG_PREFIX}/bin"
      ${nodejs}/bin/npm set prefix "''${NPM_CONFIG_PREFIX}/.npm-global"

      ionic() { ${nodejs}/bin/npx ionic "''$@"; }
      export -f ionic

      ng() { ${nodejs}/bin/npx ng "''$@"; }
      export -f ng

      ncu() { ${nodejs}/bin/npx ncu "''$@"; }
      export -f ncu

      build() {
        STOREPASS="''${1?Missing Storepass first argument}" && shift
        ${nodejs}/bin/npm install
        ${nodejs}/bin/npx ionic cordova build android "''${@}"

        export STOREPASS
        find \
          platforms/ \
          -name '*.apk' \
          -print0 \
        | xargs -0 -n1 -I{} \
          ./apk_finalize.sh \
            {} \
            "count.apk"
      }
      export -f build

      buildRelease() {
        STOREPASS="''${1?Missing Storepass first argument}" && shift
        build "''${STOREPASS}" --prod --release "''${@}"
      }
      export -f buildRelease


      export ANDROID_SDK_ROOT="$PWD/.android-sdk"
      export ANDROID_HOME="$ANDROID_SDK_ROOT"
      exec ${fhsEnv}/bin/${drvName}-fhs-env
    '';
  }
