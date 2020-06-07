import { isValidClass } from "util/checkDataType/isValidData";
// export default function addClassName(): string;

export default function addClassName(...args: any[]): string {
	const argLen = args.length;
	let classStr = "";
	for (let i = 0; i < argLen; i++) {
		if (Array.isArray(args[i])) {
			classStr += testFunc(args[i]);
		} else if (isValidClass(args[i])) {
			classStr += args[i] + " ";
		}
	}
	return classStr.trim();
}

const testFunc = data => {
	const dataLen = data.length;
	let dataStr = "";
	for (let i = 0; i < dataLen; i++) {
		if (isValidClass(data[i])) {
			dataStr += data[i] + " ";
		}
	}
	return dataStr;
};
