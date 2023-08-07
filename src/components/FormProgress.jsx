import { Fragment } from "react";
const FormProgress = (props) => {
	const { steps, activeStep } = props;

	return (
		<section className="card progress">
			{steps.map((step, index) => {
				return (
					<Fragment key={step.id}>
						<div className="step">
							<p
								className={`step-marker ${
									index === activeStep && "active"
								}`}
							>
								{index + 1}
							</p>
							<span className="step-text">{step.title}</span>
						</div>
						{index < steps.length - 1 && (
							<span className="separator"></span>
						)}
					</Fragment>
				);
			})}
		</section>
	);
};

export default FormProgress;
