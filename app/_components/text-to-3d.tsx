import { Type } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateInView } from "@/app/_components/animate-in-view";

export function TextTo3D() {
  return (
    <section
      id="text-to-3d"
      className="scroll-mt-20 border-t border-border/50 bg-muted/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-on-scroll stagger-1 flex justify-center lg:order-2">
              <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-primary/10 sm:h-56 sm:w-56">
                <Type className="size-24 text-primary/60 sm:size-28" />
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="animate-on-scroll stagger-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Text to 3D
              </h2>
              <p className="animate-on-scroll stagger-3 mt-4 text-muted-foreground">
                Describe what you want in plain language. Our model turns your
                words into detailed 3D models—no modeling experience required.
                Perfect for concepts, products, or creative ideas.
              </p>
              <div className="animate-on-scroll stagger-4">
                <Button className="mt-6" asChild>
                  <Link href="/auth/register">Try text to 3D</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
