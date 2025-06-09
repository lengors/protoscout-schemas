import path from "path";
import fs from "fs/promises";

import { z } from "zod/v4-mini";

import "@lengors/protoscout-schemas/scrapers";
import "@lengors/protoscout-schemas/scrapers/specifications";

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const jsonSchema = z.toJSONSchema(z.globalRegistry, {
    target: "draft-7",
    unrepresentable: "any",
    io: "input",
    uri: (id) => path.basename(id),
    override: (ctx) => {
      if (
        ctx.jsonSchema.allOf !== undefined &&
        ctx.jsonSchema.allOf.length === 1 &&
        ctx.jsonSchema.allOf[0]?.$ref !== undefined
      ) {
        // If there's only one allOf and it references another schema, we can simplify it
        ctx.jsonSchema.$ref = ctx.jsonSchema.allOf[0].$ref;
        ctx.jsonSchema.allOf = undefined;
      }
    },
  });

  const basePath = path.join(__dirname, "..", "..", "..", "dist");
  await fs.rm(basePath, { recursive: true, force: true });

  await Promise.allSettled(
    Object.entries(jsonSchema.schemas).map(async ([key, value]) => {
      const relativeDir = path.dirname(key);
      const fileName = path.basename(key);
      const fileLocation = path.join(basePath, relativeDir);
      const filePath = path.join(fileLocation, fileName);
      const jsonContent = JSON.stringify(value, null, 2);
      if (dryRun) {
        console.log(`Would write to: ${filePath}`);
      } else {
        await fs.mkdir(fileLocation, { recursive: true });
        await fs.writeFile(filePath, jsonContent, "utf-8");
      }
    }),
  );
}

void main();
