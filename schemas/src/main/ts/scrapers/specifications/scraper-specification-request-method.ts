import { z } from "zod/mini";

/**
 * Represents a request HTTP method used by a scraper.
 *
 * @author lengors
 */
export const ScraperSpecificationRequestMethod = z
  .enum(["get", "head", "post", "put", "delete", "patch"])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-request-method.json",
    title: "Scraper's request HTTP method.",
    description: "HTTP method used for scraper's request.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationRequestMethod",
  });

export type ScraperSpecificationRequestMethod = z.infer<
  typeof ScraperSpecificationRequestMethod
>;
