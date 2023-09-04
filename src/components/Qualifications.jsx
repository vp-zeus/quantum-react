import DropDown from "./DropDown";
import "src/assets/styles/qualifications.sass";
import _ from "lodash";
import { Form, useLoaderData } from "react-router-dom";
import { ErrorMessage, Field, useFormikContext } from "formik";
import RequiredField from "src/components/RequiredField";
import CustomErrorMessage from "src/components/CustomFormError";

const Qualifications = () => {
	const { skills, colleges, degrees, streams } = useLoaderData();
	const { values } = useFormikContext();

	const dataLabel = (field) => `qualifications.${field}`;
	const applicantType = _.get(values, dataLabel("applicantType"));
	const onNoticePeriod = _.get(values, dataLabel("onNoticePeriod"));
	const appliedRecently = _.get(values, dataLabel("appliedRecently"));
	return (
		<Form className="qualifications">
			<DropDown heading="Educational Qualifications" defaultOpen={true}>
				<div className="form-input input-sm">
					<p className="input-title">
						Aggregate Percentage <sup>*</sup>
					</p>
					<RequiredField
						name={dataLabel("aggregatePercentage")}
						type="text"
						inputProps={{
							placeholder: "Percentage*",
						}}
					/>
				</div>
				<div className="form-input input-sm">
					<p className="input-title">
						Year of passing <sup>*</sup>
					</p>
					<RequiredField
						name={dataLabel("yearOfPassing")}
						as="select"
					>
						<option value=""></option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
					</RequiredField>
				</div>
				<div className="qualifications-grid">
					<div className="form-input">
						<p className="input-title">
							Degree <sup>*</sup>
						</p>
						<RequiredField name={dataLabel("degree")} as="select">
							<option value=""></option>
							{degrees.map((degree) => (
								<option key={degree.id} value={degree.id}>
									{degree.name}
								</option>
							))}
						</RequiredField>
					</div>
					<div className="form-input">
						<p className="input-title">
							Stream <sup>*</sup>
						</p>
						<RequiredField name={dataLabel("stream")} as="select">
							<option value=""></option>
							{streams.map((stream) => (
								<option key={stream.id} value={stream.id}>
									{stream.name}
								</option>
							))}
						</RequiredField>
					</div>
				</div>
				<div className="qualifications-grid">
					<div className="form-input">
						<p className="input-title">
							College <sup>*</sup>
						</p>
						<RequiredField name={dataLabel("college")} as="select">
							<option value=""></option>
							{colleges.map((college) => (
								<option key={college.id} value={college.id}>
									{college.name}
								</option>
							))}
						</RequiredField>
					</div>
					<div className="form-input">
						<p className="input-title">
							If others, please enter your college name
						</p>
						<Field type="text" name={dataLabel("otherCollege")} />
					</div>
				</div>
				<div className="form-input input-sm">
					<p className="input-title">
						Where is your college located? <sup></sup>
					</p>
					<Field type="text" name={dataLabel("collegeLocation")} />
				</div>
			</DropDown>
			<br />
			<DropDown heading="Professional Qualification" styling={false}>
				<div className="applicant-container">
					<p className="input-title">
						Applicant Type <sup>*</sup>
					</p>
					<div className="qualifications-applicant">
						<div className="option-selection">
							<Field
								type="radio"
								value="FRESHER"
								name={dataLabel("applicantType")}
							/>
							<p className="text">Fresher</p>
						</div>
						<div className="option-selection">
							<Field
								type="radio"
								value="EXPERIENCED"
								name={dataLabel("applicantType")}
							/>
							<p className="text">Experienced</p>
						</div>
					</div>
					<ErrorMessage
						component={CustomErrorMessage}
						name={dataLabel("applicantType")}
					/>
				</div>
				<div className="card exp">
					{applicantType === "EXPERIENCED" && (
						<>
							<div className="form-input input-sm">
								<p className="input-title">
									Years of Experience <sup>*</sup>
								</p>
								<RequiredField
									type="text"
									name={dataLabel("yearsOfExp")}
								/>
							</div>
							<div className="form-input input-sm">
								<p className="input-title">
									Current CTC<sup>*</sup> (In Rupees)
								</p>
								<RequiredField
									type="text"
									name={dataLabel("currentCTC")}
								/>
							</div>
							<div className="form-input input-sm">
								<p className="input-title">
									Expected CTC<sup>*</sup> (In Rupees)
								</p>
								<RequiredField
									type="text"
									name={dataLabel("expectedCTC")}
								/>
							</div>
							<p className="input-title">
								Select All The Technologies You Expertise In
								<sup>*</sup>
							</p>
							{skills.map((skill) => (
								<div
									key={skill.id}
									className="option-selection"
								>
									<Field
										type="checkbox"
										name={dataLabel("expertSkills")}
										value={`${skill.id}`}
									/>
									<p>{skill.name}</p>
								</div>
							))}

							<div className="form-input input-sm">
								<p className="input-title">
									If others, please mention
								</p>
								<RequiredField
									type="text"
									name={dataLabel("otherExpertSkills")}
								/>
							</div>
						</>
					)}
					<p className="input-title">
						Select All The Technologies You Are Familiar In
						<sup>*</sup>
					</p>
					{skills.map((skill) => (
						<div key={skill.id} className="option-selection">
							<Field
								type="checkbox"
								name={dataLabel("familiarSkills")}
								value={`${skill.id}`}
							/>
							<p>{skill.name}</p>
						</div>
					))}
					<div className="form-input input-sm">
						<p className="input-title">
							If others, please mention*
						</p>
						<RequiredField
							type="text"
							name={dataLabel("otherFamiliarSkills")}
						/>
					</div>
					<p className="input-title">
						Are you currently on notice period?* <sup>*</sup>
					</p>
					<div className="qualifications-applicant">
						<div className="option-selection">
							<Field
								type="radio"
								name={dataLabel("onNoticePeriod")}
								value="yes"
							/>
							<p className="text">Yes</p>
						</div>
						<div className="option-selection">
							<Field
								type="radio"
								name={dataLabel("onNoticePeriod")}
								value="no"
							/>
							<p className="text">No</p>
						</div>
					</div>
					<ErrorMessage
						component={CustomErrorMessage}
						name={dataLabel("onNoticePeriod")}
					/>

					{onNoticePeriod === "yes" && (
						<div className="qualifications-grid">
							<div className="form-input">
								<p className="input-title">
									If Yes, when will your notice period end?
									<sup>*</sup>
								</p>
								<RequiredField
									type="date"
									name={dataLabel("noticePeriodEnd")}
								/>
							</div>
							<div className="form-input">
								<p className="input-title">
									How long is your notice period?* (Mention in
									months) <sup>*</sup>
								</p>
								<RequiredField
									type="text"
									name={dataLabel("noticePeriodDuration")}
								/>
							</div>
						</div>
					)}
					<p className="input-title">
						Have You Appeared For Any Test By Zeus in the past 12
						months? <sup>*</sup>
					</p>
					<div className="qualifications-applicant">
						<div className="option-selection">
							<Field
								type="radio"
								name={dataLabel("appliedRecently")}
								value="yes"
							/>
							<p className="text">Yes</p>
						</div>
						<div className="option-selection">
							<Field
								type="radio"
								name={dataLabel("appliedRecently")}
								value="no"
							/>
							<p className="text">No</p>
						</div>
					</div>
					<ErrorMessage
						component={CustomErrorMessage}
						name={dataLabel("appliedRecently")}
					/>
					{appliedRecently === "yes" && (
						<div className="form-input">
							<p className="input-title">
								If Yes, which role did you apply for?
								<sup>*</sup>
							</p>
							<RequiredField
								type="text"
								name={dataLabel("pastRoleApplied")}
							/>
						</div>
					)}
				</div>
			</DropDown>
		</Form>
	);
};

export default Qualifications;
