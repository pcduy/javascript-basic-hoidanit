console.log('Hello world with HTML')

//key: value,
let obj = {
    name: 'eric',
    address: 'Ha Noi',
    email: '',
    gender: '',
    a: function () {
        console.log('hello world inside function');
        return '';
    }
};

JSON
"{name: 'eric', address: 'Ha Noi'}"

let b = 'name';
obj.b = 'Ali';

console.log('obj: ', obj);
console.log('what is your name ? ', `my name 's : `, obj.name);
console.log('where are you from ? ', `i'm from: ${obj.address}`);

obj[b] = 'Hary';

console.log('what is your name ? ', `my name 's : `, obj['name']);
console.log('call function: ', obj.a());