// Just run "node ./visual-test" in a supported terminal to ensure things work.
const chalk = require('chalk');
const link = require('./');

console.log('-------');
console.log();
console.log(link('example', 'http://example.com'), '<-- Try holding command and clicking here.');
console.log();
console.log(link('hyperlinker', 'https://github.com/jamestalmage/hyperlinker') + ' is awesome!');
console.log();
console.log(chalk.cyan([
	'Module ',
	link('hyperlinker', 'https://github.com/jamestalmage/hyperlinker'),
	'works with',
	link('chalk', 'https://github.com/chalk/chalk')
].join(' ')));
console.log();
console.log(
	'Use the',
	link('id param', 'https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda#hover-underlining-and-the-id-parameter', {id: 'foo'}),
	'to visually connect\n two',
	link('separate links', 'https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda#hover-underlining-and-the-id-parameter', {id: 'foo'}),
	' (not widely supported).'
);
console.log();
console.log(link(
	[
		'Link',
		link('within', 'https://github.com/jamestalmage/hyperlinker'),
		'a link'
	].join(' '),
	'https://example.com'
));
console.log();
console.log('---------');
