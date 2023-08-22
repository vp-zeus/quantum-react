import { FaPen } from "react-icons/fa";
import "src/assets/styles/review.sass";

const Review = (props) => {
	const { setActiveStep } = props;
	const { personalInformation, qualifications } = props.data;
	const {
		firstName,
		lastName,
		email,
		phone,
		resume,
		portfolioURL,
		preferredRoles,
		referral,
		sendJobUpdates,
		profilePic,
	} = personalInformation;

	const {
		aggregatePercentage,
		yearOfPassing,
		qualification,
		stream,
		college,
		otherCollege,
		collegeLocation,
		applicantType,
		yearsOfExp,
		currentCTC,
		expectedCTC,
		expertiseTechnologies,
		familiarTechnologies,
		otherExpertiseTechnologies,
		otherFamiliarTechnologies,
		onNoticePeriod,
		noticePeriodEnd,
		noticePeriodDuration,
		alreadyAppeared,
		pastRoleApplied,
	} = qualifications;
	return (
		<>
			<div className="review-header">
				<h4 className="review-header--title">Personal Information</h4>
				<div className="edit-icon" onClick={() => setActiveStep(0)}>
					<FaPen />
					<span>Edit</span>
				</div>
			</div>
			<div className="card review-personal">
				<section>
					<p className="subText">First Name</p>
					<p className="text">{firstName}</p>
					<br />
					<p className="subText">Last Name</p>
					<p className="text">{lastName}</p>
					<br />
					<p className="subText">Email</p>
					<p className="text">{email}</p>
					<br />
					<p className="subText">Phone Number</p>
					<p className="text">{phone}</p>
					<br />
					<p className="text">{resume?.name}</p>
					<br />
					<p className="subText">Enter Portfolio URL (if any)</p>
					<p className="text">{portfolioURL ? portfolioURL : "-"}</p>
					<br />
					<p className="subText">Preferred Job Roles</p>
					{preferredRoles.map((role, index) => (
						<p className="text" key={index}>
							{role}
						</p>
					))}
					<br />
					<p className="subText">
						If You Are Registering Via A Referral, Please Mention
						Full Name Of The Employee Who Referred You
					</p>
					<p className="text">{referral ? referral : "-"}</p>
					<br />
					<div className="option-selection">
						<input
							type="checkbox"
							checked={sendJobUpdates}
							readOnly
						/>
						<p>Send me job related updates via mail</p>
					</div>
				</section>
				<section>
					<img
						src={URL.createObjectURL(profilePic)}
						alt=""
						className="upload-preview profile"
					/>
				</section>
			</div>

			<div className="review-header">
				<h4 className="review-header--title">Qualifications</h4>
				<div className="edit-icon" onClick={() => setActiveStep(1)}>
					<FaPen />
					<span>Edit</span>
				</div>
			</div>
			<div className="qualification-header">
				<p>Educational Qualifications</p>
			</div>
			<div className="qualification-content card">
				<p className="subText">Aggregate Percentage</p>
				<p className="text">{aggregatePercentage}</p>
				<br />
				<p className="subText">Year of Passing</p>
				<p className="text">{yearOfPassing}</p>
				<br />
				<div className="qualification-grid">
					<div>
						<p className="subText">Qualification</p>
						<p className="text">{qualification}</p>
					</div>
					<div>
						<p className="subText">Stream</p>
						<p className="text">{stream}</p>
					</div>
				</div>
				<br />
				<div className="qualification-grid">
					<div>
						<p className="subText">College</p>
						<p className="text">{college}</p>
					</div>
					<div>
						<p className="subText">
							If others, please enter your college name
						</p>
						<p className="text">
							{otherCollege ? otherCollege : "-"}
						</p>
					</div>
				</div>
				<br />
				<p className="subText">Where is your college located?</p>
				<p className="text">{collegeLocation}</p>
			</div>
			<br />
			<div className="qualification-header">
				<p>Professional Qualifications</p>
			</div>
			<div className="qualification-content card">
				<p className="subText">Applicant Type</p>
				<p className="text">{applicantType}</p>
			</div>
			<br />
			<div className="card">
				<p className="subText">Years of Experience</p>
				<p className="text">{yearsOfExp}</p>
				<br />
				<p className="subText">Current CTC (In Rupees)</p>
				<p className="text">{currentCTC}</p>
				<br />
				<p className="subText">Expected CTC (In Rupees)</p>
				<p className="text">{expectedCTC}</p>
				<br />
				<p className="subText">
					Select All The Technologies You Expertise In
				</p>
				{expertiseTechnologies.map((tech, index) => (
					<p className="text" key={index}>
						{tech}
					</p>
				))}
				<p className="subText">If others, please mention</p>
				<p className="text">
					{otherExpertiseTechnologies
						? otherExpertiseTechnologies
						: "-"}
				</p>
				<br />

				<p className="subText">
					Select All The Technologies You are familiar In
				</p>
				{familiarTechnologies.map((tech, index) => (
					<p className="text" key={index}>
						{tech}
					</p>
				))}
				<p className="subText">If others, please mention</p>
				<p className="text">
					{otherFamiliarTechnologies
						? otherFamiliarTechnologies
						: "-"}
				</p>
				<br />
				<p className="subText">Are you currently on notice period?</p>
				<p className="text">{onNoticePeriod ? "Yes" : "No"}</p>
				<br />
				<div className="qualification-grid">
					<div>
						<p className="subText">
							If Yes, when will your notice period end?
						</p>
						<p className="text">
							{noticePeriodEnd ? noticePeriodEnd : "-"}
						</p>
					</div>
					<div>
						<p className="subText">
							How long is your notice period? (Mention in months)
						</p>
						<p className="text">
							{noticePeriodDuration ? noticePeriodDuration : "-"}
						</p>
					</div>
				</div>
				<br />
				<p className="subText">
					Have You Appeared For Any Test By Zeus in the past 12
					months?
				</p>
				<p className="text">{alreadyAppeared ? "Yes" : "No"}</p>

				<p className="subText">If Yes, which role did you apply for?</p>
				<p className="text">
					{pastRoleApplied ? pastRoleApplied : "-"}
				</p>
			</div>
		</>
	);
};

export default Review;
