import $ from 'jquery';

$(document).ready(function() {
    
    $('.btn-class-footer').click(function() {
        window.scrollTo(0, 0);
    });
    
    $('#toHome').click(function() {
        $('html, body').animate({
            scrollTop: '0px'
        }, 1500);
        return false;
    });

    $('#toAtuacao').click(function() {
        $('html, body').animate({
            scrollTop: '600px'
        }, 1500);
        return false;
    });
        
    $('#toEscritorio').click(function() {
        $('html, body').animate({
            scrollTop: '1200px'
        }, 1500);
        return false;
    });
    
    $('#toAdvogado').click(function() {
        $('html, body').animate({
            scrollTop: '1840px'
        }, 1500);
        return false;
    });
    
    $('#toContato').click(function() {
        $('html, body').animate({
            scrollTop: '2650px'
        }, 1500);
        return false;
    });
});
