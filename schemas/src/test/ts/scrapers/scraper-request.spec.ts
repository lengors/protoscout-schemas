import { expect } from "chai";
import { describe, it } from "mocha";
import { ScraperRequest } from "../../../main/ts/scrapers/scraper-request";

describe("ScraperRequest", () => {
  it("should create a valid ScraperRequest", () => {
    expect(
      ScraperRequest.safeParse({
        ["search_term"]: "test",
        profiles: [
          {
            ["specification_name"]: "test_spec",
            inputs: { key1: "value1", key2: "value2" },
          },
        ],
      }).success,
    ).to.be.eq(true);
  });

  it("should create an invalid ScraperRequest", () => {
    const parsed = ScraperRequest.safeParse({});
    expect(parsed.success).to.be.eq(false);
    expect(parsed.error?.issues).to.have.length(2);
    expect(parsed.error?.issues[0]?.code).to.be.eq("invalid_type");
    expect(parsed.error?.issues[0]?.path).to.deep.eq(["search_term"]);
    expect(parsed.error?.issues[1]?.code).to.be.eq("invalid_type");
    expect(parsed.error?.issues[1]?.path).to.deep.eq(["profiles"]);
  });

  it("should fail when profile has invalid specification_name", () => {
    const parsed = ScraperRequest.safeParse({
      ["search_term"]: "test",
      profiles: [
        {
          ["specification_name"]: 123, // Invalid: should be string
          inputs: { key1: "value1" },
        },
      ],
    });
    expect(parsed.success).to.be.eq(false);
    expect(parsed.error?.issues).to.have.length(1);
    expect(parsed.error?.issues[0]?.code).to.be.eq("invalid_type");
    expect(parsed.error?.issues[0]?.path).to.deep.eq([
      "profiles",
      0,
      "specification_name",
    ]);
  });

  it("should fail when profile is missing specification_name", () => {
    const parsed = ScraperRequest.safeParse({
      ["search_term"]: "test",
      profiles: [
        {
          inputs: { key1: "value1" },
        },
      ],
    });
    expect(parsed.success).to.be.eq(false);
    expect(parsed.error?.issues).to.have.length(1);
    expect(parsed.error?.issues[0]?.code).to.be.eq("invalid_type");
    expect(parsed.error?.issues[0]?.path).to.deep.eq([
      "profiles",
      0,
      "specification_name",
    ]);
  });

  it("should fail when profile has invalid inputs type", () => {
    const parsed = ScraperRequest.safeParse({
      ["search_term"]: "test",
      profiles: [
        {
          ["specification_name"]: "test_spec",
          inputs: "invalid_inputs", // Invalid: should be object
        },
      ],
    });
    expect(parsed.success).to.be.eq(false);
    expect(parsed.error?.issues).to.have.length(1);
    expect(parsed.error?.issues[0]?.code).to.be.eq("invalid_type");
    expect(parsed.error?.issues[0]?.path).to.deep.eq(["profiles", 0, "inputs"]);
  });

  it("should fail when profile inputs contain non-string values", () => {
    const parsed = ScraperRequest.safeParse({
      ["search_term"]: "test",
      profiles: [
        {
          ["specification_name"]: "test_spec",
          inputs: { key1: "value1", key2: 123 }, // Invalid: value should be string
        },
      ],
    });
    expect(parsed.success).to.be.eq(false);
    expect(parsed.error?.issues).to.have.length(1);
    expect(parsed.error?.issues[0]?.code).to.be.eq("invalid_type");
    expect(parsed.error?.issues[0]?.path).to.deep.eq([
      "profiles",
      0,
      "inputs",
      "key2",
    ]);
  });

  it("should fail when profile is missing inputs", () => {
    const parsed = ScraperRequest.safeParse({
      ["search_term"]: "test",
      profiles: [
        {
          ["specification_name"]: "test_spec",
        },
      ],
    });
    expect(parsed.success).to.be.eq(false);
    expect(parsed.error?.issues).to.have.length(1);
    expect(parsed.error?.issues[0]?.code).to.be.eq("invalid_type");
    expect(parsed.error?.issues[0]?.path).to.deep.eq(["profiles", 0, "inputs"]);
  });
});
