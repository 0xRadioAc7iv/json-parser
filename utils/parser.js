import { JSON_LEFTBRACE, JSON_RIGHTBRACE } from "./constants.js";

export const parser = (tokens) => {
  let json_object = {};

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token == JSON_LEFTBRACE || token == JSON_RIGHTBRACE) continue;
  }

  return json_object;
};
