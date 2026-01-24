import { expect } from "chai";
import { describe, it } from "mocha";
import { ScraperSpecification } from "../../../../main/ts/scrapers/specifications";

describe("ScraperSpecification", () => {
  it("should create a valid minimal ScraperSpecification", () => {
    const result = ScraperSpecification.safeParse({
      name: "test_scraper",
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "UTC",
      },
      handlers: [
        {
          name: "test_handler",
          gates: {
            requires: [],
          },
          action: {
            flattens: {
              jexl: "result_expression",
            },
          },
        },
      ],
    });
    expect(result.success).to.be.eq(true);
  });

  it("should create a valid ScraperSpecification with optional settings", () => {
    const result = ScraperSpecification.safeParse({
      name: "advanced_scraper",
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "America/New_York",
        certificates: ["cert1", "cert2"],
        requirements: [
          {
            name: "api_key",
            description: "API key for authentication",
            type: "text",
          },
        ],
      },
      handlers: [
        {
          name: "main_handler",
          gates: {
            requires: [],
          },
          action: {
            flattens: {
              jexl: "advanced_expression",
            },
          },
        },
      ],
    });
    expect(result.success).to.be.eq(true);
  });

  it("should create a valid ScraperSpecification with stocks property including delivering_on", () => {
    const result = ScraperSpecification.safeParse({
      name: "stocks_scraper",
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "UTC",
      },
      handlers: [
        {
          name: "stocks_handler",
          gates: {
            requires: [],
          },
          action: {
            returns: {
              description: "stock_description_expr",
              brand: {
                description: "brand_description_expr",
                image: "brand_image_expr",
              },
              price: "price_expr",
              image: "image_expr",
              stocks: [
                {
                  // ExtractStock type
                  availability: "availability_expr",
                  storage: "storage_expr",
                  ["delivering_on"]: "delivery_date_expr",
                },
                {
                  // FlatStock type
                  flattens: {
                    jexl: "flatten_stock_expr",
                  },
                  extracts: {
                    flattens: {
                      jexl: "flatten_inner_stock_expr",
                    },
                    extracts: {
                      availability: "extract_availability_expr",
                      storage: "extract_storage_expr",
                      ["delivering_on"]: "extract_delivery_expr",
                    },
                  },
                },
              ],
              grip: "grip_expr",
              noise: "noise_expr",
              decibels: "decibels_expr",
              consumption: "consumption_expr",
              details: [
                {
                  name: "detail_name_expr",
                  description: "detail_description_expr",
                  image: "detail_image_expr",
                },
                {
                  flattens: [
                    {
                      jexl: "flatten_detail_bar_expr",
                    },
                    {
                      jexl: "flatten_detail_foo_expr",
                    },
                  ],
                  extracts: {
                    name: "extract_detail_name_expr",
                    description: "extract_detail_description_expr",
                    image: "extract_detail_image_expr",
                  },
                },
              ],
            },
          },
        },
      ],
    });
    expect(result.success).to.be.eq(true);
  });

  it("should fail when name is missing", () => {
    const result = ScraperSpecification.safeParse({
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "UTC",
      },
      handlers: [],
    });
    expect(result.success).to.be.eq(false);
    expect(
      result.error?.issues.some((issue) => issue.path.includes("name")),
    ).to.be.eq(true);
  });

  it("should fail when name is not a string", () => {
    const result = ScraperSpecification.safeParse({
      name: 123,
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "UTC",
      },
      handlers: [],
    });
    expect(result.success).to.be.eq(false);
    expect(
      result.error?.issues.some(
        (issue) => issue.path.includes("name") && issue.code === "invalid_type",
      ),
    ).to.be.eq(true);
  });

  it("should fail when settings is missing", () => {
    const result = ScraperSpecification.safeParse({
      name: "test_scraper",
      handlers: [],
    });
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues).to.have.length(1);
    expect(result.error?.issues[0]?.code).to.be.eq("invalid_type");
    expect(result.error?.issues[0]?.path).to.deep.eq(["settings"]);
  });

  it("should fail when handlers is missing", () => {
    const result = ScraperSpecification.safeParse({
      name: "test_scraper",
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "UTC",
      },
    });
    expect(result.success).to.be.eq(false);
    expect(
      result.error?.issues.some((issue) => issue.path.includes("handlers")),
    ).to.be.eq(true);
  });

  it("should fail when handlers is not an array", () => {
    const result = ScraperSpecification.safeParse({
      name: "test_scraper",
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "UTC",
      },
      handlers: "not_an_array",
    });
    expect(result.success).to.be.eq(false);
    expect(
      result.error?.issues.some(
        (issue) =>
          issue.path.includes("handlers") && issue.code === "invalid_type",
      ),
    ).to.be.eq(true);
  });

  it("should fail when handler is missing required fields", () => {
    const result = ScraperSpecification.safeParse({
      name: "test_scraper",
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "UTC",
      },
      handlers: [
        {
          // Missing name, gates, and action
        },
      ],
    });
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues.length).to.be.greaterThan(0);
  });

  it("should fail when settings defaults is missing required fields", () => {
    const result = ScraperSpecification.safeParse({
      name: "test_scraper",
      settings: {
        defaults: {
          // Missing required fields
        },
        locale: "en_US",
        timezone: "UTC",
      },
      handlers: [],
    });
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues.length).to.be.greaterThan(0);
  });

  it("should fail when handler action is invalid", () => {
    const result = ScraperSpecification.safeParse({
      name: "test_scraper",
      settings: {
        defaults: {
          url: {
            location: "https://example.com",
          },
          gates: [],
        },
        locale: "en_US",
        timezone: "UTC",
      },
      handlers: [
        {
          name: "test_handler",
          gates: {
            requires: [],
          },
          action: "invalid_action", // Should be object
        },
      ],
    });
    expect(result.success).to.be.eq(false);
    expect(
      result.error?.issues.some((issue) => issue.path.includes("action")),
    ).to.be.eq(true);
  });

  it("should fail with empty object", () => {
    const result = ScraperSpecification.safeParse({});
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues.length).to.be.greaterThan(0);
  });
});
