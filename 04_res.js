var count = function(arr){
    return "There are "+arr.length+" elements in the array";
};

var add = function(a,b){
    return `Sum of the two numbers ${a} and ${b} is ${a+b}`;
};

const pi = 3.142;

/*CommonJS
module.exports.count = count;
module.exports.add = add;
module.exports.pi = pi;
*/

/*ES6
const _count = count;
export { _count as count };
const _add = add;
export { _add as add };
const _pi = pi;
export { _pi as pi };
*/

/*CommonJS*/
module.exports = {
    count: count,
    add: add,
    pi:pi
}


/*ES6*/
// export const count = count;
// export const add = add;
// export const pi = pi;

// export default {count,add,pi};
