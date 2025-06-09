import { z } from "zod/v4-mini";
import { ScraperSpecificationSettings } from "./scraper-specification-settings";
import { ScraperSpecificationHandler } from "./scraper-specification-handler";

/**
 * Represents a scraper specification that defines how a scraper should behave.
 *
 * @author lengors
 */
export const ScraperSpecification = z
  .readonly(
    z.object({
      name: z.string().register(z.globalRegistry, {
        title: "Scraper's specification name.",
        description: "Name of scraper specification.",
      }),
      settings: ScraperSpecificationSettings,
      handlers: z
        .readonly(z.array(ScraperSpecificationHandler))
        .register(z.globalRegistry, {
          title: "Scraper's handlers specification.",
          description: "List of scraper's handlers specification.",
        }),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification.json",
    title: "Scraper specification.",
    description: "Scraper specification definition.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecification",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecification = z.infer<typeof ScraperSpecification>;
