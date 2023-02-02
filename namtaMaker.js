// Write a Function for namta
function namtaMaker(number) {
    for (let i = 1; i <= 10; i++) {
        const element = i * number;
        console.log(number, "x", i, "=", element);
    }
}
namtaMaker(20);