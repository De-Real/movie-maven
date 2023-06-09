import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Auth from "../pages/Auth";
import Preferences from "../pages/Preferences";
import Profile from "../pages/Profile";
import { moviesRouter } from "./movies-router";

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <Navigate to="movies" />,
				},
				{
					path: "profile",
					element: <Profile />,
				},
				{
					path: "auth",
					element: <Auth />,
				},
				{
					path: "preferences",
					element: <Preferences />,
				},
				//Router for particular movie type
				moviesRouter,
			],
		},
	],
	{ basename: "/movie-maven" }
);
