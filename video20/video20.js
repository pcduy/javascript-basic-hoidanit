console.log('hello world with html');

let sum = (a, b, callback) => {
    let tong = a + b;
    // setTimeout(() => {
    //     callback(tong);
    // }, 5000);

    let i = 0;
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if (i === 5) {
            clearInterval(timer);
        }
    }, 1000);

    console.log('>>> check i: ', i);

}

let printSum = (message) => {
    console.log('>>> check sum 9 + 6 = ', message);
}

sum(6, 9, printSum);