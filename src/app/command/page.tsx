"use client";

import { useEffect } from "react";
import { ContactForm } from "@/components/ContactForm";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { Shell } from "@/components/Shell";
import { PROFILE } from "@/data/profile";
import {
  githubHref,
  linkedinHref,
  mailtoHref,
  telHref,
} from "@/lib/contact";

export default function CommandPage() {
  const github = githubHref();
  const linkedin = linkedinHref();

  useEffect(() => {
    if (window.location.hash !== "#contact") return;
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <Shell active="/command" title="ARCHITECT_OS // CONTACT">
      <div className="grid h-[calc(100vh-5rem)] grid-cols-1 gap-px overflow-y-auto bg-[#1a1a1c] p-px md:grid-cols-12 md:overflow-hidden">
        <section className="flex h-full flex-col gap-px md:col-span-3">
          <div className="flex-1 border border-outline-variant bg-surface-container-low p-3">
            <div className="mb-4 flex items-center justify-between border-b border-outline-variant pb-2">
              <span className="font-label-caps text-primary">COMM_CHANNELS</span>
              <span className="material-symbols-outlined text-sm opacity-50">
                forum
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-meta-sm uppercase tracking-widest text-on-surface-variant">
                  Email
                </p>
                <a
                  href={mailtoHref()}
                  className="font-code-md break-all text-primary-container underline-offset-2 hover:underline"
                >
                  {PROFILE.contact.email}
                </a>
              </div>
              <div>
                <p className="font-meta-sm uppercase tracking-widest text-on-surface-variant">
                  Phone
                </p>
                <a
                  href={telHref()}
                  className="font-code-md text-primary-container underline-offset-2 hover:underline"
                >
                  {PROFILE.contact.phone}
                </a>
              </div>
              <div>
                <p className="font-meta-sm uppercase tracking-widest text-on-surface-variant">
                  Location
                </p>
                <p className="font-code-md text-primary">
                  {PROFILE.contact.location}
                </p>
              </div>
              {github ? (
                <div>
                  <p className="font-meta-sm uppercase tracking-widest text-on-surface-variant">
                    GitHub
                  </p>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-code-md text-primary-container underline-offset-2 hover:underline"
                  >
                    {github.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              ) : null}
              {linkedin ? (
                <div>
                  <p className="font-meta-sm uppercase tracking-widest text-on-surface-variant">
                    LinkedIn
                  </p>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-code-md text-primary-container underline-offset-2 hover:underline"
                  >
                    {linkedin.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              ) : null}
              <div className="pt-2">
                <DownloadResumeButton
                  variant="outline"
                  className="w-full [&_button]:w-full"
                />
              </div>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden border border-outline-variant bg-surface-container-low p-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,240,255,0.15),transparent_55%)]" />
            <div className="relative z-10">
              <span className="font-label-caps text-primary">
                OPERATOR_STATUS
              </span>
              <p className="font-code-md mt-4 text-secondary">
                {PROFILE.status}
              </p>
              <p className="font-code-md text-on-surface-variant">
                {PROFILE.regionCode}
              </p>
              <p className="font-code-md mt-2 text-on-surface-variant">
                Prefer email for async ops.
              </p>
            </div>
          </div>
        </section>

        <section className="flex h-full flex-col md:col-span-6">
          <div className="glow-border flex flex-1 flex-col border border-outline-variant bg-surface-container-low p-3">
            <div className="mb-4 flex items-center justify-between border-b border-outline-variant pb-2">
              <span className="font-label-caps text-primary-container">
                CONTACT_BRIEF
              </span>
            </div>
            <div className="font-code-md flex-1 space-y-3 overflow-y-auto">
              <p className="text-primary">NAME: {PROFILE.name.toUpperCase()}</p>
              <p className="text-primary">ROLE: {PROFILE.title}</p>
              <p className="text-primary">
                SPECIALIZATION: {PROFILE.specialization}
              </p>
              <p className="text-on-surface-variant">{PROFILE.summary}</p>
              <p className="text-on-surface-variant">
                Use the form on the right to open your mail client, or email /
                call directly from COMM_CHANNELS. Switch to CLI mode for{" "}
                <span className="text-primary">contact</span> and{" "}
                <span className="text-primary">curl -OJ /api/resume</span>.
              </p>
            </div>
          </div>
        </section>

        <section className="flex h-full flex-col gap-px md:col-span-3">
          <div className="border border-outline-variant bg-surface-container-low p-3">
            <span className="font-label-caps mb-4 block text-primary">
              QUICK_ACTIONS
            </span>
            <div className="space-y-3">
              <a
                href={mailtoHref({
                  subject: "Hello from your portfolio",
                })}
                className="font-label-caps block border border-outline-variant px-3 py-2 text-center text-on-surface transition-colors hover:bg-surface-container-high"
              >
                EMAIL_DIRECT
              </a>
              <a
                href={telHref()}
                className="font-label-caps block border border-outline-variant px-3 py-2 text-center text-on-surface transition-colors hover:bg-surface-container-high"
              >
                CALL_NOW
              </a>
              <DownloadResumeButton
                variant="primary"
                className="block w-full [&_button]:w-full"
              />
            </div>
          </div>

          <div className="glow-border flex-1 border border-outline-variant bg-surface-container-low p-3">
            <span className="font-label-caps mb-2 block text-primary">
              COMM_PORT_INIT
            </span>
            <ContactForm />
          </div>
        </section>
      </div>
    </Shell>
  );
}
