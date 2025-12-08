import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";

/**
 * Represents a parameter for a scraper's URL.
 *
 * @author lengors
 */
export const ScraperSpecificationUrlParameter = z
  .readonly(
    z.object({
      name: ScraperSpecificationExpression,
      value: ScraperSpecificationExpression,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-url-parameter.json",
    title: "Scraper's url parameter.",
    description: "Parameter for scraper's url.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationUrlParameter",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationUrlParameter = z.infer<
  typeof ScraperSpecificationUrlParameter
>;
