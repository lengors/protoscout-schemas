import { z } from "zod/mini";
import { ScraperSpecificationJexlExpression } from "./scraper-specification-jexl-specification.js";

/**
 * Represents a flattening of expressions used in a scraper specification.
 *
 * @author lengors
 */
export const ScraperSpecificationFlat = z
  .union([
    ScraperSpecificationJexlExpression,
    z
      .readonly(z.array(ScraperSpecificationJexlExpression))
      .register(z.globalRegistry, {
        title: "Scraper specification handler's flattening expressions.",
        description: "List of flattening expressions to flatten a result.",
      }),
  ])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-flat.json",
    existingJavaType:
      "java.util.List<io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationJexlExpression>",
  });

export type ScraperSpecificationFlat = z.infer<typeof ScraperSpecificationFlat>;
