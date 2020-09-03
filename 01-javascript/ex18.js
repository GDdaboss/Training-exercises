function addTo(x){
    function sum(y){
        return x+y
    }
    return sum
}

var addTo10 = addTo(10)
console.log(addTo10(5))
console.log(addTo10(7))
