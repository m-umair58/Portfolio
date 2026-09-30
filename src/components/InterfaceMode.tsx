"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { PROFILE } from "@/data/profile";
import { githubHref, linkedinHref } from "@/lib/contact";

// ─── Interface mode context ───────────────────────────────────────────────────

type InterfaceMode = "gui" | "cli";

type InterfaceModeContextValue = {
  mode: InterfaceMode;
  setMode: (mode: InterfaceMode) => void;
};

const InterfaceModeContext = createContext<InterfaceModeContextValue | null>(
  null,
);

export function InterfaceModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<InterfaceMode>("gui");

  return (
    <InterfaceModeContext.Provider value={{ mode, setMode }}>
      {children}
    </InterfaceModeContext.Provider>
  );
}

export function useInterfaceMode() {
  const ctx = useContext(InterfaceModeContext);
  if (!ctx) {
    throw new Error("useInterfaceMode must be used within InterfaceModeProvider");
  }
  return ctx;
}

// ─── Mode toggle ──────────────────────────────────────────────────────────────

export function ModeToggle() {
  const { mode, setMode } = useInterfaceMode();

  return (
    <div className="flex items-center gap-0.5 rounded border border-outline-variant bg-surface-container-low p-0.5">
      <button
        type="button"
        onClick={() => setMode("gui")}
        className={`font-label-caps px-2 py-1 transition-colors ${
          mode === "gui"
            ? "bg-primary-container text-on-primary-container"
            : "text-outline hover:text-primary"
        }`}
        aria-pressed={mode === "gui"}
      >
        GUI
      </button>
      <button
        type="button"
        onClick={() => setMode("cli")}
        className={`font-label-caps px-2 py-1 transition-colors ${
          mode === "cli"
            ? "bg-primary-container text-on-primary-container"
            : "text-outline hover:text-primary"
        }`}
        aria-pressed={mode === "cli"}
      >
        CLI
      </button>
    </div>
  );
}

// ─── Virtual filesystem ─────────────────────────────────────────────────────────

