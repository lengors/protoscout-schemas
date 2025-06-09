import { z } from "zod/v4-mini";

/**
 * Represents error codes for scraper responses.
 *
 * @author lengors
 */
export const ScraperResponseErrorCode = z
  .enum([
    "specification_not_found",
    "invalid_input",
    "input_missing",
    "compute_input",
    "compute_default_gates",
    "compute_handler",
    "handler_not_found",
    "compute_flat_expression",
    "compute_maps_expression",
    "compute_request",
    "compute_response",
    "compute_return",
  ])
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-response-error-code.json",
    title: "Error code.",
    description: "Code associated with error.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.models.ScraperResponseErrorCode",
    javaInterfaces: ["java.io.Serializable"],
  });

export type ScraperResponseErrorCode = z.infer<typeof ScraperResponseErrorCode>;
