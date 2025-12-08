import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";

/**
 * Represents a brand data specification to be returned by a scraper.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnBrand = z
  .readonly(
    z.object({
      description: ScraperSpecificationExpression,
      image: z.optional(ScraperSpecificationExpression),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-brand.json",
    title: "Scraper return brand data.",
    description: "Brand data to be returned by scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnBrand",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationReturnBrand = z.infer<
  typeof ScraperSpecificationReturnBrand
>;
