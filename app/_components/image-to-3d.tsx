import { ImagePlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateInView } from "@/app/_components/animate-in-view";

export function ImageTo3D() {
  return (
    <section
      id="image-to-3d"
      className="scroll-mt-20 border-t border-border/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-on-scroll stagger-1 flex justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-chart-2/10 sm:h-56 sm:w-56">
                <ImagePlus className="size-24 text-chart-2/60 sm:size-28" />
              </div>
            </div>
            <div>
              <h2 className="animate-on-scroll stagger-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Image to 3D
              </h2>
              <p className="animate-on-scroll stagger-3 mt-4 text-muted-foreground">
                Upload a photo or sketch and we will generate a 3D version. Great
                for turning reference images, product shots, or artwork into
                editable 3D assets you can export and use anywhere.
              </p>
              <div className="animate-on-scroll stagger-4">
                <Button className="mt-6" asChild>
                  <Link href="/auth/register">Try image to 3D</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
