import { access, readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const DOWNLOAD_NAME = "Muhammad-Umair-Resume.pdf";

/** Prefer public/ so the file can also be linked as /resume.pdf */
const RESUME_CANDIDATES = [
  path.join("public", "resume.pdf"),
  path.join("public", "Muhammad-Umair-Resume.pdf"),
  "Muhammad Umair Resume (1).pdf",
  "Muhammad-Umair-Resume.pdf",
  "resume.pdf",
];

async function resolveResumePath(): Promise<string | null> {
  for (const filename of RESUME_CANDIDATES) {
    const full = path.isAbsolute(filename)
      ? filename
      : path.join(process.cwd(), filename);
    try {
      await access(full);
      return full;
    } catch {
      // try next
    }
  }
  return null;
}

function notFound() {
  return Response.json(
    {
      error:
        "Resume PDF not found. Place your file at public/resume.pdf and restart the server.",
    },
    { status: 404 },
  );
}

export async function HEAD() {
  const resumePath = await resolveResumePath();
  if (!resumePath) return notFound();

  const resume = await readFile(resumePath);
  return new Response(null, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": String(resume.byteLength),
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export async function GET() {
  const resumePath = await resolveResumePath();
  if (!resumePath) return notFound();

  const resume = await readFile(resumePath);
  return new Response(new Uint8Array(resume), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
      "Content-Length": String(resume.byteLength),
      "Cache-Control": "public, max-age=3600",
    },
  });
}
