export type Project = {
  name: string;
  type: string; // e.g. "Local plumbing business"
  summary: string; // the problem and what you built
  result?: string; // optional outcome line
  quote?: { text: string; author: string }; // optional client quote
  url?: string; // live site
  image?: string; // screenshot in /public, e.g. "/work/acme.png"
};

// Add your finished projects here. While this list is empty, the
// "Recent work" section is hidden, so no empty placeholder shows up.
export const projects: Project[] = [];
