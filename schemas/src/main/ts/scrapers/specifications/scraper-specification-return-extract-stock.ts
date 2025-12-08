import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";

/**
 * Represents a stock data specification to be returned by a scraper.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnExtractStock = z.pipe(
  z
    .readonly(
      z.object({
        availability: ScraperSpecificationExpression,
        storage: z.optional(ScraperSpecificationExpression),
        ["delivering_on"]: z.optional(ScraperSpecificationExpression),
      }),
    )
    .register(z.globalRegistry, {
      $schema: "http://json-schema.org/draft-07/schema",
      id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-extract-stock.json",
      title: "Scraper return stock extract data.",
      description: "Extract stock data to be returned by scraper.",
      javaType:
        "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnExtractStock",
      javaInterfaces: [
        "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnStock",
      ],
      additionalProperties: false,
    }),
  z.transform((data) => ({
    availability: data.availability,
    storage: data.storage,
    deliveringOn: data.delivering_on,
  })),
);

export type ScraperSpecificationReturnExtractStock = z.infer<
  typeof ScraperSpecificationReturnExtractStock
>;
