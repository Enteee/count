#!/usr/bin/env bash
# sign and zipalign .apk
#
# Arguments:
#   $1: APK to sign / zipalign
#   $2: Output apk
#
# Environment:
#  - STOREPASS: (required) password for KEYSTORE
#  - KEYSTORE: path to the keystore to use
#  - KEY_ALIAS: alias of the signing key in the KEYSTORE

set -exuo pipefail

APK="${1?Missing APK}"
APK_OUT="${2?Missing Output apk}"
STOREPASS="${STOREPASS?Missing Storepass}"

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

if [ ! -f "${APK}" ]; then
  echo "'${APK}' is not a file" >&2
  exit 1
fi

if [ ! -x "${ZIPALIGN_BIN}" ]; then
  echo "Could not locate zipalign. Tried: '${ZIPALIGN_BIN}'" >&2
  exit 1
fi

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

"${ZIPALIGN_BIN}" \
  -f \
  -v \
  4 \
  "${APK_TMP}" \
  "${APK_OUT}"
