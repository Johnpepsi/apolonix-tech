export type Project = {
  name: string;
  type: string; // e.g. "Local plumbing business"
  summary: string; // the problem and what you built
  result?: string; // optional outcome line
  quote?: { text: string; author: string }; // optional client quote
  url?: string; // live site
  linkLabel?: string; // text for the link, defaults to "Visit site"
  image?: string; // screenshot in /public, e.g. "/work/acme.png"
};

// Add your finished projects here. While this list is empty, the
// "Recent work" section is hidden, so no empty placeholder shows up.
export const projects: Project[] = [
  {
    name: "Halo & Hue Salon",
    type: "Demo project · Booking website",
    summary:
      "A sample hair salon site with a working four-step booking flow: choose a service, pick a stylist, see open times and confirm. Built to show what an online booking system looks like on a laptop and a phone.",
    result: "Fictional salon. Try booking an appointment.",
    url: "/demos/halo-and-hue",
    linkLabel: "Try the live demo",
    image: "/work/halo-and-hue.png",
  },
  {
    name: "Lantern Row Coffee",
    type: "Demo project · Online ordering website",
    summary:
      "A sample neighbourhood coffee shop with order-ahead pickup: customize a drink, build a cart, choose a pickup time and get an order number. Built to show how a small cafe can take orders online.",
    result: "Fictional cafe. Try placing an order.",
    url: "/demos/lantern-row-coffee",
    linkLabel: "Try the live demo",
    image: "/work/lantern-row-coffee.png",
  },
  {
    name: "Ironwood Plumbing & Heating",
    type: "Demo project · Trades business website",
    summary:
      "A sample plumbing and heating company site built to turn visitors into calls and jobs: an emergency guide with safe next steps, a service-area checker, upfront starting prices and a quote request form. Phone-first, with a Call button that stays on screen.",
    result: "Fictional company. Try the emergency guide and the quote form.",
    url: "/demos/ironwood-plumbing-heating",
    linkLabel: "Try the live demo",
    image: "/work/ironwood-plumbing-heating.png",
  },
  {
    name: "Northlight Photography",
    type: "Demo project · Portfolio and booking inquiry website",
    summary:
      "A sample wedding and portrait photographer site: a filterable portfolio with a full-screen viewer, clear packages, a calendar that shows which dates are open and an inquiry form that carries the chosen date. Gallery-first and fast on phones.",
    result: "Fictional studio. Browse the gallery and check a date.",
    url: "/demos/northlight-photography",
    linkLabel: "Try the live demo",
    image: "/work/northlight-photography.png",
  },
];
