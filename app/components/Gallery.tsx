import Image from "next/image";
import type { SVGProps } from "react";

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

const images = [
  "/gallery/gallery_1.jpg",
  "/gallery/gallery_2.jpg",
  "/gallery/gallery_3.jpg",
  "/gallery/gallery_4.jpg",
  "/gallery/gallery_5.jpg",
  "/gallery/gallery_6.jpg",
  "/gallery/gallery_7.jpg",
  "/gallery/gallery_8.jpg",
] as const;

export function Gallery() {
  return (
    <section id="gallery" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="flex justify-center">
          <a
            href="tel:+17185718638"
            className="inline-flex items-center gap-3 rounded-xl border border-white/40 bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
          >
            <PhoneIcon className="h-4 w-4" />
            (718) 571-8638
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white/85 sm:text-5xl">
            A Visual Symphony of Beauty
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-white/55 sm:text-lg">
            Immerse yourself in our gallery, where the artistry of SalonDrake
            unfolds.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={src}
                  alt="Gallery image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
