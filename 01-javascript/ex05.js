let arr = [5,6,8,10]
let k = arr.length

console.log(`length of array: ${k}`)
arr[0]++
console.log(`Array: ${arr}`)
arr[k-1] = arr[k-1]+arr[k-2]
console.log(`Array: ${arr}`)
arr.push(15)
console.log(`Array: ${arr}`)

let newarr = []
for(let i = 0; i< arr.length; i++){
    newarr[i] = arr[i]
}
console.log(`Array: ${newarr}`)
