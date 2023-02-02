// 5(Get Sum Of An Array)
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

// const myNumbers = [12, 65, 45, 78, 32, 45, 91 ];
// const myNumbersSum = getSumOfAnArray(myNumbers);
// console.log(myNumbersSum);

//6(Get odd numbers Sum Of An Array)
function getOddNumbersOfAnArray(numbers2){
    const oddNumbers = [];
    for(let i = 0; i < numbers2.length; i++){
        const index = i;
        const element = numbers2[index];
        if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91 ];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log('odd number sum', oddNumberSum);