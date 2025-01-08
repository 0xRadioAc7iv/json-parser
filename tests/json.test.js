import { parseJSON } from "../utils/functions.js";

describe("Parse JSON", () => {
  test("should throw error when passed an empty string", () => {
    expect(() => parseJSON("")).toThrow("Unexpected end of JSON input");
  });

  test("should successfully parse the string '{}'", () => {
    const { json_object } = parseJSON("{}");
    expect(json_object).toEqual({});
  });
});
