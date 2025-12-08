import { z } from "zod/mini";
import { ScraperSpecificationDefaults } from "./scraper-specification-defaults.js";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";
import { ScraperSpecificationRequirement } from "./scraper-specification-requirement.js";

/**
 * Represents the settings for a scraper specification.
 *
 * @author lengors
 */
export const ScraperSpecificationSettings = z
  .readonly(
    z.object({
      defaults: ScraperSpecificationDefaults,
      locale: ScraperSpecificationExpression,
      timezone: ScraperSpecificationExpression,
      certificates: z.optional(
        z
          .readonly(
            z.array(
              z.string().register(z.globalRegistry, {
                title: "Scraper's certificate.",
                description: "Certificate for scraper.",
              }),
            ),
          )
          .register(z.globalRegistry, {
            title: "Scraper's certificates.",
            description: "List of certificates to be used by scraper.",
          }),
      ),
      requirements: z.optional(
        z
          .readonly(z.array(ScraperSpecificationRequirement))
          .register(z.globalRegistry, {
            title: "Scraper specification's requirements.",
            description: "List of required custom input for scraper.",
          }),
      ),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-settings.json",
    title: "Scraper specification's settings.",
    description: "Scraper specification settings definition.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationSettings",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationSettings = z.infer<
  typeof ScraperSpecificationSettings
>;
