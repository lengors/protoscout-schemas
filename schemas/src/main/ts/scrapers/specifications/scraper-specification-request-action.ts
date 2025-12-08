import { z } from "zod/mini";
import { ScraperSpecificationMap } from "./scraper-specification-map.js";
import { ScraperSpecificationRequest } from "./scraper-specification-request.js";

/**
 * Represents a web request action to be used by scraper's handler.
 *
 * @author lengors
 */
export const ScraperSpecificationRequestAction = z
  .readonly(
    z.object({
      requests: ScraperSpecificationRequest,
      maps: z.optional(ScraperSpecificationMap),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-request-action.json",
    title: "Scraper specification handler's request action.",
    description: "Web request action performed by handler.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationRequestAction",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationAction",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationRequestAction = z.infer<
  typeof ScraperSpecificationRequestAction
>;
