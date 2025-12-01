import { z } from "zod/mini";

/**
 * Represents the detail data associated with a scrapped result with description.
 *
 * @author lengors
 */
export const ScraperResponseResultDescriptiveDetail = z
  .readonly(
    z.object({
      name: z.string().register(z.globalRegistry, {
        title: "Result detail name.",
        description: "Name of detail data associated with scrapped result.",
      }),
      description: z.string().register(z.globalRegistry, {
        title: "Result detail description.",
        description:
          "Description of detail data associated with scrapped result.",
      }),
      image: z.optional(
        z.string().register(z.globalRegistry, {
          title: "Result detail image.",
          description: "Image of detail data associated with scrapped result.",
        }),
      ),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-descriptive-detail.json",
    title: "Scraper response result descriptive detail.",
    description: "Descriptive detail data associated with result of scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDescriptiveDetail",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDetail",
    ],
    additionalProperties: false,
  });

export type ScraperResponseResultDescriptiveDetail = z.infer<
  typeof ScraperResponseResultDescriptiveDetail
>;
