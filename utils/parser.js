import { JSON_LEFTBRACE, JSON_RIGHTBRACE } from "./constants.js";

export const parser = (tokens, isRoot = false) => {
  let t = tokens[0];

  if (isRoot && t != JSON_LEFTBRACE) throw new Error("Root must be an object");

  if (t == JSON_LEFTBRACE) return parse_object(tokens.slice(1));
  else return { json_object: t, tokens: tokens.slice(1) };
};

const parse_object = (tokens) => {
  let json_object = {};
  let t = tokens[0];

  if (t == JSON_RIGHTBRACE)
    return { json_object: json_object, tokens: tokens.slice(1) };

  throw new Error("Expected end-of-object bracket");
};
