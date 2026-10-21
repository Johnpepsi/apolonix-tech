export type Plan = {
  id: "basic" | "wordpress" | "custom";
  tag: string;
  name: string;
  price: string;
  unit: string;
  turnaround: string;
  features: string[];
  highlighted: boolean;
};

// Shown next to prices, e.g. "CAD". Leave empty to hide it.
export const CURRENCY_LABEL = "";

// Listed cheapest to most expensive. Used by Pricing, Estimator and Contact.
export const plans: Plan[] = [
  {
    id: "basic",
    tag: "BASIC",
    name: "Basic Business Website",
    price: "$400",
    unit: "starting price",
    turnaround: "2–4 weeks",
    features: [
      "Contact form",
      "Basic SEO setup",
      "Mobile-responsive design",
      "Forms, SEO & security plugins",
    ],
    highlighted: true,
  },
  {
    id: "wordpress",
    tag: "CMS",
    name: "WordPress Website",
    price: "$700",
    unit: "starting price",
    turnaround: "1–2 weeks",
    features: [
      "Up to 5 pages",
      "Editable page builder",
      "Blog / news section",
      "Custom WordPress theme",
    ],
    highlighted: false,
  },
  {
    id: "custom",
    tag: "CUSTOM",
    name: "Custom-coded Website",
    price: "$2,500",
    unit: "starting price",
    turnaround: "4–8 weeks",
    features: [
      "Custom-coded front end",
      "API / third-party integrations",
      "Custom back end & database",
      "Performance optimization",
    ],
    highlighted: false,
  },
];

// Taken from the process and pricing copy already on the site.
export const includedInEveryPlan = [
  "A fixed quote before any work starts",
  "Mobile-responsive design",
  "A walkthrough of anything you'll manage yourself",
];
