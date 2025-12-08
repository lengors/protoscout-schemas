import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";

/**
 * Represents a payload map to be used by a scraper's web request.
 *
 * @author lengors
 */
export const ScraperSpecificationPayloadMap = z
  .readonly(z.record(z.string(), ScraperSpecificationExpression))
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-payload-map.json",
    title: "Scraper web request payload.",
    description: "Payload to be used by scraper's web request.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationPayloadMap",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperSpecificationPayloadMap = z.infer<
  typeof ScraperSpecificationPayloadMap
>;
