import Link from "next/link";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { Shell } from "@/components/Shell";
import { PROFILE } from "@/data/profile";
import {
  githubHref,
  linkedinHref,
  mailtoHref,
  telHref,
} from "@/lib/contact";

export default function ProfilePage() {
  const github = githubHref();
  const linkedin = linkedinHref();

  const channels: {
    label: string;
    value: string;
    href?: string;
    external?: boolean;
  }[] = [
    {
      label: "EMAIL",
      value: PROFILE.contact.email,
      href: mailtoHref(),
    },
    {
      label: "PHONE",
      value: PROFILE.contact.phone,
      href: telHref(),
    },
    {
      label: "LOCATION",
      value: PROFILE.contact.location,
    },
    {
      label: "STATUS",
      value: PROFILE.status,
    },
  ];

  if (github) {
    channels.push({
      label: "GITHUB",
      value: github.replace(/^https?:\/\//, ""),
      href: github,
      external: true,
    });
  }
  if (linkedin) {
    channels.push({
      label: "LINKEDIN",
      value: linkedin.replace(/^https?:\/\//, ""),
      href: linkedin,
      external: true,
    });
  }

  return (
    <Shell
      active="/profile"
      title="ARCHITECT_OS // PROFILE"
      className="blueprint-bg"
    >
      <div className="mx-auto max-w-6xl space-y-6 p-4 md:p-6">
        <section className="grid grid-cols-12 gap-px border border-outline-variant bg-outline-variant">
          <div className="col-span-12 flex flex-col gap-6 bg-surface-container-lowest p-6 md:col-span-8 md:flex-row md:items-start">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center border border-primary-container bg-primary-container/10 shadow-[0_0_24px_rgba(0,240,255,0.15)]">
              <span
                className="material-symbols-outlined text-5xl text-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-3 inline-flex items-center gap-2 border border-secondary px-2 py-1">
                <span className="status-pip h-2 w-2 animate-pulse rounded-full bg-secondary" />
                <span className="font-label-caps text-secondary">
                  {PROFILE.status}
                </span>
              </div>
              <h1 className="font-display-lg mb-1 uppercase tracking-tighter text-primary">
                {PROFILE.name}
              </h1>
              <p className="font-headline-sm mb-2 text-secondary">
                {PROFILE.title}
              </p>
              <p className="font-code-md mb-4 text-on-surface-variant">
                {PROFILE.rank} · {PROFILE.regionCode}
              </p>
              <p className="font-body-md max-w-2xl text-on-surface-variant">
                {PROFILE.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/command#contact"
                  className="font-label-caps bg-primary-container px-5 py-2 font-bold text-on-primary transition-transform hover:scale-105"
                >
                  INIT_CONTACT
                </Link>
                <DownloadResumeButton variant="outline" />
                <Link
                  href="/stack"
                  className="font-label-caps border border-outline-variant px-5 py-2 text-on-surface transition-colors hover:bg-surface-container-high"
                >
                  VIEW_STACK
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-px bg-outline-variant md:col-span-4 md:grid-cols-1">
            {PROFILE.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-surface-container p-4 md:flex md:items-center md:justify-between"
              >
                <div className="font-label-caps mb-1 text-outline md:mb-0">
                  {metric.label}
                </div>
                <div className="font-headline-md text-primary-container">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                info
              </span>
              <h2 className="font-headline-md uppercase text-primary">
                ABOUT_OPERATOR
              </h2>
            </div>
            <div className="space-y-4 border border-outline-variant bg-surface-container-lowest p-4">
              {PROFILE.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-code-md text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
              <div className="border-t border-outline-variant pt-4">
                <div className="font-label-caps mb-2 text-secondary">
                  SPECIALIZATION
                </div>
                <p className="font-code-md text-primary">
                  {PROFILE.specialization}
                </p>
              </div>
              <div className="border-t border-outline-variant pt-4">
                <div className="font-label-caps mb-2 text-secondary">
                  OBJECTIVE
                </div>
                <p className="font-code-md text-primary">{PROFILE.objective}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                track_changes
              </span>
              <h2 className="font-headline-md uppercase text-primary">
                FOCUS_VECTORS
              </h2>
            </div>
            <div className="space-y-2 border border-outline-variant bg-surface-container-lowest p-3">
              {PROFILE.focus.map((item, index) => (
                <div
                  key={item}
                  className="cyan-glow-hover flex gap-3 border border-outline-variant bg-surface-container p-3 transition-colors"
                >
                  <span className="font-meta-sm shrink-0 text-primary-container">
                    0{index + 1}
                  </span>
                  <span className="font-code-md text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              history_edu
            </span>
            <h2 className="font-headline-md uppercase text-primary">
              ENGINEERING_JOURNEY
            </h2>
          </div>
          <div className="space-y-3">
            {PROFILE.experience.map((job) => (
              <div
                key={job.id}
                className="overflow-hidden border border-outline-variant bg-surface-container-lowest"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant bg-surface-container px-3 py-2">
                  <div className="font-label-caps flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-sm">
                      terminal
                    </span>
                    {job.id}: {job.company}
                  </div>
                  <div className="font-meta-sm uppercase text-outline">
                    {job.date}
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-headline-sm mb-2 text-on-surface">
                    {job.role}
                  </div>
                  <p className="font-code-md text-on-surface-variant">
                    {job.body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-meta-sm border border-outline-variant px-2 py-0.5 uppercase text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                psychology
              </span>
              <h2 className="font-headline-md uppercase text-primary">
                SKILL_MATRIX
              </h2>
            </div>
            <div className="space-y-3 border border-outline-variant bg-surface-container-lowest p-3">
              {Object.entries(PROFILE.skills).map(([group, items]) => (
                <div
                  key={group}
                  className="border border-outline-variant bg-surface-container p-3"
                >
                  <div className="font-label-caps mb-2 text-secondary">
                    {group.toUpperCase()}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="font-meta-sm border border-outline-variant px-2 py-1 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  school
                </span>
                <h2 className="font-headline-md uppercase text-primary">
                  KNOWLEDGE_BASE
                </h2>
              </div>
              <div className="space-y-3">
                {PROFILE.education.map((item) => (
                  <div
                    key={item.id}
                    className="cyan-glow-hover border border-outline-variant bg-surface-container-lowest p-4 transition-all"
                  >
                    <div className="font-label-caps mb-1 text-secondary">
                      {item.id}
                    </div>
                    <div className="font-headline-sm text-on-surface">
                      {item.title}
                    </div>
                    <div className="font-meta-sm mb-2 text-outline">
                      {item.org}
                    </div>
                    <p className="font-code-md text-on-surface-variant">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  alternate_email
                </span>
                <h2 className="font-headline-md uppercase text-primary">
                  COMM_CHANNELS
                </h2>
              </div>
              <div className="grid gap-px border border-outline-variant bg-outline-variant sm:grid-cols-2">
                {channels.map((channel) => (
                  <div
                    key={channel.label}
                    className="bg-surface-container-lowest p-4"
                  >
                    <div className="font-label-caps mb-1 text-outline">
                      {channel.label}
                    </div>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        className="font-code-md text-primary-container underline-offset-2 hover:underline"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <div className="font-code-md text-primary">
                        {channel.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
