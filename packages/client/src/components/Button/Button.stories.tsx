import * as React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { ColorProps } from "classes/styles";
import Button from "./Button";

export default {
	title: "Button", // 스토리북에서 보여질 그룹과 경로를 명시
	component: Button, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
};

export const button = () => {
	const variant = select("variant", ["square", "rounded"], "square");
	const color = select("color", ["primary", "secondary", "symbol"], "symbol");
	const size = select("size", ["small", "medium", "large"], "medium");
	const buttonText = text("buttonText", "GET STARTED");
	return (
		<Button variant={variant} color={color} size={size}>
			{buttonText}
		</Button>
	);
};
