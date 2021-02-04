//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

const getNum = function (a) {
    const countSum = function (b) {
        return a + b;
    };
    return countSum(3);
};
let resultFunc = getNum(15);
console.log(resultFunc);