const FILES = {
  "about.txt": `ARCHITECT_OS // MUHAMMAD_UMAIR
═══════════════════════════════════════════════════════════════

Software Engineer with over two years of experience building
high-performance solutions across finance, education, security,
and DevOps. Specialized in full-stack development and delivering
scalable, secure, user-focused products for startups and enterprise
clients.

OBJECTIVE: BUILDING_SCALABLE_SECURE_USER_FOCUSED_SYSTEMS
SPECIALIZATION: FULL_STACK / DEVOPS / CLOUD / AI_AUTOMATION
STATUS: AVAILABLE_FOR_COMPUTE
REGION: LAHORE_REGION_01

Focus areas:
  • Full-stack products with React, Next.js, Node.js, and Python
  • Cloud deployment across AWS and Microsoft Azure
  • Kubernetes, Docker, Terraform, and CI/CD automation
  • Fintech subscriptions, billing, API keys, and partner platforms
  • Secure authentication, RBAC, integrations, and production reliability`,

  "profile.txt": `╔══════════════════════════════════════════════════════════════╗
║  OPERATOR_PROFILE                                            ║
╠══════════════════════════════════════════════════════════════╣
║  NAME:       Muhammad Umair                                  ║
║  HANDLE:     muhammad_umair                                  ║
║  TITLE:      Software Engineer / DevOps Engineer             ║
║  RANK:       FULL_STACK_SOFTWARE_ENGINEER                    ║
║  REGION:     Lahore, Pakistan                                ║
║  STATUS:     AVAILABLE_FOR_COMPUTE                           ║
╠══════════════════════════════════════════════════════════════╣
║  METRICS                                                     ║
║    YEARS_ACTIVE:      02+                                    ║
║    PRO_DEPLOYMENTS:   03                                     ║
║    CLOUD_PLATFORMS:   02                                     ║
║    DATABASE_SYSTEMS:  06                                     ║
╚══════════════════════════════════════════════════════════════╝`,

  "skills.json": JSON.stringify(
    {
      backend: ["Node.js", "Express.js", "NestJS", "GraphQL", "FastAPI"],
      frontend: ["React", "Next.js", "TypeScript", "EJS"],
      ai: ["OpenAI API", "AI Chatbots", "LangChain", "Langfuse"],
      cloud: [
        "AWS ECS",
        "AWS ECR",
        "Lambda",
        "Elastic Beanstalk",
        "Azure",
        "AKS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Nginx",
      ],
      data: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Cassandra",
        "Pinecone",
      ],
      delivery: [
        "CodePipeline",
        "CodeBuild",
        "CodeDeploy",
        "GitHub Actions",
        "SonarQube",
        "GHCR",
      ],
    },
    null,
    2,
  ),

  "experience.log": `[2026-03-01T00:00:00Z] DEPLOYMENT_03 INIT
  COMPANY:  FinyraAI
  PERIOD:   MAR 2026 — PRESENT
  ROLE:     Software Engineer / DevOps Engineer
  STATUS:   ACTIVE
  DETAIL:   B2B fintech API subscription platform with partner and admin
            dashboards, Stripe billing, API key lifecycle, usage tracking,
            AWS Elastic Beanstalk deployments, CloudWatch validation, Brevo
            delivery, and end-to-end production testing.
  TAGS:     Next.js, Node.js, PostgreSQL, Stripe, AWS, Brevo

[2025-11-01T00:00:00Z] DEPLOYMENT_02 INIT
  COMPANY:  Labouchrie
  PERIOD:   NOV 2025 — MAR 2026
  ROLE:     Software Engineer (Full-Stack)
  STATUS:   COMPLETE
  DETAIL:   Multi-store customer storefront and RBAC admin portal. Extended
            Medusa with ERP sync, payments, Wolt fulfillment, OAuth and 2FA,
            Azure Blob Storage, transactional messaging, analytics
            integrations, and CI/CD quality gates.
  TAGS:     Next.js, Medusa, Azure, Wolt, NextAuth, Docker

[2024-11-01T00:00:00Z] DEPLOYMENT_01 INIT
  COMPANY:  Autobridge
  PERIOD:   NOV 2024 — NOV 2025
  ROLE:     DevOps Engineer (Full-Stack)
  STATUS:   COMPLETE
  DETAIL:   Azure cloud infrastructure and production deployments,
            containerized microservices on AKS, Key Vault secrets and
            certificates, Cosmos DB and SQL Server, Entra ID application
            registrations, IAM/RBAC, workload optimization, and production
            stability.
  TAGS:     Azure, AKS, Key Vault, Cosmos DB, Entra ID, RBAC`,

  "projects.md": `# DEPLOYMENT_MANIFEST

## FinyraAI — B2B Fintech API Platform
**Period:** MAR 2026 — PRESENT
Built and operated a B2B fintech API subscription platform with partner and
admin dashboards, Stripe billing, API key lifecycle, usage tracking, AWS
Elastic Beanstalk deployments, CloudWatch validation, Brevo delivery, and
end-to-end production testing.

## Labouchrie — Multi-Store Ecommerce
**Period:** NOV 2025 — MAR 2026
Built a multi-store customer storefront and RBAC admin portal. Extended Medusa
with ERP sync, payments, Wolt fulfillment, OAuth and 2FA, Azure Blob Storage,
transactional messaging, analytics integrations, and CI/CD quality gates.

## Autobridge — Azure Cloud Infrastructure
**Period:** NOV 2024 — NOV 2025
Managed Azure cloud infrastructure and production deployments, containerized
microservices on AKS, Key Vault secrets and certificates, Cosmos DB and SQL
Server, Entra ID application registrations, IAM/RBAC, workload optimization,
and production stability.`,

  "education.txt": `╔══════════════════════════════════════════════════════════════╗
║  EDUCATION_RECORD                                            ║
╠══════════════════════════════════════════════════════════════╣
║  DEGREE:   Bachelor of Computer Science (BSCS)             ║
║  INSTITUTION: University of Central Punjab                   ║
║  DETAIL:   Computer Science degree supporting a career in    ║
║            full-stack software engineering, cloud            ║
║            infrastructure, DevOps, and scalable systems.     ║
╚══════════════════════════════════════════════════════════════╝`,

  "contact.txt": (() => {
    const github = githubHref();
    const linkedin = linkedinHref();
    const lines = [
      "╔══════════════════════════════════════════════════════════════╗",
      "║  COMMUNICATION_PROTOCOLS                                     ║",
      "╠══════════════════════════════════════════════════════════════╣",
      `║  EMAIL:    ${PROFILE.contact.email.padEnd(47)}║`,
      `║  PHONE:    ${PROFILE.contact.phone.padEnd(47)}║`,
      `║  LOCATION: ${PROFILE.contact.location.padEnd(47)}║`,
    ];
    if (github) {
      lines.push(`║  GITHUB:   ${github.padEnd(47).slice(0, 47)}║`);
    }
    if (linkedin) {
      lines.push(`║  LINKEDIN: ${linkedin.padEnd(47).slice(0, 47)}║`);
    }
    lines.push(
      "║                                                              ║",
      "║  GUI: open /command#contact or DOWNLOAD_RESUME               ║",
      "║  CLI: curl -OJ /api/resume                                   ║",
      "╚══════════════════════════════════════════════════════════════╝",
    );
    return lines.join("\n");
  })(),

  "stack.erd": `┌─────────────────────────────────────────────────────────────┐
│                    ARCHITECT_OS // STACK_ERD                  │
└─────────────────────────────────────────────────────────────┘

  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐
  │   CLIENT     │  HTTPS  │   GATEWAY    │  REST   │   SERVICES   │
  │ React/Next.js│────────▶│  Nginx/API   │────────▶│ Node/NestJS  │
  │  TypeScript  │         │   Gateway    │         │   FastAPI    │
  └──────────────┘         └──────┬───────┘         └──────┬───────┘
                                  │                        │
                                  │                        │
                           ┌──────▼───────┐         ┌──────▼───────┐
                           │   CI/CD      │         │   DATA       │
                           │ CodePipeline │         │ PostgreSQL   │
                           │ GitHub Actions│        │ MongoDB      │
                           │ SonarQube    │         │ Redis        │
                           └──────┬───────┘         │ Cassandra    │
                                  │                 │ Pinecone     │
                           ┌──────▼───────┐         └──────────────┘
                           │   CLOUD      │
                           │ AWS/Azure    │
                           │ AKS/Docker   │
                           │ K8s/Terraform│
                           └──────┬───────┘
                                  │
                           ┌──────▼───────┐
                           │   AI_LAYER   │
                           │  LangChain   │
                           │  OpenAI API  │
                           └──────────────┘

RELATIONSHIPS:
  CLIENT ──(renders)──▶ GATEWAY ──(routes)──▶ SERVICES
  SERVICES ──(persist)──▶ DATA
  CI/CD ──(deploys)──▶ CLOUD ──(hosts)──▶ SERVICES
  AI_LAYER ──(integrates)──▶ SERVICES`,
} as const;

