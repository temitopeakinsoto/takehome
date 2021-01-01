const fs = require('fs');

fs.read('./index.txt', 'utf-8', (err, data) => {
    if (err) console.log(err); //err;
    const dataArr = data.split(' ');
    for(let i =0; i< dataArr.length; i++){
        console.log(dataArr[i]);
    }
})