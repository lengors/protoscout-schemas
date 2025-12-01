import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression";

/**
 * Represents a map of headers to be used by a scraper's web request.
 *
 * @author lengors
 */
export const ScraperSpecificationHeaderMap = z
  .readonly(z.record(z.string(), ScraperSpecificationExpression))
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-header-map.json",
    title: "Scraper web request header map.",
    description: "Header map to be used by scraper's web request.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationHeaderMap",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperSpecificationHeaderMap = z.infer<
  typeof ScraperSpecificationHeaderMap
>;
