import React from "react";
import ReactDOM from "react-dom/client";

import NavbarLayout from "src/routes/NavbarLayout.jsx";
import Dashboard from "src/routes/Dashboard";
import Application from "src/routes/Application";
import SubmittedApplication from "src/routes/SubmittedApplication";
import Register from "src/routes/Register";
import { walkInLoader } from "./api/walkIn";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.sass";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavbarLayout />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/walkIn/:id",
				element: <Application />,
				loader: walkInLoader,
			},
			{
				path: "/application/submit",
				element: <SubmittedApplication />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
