import Navbar from "src/components/Navbar";
import "src/assets/styles/dashboard.sass";
import { Outlet } from "react-router-dom";

const NavbarLayout = () => {
	return (
		<>
			<Navbar />
			<main className="walkIn-container">
				<Outlet />
			</main>
		</>
	);
};

export default NavbarLayout;
