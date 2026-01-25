import { z } from "zod/mini";
import { ScraperSpecificationReturnStock } from "./scraper-specification-return-stock.js";

export const ScraperSpecificationReturnStockArray = z
  .readonly(z.array(ScraperSpecificationReturnStock))
  .register(z.globalRegistry, {
    $schema: "http://json-schema.org/draft-07/schema",
    id: "io/github/lengors/protoscout/domain/scrapers/specifications/models/scraper-specification-return-stock-array.json",
    title: "Scraper return stock data list.",
    description: "List of stock data to be returned by scraper.",
    existingJavaType:
      "java.util.List<io.github.lengors.protoscout.domain.scrapers.specifications.models.ScraperSpecificationReturnStock>",
  });

export type ScraperSpecificationReturnStockArray = z.infer<
  typeof ScraperSpecificationReturnStockArray
>;
