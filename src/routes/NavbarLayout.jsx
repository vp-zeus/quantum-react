import Navbar from "src/components/Navbar";
import "src/assets/styles/dashboard.sass";
import { Outlet } from "react-router-dom";

const NavbarLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default NavbarLayout;
