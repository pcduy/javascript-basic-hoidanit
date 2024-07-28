console.log('hello world from html');
let arrTop4 = ['Man City', 'Liverpool', 'MU', 'Chelsea'];

// for (let i = 0; i < arrTop4.length; i++) {
//     console.log('Top ', i + 1, ': ', arrTop4[i]);
// }

let i = 0;
while (i < arrTop4.length) {
    console.log('Top ', i + 1, ': ', arrTop4[i]);
    i++;
}

let j = 0;
do {
    console.log('Top ', j + 1, ': ', arrTop4[j]);
    j++;
} while (j < 0)

i = 0;
let flag = false;
while (!flag) {
    console.log('check value i: ', i);
    i++;
    if (i === 10) flag = true;
}