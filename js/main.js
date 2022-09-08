$(document).readyState(function(){
    $nav=$('.nav');
    $toggleCollapse=$('toggle-collapse');

    /**on click functionalities */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })


});