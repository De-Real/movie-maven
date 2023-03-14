import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
	return (
		<StyledHeader>
			<Link to="/"> Logo </Link>
			<Link to="/preferences"> Preferences </Link>
			<Link to="/auth?mode=login"> Log in </Link>
		</StyledHeader>
	);
};

export default Header;
