const hussain = [2, 3, 4, 5];
console.log(hussain.map(x => x * 2));


const str = '39';
console.log(str.split('').map(elm => elm * 2 / 3).toString())

const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((acc, crr) => acc * crr))
console.log(arr.filter(elem => elem < 4))
console.log(arr.flat(Infinity))
console.log(arr.slice(0, 3))
// arr.splice(1,0,5);
console.log(arr)
console.log(arr.keys().next())
console.log(arr.entries().next())
// arr.map(elem => console.log(elem)) // 1,2,3;
// arr.filter(elem => console.log(elem)) // 1,2,3;
// arr.forEach(elem => console.log(elem)) // 1,2,3;
const str2 = 'hello';
console.log(Array.from(str2))
console.log(Array.of(str2))
arr.some(elem => console.log(elem))
console.log('\n')
// arr.every(elem => console.log(elem))
console.log(arr.find(elem => elem > 3));
const arr2 = [1, [2], [3], [4], 5];
console.log(arr2.flatMap(elem => elem * 2))
arr2.unshift(0)
console.log(arr2)
console.log(arr2.shift())

function getFirstValue(arr) {
    return arr.shift()
}

console.log(getFirstValue([1, 2, 3]))

console.log(getFirstValue([80, 5, 100]))

console.log(getFirstValue([-500, 0, 50]))

function makePair(num1, num2) {
    // return  Array.of(num1,num2)
    return [num1, num2]
}
console.log(makePair(1, 2))

console.log(makePair(51, 21))

console.log(makePair(512124, 215))

function drop(arr2, arr3) {
    return arr2.slice(arr3)
}

console.log(drop([1, 2, 3], 1))

console.log(drop([1, 2, 3], 2))

console.log(drop([1, 2, 3], 5))

console.log(drop([1, 2, 3], 0))
function getVoteCount(obj) {
    return obj.upvotes - obj.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }))

console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))

console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))

function reverse(arr) {
    return arr.reverse().map(elem => elem - 2)
}
console.log(reverse([1, 2, 3, 4]))

console.log(reverse([9, 9, 2, 3, 4]))

console.log(reverse([]))
function incrementItems(arr) {
    // return arr.every(elem=>elem+2)
    return arr.map(elem => elem + 1)
}

console.log(incrementItems([0, 1, 2, 3]))

console.log(incrementItems([2, 4, 6, 8]))

console.log(incrementItems([-1, -2, -3, -4]))


// const arr = [1, 2, 3, 4, 5, 6]
// // const a = arr[0]
// // const a = arr[1]
// const [hussain, sha] = arr
// console.log(hussain)


function getLastItem(arr) {
    return arr.pop()
}
console.log(getLastItem([1, 2, 3]))

console.log(getLastItem(["cat", "dog", "duck"]))

console.log(getLastItem([true, false, true]))


function arrayToString(str) {
    // return str.join("")
    return str.toString().split(',').join('')
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]))

console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))

console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))
function findIndex(arr, num) {
    // return arr.findIndex(elem => elem === num)
    // return arr.map((elem,index)=> elem === num ? index : -1)
    // return arr.forEach((elemm,index)=> elemm === num ? index : -1)

}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))

console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))

console.log(findIndex(["a", "g", "y", "d"], "d"))

console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))
function check(arr, num) {
    // return arr.some(elem => elem === num)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true
        }
    }
    return false;
}

console.log(check([1, 2, 3, 4, 5], 3))

console.log(check([1, 1, 2, 1, 1], 3))

console.log(check([5, 5, 5, 6], 5))


function parseArray(arr) {
    return arr.map(x => x.toString())
}
console.log(parseArray([1, 2, "a", "b"]))

console.log(parseArray(["abc", 123, "def", 456]))

console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))

// console.log(parseArray([]) )
function toNumberArray(arr) {
    // return arr.map(elem=>elem*1)
    return arr.map(Number);
    // return arr
}
console.log(toNumberArray(["9.4", "4.2"]))

console.log(toNumberArray(["91", "44"]))

console.log(toNumberArray(["9.5", "8.8"]))

1
function arrayValuesTypes(arr) {
    return arr.map(elem => typeof elem)
}

console.log(arrayValuesTypes([1, 2, "null", []])
)

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
)

console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
)


function hasSameBread(arr1, arr2) {
    return arr1.shift() === arr2.shift() && arr1.pop() === arr2.pop();
}
console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
))

console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
))

console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
))
var [head, ...tail] = [1, 2, 3, 4]

console.log(head) // outputs  1
console.log(tail) // outputs 2

function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}

console.log(checkSquareAndCube([4, 8]))

console.log(checkSquareAndCube([16, 48]))

console.log(checkSquareAndCube([9, 27]))
