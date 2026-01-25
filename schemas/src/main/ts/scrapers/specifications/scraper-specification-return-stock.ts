import { z } from "zod/mini";
import { ScraperSpecificationReturnExtractStock } from "./scraper-specification-return-extract-stock.js";
import { ScraperSpecificationReturnFlatStock } from "./scraper-specification-return-flat-stock.js";

export type ScraperSpecificationReturnStock =
  | ScraperSpecificationReturnExtractStock
  | ScraperSpecificationReturnFlatStock;

/**
 * Represents a stock data specification to be returned by a scraper.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnStock: z.ZodMiniType<ScraperSpecificationReturnStock> =
  z
    .union([
      ScraperSpecificationReturnExtractStock,
      ScraperSpecificationReturnFlatStock,
    ])
    .register(z.globalRegistry, {
      $schema: "http://json-schema.org/draft-07/schema",
      id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-stock.json",
      existingJavaType:
        "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnStock",
    });
