import { useAuth } from "src/Providers/AuthProvider";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateComponent = ({ children }) => {
	const { sessionData } = useAuth();
	const { loading, isLoggedIn } = sessionData;
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn && !loading) {
			navigate("/login");
		}
	}, [loading, isLoggedIn]);

	if (loading) {
		return <ReactLoading type="spin" />;
	}

	return <>{children}</>;
};

export default PrivateComponent;
