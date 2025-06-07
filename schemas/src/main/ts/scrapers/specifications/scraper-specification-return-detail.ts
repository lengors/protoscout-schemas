import { z } from "zod/v4-mini";
import { ScraperSpecificationReturnDescriptiveDetail } from "./scraper-specification-return-descriptive-detail";
import { ScraperSpecificationReturnDescriptionlessDetail } from "./scraper-specification-return-descriptionless-detail";

/**
 * Represents a detail data specification to be returned by a scraper.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnDetail = z
  .union([
    ScraperSpecificationReturnDescriptiveDetail,
    ScraperSpecificationReturnDescriptionlessDetail,
  ])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-detail.json",
    existingJavaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnDetail",
  });

export type ScraperSpecificationReturnDetail = z.infer<
  typeof ScraperSpecificationReturnDetail
>;
