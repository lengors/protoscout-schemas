# Welcome to ProtoScout Schemas &middot; [![GitHub license](https://img.shields.io/github/license/lengors/protoscout-schemas?color=blue)](https://github.com/lengors/protoscout-schemas/blob/main/LICENSE)

Welcome to the **protoscout-schemas** repository! This project provides a centralized collection of JSON schemas that define the communication protocol for interacting with the [WebScout](https://github.com/lengors/webscout) microservice.

## Features

- **Request Schema**: Defines the structure for requests sent to the WebScout microservice.
- **Response Schemas**:
  - **Results Schema**: Specifies the format for successful results emitted by the microservice.
  - **Errors Schema**: Details the structure for error messages.
- **Specification Schema**: Describes the scraping behavior, including parameters, authentication requirements, and how to scrap a particular website.

## Getting Started

This repository is designed to be lightweight and easy to integrate into projects requiring JSON schema validation or protocol definition. Whether you're developing in Java, Python, or another language, **protoscout-schemas** can be used as the foundation for your application's interaction with WebScout.

### Installation

To include **protoscout-schemas** in your project, you can clone this repository or add it as a git submodule:

#### Cloning the Repository

```bash
git clone https://github.com/lengors/protoscout-schemas.git
```

#### Adding as a Git Submodule

```bash
git submodule add https://github.com/lengors/protoscout-schemas.git protoscout-schemas
```

## Usage

After adding the **protoscout-schemas** to your project, you can:

1. **Validate JSON**: Use your preferred JSON schema validation library (e.g., `ajv` for Node.js, `jsonschema` for Python, or Jackson's JSON Schema module for Java) to validate requests, responses, and specifications.
2. **Generate Code**: Use tools like `jsonschema2pojo` or similar to generate strongly typed models in your language of choice.

### Example

In Python:

```python
from jsonschema import validate
import json

# Load a schema
with open('protoscout-schemas/request.json') as schema_file:
    schema = json.load(schema_file)

# Validate a JSON object
request = {"example_key": "example_value"}
validate(instance=request, schema=schema)
```

## Documentation and Resources

Comprehensive documentation and resources are available in the [GitHub Wiki](https://github.com/lengors/protoscout-schemas/wiki).

## Contributing

Contributions are welcome! Please refer to our [Contribution Guidelines](./CONTRIBUTING.md) for more information on how to get involved.

## License

This project is licensed under [Apache License Version 2.0](./LICENSE), which places it in the public domain.
