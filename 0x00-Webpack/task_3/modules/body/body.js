import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");

// Initialize click counter.
let count = 0;

//Define updateCounter function
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// Bind updateCounter function to button click event with de
$('button').on('click', _.debounce(updateCounter, 500));

