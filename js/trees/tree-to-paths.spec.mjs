import { describe, expect, it } from "vitest";
import {
  treeToPaths_Functional,
  treeToPaths_Imperative,
  treeToPaths_Original,
} from "./tree-to-paths.mjs";

describe("trees", () => {
  describe("Test Case #01", () => {
    const input = { a: 1, b: { b: 2, c: { d: 3, e: 4 }, f: 5 } };
    const expected = { a: 1, "b-b": 2, "b-c-d": 3, "b-c-e": 4, "b-f": 5 };

    it("#treeToPaths_Functional", () => {
      expect(treeToPaths_Functional(input)).toEqual(expected);
    });

    it("#treeToPaths_Original", () => {
      expect(treeToPaths_Original(input)).toEqual(expected);
    });

    it("#treeToPaths_Imperative", () => {
      expect(treeToPaths_Imperative(input)).toEqual(expected);
    });
  });

  describe("Test Case #02", () => {
    const input = {
      a: 1,
      b: [2, { c: 3, cc: { dd: 1 } }],
      d: { e: 4, f: [5, 6], h: { i: 7, j: 8 } },
    };
    const expected = {
      a: 1,
      b: [2, { c: 3, cc: { dd: 1 } }],
      "d-e": 4,
      "d-f": [5, 6],
      "d-h-i": 7,
      "d-h-j": 8,
    };

    it("#treeToPaths_Functional", () => {
      expect(treeToPaths_Functional(input)).toEqual(expected);
    });

    it("#treeToPaths_Original", () => {
      expect(treeToPaths_Original(input)).toEqual(expected);
    });

    it("#treeToPaths_Imperative", () => {
      expect(treeToPaths_Imperative(input)).toEqual(expected);
    });
  });
});
