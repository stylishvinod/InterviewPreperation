var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
};



var twoSum = function(numbers, target) {
    for(let start = 0, end = numbers.length-1; start < end;){
        let sum = numbers[start] + numbers[end]
        if(sum === target)return [++start, ++end]
        else sum > target ? end-- : start++
    }
};