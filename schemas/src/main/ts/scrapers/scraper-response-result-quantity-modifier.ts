import { z } from "zod/v4-mini";

/**
 * Represents a quantity modifier for the result of a scraper.
 *
 * @author lengors
 */
export const ScraperResponseResultQuantityModifier = z
  .enum(["exact", "at_least", "at_most"])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-quantity-modifier.json",
    title: "Result quantity modifier.",
    description: "Specifies some modification for how to interpret quantity.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultQuantityModifier",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperResponseResultQuantityModifier = z.infer<
  typeof ScraperResponseResultQuantityModifier
>;
