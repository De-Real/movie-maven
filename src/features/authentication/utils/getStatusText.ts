export const getStatusText = (status: "login" | "signup") => {
	if (status === "login")
		return {
			title: "Login",
			text: "If you already have an account please enter your nickname (or email) and password OR click Sign Up button to register. You will have only 5 tries!",
		};
	return {
		title: "Sign up",
		text: "Please imagine your nickname which users will see when you comment. Also, imagine your password and enter valid email.",
	};
};
