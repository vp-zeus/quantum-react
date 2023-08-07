import "src/assets/styles/fileUpload.sass";
import { MdOutlineFileUpload } from "react-icons/md";
import { useRef } from "react";
const FileUpload = ({ file, handleFileChange }) => {
	const fileRef = useRef();

	const handleUpload = () => {
		fileRef.current.click();
	};

	return (
		<>
			<div className="fileUpload" onClick={handleUpload}>
				{file ? (
					<p className="text">{file.name}</p>
				) : (
					<>
						<MdOutlineFileUpload className="fileUpload-icon" />
						<p className="text">UPLOAD UPDATED RESUME</p>
					</>
				)}
				<input
					type="file"
					ref={fileRef}
					onChange={handleFileChange}
					name="fileUpload"
				/>
			</div>
		</>
	);
};

export default FileUpload;
