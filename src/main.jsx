import React from "react";
import ReactDOM from "react-dom/client";

import NavbarLayout from "src/routes/NavbarLayout.jsx";
import Dashboard from "src/routes/Dashboard";
import Application from "./routes/Application";
import { walkInLoader } from "./api/walkIn";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.sass";
import SubmittedApplication from "./routes/SubmittedApplication";

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
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
