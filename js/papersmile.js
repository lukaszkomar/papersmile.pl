---
---
$(document).ready(function() {

    $('#karty-img .img-thumbnail').click(function() {
        $('#img-big').attr('src', $(this).attr('src'));
    });

    reloadSets('#homepage-karta-' , {{ site.produkty.karty.size }}  , 3);
    reloadSets('#homepage-plakat-', {{ site.produkty.plakaty.size }}, 3);

    //window.setInterval(reloadSets, 60 * 1000); // every 60 sec
});