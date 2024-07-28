console.log('hello world with html')

let arrTop4 = ['Liver', 'Chelsea', 'MU', 'Man City'];

let i = 0;
while (i < arrTop4.length) {
    //if else conditon
    console.log('>>> check i: ', i);
    if (arrTop4[i] === 'Chelsea') {
        console.log('Found it: ', arrTop4[i]);
        break;
    }

    i++;
}

i = 0;
while (i < arrTop4.length) {
    //if else conditon
    i++;
    if (arrTop4[i] === 'Chelsea') {
        console.log('Found it: ', arrTop4[i]);
        continue;
    }

    console.log('>>> check i: ', i);

}