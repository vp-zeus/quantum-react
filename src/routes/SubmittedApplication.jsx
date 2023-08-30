import "src/assets/styles/submittedApplication.sass";
import { MdCheckCircle } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);
const SubmittedApplication = () => {
	const application = useLoaderData();
	const { walk_in, preferred_time_slot } = application;
	console.log(application);

	const WALK_IN_DATE_FORMAT = "Do MMMM YYYY";
	const TIME_INPUT_FORMAT = "HH:mm:ss";
	const TIME_FORMAT = "h:mm A";
	return (
		<main className="walkIn-container">
			<div className="card application">
				<MdCheckCircle className="application-success" />
				<h1 className="application-header">
					Congratulations ! You have successfully applied for the
					walk-in opportunity
				</h1>
				<hr />

				<p className="subText">Date & Time of Walk-In :</p>
				<p className="text">
					{dayjs(walk_in?.start_date).format(WALK_IN_DATE_FORMAT)}
				</p>
				<p className="text">
					{dayjs(
						preferred_time_slot.slot_start_time,
						TIME_INPUT_FORMAT
					).format(TIME_FORMAT)}{" "}
					to{" "}
					{dayjs(
						preferred_time_slot.slot_end_time,
						TIME_INPUT_FORMAT
					).format(TIME_FORMAT)}
				</p>
				<hr />

				<p className="subText">Venue of Walk-In :</p>
				<p className="text">
					{walk_in?.venue?.address_line_1}
					<br />
					{walk_in?.venue?.address_line_2}
					<br />
					{walk_in?.venue?.city} - {walk_in?.venue?.pincode}
				</p>
				<hr />

				<p className="subText">THINGS TO REMEMBER :</p>
				<p className="text">
					- Please report 30 MINUTES prior to your reporting time.
					<br />
					-Download your Hall Ticket from below and carry it with you
					during your Walk-In.
				</p>
				<hr />
				<button className="btn">DOWNLOAD HALL TICKET</button>
			</div>
		</main>
	);
};

export default SubmittedApplication;
