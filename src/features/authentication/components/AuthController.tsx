import React from "react";
import Login from "./Login";
import { useSearchParams } from "react-router-dom";
import Container from "../../../components/ui/Container";
import { getStatusText } from "../utils/getStatusText";
import { StyledAuthControllerDescription } from "./styles/AuthController.styled";
import Button from "../../../components/ui/Button";

const AuthController = () => {
	const [params, setParams] = useSearchParams();

	const status = params.get("mode") as "login" | "signup";

	const { title, text } = getStatusText(status);

	return (
		<section>
			<Container>
				<h3>{title}</h3>
				<StyledAuthControllerDescription>
					{text}
				</StyledAuthControllerDescription>
				<Login />
				<Button>Sign up</Button>
				<Button>Log in</Button>
			</Container>
		</section>
	);
};

export default AuthController;
