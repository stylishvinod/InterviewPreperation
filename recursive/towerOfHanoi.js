// tower of Hanoi;
// recursive example




function towerOfHanoi(n, src, dest, aux) {
    if(n===1) return dest.push(src.pop());
    towerOfHanoi(n-1, src, aux, dest);
    dest.push(src.pop());
    towerOfHanoi(n-1, aux, dest, src);
    return dest;
}