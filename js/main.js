$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('toggle-collapse');

    /**On Click functionalities */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })




});