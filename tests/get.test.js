import get from '../src/get.js';

if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('boom!');
}
if (get({ key: 'value' }, 'key', 'default value') !== 'value') {
  throw new Error('boom!');
}
if (get({}, 'key', 'value') !== 'value') {
  throw new Error('boom!');
}

console.log('Все тесты пройдены!');
