export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  interests: string[];
  message: string;
  website?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, company: 160, phone: 40, message: 5000 };

export function validateContact(input: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object") return { ok: false, error: "Invalid payload" };
  const raw = input as Record<string, unknown>;
  const text = (key: keyof typeof LIMITS) => (typeof raw[key] === "string" ? (raw[key] as string).trim() : "");

  const data: ContactPayload = {
    name: text("name"),
    email: text("email"),
    company: text("company"),
    phone: text("phone") || undefined,
    message: text("message"),
    interests: Array.isArray(raw.interests) ? raw.interests.filter((i): i is string => typeof i === "string").slice(0, 20) : [],
    website: typeof raw.website === "string" ? raw.website : undefined,
  };

  for (const [key, max] of Object.entries(LIMITS)) {
    const value = data[key as keyof typeof LIMITS] ?? "";
    if (value.length > max) return { ok: false, error: `${key} is too long` };
  }
  if (!data.name || !data.company || !data.message) return { ok: false, error: "Missing required fields" };
  if (!EMAIL.test(data.email)) return { ok: false, error: "Invalid email" };
  return { ok: true, data };
}

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

export function renderContactEmail(data: ContactPayload): string {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["Phone", data.phone ?? ""],
    ["Interests", data.interests.join(", ")],
  ];
  const table = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td>${escape(v)}</td></tr>`)
    .join("");
  return `<table>${table}</table><p style="white-space:pre-wrap">${escape(data.message)}</p>`;
}
