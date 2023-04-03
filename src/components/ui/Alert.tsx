import React from "react";

import Snackbar from "@mui/material/Snackbar";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

const AlertComponent = React.forwardRef<HTMLDivElement, AlertProps>(
	function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	}
);

type AlertPropsType = {
	title: string;
	type?: "success" | "error";
	open: boolean;
	handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
};

const Alert = ({
	open,
	handleClose,
	title,
	type = "success",
}: AlertPropsType) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={2500}
			onClose={handleClose}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			TransitionComponent={Fade}
		>
			<AlertComponent
				onClose={handleClose}
				severity={type}
				sx={{ width: "100%" }}
			>
				{title}
			</AlertComponent>
		</Snackbar>
	);
};

export default Alert;
