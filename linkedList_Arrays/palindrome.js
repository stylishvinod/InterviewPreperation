
//https://leetcode.com/problems/palindrome-linked-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return head;
    
    let fast = head;
    let slow = head;
    let back = head;
        back.prev = null;
    
    while(fast && fast.next) {
        back = back.next;
        back.prev = slow
        slow = slow.next;
        fast = fast.next.next
    }
    // if odd count we have to move fast pointer to one step ahead;
    if(fast) {
        slow = slow.next;
    }
    
    back = back.prev;
    while(slow && back) {
        if(slow.val !== back.val) return false;
        slow = slow.next;
        back = back.prev
    }
    
    if(slow || back) {
        return false;
    } else {
        return true;
    }
    
};