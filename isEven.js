// 3(Check Even Odd using Function)

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEVen = isEven(1280);
console.log(herNumberIsEVen);