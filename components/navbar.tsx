"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#text-to-3d", label: "Text to 3D" },
  { href: "#image-to-3d", label: "Image to 3D" },
  { href: "#formats", label: "Formats" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/80 shadow-sm backdrop-blur-xl dark:bg-background/70"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center no-underline"
          aria-label="3Dmelab home"
        >
          <Image
            src="/logo.jpeg"
            alt="3Dmelab"
            width={120}
            height={36}
            className="h-9 w-auto transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-[width] duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#get-started">Generate 3D</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl transition-[height,opacity] duration-300 md:hidden",
          mobileOpen ? "h-[calc(100vh-4rem)] opacity-100" : "h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link href="#login" onClick={() => setMobileOpen(false)}>
                Log in
              </Link>
            </Button>
            <Button size="sm" asChild className="w-full">
              <Link href="#get-started" onClick={() => setMobileOpen(false)}>
                Generate 3D
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
