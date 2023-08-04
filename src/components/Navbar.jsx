import { Link } from "react-router-dom";
import logo from "src/assets/images/logo.png";
import User from "./User";
const Navbar = () => {
	return (
		<nav className="navbar">
			<Link className="navbar--logo" to="/">
				<img src={logo} alt="" />
			</Link>
			<User />
		</nav>
	);
};

export default Navbar;
