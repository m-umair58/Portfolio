import Link from "next/link";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { LiveClock } from "@/components/LiveClock";
import { CliLaunchPanel } from "@/components/OpenCliButton";
import { Shell } from "@/components/Shell";
import { PROFILE } from "@/data/profile";
import { mailtoHref, telHref } from "@/lib/contact";

const SKILLS = [
  { name: "NODE_NEST_FASTAPI", pct: 92, status: "BACKEND_CORE_READY" },
  { name: "REACT_NEXTJS", pct: 94, status: "INTERFACE_OS_LOADED" },
  { name: "AWS_ECOSYSTEM", pct: 88, status: "CLOUD_NODE_SYNC" },
  { name: "AZURE_AKS", pct: 86, status: "CLUSTER_RUNTIME_UP" },
  { name: "DOCKER_K8S", pct: 90, status: "CONTAINERS_ACTIVE" },
  { name: "CI_CD_PIPELINES", pct: 89, status: "DELIVERY_FLOW_OPTIMIZED" },
];

const JOURNEY = [
  {
    id: "DEPLOYMENT_03: FINYRAAI",
    date: "MAR 2026 - PRESENT",
    role: "Software Engineer / DevOps Engineer",
    body: "Building and operating a B2B fintech API subscription platform with partner and admin portals, Stripe billing, API key lifecycle, usage tracking, PostgreSQL, AWS deployments, and production validation.",
    tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "AWS"],
  },
  {
    id: "DEPLOYMENT_02: LABOUCHRIE",
    date: "NOV 2025 - MAR 2026",
    role: "Software Engineer (Full-Stack)",
    body: "Built a multi-store storefront and RBAC admin portal, extending Medusa with ERP synchronization, payments, Wolt fulfillment, OAuth/2FA, Azure services, and CI/CD quality gates.",
    tags: ["Medusa", "Next.js", "Azure", "Wolt", "Docker"],
  },
  {
    id: "DEPLOYMENT_01: AUTOBRIDGE",
    date: "NOV 2024 - NOV 2025",
    role: "DevOps Engineer (Full-Stack)",
    body: "Managed Azure infrastructure and AKS microservices with Key Vault, Cosmos DB, SQL Server, Entra ID, IAM/RBAC, Kubernetes optimization, and production deployment support.",
    tags: ["Azure", "AKS", "Key Vault", "Cosmos DB", "Entra ID"],
    muted: true,
  },
];

