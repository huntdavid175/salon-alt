import type { SVGProps } from "react";
import { BOOKING_URL } from "../lib/links";

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.5a16 16 0 0 0 6.4 6.4l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-7.88 1.26A4 4 0 0 1 16 11.37Z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function MobileBottomBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 md:hidden">
      <div className="mx-auto flex max-w-[560px] items-center justify-center gap-4 px-4 pb-[env(safe-area-inset-bottom)]">
        <a
          href="tel:+17185718638"
          aria-label="Call"
          className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
        >
          <PhoneIcon className="h-6 w-6" />
        </a>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex h-14 flex-1 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-black shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
        >
          Book Now
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
        >
          <InstagramIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}


