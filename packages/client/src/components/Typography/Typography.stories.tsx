import * as React from "react";
import Typography, { TypographyVariant } from "./Typography";
import { withKnobs, select } from "@storybook/addon-knobs";
import { ColorProps } from "classes/styles";

const label = {
	color: "color",
	textColor: "text-Color",
	variant: "variant",
};
const color = {
	symbol: "symbol",
	primary: "primary",
	secondary: "secondary",
};
const textColor = {
	primary: "primary",
	secondary: "secondary",
};

const fontSize = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	body1: "body1",
	body2: "body2",
	subtitle1: "subtitle1",
	subtitle2: "subtitle2",
};
const defaultValue = {
	color: "primary",
	textColor: "primary",
	variant: "h1",
};

export default {
	title: "Typography", // 스토리북에서 보여질 그룹과 경로를 명시
	component: Typography, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
};

export const withText = () => {
	const value = select(label.color, color, defaultValue.color) as ColorProps;
	const value2 = select(
		label.textColor,
		textColor,
		defaultValue.textColor,
	) as ColorProps;
	const variant = select(
		label.variant,
		fontSize,
		defaultValue.variant,
	) as TypographyVariant;
	return (
		<Typography variant={variant} color={value}>
			This is h1
		</Typography>
	);
};

// Typo.story = {
// 	name: "Typography",
// };

// export const h2 = () => (
// 	<Typography variant="h2" color="symbol" text="secondary">
// 		This is h2
// 	</Typography>
// );
// export const h3 = () => (
// 	<Typography variant="h3" color="symbol" text="secondary">
// 		This is h3
// 	</Typography>
// );
