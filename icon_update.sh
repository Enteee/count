#!/usr/bin/env bash
set -exuo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
TOPLEVEL="$(git -C "${DIR}" rev-parse --show-toplevel)"

IN_ICON="${1:-src/assets/icon.svg}"

OUT_FAVICON="src/assets/favicon.ico"
OUT_ICON="resources/icon.png"
OUT_SPLASH="resources/splash.png"

(
  cd "${TOPLEVEL}"
  convert -density 384 "${IN_ICON}" -define icon:auto-resize "${OUT_FAVICON}"
  convert -density 250 "${IN_ICON}" "${OUT_ICON}"
  convert "${OUT_ICON}" -gravity center \
    -background white \
    -extent 2732x2732 \
    "${OUT_SPLASH}"
  ionic cordova resources
)
