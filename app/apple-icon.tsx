import { ImageResponse } from "next/og";

// iOS Safari requires PNG for the apple-touch-icon (SVG is ignored).
// Next.js renders this JSX to a PNG at build/request time.
//
// Generated at /apple-icon. iOS picks it up automatically via the
// metadata API in app/layout.jsx.

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1D20",
          color: "#2B6CB0",
          fontSize: 132,
          fontStyle: "italic",
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontWeight: 400,
          // iOS will round the corners; the inner cobalt frame echoes
          // the in-app card detail.
          border: "2px solid #2B6CB0",
          boxSizing: "border-box",
        }}
      >
        O
      </div>
    ),
    { ...size },
  );
}
