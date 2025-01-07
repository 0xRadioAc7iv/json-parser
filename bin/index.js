#!/usr/bin/env node

import { Command } from "commander";
import { parseJSON } from "../utils/functions.js";

const program = new Command();

program
  .name("jp")
  .description("A custom JSON parser and stringifier CLI tool")
  .version("1.0.0")
  .option("-p, --parse <json>", "Parse a JSON string into an object")
  .option("-s, --stringify <object>", "Stringify an object into a JSON string")
  .action((options) => {
    if (options.parse) {
      try {
        const parsedObject = parseJSON(options.parse);
        console.log(parsedObject);
      } catch (error) {
        console.error(error.message);
        process.exit(1);
      }
    }

    if (options.stringify) {
      try {
        const jsonString = stringifyJSON(object);
        console.log(jsonString);
      } catch (error) {
        console.error(error.message);
        process.exit(1);
      }
    }

    if (!options.parse && !options.stringify) {
      console.log("No options provided. Use --help to see available commands.");
    }
  });

program.parse();
