import { z } from "zod/mini";
import { ScraperSpecificationReturnExtractDetail } from "./scraper-specification-return-extract-detail.js";
import { ScraperSpecificationReturnFlatDetail } from "./scraper-specification-return-flat-detail.js";

export type ScraperSpecificationReturnDetail =
  | ScraperSpecificationReturnExtractDetail
  | ScraperSpecificationReturnFlatDetail;

/**
 * Represents a detail data specification to be returned by a scraper.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnDetail: z.ZodMiniType<ScraperSpecificationReturnDetail> =
  z
    .union([
      ScraperSpecificationReturnExtractDetail,
      ScraperSpecificationReturnFlatDetail,
    ])
    .register(z.globalRegistry, {
      $schema: "http://json-schema.org/draft-07/schema",
      id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-detail.json",
      existingJavaType:
        "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnDetail",
    });
