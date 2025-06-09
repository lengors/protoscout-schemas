import { expect } from "chai";
import { describe, it } from "mocha";
import { ScraperResponse } from "../../../main/ts/scrapers/scraper-response";

describe("ScraperResponse", () => {
  it("should create a valid ScraperResponseError", () => {
    const result = ScraperResponse.safeParse({
      code: "specification_not_found",
      ["specification_name"]: "test_spec",
      ["handler_name"]: "test_handler",
      message: "Error message",
    });
    expect(result.success).to.be.eq(true);
  });

  it("should create a valid ScraperResponseError with minimal required fields", () => {
    const result = ScraperResponse.safeParse({
      code: "invalid_input",
      ["specification_name"]: "test_spec",
    });
    expect(result.success).to.be.eq(true);
  });

  it("should create a valid ScraperResponseResult", () => {
    const result = ScraperResponse.safeParse({
      url: "https://example.com",
      ["specification_name"]: "test_spec",
      description: "Test product description",
      brand: {
        description: "Test Brand",
      },
      price: {
        amount: "99.99",
        unit: "USD",
      },
    });
    expect(result.success).to.be.eq(true);
  });

  it("should create a valid ScraperResponseResult with optional fields", () => {
    const result = ScraperResponse.safeParse({
      url: "https://example.com",
      ["specification_name"]: "test_spec",
      description: "Test product description",
      brand: {
        description: "Test Brand",
        image: "https://example.com/brand.jpg",
      },
      stocks: [
        {
          availability: {
            amount: 10,
            modifier: "exact",
          },
          ["delivering_on"]: {
            value: "2023-10-01T00:00:00Z",
            grain: "day",
          },
        },
      ],
      price: {
        amount: "99.99",
        unit: "USD",
      },
      image: "https://example.com/image.jpg",
      decibels: 40,
    });
    expect(result.success).to.be.eq(true);
  });

  it("should fail with invalid error code", () => {
    const result = ScraperResponse.safeParse({
      code: "invalid_error_code",
      ["specification_name"]: "test_spec",
    });
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues).to.have.length(1);
    expect(result.error?.issues[0]?.code).to.be.eq("invalid_union");
    // Check that the error is related to enum validation in the union
    expect(result.error?.issues[0]?.message).to.include("Invalid input");
  });

  it("should fail when ScraperResponseError is missing required fields", () => {
    const result = ScraperResponse.safeParse({
      code: "specification_not_found",
    });
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues).to.have.length(1);
    expect(result.error?.issues[0]?.code).to.be.eq("invalid_union");
    // Check that the error relates to missing required fields
    expect(result.error?.issues[0]?.message).to.include("Invalid input");
  });

  it("should fail when ScraperResponseResult is missing required fields", () => {
    const result = ScraperResponse.safeParse({
      url: "https://example.com",
      description: "Test product description",
      brand: {
        description: "Test Brand",
      },
      // Missing specification_name and price
    });
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues.length).to.be.greaterThan(0);
  });

  it("should fail with invalid price structure", () => {
    const result = ScraperResponse.safeParse({
      url: "https://example.com",
      ["specification_name"]: "test_spec",
      description: "Test product description",
      brand: {
        description: "Test Brand",
      },
      price: "invalid_price", // Should be object with amount and unit
    });
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues).to.have.length(1);
    expect(result.error?.issues[0]?.code).to.be.eq("invalid_union");
    // Check that the error relates to invalid structure
    expect(result.error?.issues[0]?.message).to.include("Invalid input");
  });

  it("should fail with invalid brand structure", () => {
    const result = ScraperResponse.safeParse({
      url: "https://example.com",
      ["specification_name"]: "test_spec",
      description: "Test product description",
      brand: "invalid_brand", // Should be object with description
      price: {
        amount: "99.99",
        unit: "USD",
      },
    });
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues).to.have.length(1);
    expect(result.error?.issues[0]?.code).to.be.eq("invalid_union");
    // Check that the error relates to invalid structure
    expect(result.error?.issues[0]?.message).to.include("Invalid input");
  });

  it("should fail with empty object", () => {
    const result = ScraperResponse.safeParse({});
    expect(result.success).to.be.eq(false);
    expect(result.error?.issues.length).to.be.greaterThan(0);
  });
});
