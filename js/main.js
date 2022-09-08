$(document).readyState(function(){
    $nav=$('.nav');
    $toggleCollapse=$('toggle-collapse');

    /**on click functionalitie1 */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })


});