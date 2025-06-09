import { z } from "zod/v4-mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression";

/**
 * Represents a detail data specification to be returned by a scraper with description.
 *
 * @author lengors
 */
export const ScraperSpecificationReturnDescriptiveDetail = z
  .readonly(
    z.object({
      name: ScraperSpecificationExpression,
      description: ScraperSpecificationExpression,
      image: z.optional(ScraperSpecificationExpression),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-descriptive-detail.json",
    title: "Scraper return descriptive detail data.",
    description: "Descriptive detail data to be returned by scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnDescriptiveDetail",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnDetail",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationReturnDescriptiveDetail = z.infer<
  typeof ScraperSpecificationReturnDescriptiveDetail
>;
