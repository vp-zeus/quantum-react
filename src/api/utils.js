import axios from "axios";
import config from "src/config/config";

const { API_ENDPOINT } = config;
axios.defaults.baseURL = API_ENDPOINT;
const REFRESH_ENDPOINT = "api/token/refresh";

// Interceptor to add token to protected requests
axios.interceptors.request.use((req) => {
	const controller = new AbortController();

	if (req.withCredentials) {
		const access = localStorage.getItem("access");
		if (!access) {
			controller.abort();
			localStorage.removeItem("refresh");
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
		const { config, response } = error;

		if (!config.retried && config.url !== REFRESH_ENDPOINT) {
			const data = response.data;

			if (response.status === 401 && data.code === "token_not_valid") {
				config.withCredentials = true;
				const response = await refreshToken(config);
				if (response) return response;
			}
		}

		return Promise.reject(error);
	}
);

const refreshToken = async (config) => {
	const refresh = localStorage.getItem("refresh");

	if (refresh === null) {
		return;
	}
	const response = await callPost(REFRESH_ENDPOINT, { refresh });

	if (!response.success) {
		localStorage.removeItem("refresh");
		localStorage.removeItem("access");
		return;
	}

	const { access } = response.data;
	localStorage.setItem("access", access);

	// Retry the req once
	return axios({ ...config, retried: true });
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
