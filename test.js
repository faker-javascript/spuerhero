import test from 'ava';
import superhero from './index.js';

test('superhero return type to be string', t => {
    t.is(typeof superhero(), 'string');
});
