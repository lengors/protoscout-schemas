import { z } from "zod/mini";
import { ScraperResponseErrorCode } from "./scraper-response-error-code";

/**
 * Represents a response with error data associated with a failure in scraper.
 *
 * @author lengors
 */
export const ScraperResponseError = z
  .readonly(
    z.object({
      code: ScraperResponseErrorCode,
      ["specification_name"]: z.string().register(z.globalRegistry, {
        title: "Specification's name.",
        description: "Name of scraper specification that caused the error.",
      }),
      ["handler_name"]: z.optional(
        z.string().register(z.globalRegistry, {
          title: "Handler name.",
          description: "Name of scraper handler that caused the error.",
        }),
      ),
      message: z.optional(
        z.string().register(z.globalRegistry, {
          title: "Error message.",
          description: "Message associated with error.",
        }),
      ),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-error.json",
    title: "Scraper response error.",
    description:
      "Response with error data associated with a failure in scraper.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseError",
    javaInterfaces: [
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponse",
    ],
    additionalProperties: false,
  });

export type ScraperResponseError = z.infer<typeof ScraperResponseError>;
