import * as React from "react";
import "./Typography.module.scss";

export type TypographyVariant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "body1"
	| "body2"
	| "subtitle1"
	| "subtitle2";
export type TypographyProps = {
	variant?: TypographyVariant;
	children: JSX.Element | string;
};

export default function Typography({ variant, children }: TypographyProps) {
	return <div className={variant}>{children}</div>;
}
