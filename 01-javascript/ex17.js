function exponentFactory(x){
    function square(x){
        return x*x
    }

    function cube(x){
        return x*x*x
    }

    function func(x){
        return x
    }
    switch(x){
        case 2: 
            return square
        case 3:
            return cube
        default: 
            return func
    }
}

fn = exponentFactory(2)
console.log(fn(5))

fn = exponentFactory(3)
console.log(fn(5))

fn = exponentFactory(4)
console.log(fn(5))