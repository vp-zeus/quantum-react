import _ from "lodash";
import { callGet, callPost } from "./utils";

_.mixin({
	deepMapKeys: function (obj, fn) {
		var x = {};

		_.forOwn(obj, function (v, k) {
			if (_.isPlainObject(v)) v = _.deepMapKeys(v, fn);
			x[fn(v, k)] = v;
		});

		return x;
	},
});

const registerAPI = async (formData) => {
	const {
		personalInformation: { email, password, resume, profilePic },
		qualifications,
	} = formData;

	const educationalQualification = _.pick(qualifications, [
		"aggregatePercentage",
		"yearOfPassing",
		"degree",
		"stream",
		"college",
		"otherCollege",
	]);

	const professionalQualification = _.omit(qualifications, [
		...Object.keys(educationalQualification),
		"noticePeriodEnd",
		"noticePeriodDuration",
	]);

	const submitData = {
		email,
		password,
		profile: _.omit(formData.personalInformation, [
			"email",
			"password",
			"resume",
			"profilePic",
		]),
	};

	submitData.profile["educationalQualification"] = educationalQualification;
	submitData.profile["professionalQualification"] = professionalQualification;

	// submitData.resume = resume;
	// submitData.profilePic = profilePic;

	const formattedData = _.deepMapKeys(submitData, (v, k) => _.snakeCase(k));
	const reqData = new FormData();
	reqData.append("raw_data", JSON.stringify(formattedData));
	reqData.append("resume", resume);
	reqData.append("profile_pic", profilePic);

	const response = await callPost("api/register", reqData, {
		headers: {
			"content-type": "multipart/form-data",
		},
	});
	return response;
};

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

export { loginAPI, profileAPI, registerAPI };
