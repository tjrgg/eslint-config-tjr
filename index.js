'use strict';

module.exports = {
	env: {
		node: true,
		es6: true
	},
	rules: {
		'arrow-parens': [ 'error', 'always' ],
		'brace-style': [ 'error', 'stroustrup', { 'allowSingleLine': true } ],
		'capitalized-comments': 'off',
		'curly': [ 'warn', 'multi-line' ],
		'func-names': [ 'warn', 'as-needed' ],
		'linebreak-style': [ 'warn', 'unix' ]
	}
};
