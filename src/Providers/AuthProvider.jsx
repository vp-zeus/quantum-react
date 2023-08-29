import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { loginAPI, profileAPI, registerAPI } from "src/api/auth";
const AuthContext = createContext();

const initialState = {
	profile: null,
	loading: false,
	isLoggedIn: false,
};

const useAuth = () => {
	return useContext(AuthContext);
};

function sessionReducer(state, action) {
	const { type } = action;

	switch (type) {
		case "success":
			return {
				...state,
				profile: action.profile,
				isLoggedIn: true,
				loading: false,
			};
		case "failure":
			return {
				...state,
				profile: null,
				isLoggedIn: false,
				loading: false,
			};
		case "loading":
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}

const AuthProvider = ({ children }) => {
	const [sessionData, dispatch] = useReducer(sessionReducer, initialState);

	const login = async (credentials) => {
		dispatch({ type: "loading" });
		const response = await loginAPI(credentials);

		if (!response.success) {
			dispatch({ type: "failure" });
			console.log(response);
			toast.error(response.toastMsg);
			return;
		}
		profile();
	};

	const register = async (formData) => {
		dispatch({ type: "loading" });
		const response = await registerAPI(formData);

		return response;
	};

	const profile = async () => {
		const response = await profileAPI();
		dispatch({ type: "loading" });

		if (!response.success) {
			dispatch({ type: "failure" });
			toast.error(response.toastMsg);
			return;
		}

		toast.success(response.toastMsg);
		dispatch({
			type: "success",
			profile: response.data,
		});
	};

	const value = {
		sessionData,
		login,
		profile,
		register,
	};
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };
