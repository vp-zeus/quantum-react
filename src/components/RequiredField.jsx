import { Field, ErrorMessage } from "formik";
import CustomErrorMessage from "src/components/CustomFormError";
const RequiredField = (props) => {
	const { name, type, inputProps } = props;
	return (
		<>
			<Field name={name} type={type} {...inputProps} />
			<ErrorMessage component={CustomErrorMessage} name={name} />
		</>
	);
};

export default RequiredField;
