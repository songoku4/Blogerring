$(document).readyState(function(){
    $nav=$('.nav');
    $toggleCollapse=$('toggle-collapse');

    /**On click functionalities */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })


});