import { z } from "zod/mini";
import { ScraperSpecificationPayloadEntryArray } from "./scraper-specification-payload-entry-array.js";

/**
 * Represents a json payload to be used by scraper's web request.
 *
 * @author lengors
 */
export const ScraperSpecificationJsonPayload = z
  .readonly(
    z.object({
      json: ScraperSpecificationPayloadEntryArray,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-json-payload.json",
    title: "Scraper web request JSON payload.",
    description: "JSON payload to be used by scraper's web request.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationJsonPayload",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationPayload",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationJsonPayload = z.infer<
  typeof ScraperSpecificationJsonPayload
>;
