import { Shell } from "@/components/Shell";

export default function StackPage() {
  return (
    <Shell active="/stack" title="ARCHITECT_OS // STACK" className="blueprint-bg">
      <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
        <div className="mb-2 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="status-pip h-2 w-2 animate-pulse bg-primary-container" />
            <h1 className="font-display-lg uppercase tracking-tighter text-primary">
              CORE_STACK_ANALYSIS
            </h1>
          </div>
          <p className="font-code-md text-on-surface-variant">
            Visualization of primary technical assets and dependency mapping for
            ARCHITECT_MUHAMMAD.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-outline-variant p-px lg:grid-cols-12">
          <div className="group flex flex-col border border-outline-variant bg-surface-container-low p-3 transition-colors hover:bg-surface-container lg:col-span-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  storage
                </span>
                <h2 className="font-label-caps">MODULE::BACKEND_CORE</h2>
              </div>
              <span className="font-meta-sm text-secondary">LOAD_BALANCED</span>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
              <StackCard
                title="Node.js"
                version="v20.12.0 LTS"
                badge="STABLE"
                badgeTone="cyan"
                pct={94}
                body="Mastery in asynchronous architecture, event-driven scaling, and REST/GraphQL API orchestration."
              />
              <StackCard
                title="Python"
                version="v3.12.x"
                badge="OPTIMAL"
                badgeTone="green"
                pct={88}
                barClass="bg-secondary"
                body="Expertise in FastAPI, data science pipelines, and automated system scripts."
              />
            </div>
            <div className="mt-4 flex items-center gap-6 overflow-x-auto border-t border-outline-variant pt-4">
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-meta-sm text-[9px] text-on-surface-variant">
                  DEP_LIBRARIES
                </span>
                <span className="font-code-md text-primary">
                  Express, NestJS, FastAPI
                </span>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-meta-sm text-[9px] text-on-surface-variant">
                  REALTIME_PROTOCOLS
                </span>
                <span className="font-code-md text-primary">
                  WebSockets, Socket.io
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-outline-variant bg-surface-container-low p-3 lg:col-span-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  cloud
                </span>
                <h2 className="font-label-caps">MODULE::INFRA_CORE</h2>
              </div>
              <span className="status-pip h-2 w-2 rounded-full bg-secondary shadow-[0_0_5px_#4edea3]" />
            </div>
            <div className="flex-1 space-y-3">
              <InfraRow label="AWS_INSTANCE" status="ACTIVE" pct={85} />
              <InfraRow
                label="DOCKER_CONTAINERS"
                status="ACTIVE"
                pct={90}
                barClass="bg-secondary"
              />
              <InfraRow
                label="KUBERNETES_ORCH"
                status="ACTIVE"
                statusClass="text-secondary"
                pct={86}
                barClass="bg-secondary"
              />
            </div>
            <div className="mt-4 border-l-2 border-primary-container bg-surface-container-lowest p-2">
              <p className="font-meta-sm italic text-on-surface-variant">
                &ldquo;Infrastructure as Code strategy: Terraform used for 90%
                of deployments.&rdquo;
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden border border-outline-variant bg-surface-container-low p-3 lg:col-span-6">
            <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 opacity-10 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[128px] text-primary">
                view_quilt
              </span>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">
                palette
              </span>
              <h2 className="font-label-caps">MODULE::INTERFACE_OS</h2>
            </div>
            <div className="flex h-48 gap-4">
              <div className="flex flex-1 flex-col justify-between border border-outline-variant bg-surface-container/50 p-3">
                <div>
                  <h3 className="font-headline-sm text-primary">
                    React & NextJS
                  </h3>
                  <p className="font-meta-sm text-on-surface-variant">
                    VIRTUAL_DOM: ENABLED
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-2 flex-1 bg-primary-container" />
                    ))}
                    <div className="h-2 flex-1 bg-surface-container-highest" />
                  </div>
                  <span className="font-label-caps text-[8px] text-on-surface-variant">
                    RENDERING_LATENCY: 12ms
                  </span>
                </div>
              </div>
              <div className="w-1/3 space-y-2">
                <div className="flex h-1/2 flex-col items-center justify-center border border-outline-variant bg-surface-container/50 p-2 text-center">
                  <span className="font-label-caps text-[10px]">TAILWIND</span>
                  <span className="font-meta-sm text-secondary">ACTIVE</span>
                </div>
                <div className="flex h-1/2 flex-col items-center justify-center border border-outline-variant bg-surface-container/50 p-2 text-center">
                  <span className="font-label-caps text-[10px]">TYPESCRIPT</span>
                  <span className="font-meta-sm text-secondary">STRICT</span>
                </div>
              </div>
            </div>
            <div className="mt-4 border border-outline-variant bg-surface-container p-2">
              <div className="font-meta-sm mb-2 flex items-center justify-between text-[10px] text-on-surface-variant">
                <span>DEPENDENCY_MAP</span>
                <span>NODE_GRAPH_v1.2</span>
              </div>
              <svg height="40" width="100%" className="overflow-visible">
                <circle cx="20" cy="20" fill="#00f0ff" r="3" />
                <path d="M23 20 L80 20" stroke="#3b494b" fill="none" />
                <circle cx="80" cy="20" fill="#00f0ff" r="3" />
                <path d="M83 20 L140 20" stroke="#3b494b" fill="none" />
                <circle cx="140" cy="20" fill="#3b494b" r="3" />
                <text
                  fill="#b9cacb"
                  fontFamily="IBM Plex Mono"
                  fontSize="8"
                  x="15"
                  y="12"
                >
                  React
                </text>
                <text
                  fill="#b9cacb"
                  fontFamily="IBM Plex Mono"
                  fontSize="8"
                  x="70"
                  y="12"
                >
                  NextJS
                </text>
                <text
                  fill="#b9cacb"
                  fontFamily="IBM Plex Mono"
                  fontSize="8"
                  x="130"
                  y="12"
                >
                  Serverless
                </text>
              </svg>
            </div>
          </div>

          <div className="border border-outline-variant bg-surface-container-low p-3 lg:col-span-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                psychology
              </span>
              <h2 className="font-label-caps">MODULE::NEURAL_LOGIC</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <SkillBlocks label="LLM_ORCHESTRATION" filled={3} />
                <SkillBlocks label="VECTOR_DATABASES" filled={2} />
              </div>
              <div className="relative flex flex-col items-center justify-center overflow-hidden border border-outline-variant bg-surface-container-lowest p-2">
                <div className="absolute inset-0 animate-pulse bg-secondary/5" />
                <span className="material-symbols-outlined mb-1 text-4xl text-secondary">
                  neurology
                </span>
                <span className="font-label-caps text-center text-[9px]">
                  SYNAPTIC_THR: 0.82
                </span>
                <div className="mt-2 grid w-full grid-cols-8 gap-0.5">
                  {[30, 80, 20, 50, 90, 40, 10, 70].map((o, i) => (
                    <div
                      key={i}
                      className="h-1 bg-secondary"
                      style={{ opacity: o / 100 }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ["OpenAI API", "85%"],
                ["LangChain", "90%"],
                ["Pinecone", "82%"],
              ].map(([name, pct]) => (
                <div
                  key={name}
                  className="cyan-glow-hover border border-outline-variant p-2 text-center transition-all"
                >
                  <p className="font-meta-sm text-[8px] text-on-surface-variant">
                    {name}
                  </p>
                  <span className="font-label-caps text-[10px] text-secondary">
                    {pct}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-outline-variant bg-surface-container-low p-3 lg:col-span-12">
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">
                database
              </span>
              <h2 className="font-label-caps">MODULE::PERSISTENCE_LAYER</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="font-label-caps border-b border-outline-variant text-[10px] text-on-surface-variant">
                    <th className="pb-2">RESOURCE_ID</th>
                    <th className="pb-2">TYPE</th>
                    <th className="pb-2">THROUGHPUT</th>
                    <th className="pb-2">LATENCY</th>
                    <th className="pb-2">STATUS</th>
                  </tr>
                </thead>
                <tbody className="font-code-md divide-y divide-outline-variant/30">
                  <DbRow
                    id="PostgreSQL"
                    type="RELATIONAL"
                    throughput="4.2k req/s"
                    latency="14ms"
                  />
                  <DbRow
                    id="MongoDB"
                    type="DOCUMENT"
                    throughput="12.8k req/s"
                    latency="8ms"
                  />
                  <DbRow
                    id="Redis"
                    type="IN_MEMORY"
                    throughput="105k req/s"
                    latency="<1ms"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function StackCard({
  title,
  version,
  badge,
  badgeTone,
  pct,
  body,
  barClass = "bg-primary-container",
}: {
  title: string;
  version: string;
  badge: string;
  badgeTone: "cyan" | "green";
  pct: number;
  body: string;
  barClass?: string;
}) {
  const badgeClass =
    badgeTone === "cyan"
      ? "bg-primary-container/10 text-primary-container border-primary-container/20"
      : "bg-secondary/10 text-secondary border-secondary/20";

  return (
    <div className="cyan-glow-hover space-y-3 border border-outline-variant bg-surface-container p-3 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-headline-sm text-primary">{title}</h3>
          <p className="font-meta-sm text-on-surface-variant">{version}</p>
        </div>
        <span className={`font-meta-sm border px-1 ${badgeClass}`}>{badge}</span>
      </div>
      <div className="space-y-1">
        <div className="font-meta-sm flex justify-between text-[10px]">
          <span>RESOURCE_UTIL</span>
          <span>{pct}% PROFICIENT</span>
        </div>
        <div className="h-1 w-full bg-surface-container-highest">
          <div className={`h-full ${barClass}`} style={{ width: `${pct}%` }} />
        </div>
      </div>
      <p className="font-meta-sm leading-tight text-on-surface-variant">
        {body}
      </p>
    </div>
  );
}

function InfraRow({
  label,
  status,
  pct,
  barClass = "bg-primary-container",
  statusClass = "text-secondary",
}: {
  label: string;
  status: string;
  pct: number;
  barClass?: string;
  statusClass?: string;
}) {
  return (
    <div className="border border-outline-variant bg-surface-container p-2">
      <div className="mb-1 flex items-center justify-between">
        <span className="font-code-md">{label}</span>
        <span className={`font-meta-sm ${statusClass}`}>{status}</span>
      </div>
      <div className="h-1 w-full bg-surface-container-highest">
        <div className={`h-full ${barClass}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function SkillBlocks({ label, filled }: { label: string; filled: number }) {
  return (
    <div className="space-y-1">
      <span className="font-code-md">{label}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 ${i < filled ? "bg-secondary" : "bg-surface-container-highest"}`}
          />
        ))}
      </div>
    </div>
  );
}

function DbRow({
  id,
  type,
  throughput,
  latency,
}: {
  id: string;
  type: string;
  throughput: string;
  latency: string;
}) {
  return (
    <tr className="transition-colors hover:bg-surface-container-high">
      <td className="py-3 text-primary">{id}</td>
      <td>{type}</td>
      <td>{throughput}</td>
      <td>{latency}</td>
      <td className="text-secondary">OPTIMAL</td>
    </tr>
  );
}
