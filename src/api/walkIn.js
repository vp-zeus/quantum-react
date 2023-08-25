import InstructionalDesignerIcon from "src/assets/images/instructional-designer.png";
import SoftwareEngineerIcon from "src/assets/images/software-engineer.png";
import SoftwareQualityEngineerIcon from "src/assets/images/software-quality-engineer.png";
import dayjs from "dayjs";
import customParseformat from "dayjs/plugin/customParseFormat";
import config from "src/config/config";
import axios from "axios";

dayjs.extend(customParseformat);

const { API_ENDPOINT } = config;
const WALK_IN_ENDPOINT = `${API_ENDPOINT}api/walkin/`;

const data = [
	{
		id: 1,
		name: "Walk In for Designer Job Role",
		startDate: "10-Jul-2021",
		endDate: "11-Jul-2021",
		location: "Mumbai",
		roles: [
			{
				id: 1,
				name: "Instructional Designer",
				icon: InstructionalDesignerIcon,
				compensation: "Rs. 5,00,000 lpa",
				description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions - Develop course structure and learning specifications addressing the requirements of the target audience - Construct appropriate testing strategies to ensure learners' understanding and performance - Address usability issues - Keep abreast of new trends in e-learning - Ensure that the instructional strategies are as per global standards - Prepare instructional design checklists and guidelines - Check for quality assurance`,
				requirements: `- Experience in creating instructional plans and course maps. - Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction - Awareness of different instructional design models and familiarity with instructional and learning theories - Awareness of latest trends in e-learning and instructional design - Strong client consulting/interfacing skills. - Ability to guide clients to focus on specific objectives and teaching points - Strong meeting facilitation, presentation and interpersonal skills - A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
			},
		],
		expiresIn: "5 days",
		generalInstructions: `- We have a two–year indemnity for permanent candidates. We will provide training to the selected candidates.\n 
			- Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.`,
		instructions: `- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes. 
		\n- Candidates would not be able to appear for the exam if the web camera attached to their system is not functional. 
		\n- The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. 
		\n- Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. 
		\n- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam. 
		\n- Candidates cannot use an iOS system/device for this exam.`,
		minSysRequirements: `- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). 
		- The latest version of Google Chrome Browser only. - Please note that Internet speed should be minimum 1 Mbps. 
		- Do not use a MacBook or iPad for the proctored exam.`,
	},
	{
		id: 2,
		name: "Walk In for Multiple Job Roles",
		startDate: "3-Jul-2021",
		endDate: "4-Jul-2021",
		location: "Mumbai",
		roles: [
			{
				id: 1,
				name: "Instructional Designer",
				icon: InstructionalDesignerIcon,
				compensation: "Rs. 5,00,000 lpa",
				description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance`,
				requirements: `- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
			},
			{
				id: 2,
				name: "Software Engineer",
				icon: SoftwareEngineerIcon,
				compensation: "Rs. 5,00,000 lpa",
				description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance`,
				requirements: `- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
			},
			{
				id: 3,
				name: "Software Quality Engineer",
				icon: SoftwareQualityEngineerIcon,
				compensation: "Rs. 5,00,000 lpa",
				description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance`,
				requirements: `- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
			},
		],
		expiresIn: "5 days",
		generalInstructions: `- We have a two–year indemnity for permanent candidates. We will provide training to the selected candidates. 
			- Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.`,
		instructions: `- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes. 
		- Candidates would not be able to appear for the exam if the web camera attached to their system is not functional. 
		- The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. 
		- Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. 
		- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam. 
		- Candidates cannot use an iOS system/device for this exam.`,
		minSysRequirements: `- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). 
		- The latest version of Google Chrome Browser only. - Please note that Internet speed should be minimum 1 Mbps. 
		- Do not use a MacBook or iPad for the proctored exam.`,
	},
	{
		id: 3,
		name: "Walk In for Design and Development Job Role",
		startDate: "10-Jul-2021",
		endDate: "11-Jul-2021",
		location: "Mumbai",
		roles: [
			{
				id: 1,
				name: "Instructional Designer",
				icon: InstructionalDesignerIcon,
				compensation: "Rs. 5,00,000 lpa",
				description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions - Develop course structure and learning specifications addressing the requirements of the target audience - Construct appropriate testing strategies to ensure learners' understanding and performance - Address usability issues - Keep abreast of new trends in e-learning - Ensure that the instructional strategies are as per global standards - Prepare instructional design checklists and guidelines - Check for quality assurance`,
				requirements: `- Experience in creating instructional plans and course maps. - Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction - Awareness of different instructional design models and familiarity with instructional and learning theories - Awareness of latest trends in e-learning and instructional design - Strong client consulting/interfacing skills. - Ability to guide clients to focus on specific objectives and teaching points - Strong meeting facilitation, presentation and interpersonal skills - A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
			},
			{
				id: 2,
				name: "Software Engineer",
				icon: SoftwareEngineerIcon,
				compensation: "Rs. 5,00,000 lpa",
				description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions 
				\n- Develop course structure and learning specifications addressing the requirements of the target audience 
				\n- Construct appropriate testing strategies to ensure learners' understanding and performance 
				\n- Address usability issues - Keep abreast of new trends in e-learning 
				\n- Ensure that the instructional strategies are as per global standards 
				\n- Prepare instructional design checklists and guidelines 
				\n- Check for quality assurance`,
				requirements: `- Experience in creating instructional plans and course maps. - Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction - Awareness of different instructional design models and familiarity with instructional and learning theories - Awareness of latest trends in e-learning and instructional design - Strong client consulting/interfacing skills. - Ability to guide clients to focus on specific objectives and teaching points - Strong meeting facilitation, presentation and interpersonal skills - A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
			},
		],
		expiresIn: "5 days",
		generalInstructions: `- We have a two–year indemnity for permanent candidates. We will provide training to the selected candidates. 
			- Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.`,
		instructions: `- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes. 
		- Candidates would not be able to appear for the exam if the web camera attached to their system is not functional. 
		- The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. 
		- Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. 
		- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam. 
		- Candidates cannot use an iOS system/device for this exam.`,
		minSysRequirements: `- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). 
		- The latest version of Google Chrome Browser only. - Please note that Internet speed should be minimum 1 Mbps. 
		- Do not use a MacBook or iPad for the proctored exam.`,
	},
];

const roles = [
	{
		id: 1,
		name: "Instructional Designer",
		icon: InstructionalDesignerIcon,
		compensation: "Rs. 5,00,000 lpa",
		description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions - Develop course structure and learning specifications addressing the requirements of the target audience - Construct appropriate testing strategies to ensure learners' understanding and performance - Address usability issues - Keep abreast of new trends in e-learning - Ensure that the instructional strategies are as per global standards - Prepare instructional design checklists and guidelines - Check for quality assurance`,
		requirements: `- Experience in creating instructional plans and course maps. - Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction - Awareness of different instructional design models and familiarity with instructional and learning theories - Awareness of latest trends in e-learning and instructional design - Strong client consulting/interfacing skills. - Ability to guide clients to focus on specific objectives and teaching points - Strong meeting facilitation, presentation and interpersonal skills - A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
	},
	{
		id: 2,
		name: "Software Engineer",
		icon: SoftwareEngineerIcon,
		compensation: "Rs. 5,00,000 lpa",
		description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance`,
		requirements: `- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
	},
	{
		id: 3,
		name: "Software Quality Engineer",
		icon: SoftwareQualityEngineerIcon,
		compensation: "Rs. 5,00,000 lpa",
		description: `- Generate highly interactive and innovative instructional strategies for e-learning solutions \n- Develop course structure and learning specifications addressing the requirements of the target audience \n- Construct appropriate testing strategies to ensure learners' understanding and performance \n- Address usability issues \n- Keep abreast of new trends in e-learning \n- Ensure that the instructional strategies are as per global standards \n- Prepare instructional design checklists and guidelines \n- Check for quality assurance`,
		requirements: `- Experience in creating instructional plans and course maps. \n- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction \n- Awareness of different instructional design models and familiarity with instructional and learning theories \n- Awareness of latest trends in e-learning and instructional design \n- Strong client consulting/interfacing skills. \n- Ability to guide clients to focus on specific objectives and teaching points \n- Strong meeting facilitation, presentation and interpersonal skills \n- A thorough understanding of the web as an instructional medium \n- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism`,
	},
];

const getWalkins = async () => {
	const response = await axios.get(WALK_IN_ENDPOINT, {
		withCredentials: true,
	});
	const data = await response.data;
	return data;
};

const getWalkInById = async (id) => {
	const response = await axios.get(`${WALK_IN_ENDPOINT}${id}`);
	const data = await response.data;
	return data;
};

// data loaders

// Loader for application page
export const walkInLoader = async ({ params }) => {
	const walkInData = await getWalkInById(parseInt(params.id));
	return walkInData;
};

export { getWalkins, getWalkInById };
