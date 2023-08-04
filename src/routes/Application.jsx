import { useLoaderData } from "react-router-dom";
import WalkIn from "src/components/WalkIn";

const Application = () => {
	const walkInData = useLoaderData();

	return (
		<div className="container">
			<WalkIn walkIn={walkInData} showAllDetails={true} />
		</div>
	);
};

export default Application;
