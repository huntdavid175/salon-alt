export function TopBar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-black/10 bg-white text-black">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-center px-4 text-sm font-medium tracking-wide">
        <a
          href="tel:+17185718638"
          className="inline-flex items-center gap-2 hover:underline"
        >
          Premier Hair Services - (718) 571-8638 <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}


