import { z } from "zod/mini";

/**
 * Represents a parser for the response of a scraper's request.
 *
 * @author lengors
 */
export const ScraperSpecificationRequestParser = z
  .enum(["auto", "html", "json", "text"])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-request-parser.json",
    title: "Scraper's request response parser.",
    description: "Parser to use to parse request's response.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationRequestParser",
  });

export type ScraperSpecificationRequestParser = z.infer<
  typeof ScraperSpecificationRequestParser
>;
