import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

type FadeTooltipProps = {
	title: string;
	children: React.ReactElement;
	position?: "bottom" | "top";
};

const FadeTooltip = ({
	title,
	children,
	position = "bottom",
}: FadeTooltipProps) => {
	return (
		<Tooltip
			title={title}
			TransitionComponent={Fade}
			TransitionProps={{ timeout: 600 }}
			placement={position}
		>
			{children}
		</Tooltip>
	);
};

export default FadeTooltip;
