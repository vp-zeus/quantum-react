import { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import "src/assets/styles/register.sass";
import FormProgress from "src/components/FormProgress";
import PersonalInformation from "src/components/PersonalInformation";
import Qualifications from "src/components/Qualifications";
import Review from "src/components/Review";
import { useAuth } from "src/Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Formik } from "formik";
import { registerSchema } from "src/utils/validators";

const Register = () => {
	const steps = [
		{
			id: 0,
			title: "Personal Information",
			label: "personalInformation",
			component: PersonalInformation,
		},
		{
			id: 1,
			title: "Qualifications",
			label: "qualifications",
			component: Qualifications,
		},
		{
			id: 2,
			title: "Review and Proceed",
			component: Review,
		},
	];

	const { register } = useAuth();
	const [activeStep, setActiveStep] = useState(0);
	const initialState = {
		personalInformation: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			phone: "",
			resume: null,
			portfolioURL: "",
			preferredRoles: [],
			referral: "",
			mailList: true,
			profilePic: null,
		},
		qualifications: {
			aggregatePercentage: "98",
			yearOfPassing: "2023",
			degree: "1",
			stream: "1",
			college: "1",
			otherCollege: "",
			collegeLocation: "",
			applicantType: "Fresher",
			yearsOfExp: "",
			currentCTC: "",
			expectedCTC: "",
			expertSkills: [],
			familiarSkills: [2, 3],
			otherExpertTechnologies: "",
			otherFamiliarTechnologies: "",
			onNoticePeriod: false,
			noticePeriodEnd: "",
			noticePeriodDuration: "",
			appliedRecently: false,
			pastRoleApplied: "",
		},
	};
	const [formData, setFormData] = useState({
		personalInformation: {
			firstName: "vignesh",
			lastName: "pillutla",
			email: "test@test.com",
			password: "testing$1234",
			phone: "8828459033",
			resume: null,
			portfolioURL: "",
			preferredRoles: [2, 3],
			referral: "",
			mailList: true,
			profilePic: null,
		},
		qualifications: {
			aggregatePercentage: "98",
			yearOfPassing: "2023",
			degree: "1",
			stream: "1",
			college: "1",
			otherCollege: "",
			collegeLocation: "",
			applicantType: "Fresher",
			yearsOfExp: "",
			currentCTC: "",
			expectedCTC: "",
			expertSkills: [],
			familiarSkills: [2, 3],
			otherExpertTechnologies: "",
			otherFamiliarTechnologies: "",
			onNoticePeriod: false,
			noticePeriodEnd: "",
			noticePeriodDuration: "",
			appliedRecently: false,
			pastRoleApplied: "",
		},
	});

	const handleFormDataChange = (data, label) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[label]: data,
		}));
	};

	const handleFormSubmit = async () => {
		const response = await register(formData);
		console.log(response);
	};

	const totalSteps = steps.length;
	const activeStepData = steps[activeStep];
	const ComponentToRender = activeStepData.component;
	const label = activeStepData.label;
	return (
		<Formik
			initialValues={{
				...initialState,
			}}
			validationSchema={registerSchema}
		>
			<>
				<header className="register-header">
					<Link to="/login">
						<MdOutlineArrowBack className="register-header--icon" />
					</Link>
					<h3 className="register-header--text">Create An Account</h3>
					<div className="btn-group">
						<button className="btn">CANCEL</button>
						<button
							className={`btn ${
								activeStep < totalSteps - 1 && "btn-disabled"
							} `}
							onClick={handleFormSubmit}
						>
							CREATE
						</button>
					</div>
				</header>
				<main className="register-body">
					<FormProgress steps={steps} activeStep={activeStep} />

					{activeStep < totalSteps - 1 ? (
						<ComponentToRender
							data={formData[label]}
							handleFormDataChange={(data) =>
								handleFormDataChange(data, label)
							}
						/>
					) : (
						<Review setActiveStep={setActiveStep} data={formData} />
					)}

					<div className="btn-group register-actions">
						{activeStep > 0 && (
							<button
								onClick={() =>
									setActiveStep((prev) => prev - 1)
								}
								className="btn"
							>
								PREVIOUS
							</button>
						)}
						{activeStep < totalSteps - 1 && (
							<button
								onClick={() =>
									setActiveStep((prev) => prev + 1)
								}
								className="btn"
							>
								NEXT
							</button>
						)}
					</div>
				</main>
			</>
		</Formik>
	);
};

export default Register;
