import _ from "lodash";
import { useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import "src/assets/styles/personalInformation.sass";
import { useLoaderData } from "react-router-dom";
import FileUpload from "./FileUpload";
const PersonalInformation = (props) => {
	// const roles = [
	// 	{
	// 		id: 1,
	// 		name: "Instructional Designer",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Software Engineer",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Software Quality Engineer",
	// 	},
	// ];

	const { data, handleFormDataChange } = props;
	const profilePicRef = useRef();
	const { roles } = useLoaderData();

	const onChange = (event) => {
		const { type, value, name, files, checked } = event.target;
		const modifiedData = { ...data };

		if (name === "fileUpload") {
			modifiedData["resume"] = files[0];
		} else if (name === "profilePic") {
			modifiedData["profilePic"] = files[0];
		} else if (name === "mailList") {
			modifiedData[name] = checked;
		} else if (type === "checkbox") {
			modifiedData["preferredRoles"] = _.xor(
				modifiedData["preferredRoles"],
				[parseInt(value)]
			);
		} else {
			modifiedData[name] = value;
		}

		handleFormDataChange(modifiedData);
	};

	const handleUpload = () => {
		profilePicRef.current.click();
	};

	return (
		<form className="card personal-information">
			<section>
				<div className="form-input">
					<p className="input-title">
						First name <sup>*</sup>
					</p>
					<input
						type="text"
						placeholder="First Name"
						name="firstName"
						value={data.firstName}
						onChange={onChange}
					/>
				</div>
				<div className="form-input">
					<p className="input-title">
						Last name <sup>*</sup>
					</p>
					<input
						type="text"
						placeholder="Last Name"
						name="lastName"
						value={data.lastName}
						onChange={onChange}
					/>
				</div>
				<div className="form-input">
					<p className="input-title">
						Email <sup>*</sup>
					</p>
					<input
						type="email"
						placeholder="Email"
						name="email"
						value={data.email}
						onChange={onChange}
					/>
				</div>
				<div className="form-input">
					<p className="input-title">
						Password <sup>*</sup>
					</p>
					<input
						type="text"
						placeholder="Password"
						name="password"
						value={data.password}
						onChange={onChange}
					/>
				</div>
				<div className="form-input phone">
					<p className="input-title">
						Phone Number <sup>*</sup>
					</p>
					<input
						type="tel"
						placeholder="phone number"
						name="phone"
						pattern="[0-9]{10}"
						value={data.phone}
						onChange={onChange}
					/>
				</div>
				<FileUpload file={data.resume} handleFileChange={onChange} />

				<div className="form-input">
					<p className="input-title">Enter portfolio URL (if any)</p>
					<input
						type="text"
						placeholder="URL"
						name="portfolioURL"
						value={data.portfolioURL}
						onChange={onChange}
					/>
				</div>

				<p className="input-title">
					Preferred Job Roles <sup>*</sup>
				</p>
				{roles.map((role) => (
					<div key={role.id} className="option-selection">
						<input
							type="checkbox"
							value={role.id}
							checked={data.preferredRoles.includes(role.id)}
							onChange={onChange}
						/>
						<p>{role.name}</p>
					</div>
				))}
				<div className="form-input phone">
					<p className="input-title">
						If You Are Registering Via A Referral, Please Mention
						Full Name Of The Employee Who Referred You
					</p>
					<input
						type="text"
						value={data.referral}
						onChange={onChange}
					/>
				</div>

				<div className="option-selection">
					<input
						type="checkbox"
						checked={data.mailList}
						name="mailList"
						onChange={onChange}
					/>
					<p>Send me job related updates via mail</p>
				</div>
			</section>
			<section>
				<div className="upload">
					{data.profilePic ? (
						<img
							src={URL.createObjectURL(data.profilePic)}
							alt=""
							className="upload-preview"
						/>
					) : (
						<FaRegUserCircle className="upload-placeholder" />
					)}
					<p className="upload-text" onClick={handleUpload}>
						UPLOAD DISPLAY PICTURE
					</p>
					<small className="subText">Max. image size: 5 MB</small>
					<input
						type="file"
						accept="image/png, image/jpeg"
						name="profilePic"
						ref={profilePicRef}
						onChange={onChange}
					/>
				</div>
			</section>
		</form>
	);
};

export default PersonalInformation;
