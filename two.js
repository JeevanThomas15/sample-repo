function Getevennumber(a) {
    return a%2 ==0;
}

const arr = [1, 2, 3, 4, 5,6];
let result2 = arr .filter (Getevennumber );
console.log(result2);