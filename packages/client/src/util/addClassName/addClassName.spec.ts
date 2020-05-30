// import "ts-jest";
import cs from "./addClassName";

test("addClassName", () => {
	expect(cs("a", "b")).toBe("a b");
});
