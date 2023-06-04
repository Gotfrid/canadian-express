import { fixture } from "../__test__/fixtures/drawData";
import { getCleanData } from "./getCleanData";

describe("getCleanData", () => {
  test("should return an array of objects with the correct properties", () => {
    const data = fixture;
    const expected = [
      {
        date: "2023-05-10",
        name: "Provincial Nominee Program",
        score: "691",
        size: "589",
      },
    ];
    expect(getCleanData(data)).toEqual(expected);
  });
});
