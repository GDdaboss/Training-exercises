function contains(arr, x){
    for(let i = 0; i < arr.length; i++){
        if(x === arr[i])
            return true
        
    }
    return false
}

console.log(contains([1,2,3,4], 3))
console.log(contains([1,2,3,4], 5))
