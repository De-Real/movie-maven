import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { Controls, Logo, StyledHeader } from "./styles/Header.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "../components/ui/IconButton";

const Header = () => {
	const isLogged = false;

	return (
		<StyledHeader>
			<Logo>
				<Link to="/movies"> MovieMaven </Link>
			</Logo>
			{!isLogged && (
				<Controls>
					<Link to="/auth?mode=login">
						<Button variant="outlined"> Log in </Button>
					</Link>
					<Link to="/auth?mode=signup">
						<Button> Sign up </Button>
					</Link>
				</Controls>
			)}
			{isLogged && (
				<Controls>
					<Link to="/preferences">
						<Button variant="outlined">Preferences</Button>
					</Link>
					<Link to="/profile">
						<IconButton>
							<AccountCircleIcon />
							<span>Profile</span>
						</IconButton>
					</Link>
				</Controls>
			)}
		</StyledHeader>
	);
};

export default Header;
