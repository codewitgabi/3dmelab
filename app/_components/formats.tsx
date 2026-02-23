import { FileBox, FileCode, FileJson } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateInView } from "@/app/_components/animate-in-view";

const formats = [
  {
    name: "OBJ",
    description: "Universal mesh format, widely supported",
    icon: FileBox,
  },
  {
    name: "GLB / glTF",
    description: "Web and real-time friendly",
    icon: FileCode,
  },
  {
    name: "FBX & more",
    description: "Export in the format your pipeline needs",
    icon: FileJson,
  },
];

export function Formats() {
  return (
    <section
      id="formats"
      className="scroll-mt-20 border-t border-border/50 bg-muted/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <h2 className="animate-on-scroll stagger-1 text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Output formats
          </h2>
          <p className="animate-on-scroll stagger-2 mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Download your 3D in the format that fits your workflow.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {formats.map(({ name, description, icon: Icon }, i) => (
              <div
                key={name}
                className={cn(
                  "animate-on-scroll rounded-xl border border-border/60 bg-background p-6 shadow-sm transition-shadow hover:shadow-md",
                  i === 0 && "stagger-3",
                  i === 1 && "stagger-4",
                  i === 2 && "stagger-5"
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 font-medium text-foreground">{name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
