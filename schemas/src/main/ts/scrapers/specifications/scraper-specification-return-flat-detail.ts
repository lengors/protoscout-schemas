import { z } from "zod/mini";
import { ScraperSpecificationFlat } from "./scraper-specification-flat.js";
import { ScraperSpecificationReturnDetailArray } from "./scraper-specification-return-detail-array.js";

export interface ScraperSpecificationReturnFlatDetail {
  readonly flattens: ScraperSpecificationFlat;
  readonly extracts: ScraperSpecificationReturnDetailArray;
}

/**
 * Represents a detail data specification to be returned by a scraper, including flattening of the detail data.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnFlatDetail: z.ZodMiniType<ScraperSpecificationReturnFlatDetail> =
  z
    .readonly(
      z.object({
        flattens: ScraperSpecificationFlat,
        extracts: z.lazy(() => ScraperSpecificationReturnDetailArray),
      }),
    )
    .register(z.globalRegistry, {
      $schema: "http://json-schema.org/draft-07/schema",
      id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-flat-detail.json",
      title: "Scraper return detail flatting data.",
      description:
        "Flat detail data from expression that's to be returned by scraper.",
      javaType:
        "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnFlatDetail",
      javaInterfaces: [
        "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnDetail",
      ],
      additionalProperties: false,
    });
