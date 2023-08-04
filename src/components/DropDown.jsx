import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "src/assets/styles/dropdown.sass";
const DropDown = (props) => {
	const { heading, children, defaultOpen } = props;

	const [open, setOpen] = useState(!!defaultOpen);

	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};
	return (
		<div className="dropdown">
			<div className="dropdown-heading">
				<p>{heading}</p>
				{open ? (
					<MdKeyboardArrowUp className="icon" onClick={toggleOpen} />
				) : (
					<MdKeyboardArrowDown
						className="icon"
						onClick={toggleOpen}
					/>
				)}
			</div>
			{open && <div className="dropdown-content">{children}</div>}
			{/* <div className={`dropdown-content ${open && "hidden"}`}>
				{children}
			</div> */}
		</div>
	);
};

export default DropDown;
