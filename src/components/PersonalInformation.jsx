import _ from "lodash";
import { useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import "src/assets/styles/personalInformation.sass";
import { useLoaderData } from "react-router-dom";
import FileUpload from "./FileUpload";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import CustomErrorMessage from "src/components/CustomFormError";
import RequiredField from "src/components/RequiredField";
const PersonalInformation = () => {
	const { setFieldValue, values } = useFormikContext();
	const profilePicRef = useRef();
	const { roles } = useLoaderData();

	const dataLabel = (key) => `personalInformation.${key}`;

	const onChange = async (event) => {
		const { name, files } = event.target;

		if (name == "fileUpload") {
			setFieldValue(dataLabel("resume"), files[0]);
		} else if (name === "profilePic") {
			setFieldValue(dataLabel("profilePic"), files[0]);
		}
	};

	const handleUpload = () => {
		profilePicRef.current.click();
	};

	const profilePic = _.get(values, dataLabel("profilePic"));
	return (
		<Form className="card personal-information">
			<section>
				<div className="form-input">
					<p className="input-title">
						First name <sup>*</sup>
					</p>
					<RequiredField
						name={dataLabel("firstName")}
						type="text"
						inputProps={{
							placeholder: "First Name*",
						}}
					/>
				</div>
				<div className="form-input">
					<p className="input-title">
						Last name <sup>*</sup>
					</p>
					<RequiredField
						name={dataLabel("lastName")}
						type="text"
						inputProps={{
							placeholder: "Last Name*",
						}}
					/>
				</div>
				<div className="form-input">
					<p className="input-title">
						Email <sup>*</sup>
					</p>
					<RequiredField
						name={dataLabel("email")}
						type="email"
						inputProps={{
							placeholder: "Email ID*",
						}}
					/>
				</div>
				<div className="form-input">
					<p className="input-title">
						Password <sup>*</sup>
					</p>
					<RequiredField
						name={dataLabel("password")}
						type="password"
						inputProps={{
							placeholder: "Password*",
						}}
					/>
				</div>
				<div className="form-input phone">
					<p className="input-title">
						Phone Number <sup>*</sup>
					</p>
					<RequiredField
						name={dataLabel("phone")}
						type="tel"
						inputProps={{
							placeholder: "Phone*",
						}}
					/>
				</div>
				<FileUpload
					file={_.get(values, dataLabel("resume"))}
					handleFileChange={onChange}
				/>

				<div className="form-input">
					<p className="input-title">Enter portfolio URL (if any)</p>
					<Field
						type="text"
						name={dataLabel("portfolioURL")}
						placeholder="URL"
					/>
				</div>

				<p className="input-title">
					Preferred Job Roles <sup>*</sup>
				</p>
				{roles.map((role) => (
					<div key={role.id} className="option-selection">
						<Field
							name={dataLabel("preferredRoles")}
							type="checkbox"
							value={`${role.id}`}
						/>
						<p>{role.name}</p>
					</div>
				))}
				<ErrorMessage
					component={CustomErrorMessage}
					name={dataLabel("preferredRoles")}
				/>
				<div className="form-input phone">
					<p className="input-title">
						If You Are Registering Via A Referral, Please Mention
						Full Name Of The Employee Who Referred You
					</p>
					<Field type="text" name={dataLabel("referral")} />
				</div>

				<div className="option-selection">
					<Field type="checkbox" name={dataLabel("mailList")} />

					<p>Send me job related updates via mail</p>
				</div>
			</section>
			<section>
				<div className="upload">
					{profilePic ? (
						<img
							src={URL.createObjectURL(profilePic)}
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
		</Form>
	);
};

export default PersonalInformation;
