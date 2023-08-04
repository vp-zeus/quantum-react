import { useEffect, useState } from "react";
import { getWalkins } from "src/api/walkIn";
import WalkIn from "src/components/WalkIn";

const Dashboard = () => {
	const [walkInData, setWalkIndData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await getWalkins();
			setWalkIndData(data);
		};

		getData();
	}, []);
	return (
		<>
			{walkInData.map((walkIn) => (
				<WalkIn walkIn={walkIn} key={walkIn.id} />
			))}
		</>
	);
};

export default Dashboard;
