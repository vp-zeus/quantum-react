import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import Dashboard from "src/routes/Dashboard";
import Application from "src/routes/Application";
import SubmittedApplication from "src/routes/SubmittedApplication";
import Register from "src/routes/Register";
import { applicationLoader, registerLoader, walkInLoader } from "./api/walkIn";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.sass";
import Login from "./routes/Login";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Providers/AuthProvider";
import App from "./App";
import PrivateComponent from "./components/PrivateComponent";

const router = createBrowserRouter([
	{
		path: "",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/walkin/:id",
				element: (
					<PrivateComponent>
						<Application />
					</PrivateComponent>
				),
				loader: walkInLoader,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
				loader: registerLoader,
			},
			{
				path: "/walkin/application/:id",
				element: (
					<SubmittedApplication />
					// <PrivateComponent>
					// </PrivateComponent>
				),
				loader: applicationLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
		<ToastContainer />
	</React.StrictMode>
);
