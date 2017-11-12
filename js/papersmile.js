$(document).ready(function() {

    $('#karty-img .img-thumbnail').click(function() {
        $('#img-big').attr('src', $(this).attr('src'));
    });



    /**
     * Losowe zestawy
     */
    var reloadSets = function() {

        var min = 1,
            max = 4,
            randNumber =  Math.floor(Math.random() * (max - min) + min + 0.9)
            ;

        console.log('reloadSets', min, max, randNumber);

        $.each([ 1, 2, 3, 4], function( index, setId ) {

            if (setId == randNumber) {
                $('#homepage-plakat-' + setId).hide();
            } else {
                $('#homepage-plakat-' + setId).show();
            }
        });
    };


    /**
     * Losowe foty mustsee
     */
    window.setInterval(reloadSets, 60 * 1000); // every 60 sec
});