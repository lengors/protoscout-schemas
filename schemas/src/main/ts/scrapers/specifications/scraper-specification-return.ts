import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";
import { ScraperSpecificationReturnBrand } from "./scraper-specification-return-brand.js";
import { ScraperSpecificationReturnDetail } from "./scraper-specification-return-detail.js";
import { ScraperSpecificationReturnStockArray } from "./scraper-specification-return-stock-array.js";

/**
 * Represents a return data specification to be returned by a scraper.
 *
 * @author lengors
 */
export const ScraperSpecificationReturn = z
  .readonly(
    z.object({
      description: ScraperSpecificationExpression,
      brand: ScraperSpecificationReturnBrand,
      price: ScraperSpecificationExpression,
      image: z.optional(ScraperSpecificationExpression),
      stocks: z.optional(ScraperSpecificationReturnStockArray),
      grip: z.optional(ScraperSpecificationExpression),
      noise: z.optional(ScraperSpecificationExpression),
      decibels: z.optional(ScraperSpecificationExpression),
      consumption: z.optional(ScraperSpecificationExpression),
      details: z.optional(
        z
          .readonly(z.array(ScraperSpecificationReturnDetail))
          .register(z.globalRegistry, {
            title: "Scraper return detail data list.",
            description: "List of detail data to be returned by scraper.",
          }),
      ),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return.json",
    title: "Scraper return data.",
    description: "Data to be returned by scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturn",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationReturn = z.infer<
  typeof ScraperSpecificationReturn
>;
