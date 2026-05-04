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

## Producing the icons

The icons are a brushed-steel tile with the Post Oak canopy silhouette centered, framed by a thin antique-brass rim — matching the in-app brand and the pass strip. Source: `public/oak-canopy.png`. Generated via ImageMagick (see commit history for the exact composite). Regenerate by re-running the icon-build snippet from the project root if either the canopy artwork or the brass tone changes.

If ImageMagick isn't available: any 87×87, 58×58, 29×29 PNG that follows the brushed-steel + canopy convention works. The pass face is rendered in warm tan + brass by Apple from the `pass.json` color fields — these icons are small accents that reinforce the same visual world.
