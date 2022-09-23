import { it, expect, describe } from "vitest";

import { validateStringNotEmpty } from "./validation.js";
import { validateNumber } from "./validation.js";

// validateStringNotEmpty tests
describe("validateStringNotEmpty()", () => {
  it("should be undefined if string is populated", () => {
    const input = "test";
    const result = validateStringNotEmpty(input);
    expect(result).not.toBeDefined();
  });

  it("should throw expected error when given empty string", () => {
    const input = "    ";
    function resultFn() {
      validateStringNotEmpty(input);
    }
    expect(resultFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should throw an error if any other type besides string is given", () => {
    const inputNum = 1;
    const inputBool = false;
    const inputObj = {};

    function resultFnNum() {
      validateStringNotEmpty(inputNum);
    }
    function resultFnBool() {
      validateStringNotEmpty(inputBool);
    }
    function resultFnObj() {
      validateStringNotEmpty(inputObj);
    }

    expect(resultFnNum).toThrow();
    expect(resultFnBool).toThrow();
    expect(resultFnObj).toThrow();
  });
});

// validateNumber tests
describe("validateNumber()", () => {
  it("should be undefined if given a valid number", () => {
    const input = 29;
    const result = validateNumber(input);
    expect(result).not.toBeDefined();
  });

  it("should throw expected error when given an invalid number", () => {
    const input = "woah";
    function resultFn() {
      validateNumber(input);
    }
    expect(resultFn).toThrow(/Invalid number input./);
  });
});
