import Image from "next/image";
import type { SVGProps } from "react";
import { BOOKING_URL } from "../lib/links";

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

const services = [
  {
    title: "Highlights",
    description:
      "Illuminate your hair with our precision highlights services. Our skilled technicians artfully weave dimension and brightness into your locks, creating a sun-kissed, natural glow.",
    imageSrc: "/services/service_1.jpg",
  },
  {
    title: "Balayage",
    description:
      "Embrace the beauty of softly blended hues that mimic the sun's gentle touch. Elevate your hair and experience the magic of a sun-drenched glow.",
    imageSrc: "/services/service_2.jpg",
  },
  {
    title: "AirTouch",
    description:
      "Revitalize your hair with our AirTouch services, where precision meets creativity for a truly personalized and dynamic look. Let our skilled stylists take your hair to the next level.",
    imageSrc: "/services/service_3.jpg",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold tracking-wide text-white/80">
            Services
          </div>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Personalized Hair Solutions
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-white/65 sm:text-lg">
            Elevate your style with our expert and tailored hair solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_28px_80px_rgba(0,0,0,0.55)]"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="border-t border-white/10 p-8">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {service.description}
                </p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-transparent px-6 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  Explore Service
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


