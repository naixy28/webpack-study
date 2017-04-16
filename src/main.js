import { map } from 'lodash';
import template from './numberlist.hbs'

let numbers =  map([1,2,3,4,5,7], x => x*x );

console.log(template({numbers}));

document.getElementById('app-container').innerHTML = template({numbers});