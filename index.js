// REVERSE
function reverse(arr){
    var start = 0;
    var end = arr.length-1;
    while (start <= end){
        // var temp = arr[start]
        // arr[start] = arr[end];
        // arr[end] = temp
        [arr[start], arr[end]] = [arr[end], arr[start]]; // ES6 syntax
        start++;
        end--;
    }
    return arr
}
console.log("Reverse")
console.log(reverse([2, 4, 7, 15, 8]))

// ROTATE
const rotateArr = function(array, shiftBy){
    function reverse(arr, start, end) {
        while (start < end) {
            var temp = arr[start]
            arr[start] = arr[end];
            arr[end] = temp
            // [arr[start], arr[end]] = [arr[end], arr[start]]; // ES6 syntax
            start++;
            end--;
        }
    }

    shiftBy %= array.length; // Allows unlimited shift

    reverse(array, 0, (array.length - 1));
    reverse(array, 0, (shiftBy - 1));
    reverse(array, shiftBy, (array.length - 1));

    return array;
}
console.log("Rotate")
console.log(rotateArr([1, 2, 3, 4, 5], 2))

// FILTER RANGE
function filterRange(arr, num) {
    var from = 0;
    var to = 0;
    while (from < arr.length) {
        if (num(arr[from])) {
            arr[to] = arr[from];
            to++;
        }
        from++;
    }
    arr.length = to;
    return arr;
};
function checkRange(min, max){
    return num => num >= min && num <= max;
};
console.log("Filter Range");
console.log(filterRange([10, -3, 40, 5, 18], checkRange(4, 19)));


// CONCAT
function concat(arr1, arr2){
    var newArr = [];
    for (var i = 0; i < arr1.length; i++){
        newArr[i] = arr1[i];
    }
    for (var j = 0; j < arr2.length; j++){
        newArr[newArr.length] = arr2[j];
    }
    return newArr;
}
console.log("Concat")
console.log(concat(['a','b'], [1,2]));