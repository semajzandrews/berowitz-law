"use client";

import { useEffect, useRef, useState } from "react";
import { formatPhone, telHref, smsHref } from "@/lib/phone";

/**
 * Call or Text, in the language of this sheet: the choice opens as a small
 * enclosure card on the same laid stock, ruled in brass, labelled in the
 * letterhead's small caps. Some people will not dial a law office from an
 * open-plan desk; they will send two lines instead.
 */

function PhoneGlyph({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h2.9l1.4 4.1-2 1.5a13.6 13.6 0 0 0 6.5 6.5l1.5-2 4.1 1.4v2.9c0 1-.8 1.8-1.8 1.8C10.7 19.2 4.8 13.3 4.8 4.8 4.8 3.8 5.6 3 6.6 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MessageGlyph({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4.8h16v11.4H9.2L4.8 19.6v-3.4H4V4.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  phone: string;
  smsBody: string;
  smsHint?: string;
  variant?: "pill" | "inline";
};

export default function CallOrText({
  phone,
  smsBody,
  smsHint = "Two lines about your matter",
  variant = "pill",
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pretty = formatPhone(phone);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a href={telHref(phone)} className="btn-navy">
          <PhoneGlyph /> Call {pretty}
        </a>
        <a href={smsHref(phone, smsBody)} className="btn-letter">
          <MessageGlyph /> Send a text instead
        </a>
      </div>
    );
  }

  return (
    <div className="cot" ref={rootRef}>
      <div className="cot-card" data-open={open} role="menu" aria-label="Contact the office">
        <p className="cot-head">Choose one</p>
        <a href={telHref(phone)} role="menuitem" onClick={() => setOpen(false)}>
          <PhoneGlyph size={14} />
          <span>
            <strong>Call the office</strong>
            <em>{pretty}</em>
          </span>
        </a>
        <a href={smsHref(phone, smsBody)} role="menuitem" onClick={() => setOpen(false)}>
          <MessageGlyph size={14} />
          <span>
            <strong>Send a text</strong>
            <em>{smsHint}</em>
          </span>
        </a>
      </div>

      <button
        type="button"
        className="callpill"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Call or text the Law Office of Stephen S. Berowitz at ${pretty}`}
        onClick={() => setOpen((v) => !v)}
      >
        <PhoneGlyph />
        <span className="callpill-label">{pretty}</span>
      </button>
    </div>
  );
}
