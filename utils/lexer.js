import { JSON_LEFTBRACE, JSON_RIGHTBRACE } from "./constants.js";

export const lexer = (string) => {
  let tokens = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (i == 0) {
      if (char == JSON_LEFTBRACE) tokens.push(char);
      else {
        throw new Error(`Unexpected character: ${char}`);
      }
    } else {
      if (char == JSON_RIGHTBRACE) tokens.push(char);
    }
  }

  return tokens;
};
