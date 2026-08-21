import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Catalyst Session — Contact Vireo" },
      {
        name: "description",
        content:
          "Send an enquiry or reserve a 90-minute catalyst session with the Vireo psychospiritual leadership practice.",
      },
      { property: "og:title", content: "Book a Catalyst Session — Vireo" },
      {
        property: "og:description",
        content: "Reserve a 90-minute catalyst session with our psychospiritual leadership practice.",
      },
    ],
  }),
  component: ContactPage,
});

const slots = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];
const days = [
  { d: "Mon", n: 22 },
  { d: "Tue", n: 23 },
  { d: "Wed", n: 24 },
  { d: "Thu", n: 25 },
  { d: "Fri", n: 26 },
];

function ContactPage() {
  const [day, setDay] = useState(23);
  const [slot, setSlot] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-5 pt-16">
      <div className="max-w-2xl animate-rise">
        <p className="eyebrow">Begin the conversation</p>
        <h1 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">Book a catalyst session</h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Ninety minutes, no pitch. We map where you are, name what is actually in the way, and
          decide together whether deeper work makes sense.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form
          className="surface-card p-8 hover:translate-y-0 hover:shadow-soft sm:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Enquiry received", {
              description: "We reply personally within two working days.",
            });
            (e.target as HTMLFormElement).reset();
          }}
        >
          <h2 className="text-2xl">Send an enquiry</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Amara Osei" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="amara@company.com" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="org">Company / practice</Label>
              <Input id="org" placeholder="Northwind Studio" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="interest">What are you drawn to?</Label>
              <Select defaultValue="coaching">
                <SelectTrigger id="interest">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="coaching">Mindful Leadership Coaching</SelectItem>
                  <SelectItem value="branding">Psychospiritual Branding Strategy</SelectItem>
                  <SelectItem value="wellness">Corporate Wellness Modules</SelectItem>
                  <SelectItem value="unsure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">What is present for you right now?</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="A few honest sentences are enough."
                required
              />
            </div>
          </div>
          <Button type="submit" variant="gold" size="lg" className="mt-8 w-full sm:w-auto">
            Send enquiry <Send className="size-4" />
          </Button>
        </form>

        <div className="space-y-6">
          <div className="surface-card p-8 hover:translate-y-0 hover:shadow-soft sm:p-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Reserve a time</h2>
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                June 2026
              </span>
            </div>
            <div className="mt-7 grid grid-cols-5 gap-2">
              {days.map((x) => (
                <button
                  key={x.n}
                  type="button"
                  onClick={() => setDay(x.n)}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-xl border py-3 transition-all duration-300",
                    day === x.n
                      ? "border-gold bg-gold/12 -translate-y-0.5"
                      : "border-border hover:border-gold/50 hover:-translate-y-0.5",
                  )}
                >
                  <span className="text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {x.d}
                  </span>
                  <span className="font-serif text-xl">{x.n}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {slots.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSlot(s)}
                  className={cn(
                    "rounded-lg border py-2.5 text-sm transition-all duration-300",
                    slot === s
                      ? "border-gold bg-gold/12"
                      : "border-border hover:border-gold/50 hover:bg-muted/60",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            <Button
              className="mt-7 w-full"
              size="lg"
              disabled={!slot}
              onClick={() =>
                toast.success(`Held for June ${day} at ${slot}`, {
                  description: "Confirmation and a short intake note are on the way.",
                })
              }
            >
              {slot ? `Hold June ${day} · ${slot}` : "Select a time"}
              <ArrowRight className="size-4" />
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Sessions run on Central European Time. Rescheduling is always free.
            </p>
          </div>

          <div className="surface-card space-y-4 p-8 hover:translate-y-0 hover:shadow-soft sm:p-10">
            {[
              { icon: Mail, t: "hello@vireo.practice" },
              { icon: MapPin, t: "Lisbon · Copenhagen · Remote worldwide" },
              { icon: Clock, t: "Replies within two working days" },
            ].map((r) => (
              <div key={r.t} className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <r.icon className="size-4" />
                </span>
                {r.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
