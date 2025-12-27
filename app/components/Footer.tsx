import { Logo } from "./Logo";
import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.5 22v-8h2.7l.5-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.5-.1-2.9-.1-2.9 0-4.8 1.8-4.8 5V11H6.7v3h2.6v8h4.2Z" />
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

function PinIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-t border-white/25" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-[1.15fr_0.95fr_0.95fr_1.15fr]">
          {/* Left */}
          <div className="order-1 col-span-1 space-y-8 text-sm md:col-span-1">
            <a href="#" aria-label="SalonDrake" className="inline-flex">
              <Logo />
            </a>

            <div className="flex items-center gap-7 text-white">
              <a
                href="#"
                aria-label="Facebook"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <FacebookIcon className="h-9 w-9" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <InstagramIcon className="h-9 w-9" />
              </a>
              <a
                href="#"
                aria-label="Location"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <PinIcon className="h-9 w-9" />
              </a>
            </div>
          </div>

          {/* Main */}
          <div className="order-3 space-y-5 text-sm md:order-2">
            <div className="text-sm font-semibold text-white/85">Main</div>
            <ul className="space-y-3 text-sm font-medium text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-white">
                  Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="order-2 space-y-5 text-sm md:order-3">
            <div className="text-sm font-semibold text-white/85">Services</div>
            <ul className="space-y-3 text-sm font-medium text-white/80">
              <li>Highlights</li>
              <li>Balayage</li>
              <li>AirTouch</li>
              <li>Keratin Treatment</li>
            </ul>
          </div>

          {/* Find Us */}
          <div className="order-4 space-y-5 text-sm">
            <div className="text-sm font-semibold text-white/85">Find Us</div>
            <div className="space-y-3 text-sm font-medium text-white/80">
              <div>Monday - Friday 10AM - 8PM.</div>
              <div>Saturday &amp; Sunday 9AM - 7PM.</div>
              <div>7010 Rue Clark, Montréal, QC H2S 3G4</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/25" />
      <div className="mx-auto max-w-7xl px-4 pt-7 pb-[calc(env(safe-area-inset-bottom)+96px)] text-sm text-white/65 md:pb-7">
        © 2025 SalonDrake. All rights reserved.
      </div>
    </footer>
  );
}


