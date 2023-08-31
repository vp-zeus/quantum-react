import * as Yup from "yup";

const loginSchema = Yup.object().shape({
	email: Yup.string().email().required("Please enter your email!"),
	password: Yup.string()
		.min(5, "You password must be atleast 5 characters long!")
		.required("Please enter your password!"),
});

const registerSchema = Yup.object({
	personalInformation: Yup.object({
		firstName: Yup.string().required("Please enter your first name!"),
		lastName: Yup.string().required("Please enter your last name!"),
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Please enter your email!"),
		password: Yup.string()
			.min(8, "You password must be atleast 8 characters long!")
			.required("Please enter your password!"),
		resume: Yup.mixed().required("Upload your updated resume!"),
		preferredRoles: Yup.array().min(1, "Please select atleast one role!"),
		profilePic: Yup.mixed().required("Upload your profile pic!"),
	}),
});

export { loginSchema, registerSchema };
