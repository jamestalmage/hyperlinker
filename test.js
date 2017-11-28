import test from 'ava';
import m from '.';

test('simple link', t => {
	t.is(m('foo', 'example.com'), '\u001B]8;;example.com\u0007foo\u001B]8;;\u0007');
});

test('with id', t => {
	t.is(m('foo', 'example.com', {id: '3'}), '\u001B]8;id=3;example.com\u0007foo\u001B]8;;\u0007');
});

test('with multiple params', t => {
	t.is(m('foo', 'example.com', {id: '3', bar: 'baz'}), '\u001B]8;id=3:bar=baz;example.com\u0007foo\u001B]8;;\u0007');
});
