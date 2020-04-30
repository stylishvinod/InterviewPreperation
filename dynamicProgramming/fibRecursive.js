// generating Fibannachi series using Top to bottom approach
//Time complexity O(n)


let memoize = {};
memoize['0'] = 0;
memoize['1'] = 1;

function fib(n) {

    if (n === 0 || n === 1) {
        return memoize[n];
    }
    if (memoize[n]) {
        return memoize[n];
    }

    let fibannachi = fib(n - 1) + fib(n - 2);
    memoize[n] = fibannachi;

    return fibannachi;
}