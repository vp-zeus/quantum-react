import { Field, ErrorMessage } from "formik";
import CustomErrorMessage from "src/components/CustomFormError";
const RequiredField = (props) => {
	const { name, type, inputProps, children, as } = props;
	return (
		<>
			<Field name={name} type={type} as={as} {...inputProps}>
				{children}
			</Field>
			<ErrorMessage component={CustomErrorMessage} name={name} />
		</>
	);
};

export default RequiredField;
