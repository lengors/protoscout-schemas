import { z } from "zod/mini";

/**
 * Represents the brand data associated with a scrapped result.
 *
 * @author lengors
 */
export const ScraperResponseResultBrand = z
  .readonly(
    z.object({
      description: z.string().register(z.globalRegistry, {
        title: "Brand description.",
        description: "Description for brand associated with scrapped result.",
      }),
      image: z.optional(
        z.string().register(z.globalRegistry, {
          title: "Brand image.",
          description: "Image of brand associated with scrapped result.",
        }),
      ),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-brand.json",
    title: "Scraper response result brand.",
    description: "Brand data associated with result of scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultBrand",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperResponseResultBrand = z.infer<
  typeof ScraperResponseResultBrand
>;
