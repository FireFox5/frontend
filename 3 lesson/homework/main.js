const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ar2 = [1, 2, 3, 4, 5,];

let a = ar1.length
let b = ar2.length


function twoMass(a,b) {
    if (a > b){
        console.log('Первый массив больше второго')
    }
    else if (a < b){
        console.log('Первый массив меньше второго')
    }
    else {
        console.log('Они равны')
    }
}

twoMass(a, b);
const func = (num1, num2) => {
    if (num1 > num2){
        console.log('Второе число меньше')
    }
    else if (num2 > num1){
        console.log('Первое число меньше')
    }
    else {
        console.log('Числа равны')
    }
}

