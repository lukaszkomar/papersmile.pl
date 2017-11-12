$(document).ready(function() {
    if($('#karty-img .img-thumbnail'))
    {
        $('#karty-img .img-thumbnail').click(function() {
            $('#img-big').attr('src', $(this).attr('src'));
        });
    }
});