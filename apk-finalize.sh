#!/usr/bin/env bash
# sign and zipalign all apk in platforms/
#
# Arguments:
#   $1: APK to sign / zipalign
#
# Environment:
#  - STOREPASS: (required) password for KEYSTORE
#  - KEYSTORE: path to the keystore to use
#  - KEY_ALIAS: alias of the signing key in the KEYSTORE

set -exuo pipefail

APK="${1?Missing APK}"
KEYSTORE="${KEYSTORE:-count-release-key.keystore}"
KEY_ALIAS="${KEY_ALIAS:-count-release-key}"

if [ ! -f "${APK}" ]; then
  echo "${APK} is not a file" >&2
  exit 1
fi

APK_OUT="${APK/-unsigned}"
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

zipalign \
  -v 4 \
  "${APK_TMP}"
  "${APK_OUT}"

# Remove original apk: if -unsigned
if [ "${APK}" != "${APK_OUT}" ]; then
  rm -rf "${APK}"
fi
