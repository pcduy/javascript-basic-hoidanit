console.log('hello world with html')

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [
    { name: 'eric', age: 25 },
    { name: 'abc', age: 29 },
    { name: 'monica', age: 25 },
    { name: 'ross', age: 24 },
    { name: 'hoidanit', age: 35 }
]
//filter, find

let filter = arr.filter((item, index) => {
    //console.log('>>> check filter: item:  ', item, 'index: ', index);
    return item && item.age === 25;
});

let find = arr.find((item, index) => {
    return item && item.age === 25;
});

console.log(filter)
console.log(find)