import { z } from "zod/v4-mini";
import { ScraperResponseResultDateTimeInstant } from "./scraper-response-result-date-time-instant";
import { ScraperResponseResultDateTimeRange } from "./scraper-response-result-date-time-range";

/**
 * Represents the delivery date-time associated with a scrapped result.
 *
 * @author lengors
 */
export const ScraperResponseResultDateTime = z
  .union([
    ScraperResponseResultDateTimeInstant,
    ScraperResponseResultDateTimeRange,
  ])
  .register(z.globalRegistry, {
    existingJavaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDateTime",
  });

export type ScraperResponseResultDateTime = z.infer<
  typeof ScraperResponseResultDateTime
>;
