import { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import "src/assets/styles/register.sass";
import FormProgress from "src/components/FormProgress";
import PersonalInformation from "src/components/PersonalInformation";
import Qualifications from "src/components/Qualifications";
import Review from "src/components/Review";

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

	const [activeStep, setActiveStep] = useState(0);
	const [formData, setFormData] = useState({
		personalInformation: {
			firstName: "Vignesh",
			lastName: "Pillutla",
			email: "vigneshpillutla@gmail.com",
			phone: "8828459033",
			resume: null,
			portfolioURL: "",
			preferredRoles: [],
			referral: "",
			sendJobUpdates: false,
			profilePic: null,
		},
		qualifications: {
			aggregatePercentage: "",
			yearOfPassing: "",
			qualification: "",
			stream: "",
			college: "",
			otherCollege: "",
			collegeLocation: "",
			applicantType: "",
			yearsOfExp: "",
			currentCTC: "",
			expectedCTC: "",
			expertiseTechnologies: [],
			otherExpertiseTechnologies: "",
			familiarTechnologies: [],
			otherFamiliarTechnologies: "",
			onNoticePeriod: false,
			noticePeriodEnd: "",
			noticePeriodDuration: "",
			alreadyAppeared: false,
			pastRoleApplied: "",
		},
	});

	const handleFormDataChange = (data, label) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[label]: data,
		}));
	};

	const totalSteps = steps.length;
	const activeStepData = steps[activeStep];
	const ComponentToRender = activeStepData.component;
	const label = activeStepData.label;
	return (
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
							onClick={() => setActiveStep((prev) => prev - 1)}
							className="btn"
						>
							PREVIOUS
						</button>
					)}
					{activeStep < totalSteps - 1 && (
						<button
							onClick={() => setActiveStep((prev) => prev + 1)}
							className="btn"
						>
							NEXT
						</button>
					)}
				</div>
			</main>
		</>
	);
};

export default Register;
