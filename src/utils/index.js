import _ from "lodash";

const deepSnakeCase = (o) => {
	return _.mapKeys(o, (value, key) => {
		if (_.isObject(value)) {
			value = deepSnakeCase(value);
		}
		return _.snakeCase(key);
	});
};

export { deepSnakeCase };
