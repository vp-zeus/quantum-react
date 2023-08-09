import "src/assets/styles/login.sass";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [data, setData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const handleFormChange = (e) => {
		const { name, value, checked, type } = e.target;

		setData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};
	return (
		<>
			<main className="login-container">
				<div className="card login">
					<h1 className="login-header">Log in</h1>
					<div className="login-input">
						<input
							type="text"
							name="email"
							value={data.email}
							onChange={handleFormChange}
							placeholder="Email ID"
						/>
						<p>FORGOT EMAIL ID?</p>
					</div>
					<div className="login-input">
						<div>
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								name="password"
								value={data.password}
								onChange={handleFormChange}
							/>
							<div
								onClick={() => setShowPassword((prev) => !prev)}
							>
								{showPassword ? (
									<BsEyeSlashFill />
								) : (
									<BsEyeFill />
								)}
							</div>
						</div>
						<p>FORGOT PASSWORD?</p>
					</div>
					<div className="option-selection remember">
						<input
							type="checkbox"
							name="rememberMe"
							checked={data.rememberMe}
							onChange={handleFormChange}
						/>
						<p>Remember me</p>
					</div>
					<button className="btn">LOG IN</button>
					<small className="text">Not registered yet?</small>
					<Link to="/register">
						<small className="register-account">
							CREATE AN ACCOUNT
						</small>
					</Link>
				</div>
			</main>
		</>
	);
};

export default Login;
