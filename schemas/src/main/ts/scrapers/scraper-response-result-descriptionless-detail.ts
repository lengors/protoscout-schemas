import { z } from "zod/mini";

/**
 * Represents the detail data associated with a scrapped result without description.
 *
 * @author lengors
 */
export const ScraperResponseResultDescriptionlessDetail = z
  .readonly(
    z.object({
      name: z.string().register(z.globalRegistry, {
        title: "Result detail name.",
        description: "Name of detail data associated with scrapped result.",
      }),
      image: z.string().register(z.globalRegistry, {
        title: "Result detail image.",
        description: "Image of detail data associated with scrapped result.",
      }),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-descriptionless-detail.json",
    title: "Scraper response result descriptionless detail.",
    description:
      "Descriptionless detail data associated with result of scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDescriptionlessDetail",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDetail",
    ],
    additionalProperties: false,
  });

export type ScraperResponseResultDescriptionlessDetail = z.infer<
  typeof ScraperResponseResultDescriptionlessDetail
>;
