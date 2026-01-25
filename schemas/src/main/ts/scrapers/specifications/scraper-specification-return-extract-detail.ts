import { z } from "zod/mini";
import { ScraperSpecificationReturnDescriptiveDetail } from "./scraper-specification-return-descriptive-detail.js";
import { ScraperSpecificationReturnDescriptionlessDetail } from "./scraper-specification-return-descriptionless-detail.js";

/**
 * Represents a detail data specification to be returned by a scraper, including extraction of the detail data.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnExtractDetail = z
  .union([
    ScraperSpecificationReturnDescriptiveDetail,
    ScraperSpecificationReturnDescriptionlessDetail,
  ])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-extract-detail.json",
    existingJavaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnExtractDetail",
  });

export type ScraperSpecificationReturnExtractDetail = z.infer<
  typeof ScraperSpecificationReturnExtractDetail
>;
