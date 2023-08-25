import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./Providers/AuthProvider";
import "src/assets/styles/dashboard.sass";

const App = () => {
	const { profile } = useAuth();
	useEffect(() => {
		profile();
	}, []);
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default App;
