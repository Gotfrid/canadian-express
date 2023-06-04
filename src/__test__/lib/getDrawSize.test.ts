import { fixture } from "../fixtures/drawData";
import { getDrawSize } from "../../lib/getDrawSize";

describe("getDrawSize", () => {
  test("should return the draw size", () => {
    const expected = "589";
    expect(getDrawSize(fixture[0])).toEqual(expected);
  });
});
