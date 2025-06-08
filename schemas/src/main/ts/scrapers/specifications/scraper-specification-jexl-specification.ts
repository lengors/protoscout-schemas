import { z } from "zod/v4-mini";

/**
 * Represents an expression used in a scraper specification, typically written in JEXL (Java Expression Language).
 *
 * @author lengors
 */
export const ScraperSpecificationJexlExpression = z
  .readonly(
    z.object({
      jexl: z.string().register(z.globalRegistry, {
        title: "Scraper's jexl expression.",
        description: "A jexl expression used for some property of scraper.",
      }),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-jexl-expression.json",
    title: "Scraper specification JEXL expression.",
    description: "JEXL expression to compute value for scraper property.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationJexlExpression",
    javaInterfaces: [
      "java.io.Serializable",
      "io.github.lengors.protoscout.domain.jexl.models.JexlExpressionSpecification",
    ],
    additionalProperties: false,
  });

export type ScraperSpecificationJexlExpression = z.infer<
  typeof ScraperSpecificationJexlExpression
>;
