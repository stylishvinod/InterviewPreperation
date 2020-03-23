// decrease and conquer logic for factorial

function facotial(n) {
    if(n==0) return 1;
    return n * factorial(n-1);
}