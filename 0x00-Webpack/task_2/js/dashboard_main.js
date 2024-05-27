import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Append elements to the body.
$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");

// Initialize click counter.
let count = 0;

//Define updateCounter function
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// Bind updateCounter function to button click event with de
$('button').on('click', _.debounce(updateCounter, 500));
