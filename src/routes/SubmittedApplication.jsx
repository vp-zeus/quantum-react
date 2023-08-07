import "src/assets/styles/submittedApplication.sass";
import { MdCheckCircle } from "react-icons/md";
const SubmittedApplication = () => {
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
				<p className="text">03rd July 2021</p>
				<p className="text">9:00 AM to 11:00 AM</p>
				<hr />

				<p className="subText">Venue of Walk-In :</p>
				<p className="text">
					Zeus Systems Pvt. Ltd. 1402, 14th Floor, Tower B, Peninsula{" "}
					<br />
					Business Park. Ganpatrao Kadam Marg Lower Parel (W) <br />
					Mumbai - 400 013 Phone: +91-22-66600000
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
