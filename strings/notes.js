/*
--sliding window technique 
-- Robin karps -- is called rolling hash function. we have to choose a hash function
    O(nm)
--KMP -- O(n+m) - we have to prepare a 'pi' or 'lps' table for 'm' then traverse
 the string 'n'.

 // refer problem 28 to get all 3 examples.


Any problem is given related to strings try to think below approach::
----------------------------------------------------------------------
1) sliding window.
2) prefix tree --  for reverse related questions
3) suffix tree  --- For any substring problems


Baiscs of  string video :: https://www.youtube.com/watch?v=NinWEPPrkDQ


problems
344
125: https://leetcode.com/problems/valid-palindrome/



Sliding window and regular string:
https://leetcode.com/problems/reverse-string/   --- done
https://leetcode.com/problems/reverse-linked-list/  -- done
https://leetcode.com/problems/valid-palindrome/  -- done
https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/ -- done
https://leetcode.com/problems/count-binary-substrings/ -- done
https://leetcode.com/problems/repeated-substring-pattern/ -- done
https://leetcode.com/problems/implement-strstr/  -- done
https://leetcode.com/problems/longest-substring-without-repeating-characters/ -- done
https://leetcode.com/problems/minimum-window-substring/  --  done
https://leetcode.com/problems/sliding-window-maximum/ -- done
https://leetcode.com/problems/longest-palindromic-substring/  -- done
https://leetcode.com/problems/find-all-anagrams-in-a-string/
Prefix Trie:
https://leetcode.com/problems/implement-trie-prefix-tree/ -- done
https://leetcode.com/problems/index-pairs-of-a-string/  -- Locked
https://leetcode.com/problems/longest-word-in-dictionary/ -- done
https://leetcode.com/problems/camelcase-matching/
https://leetcode.com/problems/replace-words/
https://leetcode.com/problems/implement-magic-dictionary/
https://leetcode.com/problems/palindrome-pairs/
https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
https://leetcode.com/problems/word-search/
https://leetcode.com/problems/word-search-ii/
Suffix Trie:
https://leetcode.com/problems/longest-duplicate-substring/
https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
https://leetcode.com/problems/longest-substring-without-repeating-characters/
https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/
https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
https://leetcode.com/problems/substring-with-concatenation-of-all-words/
https://leetcode.com/problems/longest-duplicate-substring/

242: https://leetcode.com/problems/valid-anagram/
300: https://leetcode.com/problems/longest-increasing-subsequence/
49: https://leetcode.com/problems/group-anagrams/
65: https://leetcode.com/problems/valid-number/
525 : https://leetcode.com/problems/contiguous-array/
686: https://leetcode.com/problems/repeated-string-match/
1410: https://leetcode.com/problems/html-entity-parser/
*/




/*
https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/
-> Finad total count of substrings in a given string



TODO::
https://leetcode.com/problems/valid-palindrome-iii



3/6/2021

https://leetcode.com/problems/distinct-subsequences/
https://leetcode.com/problems/number-of-matching-subsequences/
https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/
https://leetcode.com/problems/wiggle-subsequence/

3/7/21
https://leetcode.com/problems/longest-palindromic-substring/
https://leetcode.com/problems/longest-palindromic-subsequence/
https://leetcode.com/problems/palindromic-substrings/

3/9/21
https://leetcode.com/problems/substring-with-concatenation-of-all-words/
https://leetcode.com/problems/rotate-string/
https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/

*/