"use client";

import Link from "next/link";
import {
  CliPortfolio,
  ModeToggle,
  useInterfaceMode,
} from "@/components/InterfaceMode";
import { PROFILE } from "@/data/profile";

type NavItem = {
  href: string;
  label: string;
  icon: string;
};

export type ShellRoute = "/" | "/profile" | "/stack" | "/erd" | "/command";

const NAV: NavItem[] = [
  { href: "/", label: "DASHBOARD", icon: "grid_view" },
  { href: "/profile", label: "PROFILE", icon: "person" },
  { href: "/stack", label: "CORE_STACK", icon: "layers" },
  { href: "/erd", label: "STACK_ERD", icon: "schema" },
  { href: "/command", label: "CONTACT", icon: "mail" },
];

export function SideNav({ active }: { active: ShellRoute }) {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col border-r border-outline-variant bg-surface-container-lowest md:w-64">
      <div className="flex h-12 items-center gap-2 border-b border-outline-variant px-4">
        <span
          className="material-symbols-outlined text-primary-container"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          developer_board
        </span>
        <div className="hidden md:block">
          <p className="font-label-caps text-primary">ARCHITECT_OS</p>
          <p className="font-meta-sm text-secondary">AVAILABLE</p>
        </div>
      </div>

      <Link
        href="/profile"
        className={`hidden border-b border-outline-variant p-4 transition-colors md:block ${
          active === "/profile"
            ? "bg-surface-container"
            : "hover:bg-surface-container-high"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-secondary bg-secondary/10">
            <span className="material-symbols-outlined text-secondary">
              person
            </span>
          </div>
          <div>
            <div className="font-label-caps text-on-surface">
              SOFTWARE_ENGINEER
            </div>
            <div className="font-meta-sm text-outline">{PROFILE.regionCode}</div>
          </div>
        </div>
      </Link>

      <nav className="mt-4 flex-1">
        {NAV.map((item) => {
          const isActive = active === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 font-label-caps transition-all ${
                isActive
                  ? "border-l-2 border-primary-container bg-surface-container-highest text-primary"
                  : "border-l-2 border-transparent text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined mr-0 md:mr-3">
                {item.icon}
              </span>
              <span className="hidden md:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-outline-variant p-4">
        <div className="font-meta-sm flex items-center gap-2 text-secondary">
          <span className="h-2 w-2 animate-pulse bg-secondary" />
          <span className="hidden md:inline">OPEN_TO_WORK</span>
        </div>
      </div>
    </aside>
  );
}

function OpenCliIconButton() {
  const { setMode } = useInterfaceMode();

  return (
    <button
      type="button"
      onClick={() => setMode("cli")}
      className="material-symbols-outlined p-1 text-primary transition-colors hover:bg-surface-container-high"
      aria-label="Open CLI mode"
      title="Open CLI mode"
    >
      terminal
    </button>
  );
}

export function TopBar({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-30 flex h-12 w-full items-center justify-between border-b border-outline-variant bg-background px-4">
      <div className="flex min-w-0 items-center gap-4">
        <span className="font-headline-sm truncate tracking-tighter text-primary">
          {title}
        </span>
        {children}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <ModeToggle />
        <OpenCliIconButton />
      </div>
    </header>
  );
}

export function SystemFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex h-8 items-center justify-between border-t border-outline-variant bg-surface-container-lowest px-4">
      <span className="font-code-md text-secondary">
        © {year} {PROFILE.name.toUpperCase().replace(/ /g, "_")} · ARCHITECT_OS
      </span>
      <div className="hidden items-center gap-6 sm:flex">
        <span className="font-meta-sm uppercase text-on-surface-variant">
          {PROFILE.region}
        </span>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
          <span className="font-meta-sm text-secondary">AVAILABLE_FOR_WORK</span>
        </div>
      </div>
    </footer>
  );
}

export function Shell({
  active,
  title,
  topExtra,
  children,
  className = "",
}: {
  active: ShellRoute;
  title: string;
  topExtra?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const { mode } = useInterfaceMode();

  if (mode === "cli") {
    return <CliPortfolio />;
  }

  return (
    <div className="relative min-h-screen">
      <div className="scanline" />
      <SideNav active={active} />
      <div className="ml-16 flex min-h-screen flex-col md:ml-64">
        <TopBar title={title}>{topExtra}</TopBar>
        <main className={`relative flex-1 overflow-y-auto pb-12 ${className}`}>
          {children}
        </main>
        <SystemFooter />
      </div>
    </div>
  );
}
