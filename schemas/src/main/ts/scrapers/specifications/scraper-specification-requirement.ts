import { z } from "zod/v4-mini";
import { ScraperSpecificationRequirementType } from "./scraper-specification-requirement-type";

/**
 * Represents a requirement for a scraper's specification.
 *
 * @author lengors
 */
export const ScraperSpecificationRequirement = z
  .readonly(
    z.object({
      name: z.string().register(z.globalRegistry, {
        title: "Scraper's requirement name.",
        description: "Name of requirement for scraper.",
      }),
      type: ScraperSpecificationRequirementType,
      default: z.optional(
        z.string().register(z.globalRegistry, {
          title: "Scraper's requirement default value.",
          description:
            "Default value to fill requirement with, if not specified.",
        }),
      ),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-requirement.json",
    title: "Scraper specification's requirement.",
    description: "Required custom input for scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationRequirement",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationRequirement = z.infer<
  typeof ScraperSpecificationRequirement
>;
