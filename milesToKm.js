// 2.1(Unit Convert: milesToKM)

function milesToKilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}
const dhakaToFeniMiles = 93.23;
const dhakaToFeniKM = milesToKilometer(dhakaToFeniMiles);
console.log(dhakaToFeniKM);