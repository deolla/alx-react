import $ from 'jquery'; // Import jQuery
import _ from 'lodash'

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-btn">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');
    
const updateCounter = () => {
    let count = 0; // Initialize count
    
    $('#count').text(`${count} clicks on the button`);
    $('#button').click(() => {
        count++;
        $('#count').text(`${count} clicks on the button`);
    });
}

const debouncedUpdateCounter = _.debounce(updateCounter);
$(document).ready(debouncedUpdateCounter);
