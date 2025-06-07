import { z } from "zod/v4-mini";

/**
 * Represents a noise level for the result of a scraper.
 *
 * @author lengors
 */
export const ScraperResponseResultNoiseLevel = z
  .enum(["a", "b", "c"])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-noise-level.json",
    title: "Scraper response result noise level.",
    description: "Noise level for result of scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultNoiseLevel",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperResponseResultNoiseLevel = z.infer<
  typeof ScraperResponseResultNoiseLevel
>;
