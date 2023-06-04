import { fixture } from "../fixtures/drawData";
import { getLastSampleDate } from "../../lib/getLastSampleDate";

describe("getLastSampleDate", () => {
  test("simple distribution", () => {
    const expected = "10 May 23";
    expect(getLastSampleDate(fixture)).toEqual(expected);
  });
});
