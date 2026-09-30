import { PROFILE } from "@/data/profile";

export function mailtoHref(opts?: {
  subject?: string;
  body?: string;
}): string {
  const params = new URLSearchParams();
  if (opts?.subject) params.set("subject", opts.subject);
  if (opts?.body) params.set("body", opts.body);
  const query = params.toString();
  return `mailto:${PROFILE.contact.email}${query ? `?${query}` : ""}`;
}

export function telHref(): string {
  return `tel:${PROFILE.contact.phoneE164}`;
}

export function githubHref(): string | null {
  const url = PROFILE.contact.github.trim();
  return url ? url : null;
}

export function linkedinHref(): string | null {
  const url = PROFILE.contact.linkedin.trim();
  return url ? url : null;
}

/** Resume served from public/ or /api/resume */
export const RESUME_HREF = "/api/resume";
export const RESUME_DOWNLOAD_NAME = "Muhammad-Umair-Resume.pdf";
