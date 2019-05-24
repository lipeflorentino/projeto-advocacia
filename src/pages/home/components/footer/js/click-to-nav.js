import $ from 'jquery';

$(document).ready(function() {
    
    $('.btn-class-footer').click(function() {
        window.scrollTo(0, 0);
    });
    
    $('#upToHome').click(function() {
        $('html, body').animate({
            scrollTop: '0px'
        }, 1500);
        return false;
    });

    $('#upToAtuacao').click(function() {
        $('html, body').animate({
            scrollTop: '600px'
        }, 1500);
        return false;
    });
        
    $('#upToEscritorio').click(function() {
        $('html, body').animate({
            scrollTop: '1200px'
        }, 1500);
        return false;
    });
    
    $('#upToAdvogado').click(function() {
        $('html, body').animate({
            scrollTop: '1840px'
        }, 1500);
        return false;
    });
    
    $('#upToContato').click(function() {
        $('html, body').animate({
            scrollTop: '2650px'
        }, 1500);
        return false;
    });
});
