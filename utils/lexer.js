import { JSON_COLON, JSON_LEFTBRACE, JSON_RIGHTBRACE } from "./constants.js";

const JSON_WHITESPACE = [" ", "\t", "\b", "\n", "\r"];
const JSON_SYNTAX = [JSON_LEFTBRACE, JSON_RIGHTBRACE, JSON_COLON];

export const lexer = (string) => {
  let tokens = [];

  while (string) {
    let c = string[0];

    if (JSON_WHITESPACE.includes(c)) {
      string = string.substring(1);
    } else if (JSON_SYNTAX.includes(c)) {
      tokens.push(c);
      string = string.substring(1);
    } else {
      throw new Error(`Unexpected Character: ${c}`);
    }
  }

  return tokens;
};
