import { z } from "zod/mini";
import { ScraperSpecificationFlat } from "./scraper-specification-flat.js";
import { ScraperSpecificationReturnStockArray } from "./scraper-specification-return-stock-array.js";

export interface ScraperSpecificationReturnFlatStock {
  readonly flattens: ScraperSpecificationFlat;
  readonly extracts: ScraperSpecificationReturnStockArray;
}

/**
 * Represents a stock data specification to be returned by a scraper, including flattening of the stock data.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnFlatStock: z.ZodMiniType<ScraperSpecificationReturnFlatStock> =
  z
    .readonly(
      z.object({
        flattens: ScraperSpecificationFlat,
        extracts: z.lazy(() => ScraperSpecificationReturnStockArray),
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
      additionalProperties: false,
    });
