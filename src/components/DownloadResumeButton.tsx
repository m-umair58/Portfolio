"use client";

import { useState } from "react";
import { RESUME_HREF } from "@/lib/contact";

type Variant = "primary" | "outline" | "ghost";

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    "bg-primary-container font-bold text-on-primary-container hover:opacity-90",
  outline:
    "border border-outline-variant text-on-surface hover:bg-surface-container-high",
  ghost: "text-primary-container hover:underline",
};

export function DownloadResumeButton({
  label = "DOWNLOAD_RESUME",
  variant = "outline",
  className = "",
}: {
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onClick() {
    setError(null);
    setBusy(true);
    try {
      const res = await fetch(RESUME_HREF, { method: "HEAD" });
      if (!res.ok) {
        setError("Resume file missing — add public/resume.pdf");
        return;
      }
      window.location.href = RESUME_HREF;
    } catch {
      setError("Download failed — try again");
    } finally {
      setBusy(false);
    }
  }

  return (
    <span className={`inline-flex flex-col gap-1 ${className}`}>
      <button
        type="button"
        onClick={onClick}
        disabled={busy}
        className={`font-label-caps px-5 py-2 transition-all disabled:opacity-60 ${VARIANT_CLASS[variant]}`}
      >
        {busy ? "CHECKING…" : label}
      </button>
      {error ? (
        <span className="font-meta-sm text-error" role="status">
          {error}
        </span>
      ) : null}
    </span>
  );
}
