import superhero from './index.js';
import test from 'ava';

test('superhero return type to be string', t => {
	t.is(typeof superhero(), 'string');
});