export default function ControlPage() {
  return (
    <Shell
      active="/"
      title="ARCHITECT_OS // DASHBOARD"
      className="blueprint-bg"
    >
      <div className="space-y-6 p-4 md:p-6">
        <section className="grid grid-cols-12 gap-px border border-outline-variant bg-outline-variant">
          <div className="relative col-span-12 overflow-hidden bg-surface-container-lowest p-6 md:col-span-8">
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 border border-secondary px-2 py-1">
                <span className="h-2 w-2 animate-ping rounded-full bg-secondary" />
                <span className="font-label-caps text-secondary">
                  Status: Available for Work
                </span>
              </div>
              <h1 className="font-display-lg mb-2 uppercase text-primary">
                SYSTEM_INIT: SCALABLE SOFTWARE
              </h1>
              <p className="font-headline-sm max-w-2xl text-on-surface-variant">
                {PROFILE.name} — {PROFILE.title}. Building scalable, secure,
                user-focused systems across fintech, ecommerce, cloud
                infrastructure, and AI automation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/profile"
                  className="font-label-caps bg-primary-container px-6 py-2 font-bold text-on-primary transition-transform hover:scale-105 active:opacity-80"
                >
                  OPEN_PROFILE
                </Link>
                <Link
                  href="/command#contact"
                  className="font-label-caps border border-outline-variant px-6 py-2 text-on-surface transition-colors hover:bg-surface-container-high"
                >
                  INIT_CONTACT
                </Link>
                <DownloadResumeButton variant="outline" />
                <Link
                  href="/stack"
                  className="font-label-caps border border-outline-variant px-6 py-2 text-on-surface transition-colors hover:bg-surface-container-high"
                >
                  VIEW_BLUEPRINTS
                </Link>
                <Link
                  href="/erd"
                  className="font-label-caps border border-outline-variant px-6 py-2 text-on-surface transition-colors hover:bg-surface-container-high"
                >
                  VIEW_ERD
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-between gap-4 bg-surface-container p-6 md:col-span-4">
            <div className="border-b border-outline-variant pb-4">
              <div className="font-label-caps mb-1 text-outline">LOCAL_TIME</div>
              <LiveClock />
            </div>
            <div className="border-b border-outline-variant pb-4">
              <div className="font-label-caps mb-1 text-outline">REGION</div>
              <div className="font-headline-sm text-primary">
                {PROFILE.region}
              </div>
            </div>
            <div>
              <div className="font-label-caps mb-2 text-outline">
                DIRECT_LINK
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={mailtoHref()}
                  className="font-code-md break-all text-primary-container underline-offset-2 hover:underline"
                >
                  {PROFILE.contact.email}
                </a>
                <a
                  href={telHref()}
                  className="font-code-md text-primary-container underline-offset-2 hover:underline"
                >
                  {PROFILE.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              analytics
            </span>
            <h2 className="font-headline-md uppercase text-primary">
              TECHNICAL_ARSENAL
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-px border border-outline-variant bg-outline-variant md:grid-cols-3 lg:grid-cols-6">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="cyan-glow-hover border border-transparent bg-surface-container-lowest p-3 transition-all"
              >
                <div className="font-label-caps mb-2 text-outline">
                  {skill.name}
                </div>
                <div className="mb-2 h-2 w-full bg-surface-container-highest">
                  <div
                    className="h-full bg-primary-container"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
                <div className="font-meta-sm text-secondary">{skill.status}</div>
              </div>
            ))}
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
          <div className="space-y-4">
            {JOURNEY.map((job) => (
              <div
                key={job.id}
                className={`overflow-hidden border border-outline-variant bg-surface-container-lowest ${job.muted ? "opacity-80" : ""}`}
              >
                <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container p-2">
                  <div className="font-label-caps flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-sm">
                      terminal
                    </span>
                    {job.id}
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

        <section className="grid grid-cols-12 gap-6">
          <div className="col-span-12 flex flex-col gap-4 lg:col-span-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                school
              </span>
              <h2 className="font-headline-md uppercase text-primary">
                KNOWLEDGE_BASE
              </h2>
            </div>
            <div className="cyan-glow-hover border border-outline-variant bg-surface-container-lowest p-3 transition-all">
              <div className="font-label-caps mb-1 text-secondary">
                DEGREE_CERT_01
              </div>
              <div className="font-headline-sm text-on-surface">
                Bachelor of Computer Science
              </div>
              <div className="font-meta-sm mb-2 text-outline">
                University of Central Punjab
              </div>
              <div className="font-code-md text-on-surface-variant">
                Computer Science foundation supporting full-stack software
                engineering, cloud infrastructure, DevOps, and scalable systems.
              </div>
            </div>
            <div className="cyan-glow-hover border border-outline-variant bg-surface-container-lowest p-3 transition-all">
              <div className="font-label-caps mb-1 text-secondary">
                EXPERIENCE_INDEX
              </div>
              <div className="font-headline-sm text-on-surface">
                2+ Years Professional Engineering
              </div>
              <div className="font-meta-sm uppercase text-outline">
                FINANCE · ECOMMERCE · SECURITY · DEVOPS
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                terminal
              </span>
              <h2 className="font-headline-md uppercase text-primary">
                TERMINAL_ACCESS
              </h2>
            </div>
            <CliLaunchPanel />
          </div>
        </section>
      </div>
    </Shell>
  );
}
