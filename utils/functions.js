import { lexer } from "./lexer.js";
import { parser } from "./parser.js";

export const parseJSON = (string) => {
  const tokens = lexer(string);
  const object = parser(tokens);
  return object;
};

export const parseStringify = () => {};
