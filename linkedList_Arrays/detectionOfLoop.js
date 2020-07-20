//Floyd's algoritham to detect loop of linked list

function hasLoop(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            return true;
        }
    }
    return false;

}


// to find start of loop point
// this program has 2 inputs 1) head of LS 2) node which returned by above program 
// i.e that point where fast and slow points meet.

function startOfLoop(head, meetPoint) {
    let start = head;
    let end = meetPoint;

    while(start !== end) {
        start = start.next;
        end = end.next;
    }
    return start;

}