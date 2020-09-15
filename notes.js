/*

Follow this before start
https://github.com/jwasham/coding-interview-university


//  Docs in google drive
------------------------

https://drive.google.com/open?id=1fL0MUYTwt9rm9gDZ1_YGUKMaCQ7VrF8h
https://drive.google.com/drive/folders/1QAJ5tQCMEFsR4mSw_v6HeaFyOdHsT-9f


new account details for recordings

dilip.kumar2k2021@gmail.com
India@_123

https://github.com/dilipkumar2k6
https://github.com/dilipkumar2k6/sorting-algorithm/blob/master/bucket-sort/bucket-sort-using-radix-sort.js
*/
// MS online assessment::
// https://leetcode.com/discuss/interview-question/398023/Microsoft-Online-Assessment-Questions

// https://leetcode.com/discuss/general-discussion/665604/important-and-useful-links-from-all-over-the-leetcode
//https://leetcode.com/discuss/general-discussion/677506/top-50-google-tagged-questions-with-links

// https://www.educative.io/courses/grokking-the-system-design-interview
// https://content.creddle.io/ -- for resume

//Amazon LP
//https://medium.com/@scarletinked/are-you-the-leader-were-looking-for-interviewing-at-amazon-8301d787815d
/*
Types of search Algorithams
----------------------------
        1) Linear search
        2) Binary search
        3) exponential search
                it is combination of exponential and binary search
        
                        int exponentialSearch(int arr[], int n, int x) 
                { 
                        // If x is present at firt location itself 
                        if (arr[0] == x) 
                                return 0; 

                        // Find range for binary search by 
                        // repeated doubling 
                        int i = 1; 
                        while (i < n && arr[i] <= x) 
                                i = i*2; 

                        // Call binary search for the found range. 
                        return binarySearch(arr, i/2, min(i, n), x); 
                }

        4) KMP
        5) ladder Approach
           it is used for a binary mtrix in which each row is sorted, need to 
           find the first colum occurence of 1.
           time complexity O(row +col);




*/












/*
05/22/2020
15: https://leetcode.com/problems/3sum/
42: https://leetcode.com/problems/trapping-rain-water/
16:: https://leetcode.com/problems/3sum-closest/


190
5/24/20
------
174
322

05/25/2020
-------
518 : https://leetcode.com/problems/coin-change-2/
62 :: https://leetcode.com/problems/unique-paths/
63 :: https://leetcode.com/problems/unique-paths-ii/


05/26/2020
 983 https://leetcode.com/problems/minimum-cost-for-tickets/
 238: https://leetcode.com/problems/product-of-array-except-self/
 242: https://leetcode.com/problems/valid-anagram/
 279: https://leetcode.com/problems/perfect-squares/
 300: https://leetcode.com/problems/longest-increasing-subsequence/

 05/27/2020
 334: https://leetcode.com/problems/increasing-triplet-subsequence/
 347: https://leetcode.com/problems/top-k-frequent-elements/
 350: https://leetcode.com/problems/intersection-of-two-arrays-ii/
 54: https://leetcode.com/problems/spiral-matrix/

 05/28/20
 152: https://leetcode.com/problems/maximum-product-subarray/
 53: https://leetcode.com/problems/maximum-subarray/
 204: https://leetcode.com/problems/count-primes/
 189: https://leetcode.com/problems/rotate-array/
 179: https://leetcode.com/problems/largest-number/

 5/31/20
 1048: https://leetcode.com/problems/longest-string-chain/  -- dp
 337: https://leetcode.com/problems/house-robber-iii/
 1110 https://leetcode.com/problems/delete-nodes-and-return-forest/

 6/1/20
 314: https://leetcode.com/problems/binary-tree-vertical-order-traversal/
 997: https://leetcode.com/problems/find-the-town-judge/
 994: https://leetcode.com/problems/rotting-oranges/
 49: https://leetcode.com/problems/group-anagrams/

 6/2/20
 957: https://leetcode.com/problems/prison-cells-after-n-days/

 6/3/20
 560: https://leetcode.com/problems/subarray-sum-equals-k/
 523: https://leetcode.com/problems/continuous-subarray-sum/


 ToDO:
 25: https://leetcode.com/problems/reverse-nodes-in-k-group/
 50: https://leetcode.com/problems/powx-n/

6/6/20:
1) 3sum
2) 4Sum
3) 2Sum
4) DP problems --class

6/8/20
-----
253: https://leetcode.com/problems/meeting-rooms-ii/
1213: https://leetcode.com/problems/intersection-of-three-sorted-arrays/


6/15/20
======
revision 10 problems:: till 19.
6/16/20
        till 42

6/17/20
TODO:: https://leetcode.com/problems/edit-distance/    how to track the journy(steps)

6/20
29
65
67
124
158, 98, 101, 105,110

6/23/20

416: https://leetcode.com/problems/partition-equal-subset-sum/
680. https://leetcode.com/problems/valid-palindrome-ii/
953: https://leetcode.com/problems/verifying-an-alien-dictionary/
1249: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
66 - https://leetcode.com/problems/plus-one/
938 - https://leetcode.com/problems/range-sum-of-bst/
986


6/28/20
987- https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
65: https://leetcode.com/problems/valid-number/


7/5/20
126 -https://leetcode.com/problems/word-ladder-ii/

7/6/20
909 - https://leetcode.com/problems/snakes-and-ladders/


https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

//7/14/20
// 525 : https://leetcode.com/problems/contiguous-array/

398 - https://leetcode.com/problems/random-pick-index/
343 https://leetcode.com/problems/integer-break/
*/

