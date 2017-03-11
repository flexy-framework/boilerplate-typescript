import Calculator from "../../src/Calculator";

describe("calculator", () => {
    it("calculator sum", () => {
        const calc = new Calculator;
        expect(calc.add(2, 2)).toBe(4);
    });
});


