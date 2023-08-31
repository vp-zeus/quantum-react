import _ from "lodash";

const deepMapKeys = (obj, fn) => {
	let newObj = {};

	_.forOwn(obj, (value, key) => {
		if (_.isPlainObject(value)) value = deepMapKeys(value, fn);

		newObj[fn(value, key)] = value;
	});

	return newObj;
};

const toSnakeCase = (obj) => {
	return deepMapKeys(obj, (v, k) => _.snakeCase(k));
};

const toCamelCase = (obj) => {
	return deepMapKeys(obj, (v, k) => _.camelCase(k));
};

export { deepMapKeys, toCamelCase, toSnakeCase };
