import type { MetadataRoute } from "next";

// PWA manifest. Served at /manifest.webmanifest.
//
// On iPhone: Safari → Share → "Add to Home Screen" reads this manifest
// to install the app full-screen with a graphite status bar and the
// Post Oak silhouette home-screen icon. No App Store, no TestFlight,
// no Apple review.
//
// theme_color and background_color match the in-app graphite so the
// status bar and splash screen feel native, not like a webview.

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Oak Room Houston",
    short_name: "Oak Room",
    description: "A members' app for The Oak Room at The Post Oak Hotel.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#1C1D20",
    theme_color: "#1C1D20",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
