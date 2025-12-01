import { z } from "zod/mini";
import { ScraperSpecificationMap } from "./scraper-specification-map";

/**
 * Represents a mapping action performed by a scraper specification handler.
 *
 * @author lengors
 */
export const ScraperSpecificationMapAction = z
  .readonly(
    z.object({
      maps: ScraperSpecificationMap,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-map-action.json",
    title: "Scraper specification handler's mapping action.",
    description: "Mapping action performed by handler.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationMapAction",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationAction",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationMapAction = z.infer<
  typeof ScraperSpecificationMapAction
>;
