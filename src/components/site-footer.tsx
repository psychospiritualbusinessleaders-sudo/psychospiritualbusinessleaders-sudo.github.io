import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span className="font-serif text-lg">Vireo</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Psychospiritual business &amp; leadership work for founders and executives who refuse to
            trade meaning for momentum.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
          <Link to="/services" className="transition-colors hover:text-foreground">
            Services
          </Link>
          <Link to="/assessment" className="transition-colors hover:text-foreground">
            Assessment
          </Link>
          <Link to="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vireo Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
