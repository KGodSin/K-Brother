import * as React from "react";
import Typography, {
	TypographyVariant,
	TypographyProps,
} from "components/Typography/index";
import Style from "./Button.module.scss";

export type ButtonProps = {
	color?: ColorProps;
	variant?: "rounded" | "square";
	size?: "small" | "medium" | "large";
	children?: JSX.Element | string;
	fullWidth?: boolean;
};

export default function Button({
	color = "symbol",
	variant = "square",
	children,
	size = "medium",
	fullWidth,
}: ButtonProps) {
	const typographyVariant = React.useMemo<TypographyVariant>(() => {
		switch (size) {
			case "large":
				return "h4";
			case "medium":
				return "h5";
			case "small":
			default:
				return "body1";
		}
	}, [size]);

	return (
		<button
			className={`${Style.Button} ${Style[color]} ${Style[variant]} ${
				Style[size]
			} ${fullWidth ? Style.fullWidth : ""}`}
		>
			<Typography variant={typographyVariant}>{children}</Typography>
		</button>
	);
}
