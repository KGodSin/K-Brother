// string과 number인 경우만 허용
const isValidData = data => {
	const resultStr = isString(data) && isNumber(data) ? true : false;
	return resultStr;
};

const isValidClass = data => {
	const resultStr = isString(data) ? true : false;
	return resultStr;
};

const isString = data => {
	return typeof data === "string";
};

const isNumber = data => {
	return typeof data === "number" && isFinite(data);
};

const isObject = data => {
	let result = false;
	if (typeof data === "object") {
		if (data.constructor !== Array) {
			result = true;
		}
	}
	return result;
};

const isNaN = data => {
	return typeof data === "number" && !isFinite(data);
};

const isArray = data => {
	return Array.isArray(data);
};

const isNull = data => {
	return data + "" === "null";
};

const isUndefined = data => {
	return typeof data === "undefined";
};

export {
	isValidData,
	isString,
	isNumber,
	isObject,
	isNaN,
	isArray,
	isUndefined,
	isNull,
	isValidClass,
};