type FileName = keyof typeof FILES;

// ─── CLI constants ────────────────────────────────────────────────────────────

const COMMANDS = [
  "help",
  "about",
  "profile",
  "whoami",
  "skills",
  "stack",
  "erd",
  "experience",
  "history",
  "projects",
  "education",
  "contact",
  "status",
  "ls",
  "pwd",
  "cat",
  "cd",
  "date",
  "echo",
  "curl",
  "clear",
  "gui",
  "exit",
] as const;

const COMPLETION_ARGUMENTS: Record<string, string[]> = {
  cat: Object.keys(FILES),
  cd: ["dashboard", "home", "profile", "stack", "erd", "command", "..", "."],
  curl: ["-OJ /api/resume", "-O /api/resume", "--remote-name /api/resume"],
};

const CD_ROUTES: Record<string, string> = {
  dashboard: "/",
  home: "/",
  profile: "/profile",
  stack: "/stack",
  erd: "/erd",
  command: "/command",
};

const HELP_TEXT = `ARCHITECT_OS TERMINAL — AVAILABLE COMMANDS
══════════════════════════════════════════════════════════════

  help         Show this help message
  about        Display operator biography (about.txt)
  profile      Display operator profile (profile.txt)
  whoami       Print current operator identity
  skills       List technical competencies (skills.json)
  stack        Display core technology stack summary
  erd          Navigate to /erd and render stack.erd
  experience   Show deployment history (experience.log)
  history      Show command history buffer
  projects     List deployment manifest (projects.md)
  education    Show education record (education.txt)
  contact      Initialize communication protocols (contact.txt)
  status       Print system status metrics
  ls           List virtual filesystem entries
  pwd          Print working directory
  cat <file>   Display file contents
  cd <dir>     Change directory (dashboard|home|profile|stack|erd|command)
  date         Print system timestamp
  echo <text>  Echo arguments to stdout
  curl -OJ /api/resume   Download resume PDF with progress
  clear        Clear the terminal screen
  gui          Switch to GUI mode
  exit         End CLI session and return to GUI

KEYBINDINGS:
  Tab          Autocomplete (lists matches when ambiguous)
  ↑ / ↓        Navigate command history
  Ctrl+L       Clear terminal

FILES: ${Object.keys(FILES).join(", ")}`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  const value = bytes / Math.pow(1024, i);
  return `${value < 10 ? value.toFixed(1) : Math.round(value)} ${units[i]}`;
}

