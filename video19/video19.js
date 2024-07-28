console.log('hello world with html');

let sum = (a, b) => {
    return a + b;
}

console.log('check sum 9 + 6 = ', sum(9, 6));

let obj = {
    name: 'eric',
    address: 'ha noi',
    getName: function () {
        return this.name;
    }
}

console.log('>>> get name obj: ', obj.getName());