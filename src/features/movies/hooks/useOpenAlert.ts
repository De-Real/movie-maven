import React, { useState } from "react";

const useOpenAlert = () => {
	const [isAlertOpen, setIsAlertOpen] = useState(false);

	const handleAlertOpen = () => {
		setIsAlertOpen(true);
	};

	const handleAlertClose = (
		_event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason !== "clickaway") {
			setIsAlertOpen(false);
		}
	};

	return {
		isAlertOpen,
		handleAlertOpen,
		handleAlertClose,
	};
};

export default useOpenAlert;
