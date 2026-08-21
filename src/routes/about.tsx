import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Feather, Flame, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Vireo Method for Conscious Leaders" },
      {
        name: "description",
        content:
          "Depth psychology, contemplative practice and twenty years of boardroom strategy, held in one four-movement method for founders and executives.",
      },
      { property: "og:title", content: "About — The Vireo Method" },
      {
        property: "og:description",
        content:
          "Depth psychology and boardroom strategy, held in one method for conscious founders and executives.",
      },
    ],
  }),
  component: AboutPage,
});

const movements = [
  {
    icon: Compass,
    title: "Orientation",
    body: "We map the terrain honestly — the numbers, the fatigue, the quiet resentments nobody names in the quarterly review.",
  },
  {
    icon: Flame,
    title: "Excavation",
    body: "Shadow work applied to strategy. The patterns you inherited become visible, and therefore optional.",
  },
  {
    icon: Mountain,
    title: "Architecture",
    body: "Inner clarity becomes structure: operating rhythms, decision protocols, and a narrative that holds.",
  },
  {
    icon: Feather,
    title: "Integration",
    body: "Practice replaces insight. What was a breakthrough becomes an ordinary Tuesday.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="animate-rise">
          <p className="eyebrow">Our practice</p>
          <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">
            Strategy is a spiritual discipline when it is done honestly
          </h1>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Vireo began in the space between two rooms: the boardroom, where decisions were made
              at speed and defended with data, and the therapy room, where the same people admitted
              they no longer recognised what they were building.
            </p>
            <p>
              We hold both. Our practitioners carry credentials in organisational strategy and in
              depth psychology, and our work refuses to pretend those are separate disciplines. A
              company drifts when its founder drifts. A team burns out when the system it lives
              inside is asking for something its leaders cannot articulate.
            </p>
            <p>
              We do not offer transcendence. We offer alignment — the unglamorous, repeatable
              practice of building something whose shape matches your own.
            </p>
          </div>
          <Button asChild size="lg" className="mt-9">
            <Link to="/contact">
              Book a catalyst session <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {movements.map((m, i) => (
            <div
              key={m.title}
              className="surface-card animate-rise p-7"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <m.icon className="size-4" />
                </span>
                <h2 className="text-xl">{m.title}</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-20 grid gap-6 sm:grid-cols-3">
        {[
          { n: "19 yrs", l: "Average practitioner experience" },
          { n: "240+", l: "Founders and executives held" },
          { n: "31", l: "Corporate wellness programmes delivered" },
        ].map((s) => (
          <div key={s.l} className="surface-card p-8 text-center">
            <p className="font-serif text-4xl text-primary">{s.n}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
