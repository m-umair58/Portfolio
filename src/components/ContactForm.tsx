"use client";

import { FormEvent, useState } from "react";
import { mailtoHref } from "@/lib/contact";
import { PROFILE } from "@/data/profile";

export function ContactForm() {
  const [identity, setIdentity] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const from = identity.trim() || "portfolio visitor";
    const body = [
      message.trim() || "(no message)",
      "",
      `— sent via ARCHITECT_OS contact form`,
      `from: ${from}`,
    ].join("\n");

    const href = mailtoHref({
      subject: `ARCHITECT_OS contact — ${from}`,
      body,
    });

    window.location.href = href;
    setOpened(true);
    setTimeout(() => setOpened(false), 4000);
  }

  return (
    <form id="contact" className="space-y-2" onSubmit={onSubmit}>
      <p className="font-meta-sm mb-2 text-on-surface-variant">
        Opens your email client to{" "}
        <a
          href={mailtoHref()}
          className="text-primary-container underline-offset-2 hover:underline"
        >
          {PROFILE.contact.email}
        </a>
      </p>
      <div className="relative">
        <label className="sr-only" htmlFor="contact-identity">
          Your name or email
        </label>
        <span className="font-code-md absolute top-2 left-2 text-primary-container">
          &gt;
        </span>
        <input
          id="contact-identity"
          className="font-code-md w-full border border-outline-variant bg-[#0c0c0e] py-1 pl-6 outline-none placeholder:opacity-30 focus:border-primary-container focus:ring-1 focus:ring-primary-container"
          placeholder="IDENTITY (name or email)"
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
          autoComplete="name"
        />
      </div>
      <div className="relative">
        <label className="sr-only" htmlFor="contact-message">
          Message
        </label>
        <span className="font-code-md absolute top-2 left-2 text-primary-container">
          &gt;
        </span>
        <textarea
          id="contact-message"
          className="font-code-md w-full resize-none border border-outline-variant bg-[#0c0c0e] py-1 pl-6 outline-none placeholder:opacity-30 focus:border-primary-container focus:ring-1 focus:ring-primary-container"
          placeholder="MESSAGE_STRING"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        className="font-label-caps w-full bg-primary-container py-2 text-on-primary-container transition-all hover:opacity-90 active:scale-95"
        type="submit"
      >
        {opened ? "MAIL_CLIENT_OPENED" : "EXECUTE_SEND"}
      </button>
    </form>
  );
}
