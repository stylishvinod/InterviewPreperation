/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let meetNode = getwherLoopdetected(head);
    if (meetNode) {
    
    return startOfLoop(head, meetNode);
    }
    return null;
};


function getwherLoopdetected(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
              console.log("vinod meet point", slow);
        
            return fast;
        }
    }
    return false;

}

function startOfLoop(head, meetPoint) {
    let start = head;
    let end = meetPoint;
 
    while(start !== end) {
        start = start.next;
        end = end.next;
    }
    return start;

}