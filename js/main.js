$(document).readyState(function(){
    $nav=$('.nav');
    $toggleCollapse=$('toggle-collapse');

    /**on click function */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })


});