with import <nixpkgs> {};

let

in stdenv.mkDerivation {
  name = "count";

  src = null;

  buildInputs = [
    nodejs
    python27 # for node-gyp
  ];

  shellHook = ''
    export NPM_CONFIG_PREFIX="$(${mktemp.outPath}/bin/mktemp -d -t npm_XXXXXXX)"
    export PATH="''${PATH}:''${NPM_CONFIG_PREFIX}/bin"
    npm set prefix "''${NPM_CONFIG_PREFIX}/.npm-global"

    npm install -g ionic cordova cordova-res native-run
  '';

  exitHook = ''
    rm -rf ''${NPM_CONFIG_PREFIX}
  '';

}
