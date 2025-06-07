import { z } from "zod/v4-mini";
import { ScraperSpecificationJexlExpression } from "./scraper-specification-jexl-specification";

/**
 * Represents an expression to be used by scraper's computable properties.
 *
 * @author lengors
 */
export const ScraperSpecificationExpression = z
  .union([
    z.string().register(z.globalRegistry, {
      title: "Scraper's expression value.",
      description: "Expression value to use on scraper computable properties.",
    }),
    ScraperSpecificationJexlExpression,
  ])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-expression.json",
    existingJavaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationJexlExpression",
  });

export type ScraperSpecificationExpression = z.infer<
  typeof ScraperSpecificationExpression
>;
