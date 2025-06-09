import { z } from "zod/v4-mini";

/**
 * Represents a grading for the result of a scraper.
 *
 * @author lengors
 */
export const ScraperResponseResultGrading = z
  .enum(["a", "b", "c", "d", "e"])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-grading.json",
    title: "Scraper response result grading.",
    description: "Grading for result of scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultGrading",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperResponseResultGrading = z.infer<
  typeof ScraperResponseResultGrading
>;
