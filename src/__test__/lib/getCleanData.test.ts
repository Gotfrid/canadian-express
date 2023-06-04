import { getCleanData } from "../../lib/getCleanData";
import { fixture } from "../fixtures/drawData";

describe("getCleanData", () => {
  test("should return an array of objects with the correct properties", () => {
    const expected = [
      {
        date: "2023-05-10",
        name: "Provincial Nominee Program",
        score: "691",
        size: "589",
      },
    ];
    expect(getCleanData(fixture)).toEqual(expected);
  });
});
