with (import <nixpkgs> {
  config = {
    allowUnfree = true;
    android_sdk.accept_license = true;
  };
});

let
  node = nodejs;
  jdk = openjdk;
  unpatched-sdk =
    let version = "4333796";
    in stdenv.mkDerivation {
      name = "unpatched-sdk";
      src = fetchzip {
        url = "https://dl.google.com/android/repository/sdk-tools-linux-${version}.zip";
        sha256 = "0010za2n8vycr29j846qscbdb4vq2b9g1fplqqw16hb0hhn9n039";
      };
      installPhase = ''
        mkdir -p $out
        cp -r * $out/
      '';
      dontPatchELF = true;
    };
    android-fhsEnv = rec {
      shell = pkgs.buildFHSUserEnv {
        name = "shell";
      };

      serve = pkgs.buildFHSUserEnv {
        name = "serve";
        runScript = "ionic serve -l";
      };

      run = pkgs.buildFHSUserEnv {
        name = "run";
        runScript = "ionic cordova run android -l";
      };

      # Not working
      #emulate = pkgs.buildFHSUserEnv {
      #  name = "emulate";
      #  runScript = ''
      #    sdkmanager "emulator" "system-images;android-28;default;x86"
      #    ionic cordova emulate android
      #  '';
      #};
    };
in
  stdenv.mkDerivation {
    name = "ionic-android";
    nativeBuildInputs = [
      android-fhsEnv.shell
      android-fhsEnv.serve
      android-fhsEnv.run
    ];
    buildInputs = [
      coreutils
      node
      unpatched-sdk
      gradle
    ];


    shellHook = ''
      export JAVA_HOME=${jdk}
      export ANDROID_HOME=$PWD/.android/
      export ANDROID_SDK_ROOT=$PWD/.android/sdk/
      export PATH="$ANDROID_SDK_ROOT/bin:$PWD/node_modules/.bin:$PATH"

      echo "=> get ionic-cli"
      npm install --no-save ionic cordova cordova-res native-run

      if ! test -d .android ; then
        echo doing hacky setup stuff:

        echo "=> pull the sdk out of the nix store and into a writeable directory"
        mkdir -p .android/sdk
        cp -r ${unpatched-sdk}/* .android/sdk/

        (
          cd .android/sdk

          sdkmanager --update
          echo "=> installing platform stuff (you'll need to accept a license in a second)..."
          sdkmanager "platforms;android-28" "build-tools;28.0.3"
        )
      fi
    '';
  }
