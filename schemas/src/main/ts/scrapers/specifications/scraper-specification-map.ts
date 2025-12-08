import { z } from "zod/mini";
import { ScraperSpecificationJexlExpression } from "./scraper-specification-jexl-specification.js";

/**
 * Represents a mapping of expressions used in a scraper specification.
 *
 * @author lengors
 */
export const ScraperSpecificationMap = z
  .union([
    ScraperSpecificationJexlExpression,
    z
      .readonly(z.array(ScraperSpecificationJexlExpression))
      .register(z.globalRegistry, {
        title: "Scraper specification handler's mapping expressions.",
        description: "List of mapping expressions to perform and zip together.",
      }),
  ])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-map.json",
    existingJavaType:
      "java.util.List<io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationJexlExpression>",
  });

export type ScraperSpecificationMap = z.infer<typeof ScraperSpecificationMap>;
