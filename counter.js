var counter = 10;
function countdown(value) {
    if (value > 0){
        console.log(value)
        return countdown(value - 1);
    }
    else{
        return value;
    }
};
countdown(10);
console.log(counter);
