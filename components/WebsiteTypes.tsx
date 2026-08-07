type WebsiteType = {
  code: string;
  name: string;
  clients: string;
  tech: string;
  examples: string[];
  includes: string[];
  note?: string;
};

const types: WebsiteType[] = [
  {
    code: "T-01",
    name: "Landing page",
    clients: "Startups, campaigns, product launches",
    tech: "HTML / Next.js or WordPress",
    examples: ["Product launch", "Event registration", "Lead generation", "New service"],
    includes: ["Hero section", "Benefits", "Testimonials", "Contact form", "Call-to-action"],
  },
  {
    code: "T-02",
    name: "Business website",
    clients: "Local businesses, consultants, trades",
    tech: "Next.js or WordPress",
    examples: ["Plumbers", "Electricians", "Lawyers", "Dentists", "Restaurants", "Accountants"],
    includes: ["Home", "About", "Services", "Gallery", "Contact"],
    note: "The most common request. If you're not sure what you need, this is usually it.",
  },
  {
    code: "T-03",
    name: "Portfolio website",
    clients: "Photographers, designers, artists",
    tech: "Next.js or WordPress",
    examples: ["Photographers", "Architects", "Interior designers", "Freelancers", "Developers"],
    includes: ["Projects", "About", "Testimonials", "Contact"],
  },
  {
    code: "T-04",
    name: "Blog or news website",
    clients: "Content creators, publishers",
    tech: "WordPress or headless CMS",
    examples: ["Personal blogs", "Industry news", "Company blogs", "Magazines"],
    includes: ["Article publishing", "Categories & tags", "Author profiles", "Comments (optional)"],
    note: "You'll usually want to publish articles yourself, so a CMS matters more here than the design.",
  },
  {
    code: "T-05",
    name: "E-commerce store",
    clients: "Retailers, clothing brands",
    tech: "Shopify, WooCommerce, or custom",
    examples: ["Clothing", "Electronics", "Handmade goods", "Food"],
    includes: ["Shopping cart", "Payments", "Inventory", "Shipping", "Coupons"],
  },
  {
    code: "T-06",
    name: "Booking website",
    clients: "Salons, clinics, restaurants",
    tech: "WordPress or custom",
    examples: ["Hair salons", "Medical clinics", "Auto repair shops", "Tutors", "Consultants"],
    includes: ["Online booking", "Calendar", "Confirmation emails", "Payments (optional)"],
    note: "You're selling appointments, not products — the calendar is the core of the site.",
  },
  {
    code: "T-07",
    name: "Membership or client portal",
    clients: "Gyms, schools, organizations",
    tech: "Custom web app",
    examples: ["Online courses", "Fitness programs", "Customer portals", "Employee dashboards"],
    includes: ["Accounts", "Permissions", "Protected pages", "File downloads"],
    note: "Users log in to reach private content or services, so this needs real authentication.",
  },
  {
    code: "T-08",
    name: "SaaS or custom web app",
    clients: "Startups, businesses",
    tech: "Next.js + backend",
    examples: ["CRM systems", "AI tools", "Project management platforms", "Inventory systems", "Analytics dashboards"],
    includes: ["Authentication", "Databases", "APIs", "Billing", "Dashboards"],
    note: "This is a software product, not a marketing site — expect a longer build and ongoing development.",
  },
  {
    code: "T-09",
    name: "Internal business tool",
    clients: "Companies",
    tech: "Custom web app",
    examples: ["Reporting dashboards", "Operations trackers", "Internal databases", "Workflow tools"],
    includes: ["Accounts", "Role-based access", "Data entry & reporting", "Integrations with existing systems"],
    note: "Built for your team to use, not the public — priorities are reliability and fitting how you already work.",
  },
];

export default function WebsiteTypes() {
  return (
    <section className="border-b border-gridline/25 bg-navy py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="dim-label text-amber">Reference</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          What kind of website do you actually need?
        </h1>
        <p className="mt-4 max-w-2xl text-slate-soft">
          Most client sites fall into one of nine categories. Skim your
          business type below to see who it&apos;s typically for, what it&apos;s
          usually built with, and what it tends to include — then use it to
          talk through the right tier on the{" "}
          <a href="/#pricing" className="text-amber underline decoration-amber/40 underline-offset-4 hover:decoration-amber">
            pricing page
          </a>
          .
        </p>

        <div className="mt-12 border border-gridline/25">
          {types.map((type) => (
            <details
              key={type.code}
              className="group border-b border-gridline/25 last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 hover:bg-blueprint/30">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-amber">{type.code}</span>
                  <span className="font-display text-base font-semibold text-paper">
                    {type.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-soft transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-gridline/25 bg-blueprint/20 px-6 py-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="dim-label text-slate-soft">Typical clients</p>
                    <p className="mt-2 text-sm text-paper/90">{type.clients}</p>
                  </div>
                  <div>
                    <p className="dim-label text-slate-soft">Common tech</p>
                    <p className="mt-2 font-mono text-sm text-amber">{type.tech}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="dim-label text-slate-soft">Examples</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {type.examples.map((example) => (
                      <span
                        key={example}
                        className="border border-gridline/40 px-3 py-1 font-mono text-xs text-paper/90"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="dim-label text-slate-soft">Usually includes</p>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {type.includes.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-paper/90">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-amber" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {type.note && (
                  <p className="mt-6 border-t border-gridline/25 pt-4 text-sm text-slate-soft">
                    {type.note}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
