
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

        var min = 1, array = {};

        for (i = min; i <= max; i++) {
            array[i] = i;
        }

        array.forEach(function(item, index) {
            $(selectorPrefix + index).hide();
        });

        console.log('reloadSets Params:', selectorPrefix, min, max, array);

        resultArray = shuffle(array).slice(0,limit);

        console.log('reloadSets resultArray:', resultArray);


        resultArray.forEach(function(item, index) {
            console.log('foreach', item,index);
            $(selectorPrefix + index).show();
        });
    };

    // var getRandom = function(arr, n) {
    //
    //     random = array.sort(() => .5 - Math.random()).slice(0,n)
    //
    //
    //     var result = new Array(n),
    //         len = arr.length,
    //         taken = new Array(len);
    //     if (n > len)
    //         throw new RangeError("getRandom: more elements taken than available");
    //     while (n--) {
    //         var x = Math.floor(Math.random() * len);
    //         result[n] = arr[x in taken ? taken[x] : x];
    //         taken[x] = --len;
    //     }
    //     return result;
    // }
