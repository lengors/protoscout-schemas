import { z } from "zod/v4-mini";
import { ScraperSpecificationUrl } from "./scraper-specification-url";
import { ScraperSpecificationRequestMethod } from "./scraper-specification-request-method";
import { ScraperSpecificationHeaderMap } from "./scraper-specification-header-map";
import { ScraperSpecificationDataPayload } from "./scraper-specification-data-payload";
import { ScraperSpecificationJsonPayload } from "./scraper-specification-json-payload";
import { ScraperSpecificationRequestParser } from "./scraper-specification-request-parser";

/**
 * Represents a web request specification to be used by scraper's handler.
 *
 * @author lengors
 */
export const ScraperSpecificationRequest = z
  .readonly(
    z.object({
      url: ScraperSpecificationUrl,
      method: ScraperSpecificationRequestMethod,
      headers: z.optional(ScraperSpecificationHeaderMap),
      payload: z.optional(
        z
          .union([
            ScraperSpecificationDataPayload,
            ScraperSpecificationJsonPayload,
          ])
          .register(z.globalRegistry, {
            existingJavaType:
              "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationPayload",
          }),
      ),
      parser: ScraperSpecificationRequestParser,
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-request.json",
    title: "Scraper web request specification.",
    description: "Definition for performing web request by scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationRequest",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationRequest = z.infer<
  typeof ScraperSpecificationRequest
>;
