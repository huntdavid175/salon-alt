import { Logo } from "./Logo";
import { BOOKING_URL } from "../lib/links";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
] as const;

export function NavBar() {
  return (
    <div className="w-full bg-black text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <a href="#" aria-label="SalonDrake" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/85 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-white/90"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}


