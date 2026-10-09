"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New project inquiry — Apolonix Tech");
    formData.append("from_name", "Apolonix Tech website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-mist py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="label text-cobalt">Start a project</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Tell us what your business needs. We&apos;ll scope the rest.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-quiet">
          Share a few details about your business and which tier looks like
          the right fit. You&apos;ll get a fixed quote back, not a sales call.
        </p>

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
                className="rounded-lg border border-edge bg-white px-4 py-3 text-sm text-ink outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20"
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
                className="rounded-lg border border-edge bg-white px-4 py-3 text-sm text-ink outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20"
                placeholder="you@business.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="tier" className="label text-quiet">
              Which tier fits best?
            </label>
            <select
              id="tier"
              name="tier"
              className="rounded-lg border border-edge bg-white px-4 py-3 text-sm text-ink outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20"
              defaultValue="Not sure yet"
            >
              <option>Basic business website</option>
              <option>CMS - WordPress Website</option>
              <option>SaaS Web Application</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="details" className="label text-quiet">
              Project details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              required
              className="rounded-lg border border-edge bg-white px-4 py-3 text-sm text-ink outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20"
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
            <p className="label text-cobalt" role="status">
              Sent. We&apos;ll reply within one business day.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600" role="alert">
              Something went wrong — please email us directly at{" "}
              palaganasjohnashley@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
