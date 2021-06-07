//npm global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (Mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create Properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flatMapDeep(items)

console.log(newItems);
console.log('hello people');