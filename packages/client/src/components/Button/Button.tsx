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
	children?: JSX.Element;
};

export default function Button({
	color,
	variant,
	children,
	size,
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
		<div>
			<Typography variant={typographyVariant}>{children}</Typography>
		</div>
	);
}
