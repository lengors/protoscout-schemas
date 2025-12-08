import { z } from "zod/mini";
import { ScraperSpecificationReturn } from "./scraper-specification-return.js";

/**
 * Represents a returning action performed by a scraper specification handler.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnAction = z
  .readonly(
    z.object({
      returns: ScraperSpecificationReturn,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-action.json",
    title: "Scraper specification handler's returning action.",
    description: "Returning action performed by handler.s",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnAction",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationAction",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationReturnAction = z.infer<
  typeof ScraperSpecificationReturnAction
>;
