import { it, expect, describe } from "vitest";

import { add } from "./math.js";

describe("add()", () => {
  it("should summarize all number values in an array", () => {
    const numbers = [1, 2, 3];
    const expectedResult = 6;
    const result = add(numbers);
    expect(result).toBe(expectedResult);
  });

  it("should yield NaN if at least one invalid number is provided", () => {
    const inputs = ["invalid", 1];
    const result = add(inputs);
    expect(result).toBeNaN();
  });

  it("should yield a correct sum if an array ofnumeric string values is provided", () => {
    const numbers = ["1", "2"];
    const result = add(numbers);
    const expectedResult = 3;
    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    function resultFn() {
      add();
    }
    expect(resultFn).toThrow(/is not iterable/);
  });

  it("should throw an error if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;
    function resultFn() {
      add(num1, num2);
    }
    expect(resultFn).toThrow(/is not iterable/);
  });
});
