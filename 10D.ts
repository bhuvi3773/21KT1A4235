interface MyFunction {
    (param1: string, param2: number): void;
}
const myFunctionImplementation: MyFunction = (param1, param2) => {
    console.log(`Received parameters: ${param1}, ${param2}`);
}
myFunctionImplementation('Bhuvan', 35);
