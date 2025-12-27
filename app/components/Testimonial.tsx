import Image from "next/image";

export function Testimonial() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="relative mx-auto max-w-5xl">
          {/* Decorative quotes (desktop/tablet) */}
          <svg
            className="pointer-events-none absolute left-1/2 top-0 hidden h-28 w-44 -translate-x-1/2 -translate-y-4 text-white/10 md:block"
            viewBox="0 0 240 140"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M72 18C48 32 36 56 36 82c0 22 12 38 30 38 14 0 26-10 26-26 0-12-8-22-20-24 3-20 15-40 36-52L72 18Z"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <path
              d="M168 18c-24 14-36 38-36 64 0 22 12 38 30 38 14 0 26-10 26-26 0-12-8-22-20-24 3-20 15-40 36-52l-36 0Z"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinejoin="round"
            />
          </svg>

          {/* Mobile layout (matches reference screenshot) */}
          <div className="relative md:hidden">
            <svg
              className="pointer-events-none absolute -left-2 -top-8 h-28 w-40 text-white/15"
              viewBox="0 0 240 140"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M72 18C48 32 36 56 36 82c0 22 12 38 30 38 14 0 26-10 26-26 0-12-8-22-20-24 3-20 15-40 36-52L72 18Z"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <path
                d="M168 18c-24 14-36 38-36 64 0 22 12 38 30 38 14 0 26-10 26-26 0-12-8-22-20-24 3-20 15-40 36-52l-36 0Z"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-left text-2xl font-semibold leading-tight tracking-tight text-white/95 sm:text-3xl">
              Absolutely thrilled with the service at SalonDrake! From the
              moment I walked in, the atmosphere was inviting. The stylist truly
              worked wonders with my hair. The personalized attention, combined
              with their expert skills,exceeded my expectations. Highly recommend
              it!
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
                <Image
                  src="/hero/hero_2.jpg"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xl font-medium text-white/90">Jane Smith</div>
            </div>
          </div>

          {/* Desktop/tablet layout */}
          <div className="hidden items-center gap-10 md:grid md:grid-cols-[300px_1fr] md:gap-10">
            <div className="mx-auto w-full max-w-[300px]">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
                <Image
                  src="/hero/hero_2.jpg"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-balance text-lg font-semibold leading-tight tracking-tight text-white/90 sm:text-xl lg:text-2xl">
                Absolutely thrilled with the service at SalonDrake! From the
                moment I walked in, the atmosphere was inviting. The stylist truly
                worked wonders with my hair. The personalized attention, combined
                with their expert skills, exceeded my expectations. Highly
                recommend it!
              </p>
              <div className="mt-6 text-base font-medium text-white/85">
                Jane Smith
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


