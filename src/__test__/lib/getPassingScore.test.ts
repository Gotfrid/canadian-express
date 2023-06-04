import { fixture } from "../fixtures/drawData";
import { getPassingScore } from "../../lib/getPassingScore";

describe("getPassingScore", () => {
  test("should return the passing score", () => {
    const expected = "691";
    expect(getPassingScore(fixture[0])).toEqual(expected);
  });
});
