import * as React from "react";
import "./Typography.scss";
type Props = {
	variant:
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
	children: JSX.Element | string;
};

export default function Typography({ variant, children }: Props) {
	return <div className={variant}>{children}</div>;
}
