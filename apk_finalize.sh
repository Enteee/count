#!/usr/bin/env bash
# sign and zipalign .apk
#
# Arguments:
#   $1: APK to sign / zipalign
#
# Environment:
#  - STOREPASS: (required) password for KEYSTORE
#  - KEYSTORE: path to the keystore to use
#  - KEY_ALIAS: alias of the signing key in the KEYSTORE
#  - OUT_DIR: apk output directory

set -exuo pipefail

APK="${1?Missing APK}"
KEYSTORE="${KEYSTORE:-count-release-key.keystore}"
KEY_ALIAS="${KEY_ALIAS:-count-release-key}"
ZIPALIGN_BIN="$(find \
  "${ANDROID_SDK_ROOT}" \
  -executable \
  -name \
  "zipalign" \
  -print \
  -quit
)"
OUT_DIR="${OUT_DIR:-release/}"

if [ ! -f "${APK}" ]; then
  echo "'${APK}' is not a file" >&2
  exit 1
fi

if [ ! -x "${ZIPALIGN_BIN}" ]; then
  echo "Could not locate zipalign. Tried: '${ZIPALIGN_BIN}'" >&2
  exit 1
fi

APK_OUT="$(basename "${APK/-unsigned}")"
APK_TMP="$(mktemp)"

function cleanup {
  rm -f "${APK_TMP}"
}
trap cleanup EXIT

cp "${APK}" "${APK_TMP}"

jarsigner \
    -verbose \
    -sigalg SHA1withRSA \
    -storepass:env STOREPASS \
    -digestalg SHA1 \
    -keystore "${KEYSTORE}" \
    "${APK_TMP}" \
    "${KEY_ALIAS}"

mkdir -p "${OUT_DIR}"

"${ZIPALIGN_BIN}" \
  -f \
  -v \
  4 \
  "${APK_TMP}" \
  "${OUT_DIR}/${APK_OUT}"
