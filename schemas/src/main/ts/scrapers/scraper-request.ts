import { z } from "zod/mini";
import { ScraperProfile } from "./scraper-profile";

/**
 * Represents a request to scrapers for a specific search term.
 *
 * @author lengors
 */
export const ScraperRequest = z.pipe(
  z
    .readonly(
      z.object({
        ["search_term"]: z.string().register(z.globalRegistry, {
          title: "Search term.",
          description: "Search term for request.",
        }),
        profiles: z
          .readonly(z.array(ScraperProfile))
          .register(z.globalRegistry, {
            title: "Scraper profiles.",
            description: "List of scraper profiles.",
          }),
      }),
    )
    .register(z.globalRegistry, {
      $schema: "http://json-schema.org/draft-07/schema",
      id: "io/github/lengors/protoscout/domain/scrapers/models/scraper-request.json",
      title: "Scraper request.",
      description: "Request to scrapers for search term.",
      javaType:
        "io.github.lengors.protoscout.domain.scrapers.models.ScraperRequest",
      javaInterfaces: ["java.io.Serializable"],
      additionalProperties: false,
    }),
  z.transform((data) => ({
    searchTerm: data.search_term,
    profiles: data.profiles,
  })),
);

export type ScraperRequest = z.infer<typeof ScraperRequest>;
