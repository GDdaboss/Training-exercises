function sum(arr, transform){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += transform(arr[i])
    }
    return sum
}

function square(x){
    return x*x
}

function cube(x){
    return x*x*x
}

console.log(sum([1,2,3],square))
console.log(sum([1,2,3],cube))