import * as Yup from "yup";

const { object, string, number, mixed, array, date } = Yup;

const loginSchema = Yup.object().shape({
	email: Yup.string().email().required("Please enter your email!"),
	password: Yup.string()
		.min(5, "You password must be atleast 5 characters long!")
		.required("Please enter your password!"),
});

const registerSchema = object({
	personalInformation: object({
		firstName: string().required("Please enter your first name!"),
		lastName: string().required("Please enter your last name!"),
		email: string()
			.email("Please enter a valid email")
			.required("Please enter your email!"),
		password: string()
			.min(8, "You password must be atleast 8 characters long!")
			.required("Please enter your password!"),
		resume: mixed().required("Upload your updated resume!"),
		phone: number().label("Phone number").required(),
		preferredRoles: array().min(1, "Please select atleast one role!"),
		profilePic: mixed().required("Upload your profile pic!"),
	}),
	qualifications: object({
		aggregatePercentage: number()
			.label("Percentage")
			.max(100)
			.min(0)
			.required()
			.typeError("Percentage must be a positive number!"),
		yearOfPassing: string().label("Year of passing").required(),
		degree: string().label("Degree").required(),
		stream: string().label("Stream").required(),
		college: string().label("College").required(),
		applicantType: string().label("Applicant Type").required(),
		yearsOfExp: number()
			.positive()
			.label("Years of experience")
			.when("applicantType", {
				is: "EXPERIENCED",
				then: (schema) => schema.required(),
			}),
		currentCTC: string()
			.label("Current ctc")
			.when("applicantType", {
				is: "EXPERIENCED",
				then: (schema) => schema.required(),
			}),
		expectedCTC: string()
			.label("Expected ctc")
			.when("applicantType", {
				is: "EXPERIENCED",
				then: (schema) => schema.required(),
			}),
		expertSkills: array(),
		otherExpertSkills: string().when(["expertSkills", "applicantType"], {
			is: (skills, applicantType) =>
				applicantType === "EXPERIENCED" && skills.length === 0,
			then: (schema) =>
				schema.required(
					"Select one experienced skill or mention if other!"
				),
		}),
		familiarSkills: array().min(1, "Please select atleast one skill!"),
		otherFamiliarSkills: string().when("familiarSkills", {
			is: (skills) => skills.length === 0,
			then: (schema) =>
				schema.required(
					"Select one familiar skill or mention if other!"
				),
		}),
		onNoticePeriod: string().required(),
		noticePeriodEnd: date().when("onNoticePeriod", {
			is: "yes",
			then: (schema) =>
				schema.required(
					"Please specify when does you notice period end!"
				),
		}),
		noticePeriodDuration: number()
			.label("Duration")
			.positive()
			.when("onNoticePeriod", {
				is: "yes",
				then: (schema) => schema.required(),
			}),
		appliedRecently: string().required(),
		pastRoleApplied: string()
			.label("Role applied")
			.when("appliedRecently", {
				is: "yes",
				then: (schema) => schema.required(),
			}),
	}),
});

export { loginSchema, registerSchema };
