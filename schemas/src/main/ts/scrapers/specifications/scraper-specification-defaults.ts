import { z } from "zod/mini";
import { ScraperSpecificationUrl } from "./scraper-specification-url";
import { ScraperSpecificationHeaderMap } from "./scraper-specification-header-map";
import { ScraperSpecificationExpression } from "./scraper-specification-expression";

/**
 * Represents the default values to inject into the scraper context.
 *
 * @author lengors
 */
export const ScraperSpecificationDefaults = z
  .readonly(
    z.object({
      url: ScraperSpecificationUrl,
      headers: z.optional(ScraperSpecificationHeaderMap),
      gates: z
        .readonly(z.array(ScraperSpecificationExpression))
        .register(z.globalRegistry, {
          title: "Scraper's settings default gates.",
          description: "List of gates initially injected into the scraper.",
        }),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-defaults.json",
    title: "Scraper default values.",
    description: "Default values to inject scraper context with.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationDefaults",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationDefaults = z.infer<
  typeof ScraperSpecificationDefaults
>;
