function summ(){
 console.log('Hello' + ' world');
}
summ();

//es6 стрелочные функции
// let myFunc = (Параметры к-е передаем внутрь ф-ции) => {
//     console.log('Hello' + ' world');
// } 
// myFunc();
//если параметров нет нужны ()

let myFunc = () =>{
    console.log('Hello' + ' world');
}
myFunc();

let myFunc1 = (word) =>{
    console.log(word);
}
myFunc1('HI!!!');

//если параметрне один
let myFunc2 = (z,x) =>{
    console.log(z*3*x);
}
myFunc2(4,2);

//если параметр 1
let myFunc3 = z =>{
    return z*3;
}
console.log(myFunc3(7));

//Максимально упростим, даже без retern
let myFunc5 = (z,x) => z*4*x;
console.log(myFunc5(4,5));

