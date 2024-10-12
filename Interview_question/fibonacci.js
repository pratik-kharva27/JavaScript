
const fibo = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibo(n - 1) + fibo(n - 2);
};
const fibbo = (n) => {
    const result = [];
    for (let x =0; x<n; x++){
        result.push(fibo(x));
    }
    return result;
}

console.log(fibbo(6)); // Output: [0, 1, 1, 2, 3, 5]
