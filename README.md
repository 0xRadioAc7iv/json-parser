# JSON Parser/Stringifier CLI Tool

A custom JSON parser and stringifier command-line tool.

## Installation

Clone the repo:

    git clone https://github.com/0xRadioAc7iv/json-parser.git

Install the tool globally using npm:

    npm install -g json-parser

## Usage

Run the CLI tool with the following commands:

#### 1\. Parse JSON String

    jp -p '{"key": "value"}'

Output:

    {
        key: "value"
    }

#### 2\. Stringify JavaScript Object

    jp -s "{ key: 'value' }"

Output:

    {"key":"value"}

### 3\. Help

    jp --help

Displays all available commands and usage instructions.

## Examples

Convert a nested JSON string:

    jp -p '{"person": {"name": "John", "age": 30}}'

Stringify a complex object:

    jp -s "{ person: { name: 'John', age: 30 } }"
