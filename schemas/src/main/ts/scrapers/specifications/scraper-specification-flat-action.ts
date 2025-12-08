import { z } from "zod/mini";
import { ScraperSpecificationJexlExpression } from "./scraper-specification-jexl-specification.js";

/**
 * Represents an action that flattens the result of a scraper specification.
 *
 * @author lengors
 */
export const ScraperSpecificationFlatAction = z
  .readonly(
    z.object({
      flattens: ScraperSpecificationJexlExpression,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-flat-action.json",
    title: "Scraper specification handler's flatting action.",
    description: "Flatting action performed by handler.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationFlatAction",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationAction",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationFlatAction = z.infer<
  typeof ScraperSpecificationFlatAction
>;
