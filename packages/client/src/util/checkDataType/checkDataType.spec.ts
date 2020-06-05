import cs from "./checkDataType";

test("objectData", () => {
	const testVar = {};
	expect(cs(testVar)).toBe("object");
});

test("arrayData", () => {
	const testVar = [];
	expect(cs(testVar)).toBe("array");
});

test("nullData", () => {
	const testVar = null;
	expect(cs(testVar)).toBe("null");
});

test("undefinedData", () => {
	const testVar = undefined;
	expect(cs(testVar)).toBe("undefined");
});

test("NaNData", () => {
	const testVar = NaN;
	expect(cs(testVar)).toBe("NaN");
});

test("stringData", () => {
	const testVar = "dummy";
	expect(cs(testVar)).toBe("string");
});

test("numberData", () => {
	const testVar = 1234;
	expect(cs(testVar)).toBe("number");
});
