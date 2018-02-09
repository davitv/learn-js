import { head } from './fp';


const testBlock = document.getElementsByClassName('test-block')[0];
const counterBlock = document.getElementsByClassName('counter-block')[0];

let counter = 0;

console.log(head([1,2,3,4]));

testBlock.addEventListener('click', (e) => {
    counterBlock.innerHTML = 'Clicked: ' + (++counter) + ' times.';
});
