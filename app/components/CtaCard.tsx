import type { SVGProps } from "react";
import { BOOKING_URL, MAPS_URL } from "../lib/links";

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function CtaCard() {
  return (
    <section id="book" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-[34px] border border-white/20 bg-black px-6 py-16 sm:px-10 sm:py-20">
          {/* Soft spotlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(520px 300px at 50% 65%, rgba(255,255,255,0.22), rgba(255,255,255,0.06) 55%, rgba(0,0,0,0.0) 70%)",
            }}
          />
          {/* Vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 520px at 50% 70%, rgba(0,0,0,0.0), rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.9) 100%)",
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready to take your hair to the next level?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
              If you&apos;re serious about transforming your hair, take the first
              step towards a stunning new you: click the button below to schedule
              your appointment now.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-white/90"
              >
                Book Online
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:border-white/55 hover:bg-white/5"
              >
                Get Directions
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


