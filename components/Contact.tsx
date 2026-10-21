"use client";

import { useEffect, useState, FormEvent } from "react";
import { plans } from "@/lib/plans";

type Status = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
const CONTACT_EMAIL = "palaganasjohnashley@gmail.com";
const isDev = process.env.NODE_ENV !== "production";

const NOT_SURE = "Not sure yet";
const tierOptions = [...plans.map((p) => p.name), NOT_SURE];

type Fields = { name: string; email: string; tier: string; details: string };

const inputClass =
  "rounded-lg border border-edge bg-white px-4 py-3 text-sm text-ink outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [detail, setDetail] = useState("");
  const [lastFields, setLastFields] = useState<Fields | null>(null);
  const [tier, setTier] = useState(NOT_SURE);
  const [details, setDetails] = useState("");

  // Prefill from the estimate wizard or a pricing link: /?tier=...&note=...#contact
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("tier");
    const n = params.get("note");
    if (t && tierOptions.includes(t)) setTier(t);
    if (n) setDetails(n.slice(0, 500));
  }, []);

  function fail(message: string) {
    setDetail(message);
    setStatus("error");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields: Fields = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      tier: String(data.get("tier") ?? ""),
      details: String(data.get("details") ?? ""),
    };
    setLastFields(fields);

    if (!WEB3FORMS_ACCESS_KEY) {
      fail(
        "The access key is missing. Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local (or in your hosting environment variables), then restart or redeploy."
      );
      return;
    }

    setStatus("sending");
    setDetail("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New project inquiry — Apolonix Tech",
          from_name: "Apolonix Tech website",
          ...fields,
        }),
      });

      let result: { success?: boolean; message?: string } = {};
      try {
        result = await response.json();
      } catch {
        // non-JSON response; handled below
      }

      if (response.ok && result.success) {
        setStatus("sent");
        form.reset();
        setTier(NOT_SURE);
        setDetails("");
        setLastFields(null);
      } else {
        fail(
          `Web3Forms rejected the request (HTTP ${response.status}): ${
            result.message ?? "no message returned"
          }`
        );
      }
    } catch (error) {
      fail(
        `The request could not reach Web3Forms. This is usually an ad blocker, a network issue, or a blocked domain. (${
          error instanceof Error ? error.message : "unknown error"
        })`
      );
    }
  }

  const mailtoHref = lastFields
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        "Project inquiry — Apolonix Tech"
      )}&body=${encodeURIComponent(
        `Name: ${lastFields.name}\nEmail: ${lastFields.email}\nTier: ${lastFields.tier}\n\n${lastFields.details}`
      )}`
    : `mailto:${CONTACT_EMAIL}`;

  return (
    <section id="contact" className="bg-mist py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="label text-cobalt">Start a project</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Tell us what your business needs. We&apos;ll scope the rest.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-quiet">
          Send a few details and you&apos;ll get a fixed quote back, not a
          sales call. We reply within one business day.
        </p>

        {BOOKING_URL && (
          <div className="mt-6">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Or book a free 15-minute call ↗
            </a>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 grid max-w-xl gap-4 text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="label text-quiet">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="label text-quiet">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className={inputClass}
                placeholder="you@business.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="tier" className="label text-quiet">
              Which option fits best?
            </label>
            <select
              id="tier"
              name="tier"
              value={tier}
              onChange={(e) => setTier(e.target.value)}
              className={inputClass}
            >
              {tierOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="details" className="label text-quiet">
              What do you need? <span className="font-normal">(optional)</span>
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className={inputClass}
              placeholder="What does your business do, and what should the site help you accomplish?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary mt-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send project details"}
          </button>

          {status === "sent" && (
            <p className="text-sm font-medium text-cobalt" role="status">
              Sent. We&apos;ll reply within one business day.
            </p>
          )}
          {status === "error" && (
            <div className="space-y-2 text-sm" role="alert">
              <p className="font-medium text-red-600">
                We couldn&apos;t send that just now. Your message is still in the
                form.{" "}
                <a
                  href={mailtoHref}
                  className="underline underline-offset-4 hover:text-ink"
                >
                  Email it to us instead
                </a>
                .
              </p>
              {isDev && detail && (
                <p className="rounded-lg border border-edge bg-white p-3 font-normal text-quiet">
                  Developer note: {detail}
                </p>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
