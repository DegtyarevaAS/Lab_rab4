const _ = require('lodash'); 

const colors = require('./colors.json');

let res = _(colors)
        .map(x => Object.keys(x)[0])
         .filter(x => x.length <= 6)
         .orderBy()
         .value();

console.log(res);