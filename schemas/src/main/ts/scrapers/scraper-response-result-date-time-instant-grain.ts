import { z } from "zod/mini";

/**
 * Represents the instant granularity of the delivery date-time associated with a scrapped result.
 *
 * @author lengors
 */
export const ScraperResponseResultDateTimeInstantGrain = z
  .enum(["second", "minute", "hour", "day", "week", "month", "quarter", "year"])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-date-time-instant-grain.json",
    title: "Result date-time instant granularity.",
    description:
      "Granularity of date-time instant associated with scrapped result.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDateTimeInstantGrain",
  });

export type ScraperResponseResultDateTimeInstantGrain = z.infer<
  typeof ScraperResponseResultDateTimeInstantGrain
>;
