import { promises as fs } from "node:fs";
import path from "node:path";

// Serves the generated .pkpass with the Apple-mandated Content-Type so iOS
// Safari shows the native "Add to Apple Wallet" prompt.
//
// The .pkpass itself is built by `node scripts/build-pass.mjs` and lives
// at public/passes/founders.pkpass (gitignored — see .gitignore).
//
// If the pass hasn't been generated yet, this route returns a friendly 404
// rather than a generic Vercel error.

// Force dynamic — without this, Next.js may statically pre-render the route
// at build time (when the .pkpass doesn't exist) and cache the 404 response.
export const dynamic = "force-dynamic";

export async function GET() {
  const passPath = path.join(process.cwd(), "public/passes/founders.pkpass");

  try {
    const buf = await fs.readFile(passPath);
    return new Response(buf, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.apple.pkpass",
        "Content-Disposition": 'attachment; filename="founders.pkpass"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    if (err.code === "ENOENT") {
      return new Response(
        "Wallet pass not yet generated. Run `node scripts/build-pass.mjs` after Apple Dev portal setup (see docs/pitch/PITCH-PACKET.md Part 6).",
        { status: 404, headers: { "Content-Type": "text/plain" } },
      );
    }
    throw err;
  }
}
