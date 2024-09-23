// masala 1
function sc(floor) {
    let result = "";
    if (floor < 2){
        result = "";
    }
    else if (floor < 7) {
        floor--;
        for (let i = 0; i < floor; i++){
            result += "Aa~ ";
        }
        result += "Pa! Aa!";
    } else if (floor >= 7) {
        floor--;
        for (let i = 0; i < floor; i++){
            result += "Aa~ ";
        }
        result += "Pa!";
    }
    return result;
}

console.log(sc(7));

// masala 2
function trailingZeros(n) {
    let count = 0;
    for (let i = 0; n > i; n = n / 2) {
        if (n % 2 === 0) {
            count++;
        } else {
            break;
        }
    }

    return count;
}

console.log(trailingZeros(8))

// masala 3
function hero(bullets, dragons){
    if(bullets / 2 >= dragons){
      return true;
    }
    return false;
}

console.log(hero(1550, 776));
console.log(hero(10, 5));