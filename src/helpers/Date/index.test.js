import { getMonth } from "../../helpers/Date";

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("should return janvier for 2022-01-01 as date", () => {
      const date = new Date("2022-01-01");
      const month = getMonth(date);
      expect(month).toBe("janvier");
    });
    it("should return juillet for 2022-07-08 as date", () => {
      const date = new Date("2022-07-08");
      const month = getMonth(date);
      expect(month).toBe("juillet");
    });
  });
});
