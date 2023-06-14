#!/bin/bash

for file in $1/*.json; do
  mv "$file" "${file}.bak"
  jq '.instructions |= sort_by(.stepNumber) | .commonMistakes |= sort | .tips |= sort' "${file}.bak" > "$file"
  rm "${file}.bak"
done
