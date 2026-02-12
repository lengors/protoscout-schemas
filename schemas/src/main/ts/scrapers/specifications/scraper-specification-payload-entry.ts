import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";

/**
 * Represents a payload entry to be used by a scraper's web request.
 *
 * @author lengors
 */
export const ScraperSpecificationPayloadEntry = z
  .readonly(
    z.object({
      name: ScraperSpecificationExpression,
      value: ScraperSpecificationExpression,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-payload-entry.json",
    title: "Scraper web request payload entry.",
    description: "Payload entry to be used by scraper's web request.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationPayloadEntry",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperSpecificationPayloadEntry = z.infer<
  typeof ScraperSpecificationPayloadEntry
>;
