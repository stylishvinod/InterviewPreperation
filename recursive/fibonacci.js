
// find nth fibanacci number.

function finn(n) {
	console.log(n);
 if(n===0 || n === 1) return n;
 return finn(n-1) + finn(n-2);

}


// fibanacci in additive sequence way

function fibanacci(n) {
    return fibHelper(n, 0, 1);
}

function fibHelper(n, b1, b2) {
    if (n===0) return b1;
    return fibHelper(n-1, b2, b1+b2);
}