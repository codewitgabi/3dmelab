import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateInView } from "@/app/_components/animate-in-view";

export function Cta() {
  return (
    <section className="border-t border-border/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateInView>
          <h2 className="animate-on-scroll stagger-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Ready to create?
          </h2>
          <p className="animate-on-scroll stagger-2 mt-3 text-muted-foreground">
            Start generating 3D from text or images in seconds.
          </p>
          <div className="animate-on-scroll stagger-3">
            <Button size="lg" className="mt-6 gap-2" asChild>
              <Link href="#get-started">
                Get started free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
