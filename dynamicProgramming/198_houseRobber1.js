// https://leetcode.com/problems/house-robber/


/*
 
refer image 198.png in assets
[2,7,9,3,1] start with A[n] i.e  1
    a) we have two conditions either rob 1 : 
        f(n) = a[n] + f(n-2)  we shouldn't rob n-1 element, so we need to consider
        n-2 elements
    b) not rob 1 :  f(n) = f(n-1)

    for above we need to conisder max value

    so f(n) = Math.max(f(n-1), a[n]+f(n-2));
*/