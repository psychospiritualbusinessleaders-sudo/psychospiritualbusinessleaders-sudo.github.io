import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Flame,
  RotateCcw,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "The Aligned Leader Assessment — Free 3-Minute Diagnostic" },
      {
        name: "description",
        content:
          "A three-step diagnostic measuring decision-making style, burnout load and mission alignment, with a personalised leadership profile and recommendation.",
      },
      { property: "og:title", content: "The Aligned Leader Assessment" },
      {
        property: "og:description",
        content:
          "Measure your decision style, burnout load and mission alignment in three minutes.",
      },
    ],
  }),
  component: AssessmentPage,
});

type MindsetKey = "analytical" | "intuitive" | "balanced";
type PurposeKey = "full" | "some" | "none";

const mindsetOptions: { key: MindsetKey; label: string; hint: string; score: number }[] = [
  {
    key: "analytical",
    label: "Purely analytical",
    hint: "Data, models and precedent decide. Feeling is noise.",
    score: 18,
  },
  {
    key: "intuitive",
    label: "Intuitive / gut feeling",
    hint: "You move on the inner signal, then justify it later.",
    score: 24,
  },
  {
    key: "balanced",
    label: "Balanced logic and inner alignment",
    hint: "Evidence informs; alignment confirms. Both hold veto power.",
    score: 35,
  },
];

const purposeOptions: { key: PurposeKey; label: string; hint: string; score: number }[] = [
  {
    key: "full",
    label: "Fully aligned",
    hint: "The mission and your values are the same sentence.",
    score: 35,
  },
  {
    key: "some",
    label: "Somewhat aligned",
    hint: "The direction is right; the daily reality drifts.",
    score: 20,
  },
  {
    key: "none",
    label: "Completely disconnected",
    hint: "You are executing something you no longer believe in.",
    score: 6,
  },
];

const burnoutLabels = [
  "Steady and resourced",
  "Mild strain",
  "Persistent depletion",
  "Running on reserve",
  "Full burnout",
];

