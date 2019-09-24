with (import <nixpkgs> {
  config = {
    allowUnfree = true;
    android_sdk.accept_license = true;
  };
});

let

  androidComposition = androidenv.composeAndroidPackages {
#    platformToolsVersion = "29.0.4";
#    toolsVersion = "26.1.1";
  };
#  androidComposition = androidenv.androidPkgs_9_0;

in stdenv.mkDerivation {
  name = "count";

  src = null;

  buildInputs = [
    nodejs
    python27 # for node-gyp
    jdk
    gradle
    androidComposition.androidsdk
    androidComposition.platform-tools
  ];

  shellHook = ''
    export NPM_CONFIG_PREFIX="$(${mktemp.outPath}/bin/mktemp -d -t npm_XXXXXXX)"
    export PATH="''${PATH}:''${NPM_CONFIG_PREFIX}/bin"
    npm set prefix "''${NPM_CONFIG_PREFIX}/.npm-global"
    npm install -g ionic cordova cordova-res native-run

    # Android related
    export ANDROID_SDK_ROOT="${androidComposition.androidsdk}"

    # Accept Anroid license
    #yes | sdkmanager --update
  '';

  exitHook = ''
    rm -rf ''${NPM_CONFIG_PREFIX}
  '';

}
