let rowNum = 1, str = ""
for(i = 1; i < 16; i++){
    if(i === rowNum*(rowNum+1)/2){
        str += i
        console.log(str)
        str = ""
        rowNum++
    }
    else{
        str += i + " "
    }
}