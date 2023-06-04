import { fixture } from "../__test__/fixtures/drawData";
import { getLastSampleDate } from "./getLastSampleDate";

describe("getLastSampleDate", () => {
  test("simple distribution", () => {
    const expected = "10 May 23";
    expect(getLastSampleDate(fixture)).toEqual(expected);
  });
});
