import numeral from 'numeral';
import {getUsers, deleteUser} from './api/userApi';
//import { link } from 'fs';
//import './index.css';

// var coarseValue = numeral(10000).format('$0,0.00');
// debugger;
// console.log(`I would pay ${coarseValue} for this wonderful coarse`);

//Populates table of users via API call
getUsers().then(result => {
    let usersBody = "";

   result.forEach(user => {
       usersBody += `<tr>
       <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
       <td>${user.id}</td>
       <td>${user.firstName}</td>
       <td>${user.lastName}</td>
       <td>${user.email}</td>
       </tr>`
   }); 

   global.document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    //Must use array.from to create a real array from a DOM collection
    //getElementByClassName only returns an "array like" object
    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});