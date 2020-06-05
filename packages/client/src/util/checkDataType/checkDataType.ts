import {
	isString,
	isNumber,
	isObject,
	isNaN,
	isArray,
	isUndefined,
	isNull,
} from "util/checkDataType/isValidData";

export default function(data) {
	const resultStr = isString(data)
		? "string"
		: isNumber(data)
		? "number"
		: isNaN(data)
		? "NaN"
		: isUndefined(data)
		? "undefined"
		: isNull(data)
		? "null"
		: isObject(data)
		? "object"
		: isArray(data)
		? "array"
		: "";
	return resultStr;
}
