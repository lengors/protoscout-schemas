import { z } from "zod/mini";

/**
 * Represents a requirement type for a scraper's specification.
 *
 * @author lengors
 */
export const ScraperSpecificationRequirementType = z
  .enum(["text", "password", "email"])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-requirement-type.json",
    title: "Scraper's requirement type.",
    description: "Type of requirement for scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationRequirementType",
  });

export type ScraperSpecificationRequirementType = z.infer<
  typeof ScraperSpecificationRequirementType
>;
