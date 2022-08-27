var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
$(tooltipTriggerList).onmouseenter, function(tooltipTriggerEl) {
    //setVisible
    setTimeout(function(){
        $(this).find('.tooltip').fadeOut();
    }, 5000);
}

$(tooltipTriggerList).onmouseover, function(){
    setTimeout(function(){
        $(this).find('.tooltip').fadeOut();
    }, 2000);
}

$(tooltipTriggerList).onmouseover, function(){
    setTimeout(function(){
        $(this).find('.tooltip').fadeOut();
    });
}
