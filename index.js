'use strict';

module.exports = {
	env: {
		node: true,
		es6: true
	},
	extends: 'xo',
	rules: {
		'array-bracket-spacing': [ 'error', 'always' ],
		'arrow-parens': [ 'error', 'always' ],
		'brace-style': [ 'error', 'stroustrup', { 'allowSingleLine': true } ],
		'capitalized-comments': 'off',
		'curly': [ 'warn', 'multi-line' ],
		'func-names': [ 'warn', 'as-needed' ],
		'linebreak-style': [ 'warn', 'unix' ],
		'no-multiple-empty-lines': [ 'error', { 'max': 3 } ],
		'object-curly-spacing': [ 'error', 'always' ],
		'padded-blocks': [ 'error', { 'blocks': 'never', 'classes': 'always', 'switches': 'never' } ],
		'quote-props': [ 'error', 'consistent' ],
		'radix': [ 'error', 'as-needed' ],
		'unicorn/filename-case': [ 'error', { 'cases': { 'camelCase': true, 'kebabCase': true, 'pascalCase': true } } ]
	}
};
