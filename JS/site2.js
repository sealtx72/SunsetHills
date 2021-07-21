let array1 = [3, 2, 4, 7, 6, 9];
let array2 = [];
let tallest = 0;

function sunsetHills() {
    for (i = 0; i <= array1.length; i++) {
        if (tallest < array1[i]) {
            tallest = array1[i];
            array2.push(array1[i]);
        }
    }
    displayResults();
}

function displayResults() {
    document.getElementById("output").innerHTML = array2;
}