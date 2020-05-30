// export default function addClassName(): string;
export default function addClassName(...args: any[]): string {
	const argLen = args.length;
	let classStr = "";
	for (let i = 0; i < argLen; i++) {
		if (Array.isArray(args[i])) {
			classStr += testFunc(args[i]);
		} else {
			classStr += args[i] + " ";
		}
	}
	return classStr.trim();
}

const testFunc = data => {
	const dataLen = data.length;
	let dataStr = "";
	for (let i = 0; i < dataLen; i++) {
		dataStr += data[i] + " ";
	}
	return dataStr;
};
