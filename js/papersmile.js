---
---
$(document).ready(function() {

    $('#karty-img .img-thumbnail').click(function() {
        $('#img-big').attr('src', $(this).attr('src'));
    });

    $('.magnific-popup').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true
        },
        image: {
            tError: 'Nie udało sie wczytać obrazu.'
        }
    });

    // $('.popup-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    //     },
    //     image: {
    //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    //         titleSrc: function(item) {
    //             return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    //         }
    //     }
    // });


    reloadSets('#homepage-karta-' , {{ site.produkty.karty.size }}  , 3);
    reloadSets('#homepage-plakat-', {{ site.produkty.plakaty.size }}, 3);

    //window.setInterval(reloadSets, 60 * 1000); // every 60 sec

});