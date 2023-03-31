import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

type FadeTooltipProps = {
	title: string;
	children: React.ReactElement;
};

const FadeTooltip = ({ title, children }: FadeTooltipProps) => {
	return (
		<Tooltip
			title={title}
			TransitionComponent={Fade}
			TransitionProps={{ timeout: 600 }}
		>
			{children}
		</Tooltip>
	);
};

export default FadeTooltip;
