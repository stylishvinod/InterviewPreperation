
// 279: https://leetcode.com/problems/perfect-squares/
//Approach:1 Mathematical

const isSquare = (n) => ((Math.floor(Math.sqrt(n)) ** 2) === n);
var numSquares = function (n) {
    // step:1 check number is perfect square or not
    if (isSquare(n)) return 1;

    // step 2: 
    // Legendre's three square theorem: A natural number n can be represented as 
    // the sum of three squares of integers if and only if : n!= 4^x ( 8*m+7)
    while (n % 4 === 0) n /= 4;
    if (n % 8 === 7) return 4 // if n%8!==7 that means that my number can be written 
    // as a sum  at of at most 3 squares
    // , otherwise the answer is definitely 4 because of Lagrange's theorem.
    // ok, we ruled out the possibility of result 4
    // there are only 2 results remaining, 2 and 3

    // Manually checking for result 2
    for (let i = 0; i <= n; i++) {
        // if x=n-i*i   and x is a valid square then OBVIOUSLY
        // n=i^2 +sqrt(x)^2  ,so n is a square of two numbers   
        if (isSquare(n - i * i)) return 2
    }

    // otherwise
    return 3

};


//Apprach 2:
//dp solution
var numSquares = function (n) {

    let dp = new Array(n + 1).fill(null).map((a, i) => i);

    for (let i = 2; i <= n; i++) {
        for (j = 1; j < i; j++) {
            let squre = j * j;
            let remaining = i - squre;
            if (remaining >= 0) {
                dp[i] = Math.min(dp[i], dp[remaining] + 1);
            }

        }
    }
    return dp[n];
};