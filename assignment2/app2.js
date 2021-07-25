//Anonymous Functions.
const arr = [1, 5, 4, 8, 7, 6, 9, 3];

// Problem 1. Return odd numbers from an array using anonymous function.
const getOddNum = function (arr) {
    const res = [];
    arr.forEach(item => {
        if (item % 2 !== 0) {
            res.push(item);
        }
    });
    return res;
}

console.log(getOddNum(arr));

//Problem 2. Convert all strings to title caps in strings array.

const strArr = ['john', 'stephen', 'joshua', 'rachel'];

const getCapStr = function (arr) {

    arr.forEach((item, index) => {
        // console.log(index);
        arr[index] = item.replace(item[0], item[0].toUpperCase());
    });

    console.log(arr);
}

getCapStr(strArr);

//problem 3. Sum of all numbers in an array.
const numArr = [1, 3, 4, 5, 78, 2, 10, 23, 21, 201, 100, 101];

const getTotal = function (arr) {
    let res = 0;

    numArr.forEach(num => res += num);

    return res;
}

console.log(getTotal(numArr));

//problem 4. Return all prime numbers in an array.

const getPrimeNumbers = function (arr) {
    const res = [];

    arr.forEach(num => {
        if (num > 2) {
            let flag = 0;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    flag = 1;
                }
            }
            if (!flag) {
                res.push(num);
            }
        } else {
            res.push(num);
        }
    });

    return res;
}

console.log(getPrimeNumbers(numArr));

//Problem 5. Return all palindromes in an array.

const getPalindromes = function (arr) {
    const res = [];

    arr.forEach(num => {
        let num_arr = num.toString().split('');
        let num_rev = num_arr.reverse().join('');
        if (num_rev === num.toString()) {
            res.push(num);
        }
    });

    return res;
}

console.log(getPalindromes(numArr));

// Problem 6. Remove duplicates from an array.

const numArr2 = [1, 1, 2, 2, 3, 3, 4, 4];

const removeDuplicates = function (arr) {
    const res = [];

    arr.forEach((num, index) => {
        let flag = 0;
        if (arr.indexOf(num) !== index) {
            flag = 1;
        }
        if (!flag) {
            res.push(num);
        }
    });

    return res;
}

console.log(removeDuplicates(numArr2));

//Problem 7. Rotate array by k times.
const numArr3 = [1, 2, 3, 4, 5];

function rotateArray(arr, rotate) {
    for (let i = 0; i < rotate; i++) {
        let num = arr.shift();
        console.log(num);
        arr.push(num);
        console.log(arr);
    }
    console.log(arr);
}

rotateArray(numArr3, 3);

//Problem 8. Return median of two sorted arrays of same size.
const numArr4 = [1, 12, 15, 26, 38];
const numArr5 = [2, 13, 17, 30, 45];

function getMedian(arr1, arr2) {
    const arr = [...arr1, ...arr2];
    arr.sort((a, b) => a - b);
    console.log(arr);
    let med;
    if (arr.length % 2 === 0) {
        med = Math.floor(arr.length / 2);
        return (arr[med - 1] + arr[med]) / 2;
    } else {
        let med = arr.length / 2;
        return arr[med];
    }
}

console.log(getMedian(numArr4, numArr5));