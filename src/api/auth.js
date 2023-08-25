import { callGet, callPost } from "./utils";

const loginAPI = async (credentials) => {
	const response = await callPost("api/token", credentials);

	if (response.success) {
		const { access, refresh } = response.data;

		localStorage.setItem("access", access);
		localStorage.setItem("refresh", refresh);
		return {
			...response,
			toastMsg: "Successfully Logged In!!",
		};
	}

	return {
		...response,
		toastMsg: "Invalid Credentials! Please Try Again!",
	};
};

const profileAPI = async () => {
	const response = await callGet("api/profile", {
		withCredentials: true,
	});

	if (!response.success) {
		return {
			...response,
			toastMsg: "Oops! Something went wrong!",
		};
	}

	return response;
};

export { loginAPI, profileAPI };
