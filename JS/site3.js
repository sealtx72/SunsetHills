let array1 = [3, 2, 4, 7, 6, 9];
let array2 = [];
let tallest = 0;

function sunsetHills() {
    array1[0] = document.getElementById("building1").value;
    array1[1] = document.getElementById("building2").value;
    array1[2] = document.getElementById("building3").value;
    array1[3] = document.getElementById("building4").value;
    array1[4] = document.getElementById("building5").value;
    array1[5] = document.getElementById("building6").value;

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