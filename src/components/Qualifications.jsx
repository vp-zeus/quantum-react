import DropDown from "./DropDown";
import "src/assets/styles/qualifications.sass";
import _ from "lodash";
const Qualifications = (props) => {
	const skills = ["Javascript", "Angular JS", "React", "Node JS", "Others"];
	const { data, handleFormDataChange } = props;
	const onChange = (event) => {
		const { value, name } = event.target;
		const modifiedData = { ...data };

		if (
			name === "expertiseTechnologies" ||
			name === "familiarTechnologies"
		) {
			modifiedData[name] = _.xor(modifiedData[name], [value]);
		} else {
			modifiedData[name] = value;
		}
		handleFormDataChange(modifiedData);
	};
	return (
		<section className="qualifications">
			<DropDown heading="Educational Qualifications" defaultOpen={true}>
				<div className="form-input input-sm">
					<p className="input-title">
						Aggregate Percentage <sup>*</sup>
					</p>
					<input
						type="text"
						name="aggregatePercentage"
						value={data.aggregatePercentage}
						onChange={onChange}
					/>
				</div>
				<div className="form-input input-sm">
					<p className="input-title">
						Year of passing <sup>*</sup>
					</p>
					<select
						name="yearOfPassing"
						id=""
						value={data.yearOfPassing}
						onChange={onChange}
					>
						<option value=""></option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
					</select>
				</div>
				<div className="qualifications-grid">
					<div className="form-input">
						<p className="input-title">
							Qualification <sup>*</sup>
						</p>
						<select
							name="qualification"
							value={data.qualification}
							onChange={onChange}
						>
							<option value=""></option>
							<option value="Bachelor in Technology (B.Tech)">
								Bachelor in Technology (B.Tech)
							</option>
						</select>
					</div>
					<div className="form-input">
						<p className="input-title">
							Stream <sup>*</sup>
						</p>
						<select
							name="stream"
							value={data.stream}
							onChange={onChange}
							id=""
						>
							<option value=""></option>
							<option value="Information Technology">
								Information Technology
							</option>
						</select>
					</div>
				</div>
				<div className="qualifications-grid">
					<div className="form-input">
						<p className="input-title">
							College <sup>*</sup>
						</p>
						<select
							name="college"
							value={data.college}
							onChange={onChange}
						>
							<option value=""></option>
							<option value="Pune Institute of Technology (PIT)">
								Pune Institute of Technology (PIT)
							</option>
						</select>
					</div>
					<div className="form-input">
						<p className="input-title">
							If others, please enter your college name
						</p>
						<input
							type="text"
							name="otherCollege"
							value={data.otherCollege}
							onChange={onChange}
						/>
					</div>
				</div>
				<div className="form-input input-sm">
					<p className="input-title">
						Where is your college located?* <sup>*</sup>
					</p>
					<input
						type="text"
						name="collegeLocation"
						value={data.collegeLocation}
						onChange={onChange}
					/>
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
							<input
								type="radio"
								name="applicantType"
								onChange={onChange}
								value="Fresher"
								checked={data.applicantType === "Fresher"}
							/>
							<p className="text">Fresher</p>
						</div>
						<div className="option-selection">
							<input
								type="radio"
								name="applicantType"
								onChange={onChange}
								value="Experienced"
								checked={data.applicantType === "Experienced"}
							/>
							<p className="text">Experienced</p>
						</div>
					</div>
				</div>
				<div className="card exp">
					{data.applicantType === "Experienced" && (
						<>
							<div className="form-input input-sm">
								<p className="input-title">
									Years of Experience <sup>*</sup>
								</p>
								<input
									type="text"
									name="yearsOfExp"
									value={data.yearsOfExp}
									onChange={onChange}
								/>
							</div>
							<div className="form-input input-sm">
								<p className="input-title">
									Current CTC<sup>*</sup> (In Rupees)
								</p>
								<input
									type="text"
									name="currentCTC"
									value={data.currentCTC}
									onChange={onChange}
								/>
							</div>
							<div className="form-input input-sm">
								<p className="input-title">
									Expected CTC<sup>*</sup> (In Rupees)
								</p>
								<input
									type="text"
									name="expectedCTC"
									value={data.expectedCTC}
									onChange={onChange}
								/>
							</div>
							<p className="input-title">
								Select All The Technologies You Expertise In
								<sup>*</sup>
							</p>
							{skills.map((skill, index) => (
								<div key={index} className="option-selection">
									<input
										type="checkbox"
										name="expertiseTechnologies"
										value={skill}
										checked={data.expertiseTechnologies.includes(
											skill
										)}
										onChange={onChange}
									/>
									<p>{skill}</p>
								</div>
							))}

							<div className="form-input input-sm">
								<p className="input-title">
									If others, please mention
								</p>
								<input
									type="text"
									name="otherExpertiseTechnologies"
									value={data.otherExpertiseTechnologies}
									onChange={onChange}
								/>
							</div>
						</>
					)}
					<p className="input-title">
						Select All The Technologies You Are Familiar In
						<sup>*</sup>
					</p>
					{skills.map((skill, index) => (
						<div key={index} className="option-selection">
							<input
								type="checkbox"
								name="familiarTechnologies"
								value={skill}
								checked={data.familiarTechnologies.includes(
									skill
								)}
								onChange={onChange}
							/>
							<p>{skill}</p>
						</div>
					))}
					<div className="form-input input-sm">
						<p className="input-title">If others, please mention</p>
						<input
							type="text"
							name="otherFamiliarTechnologies"
							value={data.otherFamiliarTechnologies}
							onChange={onChange}
						/>
					</div>
					<p className="input-title">
						Are you currently on notice period?* <sup>*</sup>
					</p>
					<div className="qualifications-applicant">
						<div className="option-selection">
							<input type="radio" name="notice-period" />
							<p className="text">Yes</p>
						</div>
						<div className="option-selection">
							<input type="radio" name="notice-period" />
							<p className="text">No</p>
						</div>
					</div>
					<div className="qualifications-grid">
						<div className="form-input">
							<p className="input-title">
								If Yes, when will your notice period end?
								<sup>*</sup>
							</p>

							<input
								type="date"
								name="noticePeriodEnd"
								value={data.noticePeriodEnd}
								onChange={onChange}
							/>
						</div>
						<div className="form-input">
							<p className="input-title">
								How long is your notice period?* (Mention in
								months) <sup>*</sup>
							</p>
							<input
								type="text"
								name="noticePeriodDuration"
								value={data.noticePeriodDuration}
								onChange={onChange}
							/>
						</div>
					</div>
					<p className="input-title">
						Have You Appeared For Any Test By Zeus in the past 12
						months? <sup>*</sup>
					</p>
					<div className="qualifications-applicant">
						<div className="option-selection">
							<input type="radio" name="reappear" />
							<p className="text">Yes</p>
						</div>
						<div className="option-selection">
							<input type="radio" name="reappear" />
							<p className="text">No</p>
						</div>
					</div>
					<div className="form-input">
						<p className="input-title">
							If Yes, which role did you apply for?
							<sup>*</sup>
						</p>
						<input
							type="text"
							name="pastRoleApplied"
							value={data.pastRoleApplied}
							onChange={onChange}
						/>
					</div>
				</div>
			</DropDown>
		</section>
	);
};

export default Qualifications;
