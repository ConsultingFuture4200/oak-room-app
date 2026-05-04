# PassKit pass template

This directory holds the static assets for the Apple Wallet pass. The `build-pass.mjs` script reads from here and emits a signed `.pkpass` to `public/passes/`.

## Required files

| File | Size | Notes |
|------|------|-------|
| `pass.json` | — | Pass metadata. Already populated. Replace `teamIdentifier` after Apple Dev portal setup (see `docs/pitch/PITCH-PACKET.md` Part 6). |
| `icon.png` | 29×29 | Shown in notifications and the lock-screen pass preview. **Required.** |
| `icon@2x.png` | 58×58 | Retina. **Required.** |
| `icon@3x.png` | 87×87 | iPhone Pro / Plus. **Required.** |
| `logo.png` | 160×50 max | Shown at the top of the pass face next to `logoText`. Optional but recommended. |
| `logo@2x.png` | 320×100 max | Optional. |

## Producing the icons quickly

For the pitch demo, a simple cobalt circle with a serif "O" centered works fine. ImageMagick one-liner from the project root:

```bash
# Cobalt circle, marble "O" centered. Adjust size with -resize.
magick -size 87x87 xc:none -fill '#2B6CB0' -draw 'circle 43,43 43,5' \
  -font Cormorant-Garamond-Italic -pointsize 60 -fill '#F4F1EA' -gravity center \
  -annotate +0+0 'O' scripts/pass-template/icon@3x.png
magick scripts/pass-template/icon@3x.png -resize 58x58 scripts/pass-template/icon@2x.png
magick scripts/pass-template/icon@3x.png -resize 29x29 scripts/pass-template/icon.png
```

If ImageMagick isn't installed: any 87×87, 58×58, 29×29 PNG works. The pass face is rendered in graphite + cobalt by Apple from the `pass.json` color fields — the icons are small accents, not the main visual.
