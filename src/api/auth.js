import config from "src/config/config";
import axios from "axios";
import { toast } from "react-toastify";
const { API_ENDPOINT } = config;

axios.defaults.validateStatus = false;

axios.interceptors.request.use((req) => {
	const controller = new AbortController();
	if (req.withCredentials) {
		const access = localStorage.getItem("access");
		if (!access) {
			controller.abort();
			localStorage.removeItem("refresh");
			window.location.href = "/login";
		} else {
			req.headers["Authorization"] = `Bearer ${access}`;
		}
		req.withCredentials = false;
	}
	return { ...req, signal: controller.signal };
});

axios.interceptors.response.use(async (res) => {
	const data = await res.data;
	if (res.status === 401 && data.code === "token_not_valid") {
		refreshToken();
	}

	return res;
});

const refreshToken = async () => {
	const refresh = localStorage.getItem("refresh");

	if (refresh === null) {
		window.location.href = "/login";
		return;
	}

	const response = await axios.post(`${API_ENDPOINT}api/token/refresh`, {
		refresh,
	});

	if (response.status === 401) {
		window.location.href = "/login";
		localStorage.removeItem("refresh");
		localStorage.removeItem("access");
		return;
	}
	const { access } = await response.data;
	localStorage.setItem("access", access);
};

const login = async (credentials) => {
	const response = await axios.post(`${API_ENDPOINT}api/token`, credentials);

	if (response.status === 200) {
		toast.success("Successfully Logged In!!");
		const { access, refresh } = await response.data;

		localStorage.setItem("access", access);
		localStorage.setItem("refresh", refresh);
		window.location.href = "/";
		return;
	}

	toast.error("Invalid Credentials! Please Try Again!");
};

export { refreshToken, login };
