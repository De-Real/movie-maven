import { useState } from "react";

const useCommentResponding = () => {
	const [isResponsing, setIsResponsing] = useState(false);

	const manageResponseHandler = (value?: boolean) => {
		setIsResponsing((prevState) => value || !prevState);
	};

	return {
		isResponsing,
		manageResponseHandler,
	};
};

export default useCommentResponding;
