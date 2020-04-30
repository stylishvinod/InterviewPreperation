// this is bottom-up fibanacchi approach.
//Time complexity O(n)

function fib(n) {
    if (n === 0 || n === 1) {
        return memoize[n];
    }

    let pre = 1;
    let prePre = 0;

    for (let i = 2; i <= n; i++) {
        cache[i] = pre + prePre;
        prePre = pre;
        pre = cache[i];
    }
    return cache[n];

}

//**** without using any extra space

function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let pre = 1;
    let prePre = 0;
    let result;
    for (let i = 2; i <= n; i++) {
        result = pre + prePre;
        prePre = pre;
        pre = result;
    }
    return result;

}