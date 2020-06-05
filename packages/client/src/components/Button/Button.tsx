import * as React from "react";
import Typography from "components/Typography/index";
import Style from "./Button.module.scss";
import { TypographyVariant } from "components/Typography/Typography";

export type ButtonProps = {
	color?: ColorProps;
	variant?: "rounded" | "square";
	size?: "small" | "medium" | "large";
	children?: JSX.Element | string;
};

export default function Button({
	color,
	variant,
	children,
	size,
	...rest
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
			className={`${Style.Button}  ${Style[variant]} ${Style[color]} ${Style[size]}`}
			{...rest}
		>
			<Typography variant={typographyVariant} color={color}>
				{children}
			</Typography>
		</button>
	);
}

Button.defaultProps = {
	variant: "square",
	color: "symbol",
	size: "medium",
};
