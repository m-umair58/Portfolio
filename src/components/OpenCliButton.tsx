"use client";

import { useInterfaceMode } from "@/components/InterfaceMode";

export function OpenCliButton({
  label = "OPEN_CLI",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const { setMode } = useInterfaceMode();

  return (
    <button
      type="button"
      onClick={() => setMode("cli")}
      className={`font-label-caps bg-primary-container px-6 py-2 font-bold text-on-primary-container transition-transform hover:scale-105 active:opacity-80 ${className}`}
    >
      {label}
    </button>
  );
}

export function CliLaunchPanel() {
  const { setMode } = useInterfaceMode();

  return (
    <div className="flex h-[340px] flex-col border border-outline-variant bg-surface-container-lowest">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-high px-4 py-2">
        <div className="font-meta-sm flex items-center gap-2 text-on-surface">
          <span className="h-3 w-3 rounded-full bg-error-container" />
          <span className="h-3 w-3 rounded-full bg-tertiary-container" />
          <span className="h-3 w-3 rounded-full bg-secondary-container" />
          <span className="ml-1">architect_terminal@umair_os</span>
        </div>
      </div>
      <div className="font-code-md flex flex-1 flex-col justify-center gap-4 p-6 text-primary">
        <p className="text-secondary">$ session — idle</p>
        <p className="max-w-md text-on-surface-variant">
          Full terminal mode: explore profile, skills, experience, and download
          the resume with real commands. Tab completes. Type{" "}
          <span className="text-primary">help</span> after opening.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setMode("cli")}
            className="font-label-caps bg-primary-container px-5 py-2 font-bold text-on-primary-container transition-transform hover:scale-105"
          >
            LAUNCH_CLI
          </button>
          <p className="font-meta-sm self-center text-outline">
            or use GUI / CLI toggle in the top bar
          </p>
        </div>
      </div>
    </div>
  );
}
