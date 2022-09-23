import { it, expect, describe } from "vitest";

import { transformToNumber } from "./numbers.js";

describe("transformToNumber()", () => {
  it("should return a number if a number is passed", () => {
    const input = 4;
    const result = transformToNumber(input);
    expect(result).toBeTypeOf("number");
  });

  it("should return a number if a string number is passed", () => {
    const input = "4";
    const result = transformToNumber(input);
    expect(result).toBeTypeOf("number");
  });

  it("should return NaN for non transformable values", () => {
    const input = "hey";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});
