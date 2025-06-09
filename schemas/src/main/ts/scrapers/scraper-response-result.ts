import { z } from "zod/v4-mini";
import { ScraperResponseResultBrand } from "./scraper-response-result-brand";
import { ScraperResponseResultPrice } from "./scraper-response-result-price";
import { ScraperResponseResultStock } from "./scraper-response-result-stock";
import { ScraperResponseResultGrading } from "./scraper-response-result-grading";
import { ScraperResponseResultNoiseLevel } from "./scraper-response-result-noise-level";
import { ScraperResponseResultDetail } from "./scraper-response-result-detail";

/**
 * Represents the result of a scraper response.
 *
 * @author lengors
 */
export const ScraperResponseResult = z.pipe(
  z
    .readonly(
      z.object({
        url: z.string().register(z.globalRegistry, {
          title: "Default url.",
          description: "Default url used for scraping result.",
        }),
        ["specification_name"]: z.string().register(z.globalRegistry, {
          title: "Specification's name.",
          description:
            "Specification's name responsible for generating this result.",
        }),
        description: z.string().register(z.globalRegistry, {
          title: "Result description.",
          description: "Description of scrapped result.",
        }),
        brand: ScraperResponseResultBrand,
        price: ScraperResponseResultPrice,
        image: z.optional(
          z.string().register(z.globalRegistry, {
            title: "Result image.",
            description: "Image associated with scrapped result.",
          }),
        ),
        stocks: z.optional(
          z
            .readonly(z.array(ScraperResponseResultStock))
            .register(z.globalRegistry, {
              title: "Result stock data list.",
              description: "Stock data list associated with result.",
            }),
        ),
        grip: z.optional(ScraperResponseResultGrading),
        noise: z.optional(ScraperResponseResultNoiseLevel),
        decibels: z.optional(
          z.int32().register(z.globalRegistry, {
            title: "Result decibels.",
            description: "Decibels value associated with scrapped result.",
          }),
        ),
        consumption: z.optional(ScraperResponseResultGrading),
        details: z.optional(
          z
            .readonly(z.array(ScraperResponseResultDetail))
            .register(z.globalRegistry, {
              title: "Result detail data list.",
              description: "Detail data list associated with result.",
            }),
        ),
      }),
    )
    .register(z.globalRegistry, {
      $schema: "http://json-schema.org/draft-07/schema",
      id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result.json",
      title: "Scraper response result.",
      description: "Response with result of scraper.",
      javaType:
        "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResult",
      javaInterfaces: [
        "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponse",
      ],
      additionalProperties: false,
    }),
  z.transform((data) => ({
    url: data.url,
    specificationName: data.specification_name,
    description: data.description,
    brand: data.brand,
    price: data.price,
    image: data.image,
    stocks: data.stocks,
    grip: data.grip,
    noise: data.noise,
    decibels: data.decibels,
    consumption: data.consumption,
    details: data.details,
  })),
);

export type ScraperResponseResult = z.infer<typeof ScraperResponseResult>;
