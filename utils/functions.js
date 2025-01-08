import { lexer } from "./lexer.js";
import { parser } from "./parser.js";

export const parseJSON = (string) => {
  if (string == "") throw new Error("Unexpected end of JSON input");

  const tokens = lexer(string);
  const object = parser(tokens, true);
  return object;
};

export const parseStringify = () => {};
