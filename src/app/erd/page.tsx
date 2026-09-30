import { Shell } from "@/components/Shell";

type Entity = {
  name: string;
  type: string;
  x: number;
  y: number;
  width: number;
  fields: { key?: boolean; name: string; value: string }[];
};

const ENTITIES: Entity[] = [
  {
    name: "MUHAMMAD_UMAIR",
    type: "ENGINEER",
    x: 480,
    y: 320,
    width: 320,
    fields: [
      { key: true, name: "engineer_id", value: "muhammad_umair" },
      { name: "role", value: "Software Engineer / DevOps" },
      { name: "experience", value: "2+ years" },
      { name: "location", value: "Lahore, Pakistan" },
      { name: "domains", value: "finance · security · DevOps" },
    ],
  },
  {
    name: "FRONTEND_STACK",
    type: "SKILL_GROUP",
    x: 40,
    y: 50,
    width: 290,
    fields: [
      { key: true, name: "stack_id", value: "frontend" },
      { name: "frameworks", value: "React · Next.js" },
      { name: "language", value: "TypeScript" },
      { name: "rendering", value: "EJS" },
    ],
  },
  {
    name: "BACKEND_STACK",
    type: "SKILL_GROUP",
    x: 495,
    y: 35,
    width: 290,
    fields: [
      { key: true, name: "stack_id", value: "backend" },
      { name: "runtime", value: "Node.js · Python" },
      { name: "frameworks", value: "Express · NestJS · FastAPI" },
      { name: "protocols", value: "GraphQL · gRPC · WebSockets" },
    ],
  },
  {
    name: "AI_AUTOMATION",
    type: "SKILL_GROUP",
    x: 950,
    y: 50,
    width: 290,
    fields: [
      { key: true, name: "stack_id", value: "ai_automation" },
      { name: "models", value: "OpenAI API" },
      { name: "orchestration", value: "LangChain" },
      { name: "observability", value: "Langfuse" },
      { name: "solutions", value: "AI-driven chatbots" },
    ],
  },
  {
    name: "DEVOPS_PIPELINE",
    type: "DELIVERY_SYSTEM",
    x: 35,
    y: 350,
    width: 320,
    fields: [
      { key: true, name: "pipeline_id", value: "delivery" },
      { name: "containers", value: "Docker · Kubernetes" },
      { name: "iac", value: "Terraform" },
      { name: "aws_ci_cd", value: "CodeBuild · CodePipeline" },
      { name: "quality", value: "GitHub Actions · SonarQube" },
    ],
  },
  {
    name: "CLOUD_INFRASTRUCTURE",
    type: "DEPLOYMENT_TARGET",
    x: 925,
    y: 345,
    width: 330,
    fields: [
      { key: true, name: "cloud_id", value: "multi_cloud" },
      { name: "aws", value: "ECS · ECR · Lambda · EB" },
      { name: "azure", value: "AKS · Key Vault · Blob" },
      { name: "identity", value: "Entra ID · IAM · RBAC" },
      { name: "edge", value: "Nginx · NAT Gateway · EIP" },
    ],
  },
  {
    name: "DATA_LAYER",
    type: "PERSISTENCE",
    x: 485,
    y: 680,
    width: 310,
    fields: [
      { key: true, name: "data_id", value: "persistence" },
      { name: "relational", value: "PostgreSQL · MySQL · SQL Server" },
      { name: "document", value: "MongoDB · Cosmos DB" },
      { name: "distributed", value: "Cassandra · Redis" },
      { name: "vector", value: "Pinecone · ElasticSearch" },
    ],
  },
  {
    name: "PROFESSIONAL_EXPERIENCE",
    type: "EMPLOYMENT",
    x: 25,
    y: 675,
    width: 340,
    fields: [
      { key: true, name: "experience_id", value: "2024_present" },
      { name: "finyraai", value: "Software / DevOps Engineer" },
      { name: "labouchrie", value: "Full-Stack Engineer" },
      { name: "autobridge", value: "DevOps Engineer" },
    ],
  },
  {
    name: "EXTERNAL_INTEGRATIONS",
    type: "SERVICE_ADAPTER",
    x: 915,
    y: 675,
    width: 340,
    fields: [
      { key: true, name: "adapter_id", value: "integrations" },
      { name: "payments", value: "Stripe · Trust Payments" },
      { name: "commerce", value: "Medusa · Shireburn ERP" },
      { name: "delivery", value: "Wolt · Google Maps" },
      { name: "comms", value: "Twilio · Brevo · ElasticEmail" },
    ],
  },
];

