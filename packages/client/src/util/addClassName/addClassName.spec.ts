// import "ts-jest";
import cs from "./addClassName";

test("singleString", () => {
	expect(cs("a")).toBe("a");
});

test("doubleString", () => {
	expect(cs("a", "b")).toBe("a b");
});

test("doubleString_oneArray", () => {
	const strArr = ["arr1", "arr2", "arr3"];
	expect(cs("a", "b", strArr)).toBe("a b arr1 arr2 arr3");
	expect(cs("a", strArr, "b")).toBe("a arr1 arr2 arr3 b");
	expect(cs(strArr, "a", "b")).toBe("arr1 arr2 arr3 a b");
});

test("doubleString_oneArray_blank", () => {
	const strArr = ["arr1", "arr2", "arr3"];
	expect(cs("a", "b", strArr, "")).toBe("a b arr1 arr2 arr3");
});

test("oneString_Null", () => {
	expect(cs("a", null)).toBe("a");
});

test("oneString_Undefined", () => {
	expect(cs("a", undefined)).toBe("a");
});

test("oneString_NaN", () => {
	expect(cs("a", NaN)).toBe("a");
});

test("oneArray_null", () => {
	const strArr = ["arr1", "arr2", null];
	expect(cs(strArr)).toBe("arr1 arr2");
});

test("oneArray_undefined", () => {
	const strArr = ["arr1", "arr2", undefined];
	expect(cs(strArr)).toBe("arr1 arr2");
});

test("oneArray_NaN", () => {
	const strArr = ["arr1", "arr2", NaN];
	expect(cs(strArr)).toBe("arr1 arr2");
});
