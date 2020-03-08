
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

//https://leetcode.com/problems/merge-sorted-array/


// first approach

var merge = function (nums1, m, nums2, n) {
    let pt1 = m - 1;
    let pt2 = n - 1;
    let pt1Length = nums1.length - 1;
    while((pt1 >= 0) && (pt2 >= 0)) {
        if (nums1[pt1] >= nums2[pt2]) {
            nums1[pt1Length] = nums1[pt1];
            pt1--;

        } else  {
            nums1[pt1Length] = nums2[pt2];
            pt2--;
        } 
        pt1Length--;

    }

    while (pt2 >= 0) {
        nums1[pt1Length] = nums2[pt2];
        pt2--;
        pt1Length--;
    }
};


// second approach

var merge = function (nums1, m, nums2, n) {
    let pt1 = m - 1;
    let pt2 = n - 1;
    let pt1Length = nums1.length - 1;
    while(pt2 >= 0) {
        if (nums1[pt1] >= nums2[pt2]) {
            nums1[pt1Length] = nums1[pt1];
            pt1--;

        } else  {
            nums1[pt1Length] = nums2[pt2];
            pt2--;
        } 
        pt1Length--;

    }
};