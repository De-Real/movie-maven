import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/Root";
import MainPage from "./pages/Main";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
		],
	},
]);
