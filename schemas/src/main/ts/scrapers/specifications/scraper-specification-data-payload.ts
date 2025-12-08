import { z } from "zod/mini";
import { ScraperSpecificationPayloadMap } from "./scraper-specification-payload-map.js";

/**
 * Represents a data payload to be used by scraper's web request.
 *
 * @author lengors
 */
export const ScraperSpecificationDataPayload = z
  .readonly(
    z.object({
      data: ScraperSpecificationPayloadMap,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-data-payload.json",
    title: "Scraper web request data payload.",
    description: "Data payload to be used by scraper's web request.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationDataPayload",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationPayload",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationDataPayload = z.infer<
  typeof ScraperSpecificationDataPayload
>;
