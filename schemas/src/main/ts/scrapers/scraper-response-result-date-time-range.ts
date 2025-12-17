import { z } from "zod/mini";
import { ScraperResponseResultDateTimeInstant } from "./scraper-response-result-date-time-instant.js";

/**
 * Represents the range of the delivery date-time associated with a scrapped result.
 *
 * @author lengors
 */
export const ScraperResponseResultDateTimeRange = z
  .readonly(
    z.object({
      from: ScraperResponseResultDateTimeInstant,
      to: ScraperResponseResultDateTimeInstant,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-date-time-range.json",
    title: "Result date-time range.",
    description: "Date-time range associated with scrapped result.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDateTimeRange",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDateTime",
    ],
    additionalProperties: false,
  });

export type ScraperResponseResultDateTimeRange = z.infer<
  typeof ScraperResponseResultDateTimeRange
>;
