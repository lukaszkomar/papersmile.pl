
    /**
     * @see http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
     */
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    /**
     * Losowe zestawy
     */
    var reloadSets = function(selectorPrefix, max, limit) {

        var min = 1, array = [];

        for (i = min; i <= max; i++) {
            array.push(i);
        }

        array.forEach(function(item, index) {
            $(selectorPrefix + item).hide();
        });

        //console.log('reloadSets Params:', selectorPrefix, max, limit, array);

        resultArray = shuffle(array).slice(0,limit);

        console.log('reloadSets resultArray:', selectorPrefix, resultArray);

        resultArray.forEach(function(item, index) {
            $(selectorPrefix + item).show();
        });
    };