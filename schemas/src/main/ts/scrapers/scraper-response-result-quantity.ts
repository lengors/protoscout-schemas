import { z } from "zod/v4-mini";
import { ScraperResponseResultQuantityModifier } from "./scraper-response-result-quantity-modifier";

/**
 * Represents a quantity for the result of a scraper.
 *
 * @author lengors
 */
export const ScraperResponseResultQuantity = z
  .readonly(
    z.object({
      amount: z.int32().register(z.globalRegistry, {
        title: "Result quantity amount.",
        description: "Amount for quantity of scrapped result.",
      }),
      modifier: ScraperResponseResultQuantityModifier,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-quantity.json",
    title: "Scraper response result quantity.",
    description: "Quantity for data associated with result of scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultQuantity",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperResponseResultQuantity = z.infer<
  typeof ScraperResponseResultQuantity
>;
