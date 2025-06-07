import { z } from "zod/v4-mini";
import { ScraperInputs } from "./scraper-inputs";

/**
 * Represents a scraper profile that associates a scraper's specification name with its inputs.
 *
 * @author lengors
 */
export const ScraperProfile = z.pipe(
  z
    .readonly(
      z.object({
        ["specification_name"]: z.string().register(z.globalRegistry, {
          title: "Scraper name.",
          description: "Name of scraper associated with inputs.",
        }),
        inputs: ScraperInputs,
      }),
    )
    .register(z.globalRegistry, {
      $schema: "http://json-schema.org/draft-07/schema",
      id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-profile.json",
      title: "Scraper profile.",
      description:
        "Association between scraper's specification name and map of inputs for request.",
      javaType:
        "io.github.lengors.protoscout.domain.scrapers.models.ScraperProfile",
      javaInterfaces: ["java.io.Serializable"],
      additionalProperties: false,
    }),
  z.transform((data) => ({
    specificationName: data.specification_name,
    inputs: data.inputs,
  })),
);

export type ScraperProfile = z.infer<typeof ScraperProfile>;
