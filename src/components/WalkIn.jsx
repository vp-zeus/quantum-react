import DropDown from "./DropDown";
import "src/assets/styles/walkIn.sass";
import FileUpload from "./FileUpload";
import { useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import InstructionalDesignerIcon from "src/assets/images/instructional-designer.png";
import SoftwareEngineerIcon from "src/assets/images/software-engineer.png";
import SoftwareQualityEngineerIcon from "src/assets/images/software-quality-engineer.png";
import dayjs from "dayjs";
import { apply } from "src/api/walkIn";
import { useNavigate } from "react-router-dom";

const ROLE_ICONS = {
	"Instructional Designer": InstructionalDesignerIcon,
	"Software Engineer": SoftwareEngineerIcon,
	"Software Quality Engineer": SoftwareQualityEngineerIcon,
};
const WalkInDetails = (props) => {
	const { walkIn, applicationData, changeApplicationData } = props;
	const {
		general_instructions,
		instructions,
		min_sys_requirements,
		roles,
		available_time_slots,
	} = walkIn;
	const { rolePreferences, resume } = applicationData;

	const handleRoleChange = (e) => {
		const { value } = e.target;

		changeApplicationData({
			rolePreferences: _.xor([...rolePreferences], [parseInt(value)]),
		});
	};

	const handleSlotChange = (e) => {
		const { value } = e.target;

		changeApplicationData({
			timeSlotPreference: value,
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
					<p>{general_instructions}</p>
				</div>
				<hr />
				<div className="walkIn-instructions">
					<p>Instructions for the Exam : </p>
					<p>{instructions}</p>
				</div>
				<hr />
				<div className="walkIn-instructions">
					<p>Minimum System Requirements : </p>
					<p>{min_sys_requirements}</p>
				</div>
			</DropDown>
			<section className="card slot-selection">
				<p className="text">Time Slots & Preferences</p>
				<p className="subText">Select a Time Slot :</p>
				{available_time_slots.map((slot) => (
					<div className="option-selection" key={slot.id}>
						<input
							type="radio"
							name="slot-selection"
							onChange={handleSlotChange}
							value={slot.id}
						/>
						<p className="text">
							{dayjs(slot.slot_start_time, "HH:mm:ss").format(
								"hh:mm A"
							)}{" "}
							to{" "}
							{dayjs(slot.slot_end_time, "HH:mm:ss").format(
								"hh:mm A"
							)}
						</p>
					</div>
				))}
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
	const { name, start_date, end_date, venue, roles, id } = walkIn;
	const navigate = useNavigate();

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

	const handleApply = async () => {
		const response = await apply({ ...applicationData, walkIn: id });
		if (response.success) {
			navigate(`/walkin/application/${response.data.id}`);
		}
	};

	return (
		<>
			<div className="walkIn">
				<div className="walkIn-header">
					<h2>{name}</h2>
					{showAllDetails && (
						<button onClick={handleApply}>APPLY</button>
						// <Link to="/application/submit">
						// </Link>
					)}
				</div>
				<p>Date & Time :</p>
				<span className="walkIn-date">
					{dayjs(start_date).format("DD-MMM-YYYY")} to{" "}
					{dayjs(end_date).format("DD-MMM-YYYY")}
				</span>
				<span> | </span>
				<span className="walkIn-location">
					<FaLocationDot />
					{venue.city}
				</span>
				<hr />
				<p>Job Roles :</p>
				<ul>
					{roles.map((role) => (
						<li key={role.id}>
							<img src={ROLE_ICONS[role.name]} alt="" />
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
