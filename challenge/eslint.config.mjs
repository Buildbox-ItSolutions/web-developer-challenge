import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';


export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
	{
		rules: {
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			'react/react-in-jsx-scope': 'off',
			indent: ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			'no-trailing-spaces': 'error',
			'eol-last': ['error', 'always'],
		},
	},
];
