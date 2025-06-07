import { z } from "zod/v4-mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression";
import { ScraperSpecificationReturnExtractStock } from "./scraper-specification-return-extract-stock";

/**
 * Represents a stock data specification to be returned by a scraper, including flattening of the stock data.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnFlatStock = z
  .readonly(
    z.object({
      flattens: ScraperSpecificationExpression,
      extracts: ScraperSpecificationReturnExtractStock,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-flat-stock.json",
    title: "Scraper return stock flatting data.",
    description:
      "Flat stock data from expression that's to be returned by scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnFlatStock",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnStock",
    ],
  });

export type ScraperSpecificationReturnFlatStock = z.infer<
  typeof ScraperSpecificationReturnFlatStock
>;
