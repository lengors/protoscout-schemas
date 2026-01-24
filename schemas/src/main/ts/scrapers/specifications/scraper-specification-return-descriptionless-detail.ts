import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";

/**
 * Represents a detail data specification to be returned by a scraper without description.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnDescriptionlessDetail = z
  .readonly(
    z.object({
      name: ScraperSpecificationExpression,
      image: ScraperSpecificationExpression,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-descriptionless-detail.json",
    title: "Scraper return descriptionless detail data.",
    description: "Descriptionless detail data to be returned by scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnDescriptionlessDetail",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnExtractDetail",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationReturnDescriptionlessDetail = z.infer<
  typeof ScraperSpecificationReturnDescriptionlessDetail
>;
