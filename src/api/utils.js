import axios from "axios";
import config from "src/config/config";

const { API_ENDPOINT } = config;
axios.defaults.baseURL = API_ENDPOINT;

// Interceptor to add token to protected requests
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

axios.interceptors.response.use(
	(res) => res,
	async (error) => {
		const res = error.response;
		const data = res.data;
		if (res.status === 401 && data.code === "token_not_valid") {
			refreshToken();
		}

		return res;
	}
);

const refreshToken = async () => {
	const refresh = localStorage.getItem("refresh");

	if (refresh === null) {
		window.location.href = "/login";
		return;
	}
	const response = await callPost("api/token/refresh", { refresh });

	if (!response.success) {
		window.location.href = "/login";
		localStorage.removeItem("refresh");
		localStorage.removeItem("access");
		return;
	}

	const { access } = response.data;
	localStorage.setItem("access", access);
};

const callGet = async (url, config) => {
	try {
		const response = await axios.get(url, config);
		const data = await response.data;

		return {
			success: true,
			data,
			status: response.status,
		};
	} catch (error) {
		return {
			success: false,
			error,
		};
	}
};

const callPost = async (url, body, config = {}) => {
	try {
		const response = await axios.post(url, body, config);
		const data = await response.data;
		return {
			success: true,
			data,
			status: response.status,
		};
	} catch (error) {
		return {
			success: false,
			error,
		};
	}
};

export { callGet, callPost };
