# Welcome to ProtoScout Schemas &middot; [![GitHub license](https://img.shields.io/github/license/lengors/protoscout-schemas?color=blue)](https://github.com/lengors/protoscout-schemas/blob/main/LICENSE)

Welcome to the **protoscout-schemas** repository! This project provides a centralized collection of schemas that define the communication protocol for interacting with the [WebScout](https://github.com/lengors/webscout) microservice.

## Features

- **TypeScript Zod Schemas**: Type-safe schema definitions using [Zod](https://zod.dev/) located in the `schemas` workspace
- **JSON Schema Generation**: Automatically generates JSON schemas from Zod schemas and publishes them to the `schemas` branch
- **Request Schema**: Defines the structure for requests sent to the WebScout microservice
- **Response Schemas**:
  - **Results Schema**: Specifies the format for successful results emitted by the microservice
  - **Errors Schema**: Details the structure for error messages
- **Specification Schema**: Describes the scraping behavior, including parameters, authentication requirements, and how to scrape a particular website

## Architecture

This project uses a two-branch architecture:

- **`main` branch**: Contains the source code with Zod schema definitions in TypeScript
- **`schemas` branch**: Contains the generated JSON schemas, automatically updated via CI/CD

The schemas are defined as Zod schemas in the `schemas/src/main/ts/scrapers` directory. The `generator` workspace contains a build script that converts these Zod schemas into JSON schemas (Draft 7 format) and outputs them to the `schemas` branch during the CI/CD pipeline.

## Getting Started

### For TypeScript/JavaScript Projects

Install the package from npm:

```bash
npm install @lengors/protoscout-schemas
```

The package exports Zod schemas that you can use directly:

```typescript
import { ScraperRequest } from "@lengors/protoscout-schemas/scrapers";
import { ScraperSpecification } from "@lengors/protoscout-schemas/scrapers/specifications";

// Use the schemas for validation
const validatedRequest = ScraperRequest.parse(requestData);
```

### For Other Languages (JSON Schemas)

To use the generated JSON schemas in other languages (Java, Python, etc.), you can clone the `schemas` branch or add it as a git submodule:

#### Cloning the Schemas Branch

```bash
git clone -b schemas https://github.com/lengors/protoscout-schemas.git
```

#### Adding as a Git Submodule

```bash
git submodule add -b schemas https://github.com/lengors/protoscout-schemas.git protoscout-schemas
```

## Usage

### TypeScript/JavaScript

Use the Zod schemas directly for runtime validation and type inference:

```typescript
import {
  ScraperRequest,
  ScraperResponse,
} from "@lengors/protoscout-schemas/scrapers";

// Parse and validate data
const request = ScraperRequest.parse({
  search_term: "example",
  profiles: [
    /* ... */
  ],
});

// TypeScript will infer the correct types
type RequestType = z.infer<typeof ScraperRequest>;
```

### Other Languages (Using JSON Schemas)

After cloning the `schemas` branch, you can:

1. **Validate JSON**: Use your preferred JSON schema validation library (e.g., `ajv` for Node.js, `jsonschema` for Python, or Jackson's JSON Schema module for Java)
2. **Generate Code**: Use tools like `jsonschema2pojo` or similar to generate strongly typed models

#### Example in Python

```python
from jsonschema import validate
import json

# Load a schema from the schemas branch
with open('protoscout-schemas/src/io/github/lengors/protoscout/domain/scrapers/models/scraper-request.json') as schema_file:
    schema = json.load(schema_file)

# Validate a JSON object
request = {
    "search_term": "example",
    "profiles": []
}
validate(instance=request, schema=schema)
```

## Development

This project is organized as an npm workspace with two packages:

- **`schemas`**: Contains the Zod schema definitions and exports them as an npm package
- **`generator`**: Contains the build script that generates JSON schemas from Zod schemas

### Building

To build all workspaces:

```bash
npm install
npm run build --workspaces
```

The `schemas` workspace compiles TypeScript to JavaScript, while the `generator` workspace generates JSON schemas and outputs them to `generator/dist`.

## Documentation and Resources

Comprehensive documentation and resources are available in the [GitHub Wiki](https://github.com/lengors/protoscout-schemas/wiki).

## Contributing

Contributions are welcome! Please refer to our [Contribution Guidelines](./CONTRIBUTING.md) for more information on how to get involved.

## License

This project is licensed under [Apache License Version 2.0](./LICENSE), which places it in the public domain.