function pathnameToPwd(pathname: string): string {
  switch (pathname) {
    case "/profile":
      return "~/profile";
    case "/stack":
      return "~/stack";
    case "/erd":
      return "~/erd";
    case "/command":
      return "~/command";
    default:
      return "~";
  }
}


function commonPrefix(strings: string[]): string {
  if (strings.length === 0) return "";
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    while (!strings[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

function isResumeCurl(input: string): boolean {
  const normalized = input.trim();
  if (!normalized.startsWith("curl")) return false;
  const hasResume =
    normalized.includes("/api/resume") || normalized.includes("resume");
  const hasOutputFlag =
    normalized.includes("-O") ||
    normalized.includes("-OJ") ||
    normalized.includes("--remote-name");
  return hasResume && hasOutputFlag;
}

type LineType = "cmd" | "out" | "err" | "sys" | "info";

type TerminalLine = {
  id: number;
  type: LineType;
  text: string;
};

let lineIdCounter = 0;

function makeLine(type: LineType, text: string): TerminalLine {
  return { id: ++lineIdCounter, type, text };
}

function progressBar(percent: number, width = 24): string {
  const filled = Math.round((percent / 100) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

// ─── CliPortfolio ─────────────────────────────────────────────────────────────

const BOOT_LINES: TerminalLine[] = [
  makeLine("sys", "ARCHITECT_OS — TERMINAL SESSION INITIALIZED"),
  makeLine("sys", "Connection established. Encryption: AES-256-GCM"),
  makeLine("out", "Type 'help' for available commands."),
  makeLine("info", "TIP: Tab to autocomplete · ↑↓ history · curl -OJ /api/resume"),
];

export function CliPortfolio() {
  const router = useRouter();
  const pathname = usePathname();
  const { setMode } = useInterfaceMode();

  const [lines, setLines] = useState<TerminalLine[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const historyIndexRef = useRef(-1);
  const draftRef = useRef("");
  const lastTabRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const pwd = pathnameToPwd(pathname);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() =>
      endRef.current?.scrollIntoView({ behavior: "smooth" }),
    );
  }, []);

  const appendLines = useCallback(
    (...newLines: TerminalLine[]) => {
      setLines((prev) => [...prev, ...newLines]);
      scrollToBottom();
    },
    [scrollToBottom],
  );

  const clearTerminal = useCallback(() => {
    setLines([]);
    setInput("");
    historyIndexRef.current = -1;
    draftRef.current = "";
  }, []);

  const downloadResume = useCallback(async () => {
    appendLines(
      makeLine("sys", "curl: initiating transfer to /api/resume ..."),
      makeLine("out", "  Resolving architect-os.local ... done"),
      makeLine("out", "  Connecting to localhost:443 ... done"),
    );

    let totalBytes = 256_000;
    try {
      const head = await fetch("/api/resume", { method: "HEAD" });
      const len = head.headers.get("Content-Length");
      if (len) totalBytes = parseInt(len, 10);
    } catch {
      // use default estimate
    }

    appendLines(makeLine("out", "  HTTP/1.1 200 OK — Content-Type: application/pdf"));

    const startTime = Date.now();

    for (let pct = 0; pct <= 100; pct += 5) {
      await new Promise((r) => setTimeout(r, 45));
      const transferred = Math.round((pct / 100) * totalBytes);
      const elapsed = (Date.now() - startTime) / 1000 || 0.001;
      const speed = transferred / elapsed;
      const bar = progressBar(pct);
      const line = `  [${bar}] ${String(pct).padStart(3)}%  ${formatBytes(transferred)} / ${formatBytes(totalBytes)}  ${formatBytes(speed)}/s`;
      setLines((prev) => {
        const next = [...prev];
        const lastIdx = next.length - 1;
        if (lastIdx >= 0 && next[lastIdx].type === "info" && next[lastIdx].text.startsWith("  [")) {
          next[lastIdx] = makeLine("info", line);
        } else {
          next.push(makeLine("info", line));
        }
        return next;
      });
    }

    try {
      const res = await fetch("/api/resume");
      if (!res.ok) {
        appendLines(
          makeLine("err", `curl: download failed — HTTP ${res.status}`),
        );
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "Muhammad-Umair-Resume.pdf";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);

      appendLines(
        makeLine("out", ""),
        makeLine(
          "sys",
          `curl: saved 'Muhammad-Umair-Resume.pdf' (${formatBytes(blob.size)})`,
        ),
      );
    } catch {
      appendLines(makeLine("err", "curl: transfer failed — network error"));
    }
  }, [appendLines]);

  const executeCommand = useCallback(
    async (raw: string) => {
      const trimmed = raw.trim();
      if (trimmed) {
        setCmdHistory((prev) => {
          if (prev[prev.length - 1] === trimmed) return prev;
          return [...prev, trimmed];
        });
      }
      historyIndexRef.current = -1;
      draftRef.current = "";

      const output: TerminalLine[] = [];
      if (trimmed) output.push(makeLine("cmd", trimmed));

      const lower = trimmed.toLowerCase();
      const parts = trimmed.split(/\s+/);
      const cmd = parts[0]?.toLowerCase() ?? "";
      const args = parts.slice(1);

      switch (cmd) {
        case "":
          break;

        case "help":
          output.push(makeLine("out", HELP_TEXT));
          break;

        case "about":
          output.push(makeLine("out", FILES["about.txt"]));
          break;

        case "profile":
          output.push(makeLine("out", FILES["profile.txt"]));
          break;

        case "whoami":
          output.push(
            makeLine("out", "muhammad_umair"),
            makeLine("out", "Muhammad Umair — Software Engineer / DevOps Engineer"),
          );
          break;

        case "skills":
          output.push(makeLine("out", FILES["skills.json"]));
          break;

        case "stack":
          output.push(
            makeLine("out", "CORE_STACK // ARCHITECT_OS"),
            makeLine("out", ""),
            makeLine("out", "  BACKEND:  Node.js, Express.js, NestJS, FastAPI"),
            makeLine("out", "  FRONTEND: React, Next.js, TypeScript"),
            makeLine("out", "  CLOUD:    AWS, Azure, AKS, Docker, K8s, Terraform"),
            makeLine(
              "out",
              "  DATA:     MySQL, PostgreSQL, MongoDB, Redis, Cassandra, Pinecone",
            ),
            makeLine("out", "  AI:       LangChain, OpenAI API"),
            makeLine("out", ""),
            makeLine("out", "  Run 'erd' or 'cat stack.erd' for full schema diagram."),
          );
          break;

        case "erd":
          router.push("/erd");
          output.push(
            makeLine("sys", "Navigating to ~/erd ..."),
            makeLine("out", FILES["stack.erd"]),
          );
          break;

        case "experience":
          output.push(makeLine("out", FILES["experience.log"]));
          break;

        case "history":
          if (cmdHistory.length === 0) {
            output.push(makeLine("out", "  (empty history buffer)"));
          } else {
            cmdHistory.forEach((h, i) => {
              output.push(makeLine("out", `  ${String(i + 1).padStart(4)}  ${h}`));
            });
          }
          break;

        case "projects":
          output.push(makeLine("out", FILES["projects.md"]));
          break;

        case "education":
          output.push(makeLine("out", FILES["education.txt"]));
          break;

        case "contact":
          output.push(makeLine("out", FILES["contact.txt"]));
          break;

        case "status":
          output.push(
            makeLine("out", "OPERATOR_STATUS // ARCHITECT_OS"),
            makeLine("out", ""),
            makeLine("out", `  NAME:         ${PROFILE.name}`),
            makeLine("out", `  ROLE:         ${PROFILE.title}`),
            makeLine("out", `  REGION:       ${PROFILE.region}`),
            makeLine("out", `  STATUS:       ${PROFILE.status}`),
            makeLine("out", `  EMAIL:        ${PROFILE.contact.email}`),
            makeLine(
              "out",
              `  FOCUS:        ${PROFILE.specialization}`,
            ),
            makeLine("out", ""),
            makeLine(
              "out",
              "  Tip: gui to leave CLI · curl -OJ /api/resume for CV",
            ),
          );
          break;

        case "ls":
          Object.keys(FILES).forEach((f) => {
            output.push(makeLine("out", `  ${f}`));
          });
          break;

        case "pwd":
          output.push(makeLine("out", pwd));
          break;

        case "cat": {
          const file = args[0];
          if (!file) {
            output.push(makeLine("err", "cat: missing operand"));
            break;
          }
          if (file in FILES) {
            output.push(makeLine("out", FILES[file as FileName]));
          } else {
            output.push(makeLine("err", `cat: ${file}: No such file`));
          }
          break;
        }

        case "cd": {
          const target = args[0];
          if (!target || target === "~" || target === "dashboard" || target === "home") {
            router.push("/");
            output.push(makeLine("sys", "Changed directory to ~"));
          } else if (target === "..") {
            router.push("/");
            output.push(makeLine("sys", "Changed directory to ~"));
          } else if (target === ".") {
            output.push(makeLine("out", pwd));
          } else if (target in CD_ROUTES) {
            router.push(CD_ROUTES[target]);
            output.push(
              makeLine(
                "sys",
                `Changed directory to ${target === "dashboard" || target === "home" ? "~" : `~/${target}`}`,
              ),
            );
          } else if (target.startsWith("~/")) {
            const routeName = target.slice(2);
            if (routeName in CD_ROUTES) {
              router.push(CD_ROUTES[routeName]);
              output.push(makeLine("sys", `Changed directory to ${target}`));
            } else {
              output.push(makeLine("err", `cd: ${target}: No such directory`));
            }
          } else {
            output.push(makeLine("err", `cd: ${target}: No such directory`));
          }
          break;
        }

        case "date":
          output.push(makeLine("out", new Date().toString()));
          break;

        case "echo":
          output.push(makeLine("out", args.join(" ")));
          break;

        case "curl":
          if (isResumeCurl(trimmed)) {
            setLines((prev) => [...prev, ...output]);
            setInput("");
            scrollToBottom();
            await downloadResume();
            return;
          }
          output.push(
            makeLine("err", "curl: unsupported request"),
            makeLine("out", "  Usage: curl -OJ /api/resume"),
          );
          break;

        case "clear":
          setLines([]);
          setInput("");
          return;

        case "gui":
          setMode("gui");
          return;

        case "exit":
          output.push(
            makeLine("sys", "Closing terminal session…"),
            makeLine("out", "Returning to GUI mode."),
          );
          setLines((prev) => [...prev, ...output]);
          setInput("");
          setTimeout(() => setMode("gui"), 400);
          return;

        default:
          output.push(
            makeLine(
              "err",
              `Error: Unknown command '${cmd}'. Type 'help' for available procedures.`,
            ),
          );
      }

      setLines((prev) => [...prev, ...output]);
      setInput("");
      scrollToBottom();
    },
    [
      cmdHistory,
      downloadResume,
      pwd,
      router,
      scrollToBottom,
      setMode,
    ],
  );

  const getCompletions = useCallback(
    (value: string): string[] => {
      const trimmed = value;
      const tokens = trimmed.split(/\s+/);
      const endsWithSpace = trimmed.endsWith(" ");

      if (tokens.length === 1 && !endsWithSpace) {
        const prefix = tokens[0].toLowerCase();
        return COMMANDS.filter((c) => c.startsWith(prefix));
      }

      const cmd = tokens[0]?.toLowerCase() ?? "";
      const argPrefix = endsWithSpace
        ? ""
        : (tokens[tokens.length - 1] ?? "");

      const argList = COMPLETION_ARGUMENTS[cmd];
      if (!argList) return [];

      return argList.filter((a) => a.startsWith(argPrefix));
    },
    [],
  );

  const handleTab = useCallback(() => {
    const completions = getCompletions(input);
    if (completions.length === 0) return;

    const now = Date.now();
    const isDoubleTab = now - lastTabRef.current < 350;
    lastTabRef.current = now;

    const tokens = input.split(/\s+/);
    const endsWithSpace = input.endsWith(" ");
    const completingArg =
      tokens.length > 1 || (tokens.length === 1 && endsWithSpace);

    if (completions.length === 1) {
      const match = completions[0];
      if (!completingArg && tokens.length === 1) {
        setInput(match + " ");
      } else if (completingArg) {
        const cmdPart = tokens.slice(0, -1).join(" ");
        const base = endsWithSpace ? input.trimEnd() + " " : cmdPart + " ";
        setInput(base + match + (match.includes(" ") ? "" : " "));
      }
      return;
    }

    const prefix = commonPrefix(completions);
    const currentToken = endsWithSpace
      ? ""
      : (tokens[tokens.length - 1] ?? "");
    const canAdvance =
      Boolean(prefix) &&
      prefix.toLowerCase() !== currentToken.toLowerCase();

    if (canAdvance && !isDoubleTab) {
      if (!completingArg) {
        setInput(prefix);
      } else {
        const cmdPart = tokens.slice(0, -1).join(" ");
        const base = endsWithSpace ? input.trimEnd() + " " : cmdPart + " ";
        setInput(base + prefix);
      }
      return;
    }

    // Ambiguous with no further common prefix — list matches (also on double-Tab)
    appendLines(makeLine("out", completions.join("  ")));
  }, [appendLines, getCompletions, input]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.ctrlKey && e.key === "l") {
        e.preventDefault();
        clearTerminal();
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        handleTab();
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (cmdHistory.length === 0) return;
        if (historyIndexRef.current === -1) {
          draftRef.current = input;
          historyIndexRef.current = cmdHistory.length - 1;
        } else if (historyIndexRef.current > 0) {
          historyIndexRef.current -= 1;
        }
        setInput(cmdHistory[historyIndexRef.current] ?? "");
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndexRef.current === -1) return;
        if (historyIndexRef.current < cmdHistory.length - 1) {
          historyIndexRef.current += 1;
          setInput(cmdHistory[historyIndexRef.current] ?? "");
        } else {
          historyIndexRef.current = -1;
          setInput(draftRef.current);
        }
        return;
      }

      if (e.key === "Enter") {
        e.preventDefault();
        void executeCommand(input);
      }
    },
    [clearTerminal, cmdHistory, executeCommand, handleTab, input],
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  /** Keep focus in the prompt when clicking the terminal surface (real TTY behavior). */
  const handleTerminalMouseDown = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, textarea, [role='button']")) {
        return;
      }
      e.preventDefault();
      focusInput();
    },
    [focusInput],
  );

  return (
    <div
      className="blueprint-bg relative flex h-screen flex-col bg-[#080809] font-mono"
      onMouseDown={handleTerminalMouseDown}
    >
      <div className="scanline" />

      {/* Terminal header */}
      <header className="relative z-20 flex h-12 shrink-0 items-center justify-between border-b border-outline-variant bg-surface-container-lowest px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-error-container" />
            <span className="h-3 w-3 rounded-full bg-tertiary-container" />
            <span className="h-3 w-3 rounded-full bg-secondary-container" />
          </div>
          <span className="font-meta-sm text-secondary">
            architect_terminal@umair_os:{pwd}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-meta-sm hidden text-outline sm:inline">
            ARCHITECT_OS // CLI_MODE
          </span>
          <ModeToggle />
        </div>
      </header>

      {/* Terminal body */}
      <div
        className="relative z-10 flex flex-1 cursor-text flex-col overflow-hidden"
        onClick={focusInput}
      >
        <div className="font-code-md flex-1 space-y-1 overflow-y-auto p-4 text-primary">
          {lines.map((line) => (
            <div
              key={line.id}
              className={
                line.type === "sys"
                  ? "whitespace-pre-wrap text-secondary"
                  : line.type === "err"
                    ? "text-error"
                    : line.type === "info"
                      ? "whitespace-pre text-primary-container"
                      : line.type === "cmd"
                        ? "text-primary"
                        : "whitespace-pre-wrap text-primary"
              }
            >
              {line.type === "cmd" ? (
                <>
                  <span className="text-secondary">$ </span>
                  {line.text}
                </>
              ) : (
                line.text
              )}
            </div>
          ))}

          <div className="flex items-center gap-2">
            <span className="text-secondary">$</span>
            <input
              ref={inputRef}
              autoFocus
              autoComplete="off"
              spellCheck={false}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                historyIndexRef.current = -1;
              }}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent p-0 text-primary outline-none caret-primary-container"
              aria-label="Terminal input"
            />
          </div>

          <div ref={endRef} />
        </div>

        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-[#080809] to-transparent" />
      </div>

      {/* Status bar */}
      <footer className="relative z-20 flex h-7 shrink-0 items-center justify-between border-t border-outline-variant bg-surface-container-lowest px-4">
        <span className="font-meta-sm text-outline">
          {cmdHistory.length} cmds in buffer
        </span>
        <div className="flex items-center gap-4">
          <span className="font-meta-sm text-secondary">
            <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            LIVE
          </span>
          <span className="font-meta-sm text-on-surface-variant">
            TAB: complete · ↑↓: history · Ctrl+L: clear
          </span>
        </div>
      </footer>
    </div>
  );
}
