
"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";

const SLIDE_MS = 4500;

const slides = projects.filter((p) => p.image && p.url);

function shortType(type: string) {
  return type.replace("Demo project · ", "");
}

export default function SiteMock() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Respect the user's reduced-motion preference.
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPaused(true);
    }
  }, []);

  const running = !paused && !hovering && slides.length > 1;

  useEffect(() => {
    if (!running) return;

    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);

    return () => clearTimeout(id);
  }, [running, index]);

  if (slides.length === 0) return null;

  const current = slides[index];

  return (
    <div className="mock-in w-full max-w-xl">
      <div
        className="overflow-hidden rounded-2xl border border-edge bg-white shadow-[12px_12px_0_0_rgba(47,91,255,0.16)]"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setHovering(true)}
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(
              event.relatedTarget as Node | null
            )
          ) {
            setHovering(false);
          }
        }}
        role="group"
        aria-roledescription="carousel"
        aria-label="Examples of websites we build"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 border-b border-edge bg-mist px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-edge" />
          <span className="h-2.5 w-2.5 rounded-full bg-edge" />
          <span className="h-2.5 w-2.5 rounded-full bg-edge" />

          <span
            key={current.url}
            className="mock-caption ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-quiet"
          >
            {current.url}
          </span>

          {slides.length > 1 && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="ml-1 flex h-7 w-7 items-center justify-center rounded-md text-quiet transition-colors hover:bg-white hover:text-ink"
            >
              {paused ? (
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  aria-hidden="true"
                >
                  <path
                    d="M0 0l10 6-10 6z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  aria-hidden="true"
                >
                  <path
                    d="M0 0h3.5v12H0zM6.5 0H10v12H6.5z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Website previews */}
        <a
          href={current.url}
          aria-label={`Open the ${current.name} demo`}
          className="relative block aspect-[16/10] overflow-hidden bg-mist"
        >
          {slides.map((slide, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={slide.name}
              src={slide.image}
              alt={
                i === index ? `${slide.name} demo website` : ""
              }
              aria-hidden={i !== index}
              width={1280}
              height={800}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out ${
                i === index
                  ? "scale-100 opacity-100"
                  : "scale-[1.05] opacity-0"
              }`}
            />
          ))}

          {/* Progress bar */}
          {slides.length > 1 && (
            <span
              className="absolute inset-x-0 bottom-0 h-1 bg-black/10"
              aria-hidden="true"
            >
              <span
                key={`${index}-${running}`}
                className={`block h-full origin-left bg-cobalt ${
                  running ? "mock-progress" : "scale-x-0"
                }`}
                style={{ animationDuration: `${SLIDE_MS}ms` }}
              />
            </span>
          )}
        </a>
      </div>

      {/* Current project caption and navigation dots */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div key={current.name} className="mock-caption min-w-0">
          <p className="truncate font-display text-base font-bold text-ink">
            {current.name}
          </p>

          <p className="truncate text-sm text-quiet">
            {shortType(current.type)}
          </p>
        </div>

        {slides.length > 1 && (
          <div
            className="flex flex-none items-center gap-1"
            role="group"
            aria-label="Choose a demo"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${slide.name}`}
                aria-current={i === index ? "true" : undefined}
                className="flex h-8 w-6 items-center justify-center"
              >
                <span
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-cobalt"
                      : "w-2 bg-edge hover:bg-quiet"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
