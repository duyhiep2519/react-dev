import { formatDate } from "../times";

describe("formatDate", () => {
  it("should format date correctly", () => {
    const timestamp = 1609459200000; // 2021-01-01
    expect(formatDate(timestamp)).toBe("01/01/2021");
  });
});