const RELATIONS = [
  { x1: 330, y1: 155, x2: 505, y2: 345, label: "BUILDS_UI_WITH", lx: 365, ly: 235 },
  { x1: 640, y1: 200, x2: 640, y2: 320, label: "BUILDS_API_WITH", lx: 650, ly: 265 },
  { x1: 950, y1: 160, x2: 795, y2: 345, label: "AUTOMATES_WITH", lx: 820, ly: 235 },
  { x1: 355, y1: 445, x2: 480, y2: 420, label: "DELIVERS", lx: 382, ly: 410 },
  { x1: 800, y1: 420, x2: 925, y2: 440, label: "DEPLOYS_TO", lx: 825, ly: 405 },
  { x1: 640, y1: 485, x2: 640, y2: 680, label: "PERSISTS_IN", lx: 650, ly: 585 },
  { x1: 365, y1: 750, x2: 505, y2: 485, label: "HAS_WORKED_AS", lx: 380, ly: 620 },
  { x1: 775, y1: 485, x2: 940, y2: 675, label: "INTEGRATES", lx: 835, ly: 600 },
  { x1: 330, y1: 150, x2: 495, y2: 145, label: "CALLS", lx: 400, ly: 135 },
  { x1: 785, y1: 145, x2: 950, y2: 150, label: "ORCHESTRATES", lx: 815, ly: 135 },
  { x1: 355, y1: 450, x2: 925, y2: 450, label: "PROVISIONS", lx: 600, ly: 440 },
  { x1: 640, y1: 200, x2: 640, y2: 680, label: "", lx: 0, ly: 0, dashed: true },
] as const;

