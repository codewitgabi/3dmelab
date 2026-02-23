"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImagePlus, Type } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden px-4 pt-24 pb-20 sm:px-6 sm:pt-32 lg:px-8">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-chart-2/20 blur-3xl dark:bg-chart-2/15" />
        <div className="absolute bottom-1/3 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-chart-3/10 blur-3xl dark:bg-chart-3/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_70%)]" />
      </div>

      {/* Floating orbs - scattered, including over text area */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-primary/40 animate-float [animation-delay:0s]" />
      <div className="pointer-events-none absolute right-[6%] top-[35%] h-1.5 w-1.5 rounded-full bg-chart-2/50 animate-float [animation-delay:2s]" />
      <div className="pointer-events-none absolute left-[12%] bottom-[25%] h-2 w-2 rounded-full bg-chart-3/45 animate-float [animation-delay:4s]" />
      <div className="pointer-events-none absolute right-[18%] bottom-[12%] h-1.5 w-1.5 rounded-full bg-primary/35 animate-float [animation-delay:1s]" />
      <div className="pointer-events-none absolute right-[10%] top-[12%] h-1.5 w-1.5 rounded-full bg-chart-3/50 animate-float [animation-delay:5s]" />
      <div className="pointer-events-none absolute left-[6%] bottom-[8%] h-1.5 w-1.5 rounded-full bg-chart-3/40 animate-float [animation-delay:2.5s]" />
      {/* Center / text area */}
      <div className="pointer-events-none absolute left-[38%] top-[30%] h-1.5 w-1.5 rounded-full bg-primary/35 animate-float [animation-delay:0.5s]" />
      <div className="pointer-events-none absolute left-[58%] top-[38%] h-1 w-1 rounded-full bg-chart-2/45 animate-float [animation-delay:3s]" />
      <div className="pointer-events-none absolute left-[42%] top-[48%] h-1.5 w-1.5 rounded-full bg-chart-3/40 animate-float [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute left-[52%] top-[55%] h-1 w-1 rounded-full bg-primary/30 animate-float [animation-delay:4.5s]" />
      <div className="pointer-events-none absolute left-[45%] top-[62%] h-1.5 w-1.5 rounded-full bg-chart-2/40 animate-float [animation-delay:3.5s]" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="animate-fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground opacity-0 stagger-1 dark:bg-muted/30">
          <Type className="size-3.5 text-primary" />
          Text to 3D
          <span className="text-border">·</span>
          <ImagePlus className="size-3.5 text-primary" />
          Image to 3D
        </p>

        <h1 className="animate-fade-in-up font-semibold tracking-tight text-foreground opacity-0 stagger-2">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Generate 3D images
          </span>
          <span className="mt-2 block text-4xl font-medium text-muted-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            from text or photos.
          </span>
        </h1>

        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-base text-muted-foreground opacity-0 stagger-3 sm:text-lg">
          Turn words or any image into 3D in seconds. Export in your preferred
          format. No heavy software—just describe it, upload it, and get
          production-ready 3D.
        </p>

        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-3 opacity-0 stagger-4 sm:flex-row">
          <Button size="lg" className="gap-2 min-w-[160px]" asChild>
            <Link href="#get-started">
              Create 3D now
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="min-w-[160px]" asChild>
            <Link href="#formats">Output formats</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
