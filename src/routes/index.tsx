import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  Briefcase,
  Compass,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vireo — Psychospiritual Business & Leadership" },
      {
        name: "description",
        content:
          "Aligning executive strategy with inner wisdom. Coaching, branding strategy and corporate wellness for founders who refuse to trade meaning for momentum.",
      },
      { property: "og:title", content: "Vireo — Psychospiritual Business & Leadership" },
      {
        property: "og:description",
        content: "Aligning executive strategy with inner wisdom for conscious founders and executives.",
      },
    ],
  }),
  component: Home,
});

const testimonials = [
  {
    quote:
      "I arrived wanting a growth plan and left with something rarer — a company shape that finally matches my own. Revenue followed, but that was never the headline.",
    name: "Marguerite Vaal",
    role: "Founder, Solden Textiles",
  },
  {
    quote:
      "Nobody had ever asked me what I was defending against in board meetings. Six months on, our leadership team argues better and burns out less.",
    name: "Dr. Idris Baptiste",
    role: "CEO, Hartline Health",
  },
  {
    quote:
      "The branding work was a spiritual excavation disguised as positioning. Our narrative is now the truest thing we own.",
    name: "Noor Halvorsen",
    role: "Co-founder, Meridian Labs",
  },
];

const insights = [
  {
    tag: "Depth psychology",
    title: "The shadow in the strategy deck",
    excerpt:
      "Every roadmap encodes a fear. Learning to read yours turns planning into a practice of self-knowledge.",
    read: "7 min",
  },
  {
    tag: "Burnout",
    title: "Rest is not a reward for output",
    excerpt:
      "Why the executive nervous system needs structural recovery, not another optimisation of the calendar.",
    read: "5 min",
  },
  {
    tag: "Purpose",
    title: "When the mission outgrows the founder",
    excerpt:
      "A quiet, common crisis — and the three questions that reveal whether to realign or to release.",
    read: "9 min",
  },
];

const method = [
  {
    icon: Compass,
    title: "Orientation",
    body: "An honest map of the terrain: numbers, fatigue, and the things nobody names aloud.",
  },
  {
    icon: Brain,
    title: "Excavation",
    body: "Depth-psychological work applied directly to how you decide, delegate and defend.",
  },
  {
    icon: Briefcase,
    title: "Architecture",
    body: "Inner clarity becomes structure — rhythms, protocols and a narrative that holds under pressure.",
  },
  {
    icon: ShieldCheck,
    title: "Integration",
    body: "Practice replaces insight, until alignment is simply how the business operates.",
  },
];

function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-rise">
            <p className="eyebrow">Psychospiritual business &amp; leadership</p>
            <h1 className="mt-5 text-balance-serif text-5xl leading-[1.02] sm:text-7xl">
              Aligning executive strategy with inner wisdom
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              For founders and executives who have built something successful and can no longer
              ignore the cost. We work where strategy meets soul — rigorously, quietly, and without
              a single platitude.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/contact">
                  Book Catalyst Session <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <Link to="/assessment">
                  <Sparkles className="size-4" /> Take the assessment
                </Link>
              </Button>
            </div>
            <div className="mt-12 gold-rule" />
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              Trusted by leadership teams across health, climate and design — from seed-stage
              founders to boards of 900-person organisations.
            </p>
          </div>

          <div className="animate-rise" style={{ animationDelay: "150ms" }}>
            <img
              src={heroImage}
              width={1408}
              height={1008}
              alt="Balanced stones and eucalyptus in warm morning light"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="max-w-xl">
          <p className="eyebrow">The methodology</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            A four-movement path from drift to alignment
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((m, i) => (
            <div
              key={m.title}
              className="surface-card animate-rise p-7"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <m.icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 border-y border-border bg-sand py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Quote className="mx-auto size-6 text-gold" />
          <div className="relative mt-8 min-h-56 sm:min-h-48">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  i === active ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
                }`}
              >
                <p className="font-serif text-2xl leading-snug sm:text-3xl">“{t.quote}”</p>
                <footer className="mt-7">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {t.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-gold" : "w-1.5 bg-border hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Recent insights</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Field notes from the work</h2>
          </div>
          <Button asChild variant="ghost">
            <Link to="/about">
              About the practice <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {insights.map((p, i) => (
            <article
              key={p.title}
              className="surface-card animate-rise flex flex-col p-8"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <p className="eyebrow">{p.tag}</p>
              <h3 className="mt-4 text-2xl leading-snug">{p.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <p className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {p.read} read
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="surface-card flex flex-col gap-7 p-10 text-center hover:translate-y-0 hover:shadow-soft sm:p-16">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-5xl">
            Find out where your leadership is out of true
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground">
            Three questions on mindset, energy and purpose. A personalised profile in under five
            minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/assessment">
                Start the Aligned Leader Assessment <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
