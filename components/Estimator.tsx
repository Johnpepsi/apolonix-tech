"use client";

import { useState } from "react";
import { plans, CURRENCY_LABEL, type Plan } from "@/lib/plans";

type Option = { value: string; label: string; hint?: string };
type Question = { id: "business" | "goal" | "timeline"; title: string; options: Option[] };

const questions: Question[] = [
  {
    id: "business",
    title: "What best describes your business?",
    options: [
      { value: "service", label: "Trades or local service", hint: "Plumber, electrician, accountant, lawyer" },
      { value: "shop", label: "Shop or retail", hint: "You sell products to customers" },
      { value: "appointments", label: "Appointment-based", hint: "Salon, clinic, tutor, repair shop" },
      { value: "creative", label: "Creative or portfolio", hint: "Photographer, designer, freelancer" },
      { value: "software", label: "Software or internal tools", hint: "Custom app, portal or dashboard" },
    ],
  },
  {
    id: "goal",
    title: "What should the website do first?",
    options: [
      { value: "found", label: "Help people find and contact me" },
      { value: "edit", label: "Let me update content myself" },
      { value: "book", label: "Take bookings online" },
      { value: "sell", label: "Sell products online" },
      { value: "build", label: "Run a custom tool or app" },
    ],
  },
  {
    id: "timeline",
    title: "When would you like to launch?",
    options: [
      { value: "asap", label: "As soon as possible" },
      { value: "soon", label: "Within 1–2 months" },
      { value: "later", label: "Just exploring for now" },
    ],
  },
];

type Answers = Partial<Record<Question["id"], string>>;

function labelFor(id: Question["id"], value?: string) {
  return questions.find((q) => q.id === id)?.options.find((o) => o.value === value)?.label ?? "";
}

function recommend(a: Answers): { plan: Plan; reason: string; note?: string } {
  const byId = (id: Plan["id"]) => plans.find((p) => p.id === id)!;

  if (a.goal === "build" || a.business === "software") {
    return {
      plan: byId("custom"),
      reason:
        "Features like accounts, dashboards or integrations need a purpose-built site rather than a template.",
    };
  }
  if (
    a.goal === "edit" ||
    a.goal === "book" ||
    a.goal === "sell" ||
    a.business === "shop" ||
    a.business === "appointments"
  ) {
    const extras = a.goal === "book" || a.goal === "sell" || a.business === "shop";
    return {
      plan: byId("wordpress"),
      reason:
        "WordPress lets you edit pages and publish updates yourself, and it can grow to handle products or bookings.",
      note: extras
        ? "Online stores and booking systems go beyond the starting price. We'll scope them in your fixed quote."
        : undefined,
    };
  }
  return {
    plan: byId("basic"),
    reason:
      "A clean, fast site that gets you found and gets customers contacting you, without paying for features you won't use.",
  };
}

export default function Estimator() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);

  const done = step >= questions.length;
  const question = questions[step];

  function choose(value: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  const result = done ? recommend(answers) : null;
  const prefillNote = result
    ? `Estimate answers: ${labelFor("business", answers.business)}; first goal: ${labelFor(
        "goal",
        answers.goal
      )}; launch: ${labelFor("timeline", answers.timeline)}. Recommended: ${result.plan.name}.`
    : "";
  const quoteHref = result
    ? `/?tier=${encodeURIComponent(result.plan.name)}&note=${encodeURIComponent(prefillNote)}#contact`
    : "#contact";

  return (
    <section id="estimate" className="border-b border-edge bg-mist py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="label text-cobalt">Find your fit</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Get an instant estimate in 3 questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-quiet">
            No sign-up. Answer three quick questions and see which kind of
            website fits your business and what it typically costs.
          </p>
        </div>

        <div className="panel mt-10 p-6 sm:p-8" aria-live="polite">
          {!done && question && (
            <>
              <div className="flex items-center justify-between">
                <p className="label text-quiet">
                  Step {step + 1} of {questions.length}
                </p>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="text-sm font-semibold text-cobalt hover:text-ink"
                  >
                    ← Back
                  </button>
                )}
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-mist">
                <div
                  className="h-1.5 rounded-full bg-cobalt transition-all"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {question.title}
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {question.options.map((option) => {
                  const selected = answers[question.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => choose(option.value)}
                      className={`rounded-xl border p-4 text-left transition-colors hover:border-cobalt ${
                        selected ? "border-cobalt bg-cobalt/5" : "border-edge bg-white"
                      }`}
                    >
                      <span className="block text-sm font-semibold text-ink">
                        {option.label}
                      </span>
                      {option.hint && (
                        <span className="mt-1 block text-sm text-quiet">{option.hint}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {result && (
            <div>
              <p className="label text-cobalt">Your best fit</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                {result.plan.name}
              </h3>
              <p className="mt-3 text-quiet">{result.reason}</p>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-4xl font-bold text-ink">
                  from {result.plan.price}
                </span>
                {CURRENCY_LABEL && (
                  <span className="text-sm text-quiet">{CURRENCY_LABEL}</span>
                )}
                <span className="text-sm text-quiet">
                  · typical turnaround {result.plan.turnaround}
                </span>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-ink/90 sm:grid-cols-2">
                {result.plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {result.note && (
                <p className="mt-5 rounded-lg bg-mist p-3 text-sm text-quiet">{result.note}</p>
              )}
              <p className="mt-5 text-sm text-quiet">
                This is a starting price. Your fixed quote comes after a short
                scoping call.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={quoteHref} className="btn-primary">
                  Get my fixed quote
                </a>
                <button type="button" onClick={reset} className="btn-secondary">
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
