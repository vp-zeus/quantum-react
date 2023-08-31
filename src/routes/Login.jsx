import "src/assets/styles/login.sass";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "src/Providers/AuthProvider";
import ReactLoading from "react-loading";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "src/utils/validators";
import CustomErrorMessage from "src/components/CustomFormError";
const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [data, setData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});
	const {
		login,
		sessionData: { isLoggedIn, loading },
	} = useAuth();
	const navigate = useNavigate();

	const handleFormChange = (e) => {
		const { name, value, checked, type } = e.target;

		setData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};
	const handleLogin = (data) => {
		login(data);
	};

	useEffect(() => {
		if (isLoggedIn && !loading) {
			navigate("/");
		}
	}, [isLoggedIn, loading]);

	if (loading) {
		return <ReactLoading type="spin" />;
	}

	return (
		<>
			<main className="login-container">
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					onSubmit={handleLogin}
					validationSchema={loginSchema}
				>
					{({ errors, touched }) => (
						<Form className="card login">
							<h1 className="login-header">Log in</h1>

							<div className="login-input">
								<Field
									name="email"
									type="email"
									placeholder="Email ID*"
								/>
								<ErrorMessage
									component={CustomErrorMessage}
									name="email"
								/>
								<p>FORGOT EMAIL ID?</p>
							</div>
							<div className="login-input">
								<div>
									<Field
										name="password"
										type={
											showPassword ? "text" : "password"
										}
										placeholder="Password*"
									/>

									<div
										onClick={() =>
											setShowPassword((prev) => !prev)
										}
									>
										{showPassword ? (
											<BsEyeSlashFill />
										) : (
											<BsEyeFill />
										)}
									</div>
								</div>
								<ErrorMessage
									component={CustomErrorMessage}
									name="password"
								/>
								<p>FORGOT PASSWORD?</p>
							</div>
							<button className="btn" type="submit">
								LOG IN
							</button>
							<small className="text">Not registered yet?</small>
							<Link to="/register">
								<small className="register-account">
									CREATE AN ACCOUNT
								</small>
							</Link>
						</Form>
					)}
				</Formik>
				{/* <div className="card login">
					<h1 className="login-header">Log in</h1> */}

				{/* <div className="login-input">
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
					<button className="btn" onClick={handleLogin}>
						LOG IN
					</button> */}
				{/* <small className="text">Not registered yet?</small>
					<Link to="/register">
						<small className="register-account">
							CREATE AN ACCOUNT
						</small>
					</Link>
				</div> */}
			</main>
		</>
	);
};

export default Login;
