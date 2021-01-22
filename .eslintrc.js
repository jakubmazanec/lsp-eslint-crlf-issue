module.exports = {
	extends: ['eslint-config-prettier', 'eslint-config-prettier/react'],
	plugins: ['eslint-plugin-prettier'],
	rules: {
		// eslint-plugin-prettier rules
		'prettier/prettier': 'error',
	},
};
