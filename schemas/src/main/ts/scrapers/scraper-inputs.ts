import { z } from "zod/mini";

/**
 * Represents a map of scraper inputs.
 *
 * @author lengors
 */
export const ScraperInputs = z
  .readonly(
    z.record(
      z.string(),
      z.string().register(z.globalRegistry, {
        title: "Scraper input value.",
        description: "Value of scraper input.",
      }),
    ),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-inputs.json",
    title: "Scraper inputs.",
    description: "Map of scraper inputs.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperInputs",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperInputs = z.infer<typeof ScraperInputs>;
