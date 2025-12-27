"use client";

import Image from "next/image";
import type { SVGProps } from "react";
import { BOOKING_URL } from "../lib/links";
import { MotionConfig, motion, type Variants } from "framer-motion";

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

export function Hero() {
  const collageContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const collageItem: Variants = {
    hidden: { opacity: 0, y: -24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const textContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const textItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardBase =
    "relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-[0_40px_90px_rgba(0,0,0,0.55)]";
  const cardSizeDesktop =
    "h-[230px] w-[190px] lg:h-[260px] lg:w-[210px] xl:h-[295px] xl:w-[235px]";

  return (
    <section className="salon-grid-bg text-white">
      <div className="mx-auto grid min-h-[calc(100vh-44px-80px)] max-w-7xl items-center gap-12 px-4 py-16 pb-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24 lg:pb-24">
        <MotionConfig reducedMotion="never">
          <motion.div
            className="max-w-xl"
            variants={textContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              variants={textItem}
            >
              Premier Hair Services
              <br />
              in Montreal.
            </motion.h1>

            <motion.p
              className="mt-7 max-w-lg text-pretty text-base leading-7 text-white/70 sm:text-lg"
              variants={textItem}
            >
              Elevate your hair to its fullest potential with a transformative
              and luxurious experience you won&apos;t find anywhere else.
            </motion.p>

            <motion.div
              className="mt-10 flex w-full max-w-md flex-row items-center gap-3"
              variants={textItem}
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-white/90"
              >
                Book Online
              </a>
              <a
                href="#directions"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/35 px-5 text-sm font-semibold text-white transition-colors hover:border-white/55 hover:bg-white/5"
              >
                Get Directions
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </MotionConfig>

        <div className="relative mx-auto w-full max-w-xl md:max-w-3xl xl:max-w-4xl lg:max-w-none">
          {/* Mobile collage (matches the mobile reference) */}
          <MotionConfig reducedMotion="never">
            <div className="md:hidden">
              <motion.div
                className="mx-auto grid max-w-[560px] grid-cols-[1.35fr_1fr_1fr] grid-rows-2 items-center gap-4 sm:gap-6"
                variants={collageContainer}
                initial="hidden"
                animate="show"
              >
                {/* Left: centered between rows */}
                <div className="row-span-2 flex items-center">
                  <motion.div
                    className={`${cardBase} aspect-4/5 w-full`}
                    variants={collageItem}
                  >
                    <Image
                      src="/hero/hero_1.jpg"
                      alt="Hair style"
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className={`${cardBase} aspect-4/5 w-full`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_2.jpg"
                    alt="Hair style"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  className={`${cardBase} aspect-4/5 w-full`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_3.jpg"
                    alt="Hair style"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  className={`${cardBase} aspect-4/5 w-full`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_5.jpg"
                    alt="Hair style"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  className={`${cardBase} aspect-4/5 w-full`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_4.jpg"
                    alt="Hair style"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </MotionConfig>

          {/* Desktop/tablet collage: fixed card width/height so every tile is uniform */}
          <MotionConfig reducedMotion="never">
            <motion.div
              className="hidden w-full grid-cols-3 items-center justify-items-center gap-7 md:grid md:min-h-[660px] lg:min-h-[740px]"
              variants={collageContainer}
              initial="hidden"
              animate="show"
            >
              {/* Left: single card, vertically centered */}
              <div className="row-span-2 flex items-center">
                <motion.div
                  className={`${cardBase} ${cardSizeDesktop}`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_1.jpg"
                    alt="Hair style"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Middle: two uniform cards */}
              <div className="flex flex-col items-center gap-7">
                <motion.div
                  className={`${cardBase} ${cardSizeDesktop}`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_2.jpg"
                    alt="Hair style"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className={`${cardBase} ${cardSizeDesktop}`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_5.jpg"
                    alt="Hair style"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Right: two uniform cards */}
              <div className="flex flex-col items-center gap-7">
                <motion.div
                  className={`${cardBase} ${cardSizeDesktop}`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_3.jpg"
                    alt="Hair style"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className={`${cardBase} ${cardSizeDesktop}`}
                  variants={collageItem}
                >
                  <Image
                    src="/hero/hero_4.jpg"
                    alt="Hair style"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </MotionConfig>
        </div>
      </div>
    </section>
  );
}
