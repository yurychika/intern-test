define([
	'intern!object',
	'intern/chai!assert',
], function (registerSuite, assert) {
	registerSuite({
		name: 'async demo',

		'async test': function () {
			assert.equal(1, 2, 'should be equal');
		}
	});
});