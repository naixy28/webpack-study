import { map } from 'lodash';

let numbers =  map([1,2,3,4,5,7], x => x*x );

setTimeout(  () => {
    require( ['./numberlist.hbs'], template => {
        document.getElementById('app-container').innerHTML = template({numbers});
    })
} ,2000);