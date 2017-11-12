    /**
     * Losowe zestawy
     */
    var reloadSets = function(selectorPrefix, min, max) {

        var randNumber =  Math.floor(Math.random() * (max - min) + min + 0.9);

        console.log('reloadSets: ', selectorPrefix, min, max, randNumber);

        for (i = min; i <= max; i++) {
            if (i == randNumber) {
                $(selectorPrefix + i).hide();
            } else {
                $(selectorPrefix + i).show();
            }
        }
    };