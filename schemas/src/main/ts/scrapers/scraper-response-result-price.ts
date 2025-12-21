import { z } from "zod/mini";

/**
 * Represents the price for data associated with a scrapped result.
 *
 * @author lengors
 */
export const ScraperResponseResultPrice = z
  .readonly(
    z.object({
      amount: z.number().register(z.globalRegistry, {
        title: "Price amount.",
        description:
          "Numerical amount for price associated with scrapped result.",
      }),
      unit: z.string().register(z.globalRegistry, {
        title: "Price unit.",
        description: "Currency unit of price associated with scrapped result.",
      }),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-price.json",
    title: "Scraper response result price.",
    description: "Price for data associated with result of scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultPrice",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperResponseResultPrice = z.infer<
  typeof ScraperResponseResultPrice
>;
