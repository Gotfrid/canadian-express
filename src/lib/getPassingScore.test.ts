import { fixture } from "../__test__/fixtures/drawData";
import { getPassingScore } from "./getPassingScore";

describe("getPassingScore", () => {
  test("should return the passing score", () => {
    const expected = "691";
    expect(getPassingScore(fixture[0])).toEqual(expected);
  });
});
