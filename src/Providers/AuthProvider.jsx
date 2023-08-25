import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const value = {
		user,
		setUser,
	};
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };
