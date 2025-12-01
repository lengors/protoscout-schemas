import { z } from "zod/mini";
import { ScraperResponseResultDateTimeInstantGrain } from "./scraper-response-result-date-time-instant-grain";

/**
 * Represents the instant of the delivery date-time associated with a scrapped result.
 *
 * @author lengors
 */
export const ScraperResponseResultDateTimeInstant = z
  .readonly(
    z.object({
      value: z.iso.datetime().register(z.globalRegistry, {
        title: "Result date-time instant value.",
        description:
          "Value of date-time instant associated with scrapped result.",
      }),
      grain: ScraperResponseResultDateTimeInstantGrain,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-date-time-instant.json",
    title: "Result date-time instant.",
    description: "Date-time instant associated with scrapped result.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDateTimeInstant",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDateTime",
    ],
    additionalProperties: false,
  });

export type ScraperResponseResultDateTimeInstant = z.infer<
  typeof ScraperResponseResultDateTimeInstant
>;
