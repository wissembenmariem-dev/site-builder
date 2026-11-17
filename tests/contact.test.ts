import { describe, expect, it } from "vitest";
import { renderContactEmail, validateContact } from "../src/lib/contact";

const valid = { name: "Ada", email: "ada@example.com", company: "Acme", message: "Hello", interests: ["Cloud"] };

describe("validateContact", () => {
  it("accepts a complete payload and trims fields", () => {
    const result = validateContact({ ...valid, name: "  Ada  " });
    expect(result.ok && result.data.name).toBe("Ada");
  });

  it("rejects missing fields, bad emails and oversized input", () => {
    expect(validateContact({ ...valid, company: "" }).ok).toBe(false);
    expect(validateContact({ ...valid, email: "not-an-email" }).ok).toBe(false);
    expect(validateContact({ ...valid, message: "x".repeat(5001) }).ok).toBe(false);
    expect(validateContact(null).ok).toBe(false);
  });

  it("keeps only string interests", () => {
    const result = validateContact({ ...valid, interests: ["Cloud", 42, null] });
    expect(result.ok && result.data.interests).toEqual(["Cloud"]);
  });
});

describe("renderContactEmail", () => {
  it("escapes user input", () => {
    const html = renderContactEmail({ ...valid, message: "<script>alert(1)</script>" });
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
  });
});