function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [mindset, setMindset] = useState<MindsetKey | null>(null);
  const [burnout, setBurnout] = useState<number | null>(null);
  const [purpose, setPurpose] = useState<PurposeKey | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;
  const progress = submitted ? 100 : (step / totalSteps) * 100;

  const canAdvance = step === 0 ? !!mindset : step === 1 ? burnout !== null : !!purpose;

  const reset = () => {
    setStep(0);
    setMindset(null);
    setBurnout(null);
    setPurpose(null);
    setSubmitted(false);
  };

  if (submitted && mindset && burnout !== null && purpose) {
    return (
      <Results
        mindset={mindset}
        burnout={burnout}
        purpose={purpose}
        onRestart={reset}
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <div className="text-center animate-rise">
        <p className="eyebrow">The Aligned Leader Assessment</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
          Three questions. One honest mirror.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          A short diagnostic across mindset, energy and purpose. Your results are generated
          instantly and never stored.
        </p>
      </div>

      <div className="surface-card mt-12 overflow-hidden p-0 hover:translate-y-0 hover:shadow-soft">
        <div className="h-1 w-full bg-muted">
          <div
            className="h-full bg-gold transition-all duration-700 ease-out"
            style={{ width: `${Math.max(progress, 4)}%` }}
          />
        </div>

        <div className="p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Step {step + 1} of {totalSteps}
            </span>
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
              {step === 0 ? <Brain className="size-3.5" /> : null}
              {step === 1 ? <Flame className="size-3.5" /> : null}
              {step === 2 ? <Target className="size-3.5" /> : null}
              {["Mindset", "Energy", "Purpose"][step]}
            </span>
          </div>

          {step === 0 && (
            <div key="s0" className="animate-rise">
              <h2 className="mt-6 text-2xl leading-snug sm:text-3xl">
                How do you make critical business decisions?
              </h2>
              <div className="mt-8 space-y-3">
                {mindsetOptions.map((o) => (
                  <OptionRow
                    key={o.key}
                    selected={mindset === o.key}
                    label={o.label}
                    hint={o.hint}
                    onSelect={() => setMindset(o.key)}
                  />
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div key="s1" className="animate-rise">
              <h2 className="mt-6 text-2xl leading-snug sm:text-3xl">
                Rate your current burnout level.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                1 is fully resourced, 5 is running on empty.
              </p>
              <div className="mt-9 grid grid-cols-5 gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setBurnout(n)}
                    className={cn(
                      "group flex h-20 flex-col items-center justify-center rounded-xl border transition-all duration-300 sm:h-24",
                      burnout === n
                        ? "border-gold bg-gold/12 -translate-y-1 shadow-soft"
                        : "border-border bg-background hover:-translate-y-1 hover:border-gold/50",
                    )}
                  >
                    <span className="font-serif text-3xl">{n}</span>
                  </button>
                ))}
              </div>
              <p className="mt-5 min-h-6 text-center text-sm text-muted-foreground transition-opacity duration-300">
                {burnout ? burnoutLabels[burnout - 1] : "Select a level to continue"}
              </p>
            </div>
          )}

          {step === 2 && (
            <div key="s2" className="animate-rise">
              <h2 className="mt-6 text-2xl leading-snug sm:text-3xl">
                Is your company&rsquo;s core mission aligned with your personal spiritual values?
              </h2>
              <div className="mt-8 space-y-3">
                {purposeOptions.map((o) => (
                  <OptionRow
                    key={o.key}
                    selected={purpose === o.key}
                    label={o.label}
                    hint={o.hint}
                    onSelect={() => setPurpose(o.key)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              <ArrowLeft className="size-4" /> Back
            </Button>
            {step < totalSteps - 1 ? (
              <Button size="lg" disabled={!canAdvance} onClick={() => setStep((s) => s + 1)}>
                Continue <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button
                size="lg"
                variant="gold"
                disabled={!canAdvance}
                onClick={() => setSubmitted(true)}
              >
                Reveal my profile <Sparkles className="size-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionRow({
  selected,
  label,
  hint,
  onSelect,
}: {
  selected: boolean;
  label: string;
  hint: string;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "w-full rounded-xl border px-6 py-5 text-left transition-all duration-300",
        selected
          ? "border-gold bg-gold/10 shadow-soft"
          : "border-border bg-background hover:border-gold/50 hover:bg-muted/60",
      )}
    >
      <span className="flex items-center justify-between gap-4">
        <span>
          <span className="block text-base font-medium">{label}</span>
          <span className="mt-1 block text-sm text-muted-foreground">{hint}</span>
        </span>
        <span
          className={cn(
            "mt-1 size-3.5 shrink-0 rounded-full border transition-colors duration-300",
            selected ? "border-gold bg-gold" : "border-border",
          )}
        />
      </span>
    </button>
  );
}

function Results({
  mindset,
  burnout,
  purpose,
  onRestart,
}: {
  mindset: MindsetKey;
  burnout: number;
  purpose: PurposeKey;
  onRestart: () => void;
}) {
  const mindsetScore = mindsetOptions.find((o) => o.key === mindset)!.score;
  const purposeScore = purposeOptions.find((o) => o.key === purpose)!.score;
  const energyScore = Math.round(((5 - burnout) / 4) * 30);
  const score = Math.min(100, mindsetScore + purposeScore + energyScore);

  const profile =
    score >= 75
      ? {
          name: "The Grounded Catalyst",
          text: "You lead from a rare middle place — evidence in one hand, inner knowing in the other. Your nervous system still has reserve, and your mission and values are speaking the same language. The work ahead is not repair but refinement: protecting this coherence as scale introduces noise, and building the rituals that let you hear the inner signal when the calendar gets loud.",
        }
      : score >= 50
        ? {
            name: "The Seeking Strategist",
            text: "You are competent, respected, and quietly aware that something has slipped out of true. Your decision-making leans on one faculty more than it should, and the mission you built no longer maps cleanly onto what you personally value. This is a threshold state, not a crisis — but thresholds do not hold indefinitely. Naming the disconnect precisely is what turns drift into direction.",
          }
        : {
            name: "The Depleted Visionary",
            text: "The vision is intact; the vessel is not. Sustained depletion is narrowing your decision-making to reaction, and the distance between your values and your company's daily reality has grown wide enough to cost you energy every single day. This is not a productivity problem and it will not respond to productivity solutions. The first move is restoration, then honest excavation of what you are actually building and for whom.",
          };

  const recommendation =
    score >= 65
      ? {
          icon: BookOpen,
          title: "Shadow Work Integration Workbook",
          text: "You have the capacity to do this work self-directed. A twelve-exercise workbook to surface the inherited patterns still shaping your strategy — designed for eight weeks of solo practice.",
          cta: "Get the workbook",
        }
      : {
          icon: UserRound,
          title: "1-on-1 Executive Consultation",
          text: "Your pattern responds best to held, relational work. A ninety-minute catalyst session to map the terrain, followed by a recommended container — coaching, branding, or a team-level intervention.",
          cta: "Book a catalyst session",
        };

  const dims = [
    { label: "Decision integration", value: Math.round((mindsetScore / 35) * 100) },
    { label: "Energetic capacity", value: Math.round((energyScore / 30) * 100) },
    { label: "Mission alignment", value: Math.round((purposeScore / 35) * 100) },
  ];

  const circumference = 2 * Math.PI * 76;

  return (
    <div className="mx-auto max-w-4xl px-5 pt-16">
      <div className="text-center animate-rise">
        <p className="eyebrow">Your result</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{profile.name}</h1>
      </div>

      <div className="surface-card mt-12 grid gap-10 p-8 hover:translate-y-0 hover:shadow-soft sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
        <div className="mx-auto">
          <svg width="200" height="200" viewBox="0 0 200 200" className="-rotate-90">
            <circle
              cx="100"
              cy="100"
              r="76"
              fill="none"
              stroke="var(--muted)"
              strokeWidth="10"
            />
            <circle
              cx="100"
              cy="100"
              r="76"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              style={{
                animation: "gauge-fill 1600ms cubic-bezier(0.16,1,0.3,1) 200ms forwards",
                // @ts-expect-error custom property
                "--gauge-offset": `${circumference * (1 - score / 100)}`,
              }}
            />
          </svg>
          <style>{`@keyframes gauge-fill { to { stroke-dashoffset: var(--gauge-offset); } }`}</style>
          <div className="-mt-[124px] text-center">
            <p className="font-serif text-5xl">{score}</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
              Alignment index
            </p>
          </div>
          <div className="mt-16" />
        </div>

        <div>
          <p className="text-base leading-relaxed text-muted-foreground">{profile.text}</p>
          <div className="mt-8 space-y-5">
            {dims.map((d, i) => (
              <div key={d.label}>
                <div className="flex justify-between text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{d.label}</span>
                  <span>{d.value}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${d.value}%`, transitionDelay: `${300 + i * 150}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="surface-card mt-6 flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <recommendation.icon className="size-5" />
        </span>
        <div className="flex-1">
          <p className="eyebrow">Recommended next step</p>
          <h2 className="mt-2 text-2xl">{recommendation.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {recommendation.text}
          </p>
        </div>
        <Button asChild variant="gold" size="lg">
          <Link to="/contact">
            {recommendation.cta} <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-8 text-center">
        <Button variant="ghost" onClick={onRestart}>
          <RotateCcw className="size-4" /> Retake the assessment
        </Button>
      </div>
    </div>
  );
}
