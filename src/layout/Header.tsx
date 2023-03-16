import Button from "../components/ui/Button";
import {
	Controls,
	FilledLink,
	Logo,
	StyledHeader,
	CommonLink,
} from "./styles/Header.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "../components/ui/IconButton";

const Header = () => {
	const isLogged = false;

	return (
		<StyledHeader>
			<Logo>
				<CommonLink to="/movies">
					Movie<span>MAVEN</span>
				</CommonLink>
			</Logo>
			{!isLogged && (
				<Controls>
					<CommonLink to="/auth?mode=login">
						<Button variant="outlined"> Log in </Button>
					</CommonLink>
					<FilledLink to="/auth?mode=signup">
						<Button> Sign up </Button>
					</FilledLink>
				</Controls>
			)}
			{isLogged && (
				<Controls>
					<CommonLink to="/preferences">
						<Button variant="outlined">Preferences</Button>
					</CommonLink>
					<FilledLink to="/profile">
						<IconButton>
							<AccountCircleIcon />
							<span>Profile</span>
						</IconButton>
					</FilledLink>
				</Controls>
			)}
		</StyledHeader>
	);
};

export default Header;
