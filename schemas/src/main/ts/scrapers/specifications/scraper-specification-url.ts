import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression.js";
import { ScraperSpecificationUrlParameter } from "./scraper-specification-url-parameter.js";

/**
 * Represents a URL specification for a scraper.
 *
 * @author lengors
 */
export const ScraperSpecificationUrl = z
  .readonly(
    z.object({
      location: z.optional(ScraperSpecificationExpression),
      scheme: z.optional(ScraperSpecificationExpression),
      host: z.optional(ScraperSpecificationExpression),
      path: z.optional(ScraperSpecificationExpression),
      parameters: z.optional(
        z
          .readonly(z.array(ScraperSpecificationUrlParameter))
          .register(z.globalRegistry, {
            title: "Scraper's url parameter array.",
            description: "Parameter array for scraper's url.",
          }),
      ),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-url.json",
    title: "Scraper url specification.",
    description: "Url specification for scraper default url and request url.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationUrl",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationUrl = z.infer<typeof ScraperSpecificationUrl>;
