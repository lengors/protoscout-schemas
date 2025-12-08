import { z } from "zod/mini";
import { ScraperResponseResultDescriptionlessDetail } from "./scraper-response-result-descriptionless-detail.js";
import { ScraperResponseResultDescriptiveDetail } from "./scraper-response-result-descriptive-detail.js";

/**
 * Represents the detail data associated with a scrapped result.
 *
 * @author lengors
 */
export const ScraperResponseResultDetail = z
  .union([
    ScraperResponseResultDescriptionlessDetail,
    ScraperResponseResultDescriptiveDetail,
  ])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-result-detail.json",
    existingJavaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseResultDetail",
  });

export type ScraperResponseResultDetail = z.infer<
  typeof ScraperResponseResultDetail
>;
