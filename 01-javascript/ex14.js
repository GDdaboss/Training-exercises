function callThisGuy(func){
    func()
}

function greeting(){
    console.log("Im inside greeting")
}

callThisGuy(greeting)