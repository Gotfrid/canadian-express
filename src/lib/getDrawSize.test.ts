import { fixture } from "../__test__/fixtures/drawData";
import { getDrawSize } from "./getDrawSize";

describe("getDrawSize", () => {
  test("should return the draw size", () => {
    const expected = "589";
    expect(getDrawSize(fixture[0])).toEqual(expected);
  });
});