export default function ErdPage() {
  return (
    <Shell
      active="/erd"
      title="ARCHITECT_OS // ERD"
      className="blueprint-bg"
    >
      <div className="space-y-5 p-4 md:p-6">
        <header className="flex flex-col justify-between gap-4 border border-outline-variant bg-surface-container-lowest p-4 lg:flex-row lg:items-end">
          <div>
            <div className="font-label-caps mb-2 text-secondary">
              RESUME_DERIVED_SYSTEM_SCHEMA
            </div>
            <h1 className="font-display-lg uppercase text-primary">
              ENGINEER_STACK_ERD
            </h1>
            <p className="font-code-md mt-2 max-w-3xl text-on-surface-variant">
              Entity relationship model of Muhammad Umair&apos;s verified
              engineering stack, production experience, deployment platforms,
              persistence systems, and external integrations.
            </p>
          </div>
          <div className="font-meta-sm flex flex-wrap gap-3 text-outline">
            <span className="border border-outline-variant px-2 py-1">
              09 ENTITIES
            </span>
            <span className="border border-outline-variant px-2 py-1">
              11 RELATIONS
            </span>
            <span className="border border-secondary/40 px-2 py-1 text-secondary">
              SOURCE: RESUME
            </span>
          </div>
        </header>

        <div className="border border-outline-variant bg-[#09090a]">
          <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-lowest px-3 py-2">
            <div className="font-label-caps text-primary">
              SCHEMA::MUHAMMAD_UMAIR_TECH_ECOSYSTEM
            </div>
            <div className="font-meta-sm hidden gap-4 text-outline sm:flex">
              <span>
                <b className="text-tertiary-fixed-dim">#</b> PRIMARY KEY
              </span>
              <span>
                <b className="text-primary-container">→</b> RELATION
              </span>
              <span>SCROLL_TO_INSPECT</span>
            </div>
          </div>

          <div className="overflow-auto">
            <div className="blueprint-bg relative h-[940px] min-w-[1280px]">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1280 940"
                preserveAspectRatio="none"
              >
                <defs>
                  <marker
                    id="arrow-cyan"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M0,0 L8,4 L0,8 Z" fill="#00f0ff" />
                  </marker>
                </defs>
                {RELATIONS.map((relation, index) => (
                  <g key={`${relation.x1}-${relation.y1}-${index}`}>
                    <line
                      x1={relation.x1}
                      y1={relation.y1}
                      x2={relation.x2}
                      y2={relation.y2}
                      stroke="#00f0ff"
                      strokeWidth="1"
                      strokeOpacity="0.55"
                      strokeDasharray={
                        "dashed" in relation && relation.dashed
                          ? "5 5"
                          : undefined
                      }
                      markerEnd="url(#arrow-cyan)"
                    />
                    {relation.label ? (
                      <>
                        <rect
                          x={relation.lx - 4}
                          y={relation.ly - 11}
                          width={relation.label.length * 6.7 + 8}
                          height="16"
                          fill="#09090a"
                          stroke="#3b494b"
                        />
                        <text
                          x={relation.lx}
                          y={relation.ly}
                          fill="#b9cacb"
                          fontFamily="IBM Plex Mono, monospace"
                          fontSize="9"
                        >
                          {relation.label}
                        </text>
                      </>
                    ) : null}
                  </g>
                ))}
              </svg>

              {ENTITIES.map((entity) => (
                <EntityCard key={entity.name} entity={entity} />
              ))}
            </div>
          </div>
        </div>

        <section className="grid gap-px border border-outline-variant bg-outline-variant md:grid-cols-3">
          <Summary
            icon="code"
            title="APPLICATION_LAYER"
            text="React, Next.js, TypeScript, Node.js, Express, NestJS, FastAPI, GraphQL, gRPC, WebRTC, and WebSockets."
          />
          <Summary
            icon="cloud"
            title="PLATFORM_LAYER"
            text="AWS ECS/ECR/Lambda/Elastic Beanstalk, Azure AKS, Docker, Kubernetes, Terraform, Nginx, and automated CI/CD."
          />
          <Summary
            icon="database"
            title="DATA_LAYER"
            text="MySQL, PostgreSQL, MongoDB, Redis, Cassandra, Pinecone, Cosmos DB, SQL Server, and ElasticSearch."
          />
        </section>
      </div>
    </Shell>
  );
}

function EntityCard({ entity }: { entity: Entity }) {
  const isPrimary = entity.type === "ENGINEER";

  return (
    <article
      className={`absolute z-10 overflow-hidden border bg-surface-container-lowest shadow-xl ${
        isPrimary
          ? "glow-border border-primary-container shadow-[0_0_28px_rgba(0,240,255,0.16)]"
          : "border-outline-variant"
      }`}
      style={{
        left: entity.x,
        top: entity.y,
        width: entity.width,
      }}
    >
      <div
        className={`border-b px-3 py-2 ${
          isPrimary
            ? "border-primary-container bg-primary-container/10"
            : "border-outline-variant bg-surface-container"
        }`}
      >
        <div
          className={`font-label-caps ${
            isPrimary ? "text-primary-container" : "text-primary"
          }`}
        >
          {entity.name}
        </div>
        <div className="font-meta-sm mt-1 text-outline">{entity.type}</div>
      </div>
      <div className="divide-y divide-outline-variant/40">
        {entity.fields.map((field) => (
          <div
            key={field.name}
            className="font-meta-sm grid grid-cols-[110px_1fr] gap-2 px-3 py-2"
          >
            <span className="truncate text-on-surface-variant">
              {field.key ? (
                <b className="mr-1 text-tertiary-fixed-dim">#</b>
              ) : (
                <span className="mr-1 text-outline">+</span>
              )}
              {field.name}
            </span>
            <span className="break-words text-primary">{field.value}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function Summary({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="cyan-glow-hover bg-surface-container-lowest p-4 transition-all">
      <div className="mb-3 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary-container">
          {icon}
        </span>
        <h2 className="font-label-caps text-primary">{title}</h2>
      </div>
      <p className="font-code-md text-on-surface-variant">{text}</p>
    </div>
  );
}
