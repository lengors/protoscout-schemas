import { z } from "zod/v4-mini";
import { ScraperSpecificationJexlExpression } from "./scraper-specification-jexl-specification";
import { ScraperSpecificationGates } from "./scraper-specification-gates";
import { ScraperSpecificationFlatAction } from "./scraper-specification-flat-action";
import { ScraperSpecificationMapAction } from "./scraper-specification-map-action";
import { ScraperSpecificationRequestAction } from "./scraper-specification-request-action";
import { ScraperSpecificationReturnAction } from "./scraper-specification-return-action";

/**
 * Represents a handler used by scraper for handling current context.
 *
 * @author lengors
 */
export const ScraperSpecificationHandler = z
  .readonly(
    z.object({
      name: z.string().register(z.globalRegistry, {
        title: "Scraper's handler's name.",
        description: "Name of scraper's handler.",
      }),
      matches: z.optional(ScraperSpecificationJexlExpression),
      gates: ScraperSpecificationGates,
      action: z
        .union([
          ScraperSpecificationFlatAction,
          ScraperSpecificationMapAction,
          ScraperSpecificationRequestAction,
          ScraperSpecificationReturnAction,
        ])
        .register(z.globalRegistry, {
          existingJavaType:
            "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationAction",
        }),
    }),
  )
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-handler.json",
    title: "Scraper specification handler.",
    description: "Handler used by scraper for handling current context.",
    javaType:
      "io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationHandler",
    javaInterfaces: ["java.io.Serializable"],
    additionalProperties: false,
  });

export type ScraperSpecificationHandler = z.infer<
  typeof ScraperSpecificationHandler
>;
