module.exports = {
	env: {
		// define global variables
		browser: true,
		"jest/globals": true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
		"plugin:jest/recommended",
		"prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier

		"plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		"prettier/react",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: "module",
	},
	settings: {
		react: {
			version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	plugins: ["react", "@typescript-eslint", "jest", "prettier"],
	rules: {
		"prettier/prettier": "warn",

		"import/prefer-default-export": "off",
		"jsx-quotes": ["off", "prefer-single"],
		"no-use-before-define": ["off"],
		"@typescript-eslint/no-use-before-define": ["off"],
		"no-unused-vars": ["off"],
	},
};
