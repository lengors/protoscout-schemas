import { z } from "zod/v4-mini";
import { ScraperResponseError } from "./scraper-response-error";
import { ScraperResponseResult } from "./scraper-response-result";

/**
 * Represents the response from a scraper, which can either be an error or a successful result.
 *
 * @author lengors
 */
export const ScraperResponse = z
  .union([ScraperResponseError, ScraperResponseResult])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response.json",
    existingJavaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponse",
  });

export type ScraperResponse = z.infer<typeof ScraperResponse>;
