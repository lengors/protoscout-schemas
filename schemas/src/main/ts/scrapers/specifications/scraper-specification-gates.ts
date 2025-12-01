import { z } from "zod/mini";
import { ScraperSpecificationExpression } from "./scraper-specification-expression";

/**
 * Represents the gates for a scraper specification handler.
 *
 * @author lengors
 */
export const ScraperSpecificationGates = z
  .readonly(
    z.object({
      opens: z.optional(
        z
          .readonly(z.array(ScraperSpecificationExpression))
          .register(z.globalRegistry, {
            title: "Scraper's opening gates.",
            description: "List of gates to open when the handler is applied.",
          }),
      ),
      closes: z.optional(
        z
          .readonly(z.array(ScraperSpecificationExpression))
          .register(z.globalRegistry, {
            title: "Scraper's closing gates.",
            description: "List of gates to close when the handler is applied.",
          }),
      ),
      requires: z
        .readonly(z.array(ScraperSpecificationExpression))
        .register(z.globalRegistry, {
          title: "Scraper's required gates.",
          description: "List of gates required for handler to be applicable.",
        }),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-gates.json",
    title: "Scraper's gates.",
    description: "Gate operations for handler.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationGates",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationGates = z.infer<
  typeof ScraperSpecificationGates
>;
