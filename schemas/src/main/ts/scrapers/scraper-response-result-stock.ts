import { z } from "zod/mini";
import { ScraperResponseResultQuantity } from "./scraper-response-result-quantity.js";
import { ScraperResponseResultDateTime } from "./scraper-response-result-date-time.js";

/**
 * Represents the stock data associated with the result of a scraper.
 *
 * @author lengors
 */
export const ScraperResponseResultStock = z.pipe(
  z
    .readonly(
      z.object({
        availability: ScraperResponseResultQuantity,
        storage: z.optional(
          z.string().register(z.globalRegistry, {
            title: "Result availability storage.",
            description:
              "Storage associated with given availability of scrapped result.",
          }),
        ),
        ["delivering_on"]: z.optional(ScraperResponseResultDateTime),
      }),
    )
    .register(z.globalRegistry, {
      $schema: "http://json-schema.org/draft-07/schema",
      id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-stock.json",
      title: "Scraper response result stock.",
      description: "Stock data associated with result of scraper.",
      javaType:
        "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultStock",
      javaInterfaces: ["java.io.Serializable"],
      additionalProperties: false,
    }),
  z.transform((data) => ({
    availability: data.availability,
    storage: data.storage,
    deliveringOn: data.delivering_on,
  })),
);

export type ScraperResponseResultStock = z.infer<
  typeof ScraperResponseResultStock
>;
