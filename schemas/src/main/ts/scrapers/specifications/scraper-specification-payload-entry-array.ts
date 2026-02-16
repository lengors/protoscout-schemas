import { z } from "zod/mini";
import { ScraperSpecificationPayloadEntry } from "./scraper-specification-payload-entry.js";

/**
 * Represents a payload to be used by a scraper's web request.
 *
 * @author lengors
 */
export const ScraperSpecificationPayloadEntryArray = z
  .readonly(z.array(ScraperSpecificationPayloadEntry))
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-payload.json",
    title: "Scraper web request payload.",
    description: "Payload to be used by scraper's web request.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationPayloadEntryArray",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperSpecificationPayloadEntryArray = z.infer<
  typeof ScraperSpecificationPayloadEntryArray
>;
