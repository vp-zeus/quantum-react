import DropDown from "./DropDown";
import "src/assets/styles/walkIn.sass";
import FileUpload from "./FileUpload";
import { useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
const WalkInDetails = (props) => {
	const { walkIn, applicationData, changeApplicationData } = props;
	const { generalInstructions, instructions, minSysRequirements, roles } =
		walkIn;
	const { rolePreferences, resume } = applicationData;

	const handleRoleChange = (e) => {
		const { value } = e.target;

		changeApplicationData({
			rolePreferences: _.xor([...rolePreferences], [parseInt(value)]),
		});
	};

	const handleFileChange = (e) => {
		const { files } = e.target;

		changeApplicationData({
			resume: files[0],
		});
	};

	return (
		<>
			<DropDown heading="Pre-requisites & Application Process">
				<div className="walkIn-instructions">
					<p>General Instructions : </p>
					<p>{generalInstructions}</p>
				</div>
				<hr />
				<div className="walkIn-instructions">
					<p>Instructions for the Exam : </p>
					<p>{instructions}</p>
				</div>
				<hr />
				<div className="walkIn-instructions">
					<p>Minimum System Requirements : </p>
					<p>{minSysRequirements}</p>
				</div>
			</DropDown>
			<section className="card slot-selection">
				<p className="text">Time Slots & Preferences</p>
				<p className="subText">Select a Time Slot :</p>
				<div className="option-selection">
					<input type="radio" name="slot-selection" />
					<p className="text">9:00 AM to 11:00 AM</p>
				</div>
				<div className="option-selection">
					<input type="radio" name="slot-selection" />
					<p className="text">1:00 PM to 3:00 PM</p>
				</div>
				<hr />
				<p className="subText">Select Your Preference : </p>
				{roles.map((role) => (
					<div key={role.id} className="option-selection">
						<input
							value={role.id}
							type="checkbox"
							checked={rolePreferences.includes(role.id)}
							onChange={handleRoleChange}
						/>
						<p className="text">{role.name}</p>
					</div>
				))}
				<hr />
				<FileUpload file={resume} handleFileChange={handleFileChange} />
			</section>
			{roles.map((role) => (
				<div key={role.id} className="about-role">
					<DropDown heading={role.name}>
						<p className="subText">Gross Compensation Package:</p>
						<p className="text">{role.compensation}</p>
						<hr />
						<p className="subText">Role Description</p>
						<p className="text">{role.description}</p>
						<hr />
						<p className="subText">Requirements</p>
						<p className="text">{role.requirements}</p>
					</DropDown>
				</div>
			))}
			<br />
		</>
	);
};

const WalkIn = (props) => {
	const { walkIn, showAllDetails } = props;
	const { name, startDate, endDate, location, roles, id } = walkIn;

	const [applicationData, setApplicationData] = useState({
		timeSlotPreference: null,
		rolePreferences: [],
		resume: null,
	});

	const changeApplicationData = (data) => {
		setApplicationData((prevApplicationData) => ({
			...prevApplicationData,
			...data,
		}));
	};

	return (
		<>
			<div className="walkIn">
				<div className="walkIn-header">
					<h2>{name}</h2>
					{showAllDetails && (
						<Link to="/application/submit">
							<button>APPLY</button>
						</Link>
					)}
				</div>
				<p>Date & Time :</p>
				<span className="walkIn-date">
					{startDate} to {endDate}
				</span>
				<span> | </span>
				<span className="walkIn-location">
					<FaLocationDot />
					{location}
				</span>
				<hr />
				<p>Job Roles :</p>
				<ul>
					{roles.map((role) => (
						<li key={role.id}>
							<img src={role.icon} alt="" />
							{role.name}
						</li>
					))}
				</ul>
				{!showAllDetails && (
					<Link to={`/walkIn/${id}`}>
						<button>VIEW MORE DETAILS</button>
					</Link>
				)}
			</div>
			{showAllDetails && (
				<WalkInDetails
					walkIn={walkIn}
					applicationData={applicationData}
					changeApplicationData={changeApplicationData}
				/>
			)}
		</>
	);
};

export default WalkIn;
