---
---
$(document).ready(function() {

    $('#karty-img .img-thumbnail').click(function() {
        $('#img-big').attr('src', $(this).attr('src'));
    });

    reloadSets('#homepage-karta-', 1, {{ site.produkty.karty.size }});
    reloadSets('#homepage-plakat-', 1, 4);

    //window.setInterval(reloadSets, 60 * 1000); // every 60 sec
});