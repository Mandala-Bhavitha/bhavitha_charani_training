// Assignment: between 1 and 10 --> numbers resulting sum 10

outer:
for (var i = 1; i <= 9; i++) {

    for (var j = 1; j <= 9; j++) {

        if (i + j === 9) {
            console.log(i, j);
        }

    }

}