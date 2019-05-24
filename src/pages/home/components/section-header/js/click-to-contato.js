import $ from 'jquery';

$(document).ready(function() {
    
    $('.btn-class').click(function() {
        $('html, body').animate({
            scrollTop: '2650px'
        }, 1500);
        return false;
    });
});