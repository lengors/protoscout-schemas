import { z } from "zod/mini";
import { ScraperSpecificationReturnDetail } from "./scraper-specification-return-detail.js";

export const ScraperSpecificationReturnDetailArray = z
  .readonly(z.array(ScraperSpecificationReturnDetail))
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-detail-array.json",
    title: "Scraper return detail data list.",
    description: "List of detail data to be returned by scraper.",
    existingJavaType:
      "java.util.List<io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnDetail>",
  });

export type ScraperSpecificationReturnDetailArray = z.infer<
  typeof ScraperSpecificationReturnDetailArray
>;
