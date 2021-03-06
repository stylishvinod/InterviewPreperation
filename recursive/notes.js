
/*
-> number of ways to arrange n objects in a straight line is n!
-> permutation of n numbers in a straight line is  n!.
-> in above case there are no duplicates allowed.

-> when repetetion allowed ordering is called "Arrangements".
-> when repetetion not allowed ordering is called " permutations"

-> number of ways to arrange n objects in a straigh line when repetetion 
  allowed is  
  ex: arrane a binary data in a 4 digits is  2^4.
  ex:: arrange a numberic data with repetetion allowed to form a 4 digit 
     password is   10^4.


-> recursion is two types
 1) decrease and conquer
 2) divide and conquer.

 -> recursive approach is called Top to bottom approach
 -> same problem we can solce using iterative also that is called
    bottom to top approach.

 *****   Subsets ******
--> For n unique elements we can form 2^n subsets.

--> in recursive for some kind of problems instead of decreasing into
a constant factor, we can divide with a consctant factor

ex:  to calculate  2^4  we just need to calculate 2^2 and then we can 
sqare the result
***  this approach is not possible for factorial
*** only for power cases it is possible.
** in above case we can reduce time complexity to O(log(n))
   inseted of O(n)


*******  Recursion always takes implicit memory(CPU) memory
*******  If we use any memeory in our code that is explicity memory.

--> Fibannachi series takes app O(2^n) time complexity in recursive mode.
--> using iterative or memoization we can bring it back to O(n)
----------------------
*****Combinations*****

-> where repetetion is not allowed and order is also not important.
C(n, k) -> subset of size 'k' can be formed from 'n'.
        C(n, k) = C(n, n-k);

        C(n,k) = n!/(k!(n-k))

        C(n,k) = C(n-1, k) + C(n-1, k-1);
        2^n = C(n,0) + C(n,1) + C(n,2)......+C(n,n);
        pascal triangle is example for combinations.


        Problems related to permutations or comibnations are called
        exhaustive serach probles. since it takes 2^n.n time even to
        print the valies.

   *** Tower of hanoii***
   it takes 2^n - 1 moves.
        

1. Letter case permutation: https://leetcode.com/problems/letter-case-permutation/
2. Subsets: https://leetcode.com/problems/subsets/
3. Subsets II: https://leetcode.com/problems/subsets-ii/
4. Permutations: https://leetcode.com/problems/permutations/
5. Permutations II: https://leetcode.com/problems/permutations-ii/
6. Combinations: https://leetcode.com/problems/combinations/
7. Back tracking: https://leetcode.com/problems/combinations/
7. Back tracking: Generate Parentheses: https://leetcode.com/problems/generate-parentheses/
8. Palindrome Partitioning: https://leetcode.com/problems/palindrome-partitioning/
9. N-Queens: https://leetcode.com/problems/n-queens/
and https://leetcode.com/problems/n-queens-ii/
10. Fibonacci/selection https://leetcode.com/problems/climbing-stairs/
11. Regex match https://leetcode.com/problems/regular-expression-matching/
12. Edit distance https://leetcode.com/problems/edit-distance/ (edited) 
*/