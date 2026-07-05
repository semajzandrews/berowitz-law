import Reveal from "@/components/Reveal";

const PHONE = "(973) 743-7753";
const TEL = "tel:+19737437753";
const ADDRESS = "299 Glenwood Ave #2, Bloomfield, NJ 07003";

/* One sheet of counsel. Every fact on this page is verified lead data:
   name, address, phone, 5.0 Google rating (1 review — cited narrowly).
   No practice areas, years, credentials or testimonials are asserted. */

function BrassRule() {
  return (
    <svg className="rule-draw" viewBox="0 0 600 22" preserveAspectRatio="none" aria-hidden="true">
      <line className="draw" x1="0" y1="11" x2="270" y2="11" strokeWidth="1" />
      <circle cx="300" cy="11" r="3.5" fill="none" strokeWidth="1" className="draw" />
      <line className="draw" x1="330" y1="11" x2="600" y2="11" strokeWidth="1" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex-1 py-6 sm:py-12 md:py-16">
      {/* fixed call pill */}
      <a href={TEL} className="callpill" aria-label={`Call the Law Office of Stephen S. Berowitz at ${PHONE}`}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 3h2.9l1.4 4.1-2 1.5a13.6 13.6 0 0 0 6.5 6.5l1.5-2 4.1 1.4v2.9c0 1-.8 1.8-1.8 1.8C10.7 19.2 4.8 13.3 4.8 4.8 4.8 3.8 5.6 3 6.6 3Z"
            fill="currentColor"
          />
        </svg>
        <span className="callpill-label">{PHONE}</span>
      </a>

      {/* THE SHEET */}
      <article className="sheet mx-auto w-full max-w-3xl px-6 py-14 sm:px-12 sm:py-20 md:px-16">
        {/* Letterhead */}
        <header className="text-center">
          <Reveal>
            <div
              aria-hidden="true"
              className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-brass"
            >
              <span className="font-[family-name:var(--font-bespoke)] text-2xl text-brass-2">B</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="smallcaps mb-4">Attorney at Law · Bloomfield, New Jersey</p>
          </Reveal>
          <Reveal delay={180}>
            <h1 className="pressed text-[clamp(2.1rem,6vw,3.6rem)]">
              Stephen S. Berowitz
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <div className="mx-auto mt-6 max-w-md">
              <BrassRule />
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-4 text-[15px] text-navy-3">
              {ADDRESS} ·{" "}
              <a href={TEL} className="font-medium text-brass-2 underline decoration-brass/40 underline-offset-4">
                {PHONE}
              </a>
            </p>
          </Reveal>
        </header>

        {/* The letter */}
        <Reveal delay={200}>
          <section className="mx-auto mt-14 max-w-xl">
            <p className="text-navy-2">
              Legal matters rarely announce themselves politely. When one arrives
              — a document you&apos;ve been served, a dispute you can&apos;t settle at the
              kitchen table, a decision that needs to hold up long after it&apos;s
              made — the first step is a conversation with someone whose job is
              to take it seriously.
            </p>
            <p className="mt-6 text-navy-2">
              This office keeps that first step simple: call, describe your
              matter plainly, and get a straight answer about whether and how we
              can help. If it isn&apos;t the kind of matter we take on, you&apos;ll be told
              so directly, and pointed the right way when possible.
            </p>
            <p className="mt-6 text-navy-2">
              The practice is on Glenwood Avenue in Bloomfield — rated five
              stars by clients on Google — and the phone is answered with the
              understanding that no one calls a lawyer on their easiest day.
            </p>
          </section>
        </Reveal>

        {/* The ask */}
        <Reveal delay={120}>
          <section className="mt-14 text-center">
            <p className="smallcaps mb-5">To Discuss Your Matter</p>
            <a href={TEL} className="btn-navy">
              Call {PHONE}
            </a>
            <p className="mt-4 text-sm text-navy-3">299 Glenwood Ave, Suite 2 · Bloomfield</p>
          </section>
        </Reveal>

        {/* The map, framed like an enclosure */}
        <Reveal delay={140}>
          <section className="mt-16">
            <p className="smallcaps mb-4 text-center">Enclosure: Directions</p>
            <div className="map-frame" style={{ height: "clamp(280px, 34vw, 380px)" }}>
              <iframe
                title={`Law Office of Stephen S. Berowitz — ${ADDRESS}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </Reveal>

        {/* Sign-off */}
        <Reveal delay={100}>
          <footer className="mt-16 border-t border-[var(--line)] pt-8 text-center">
            <p className="font-[family-name:var(--font-bespoke)] text-lg text-navy">
              Law Office of Stephen S. Berowitz
            </p>
            <p className="mt-1 text-sm text-navy-3">{ADDRESS}</p>
            <p className="mt-6 text-xs tracking-wide text-navy-3">
              site by{" "}
              <a
                href="https://bysemaj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brass-2 underline decoration-brass/40 underline-offset-4"
              >
                bysemaj.com
              </a>
            </p>
          </footer>
        </Reveal>
      </article>
    </main>
  );
}
