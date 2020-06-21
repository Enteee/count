#!/usr/bin/env bash
set -exuo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
TOPLEVEL="$(git -C "${DIR}" rev-parse --show-toplevel)"

IN_ICON="${1:-src/assets/icon.svg}"
IN_FEATURE_GRAPHIC="${2:-src/assets/feature-graphic.svg}"

OUT_FAVICON="src/assets/favicon.ico"

OUT_ICON="resources/icon.png"
OUT_ICON_PLAYSTORE="resources/icon-playstore.png"
OUT_SPLASH="resources/splash.png"

OUT_FEATURE_GRAPHIC="resources/feature-graphic.png"

(
  cd "${TOPLEVEL}"

  # Favicon
  convert \
    -density 384 \
    "${IN_ICON}" \
    -trim \
    -define icon:auto-resize \
    "${OUT_FAVICON}"

  # Icon
  convert \
    -density 1200 \
    -fill "#8c8c8cff" -opaque "#000000ff" \
    "${IN_ICON}" \
    -trim \
    -resize 1400x1400 \
    "${OUT_ICON}"

  convert \
    "${OUT_ICON}" \
    -gravity center \
    -background white \
    -extent 2732x2732 \
    "${OUT_SPLASH}"

  convert \
    "${OUT_ICON}" \
    -resize 512x512\! \
    "${OUT_ICON_PLAYSTORE}" \

  # Feature Graphic
  convert \
    -density 1200 \
    -fill "#8c8c8cff" -opaque "#000000ff" \
    "${IN_FEATURE_GRAPHIC}" \
    -resize 1024x500 \
    "${OUT_FEATURE_GRAPHIC}"

  ionic cordova resources
)
