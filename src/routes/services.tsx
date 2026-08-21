import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Briefcase, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Coaching, Branding & Corporate Wellness | Vireo" },
      {
        name: "description",
        content:
          "Three tiers of psychospiritual work: mindful leadership coaching, branding strategy for purpose-driven founders, and corporate wellness modules for teams.",
      },
      { property: "og:title", content: "Services — Vireo Psychospiritual Leadership" },
      {
        property: "og:description",
        content:
          "Mindful leadership coaching, psychospiritual branding strategy, and corporate wellness modules.",
      },
    ],
  }),
  component: ServicesPage,
});

const tiers = [
  {
    icon: Brain,
    name: "Mindful Leadership Coaching",
    audience: "1-on-1 for executives",
    price: "From $4,800 / quarter",
    blurb:
      "A private container for the decisions that keep you awake. We work at the intersection of strategy, nervous-system regulation, and depth psychology.",
    points: [
      "Bi-weekly 90-minute deep sessions",
      "Shadow work &amp; decision-pattern mapping",
      "Between-session voice support",
      "Quarterly alignment review",
    ],
  },
  {
    icon: Briefcase,
    name: "Psychospiritual Branding Strategy",
    audience: "For purpose-driven founders",
    price: "From $12,000 / engagement",
    blurb:
      "Your brand is the outer architecture of an inner truth. We excavate the founding myth and translate it into positioning, voice, and narrative.",
    points: [
      "Founder mythology intensive",
      "Values-to-positioning translation",
      "Narrative &amp; messaging architecture",
      "Launch guidance for six weeks",
    ],
    featured: true,
  },
  {
    icon: ShieldCheck,
    name: "Corporate Wellness Modules",
    audience: "B2B team consulting",
    price: "Custom scoping",
    blurb:
      "Burnout is a systems problem, not a personal failing. Modular programmes that change how teams meet pressure, conflict, and change.",
    points: [
      "Half-day and multi-week formats",
      "Team burnout diagnostics",
      "Contemplative practice training",
      "Leadership debrief &amp; roadmap",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 pb-6">
      <div className="max-w-2xl animate-rise">
        <p className="eyebrow">Ways to work together</p>
        <h1 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">
          Three doorways into aligned leadership
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Each engagement holds the same premise: the health of a business is inseparable from the
          inner life of the person leading it. Choose the depth that matches your season.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <article
            key={tier.name}
            className={`surface-card animate-rise flex flex-col p-8 ${
              tier.featured ? "lg:-mt-4 lg:mb-4 ring-1 ring-gold/40" : ""
            }`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <tier.icon className="size-5" />
            </span>
            {tier.featured && (
              <span className="mt-6 w-fit rounded-full bg-gold/15 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-gold">
                Most requested
              </span>
            )}
            <h2 className="mt-6 text-2xl leading-snug">{tier.name}</h2>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {tier.audience}
            </p>
            <p
              className="mt-5 text-sm leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: tier.blurb }}
            />
            <ul className="mt-6 flex-1 space-y-3">
              {tier.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-xl">{tier.price}</p>
            <Button
              asChild
              variant={tier.featured ? "gold" : "quiet"}
              size="lg"
              className="mt-5 w-full"
            >
              <Link to="/contact">
                Enquire <ArrowRight className="size-4" />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <section className="surface-card mt-16 flex flex-col gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl">Not sure which door is yours?</h2>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">
            Take the Aligned Leader Assessment — five minutes, three questions, one honest mirror.
          </p>
        </div>
        <Button asChild size="lg">
          <Link to="/assessment">
            Begin assessment <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
