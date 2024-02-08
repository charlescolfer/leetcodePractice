/** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/*
Input: nums = [2,7,11,15], target = 9
Input: nums = [3,2,4], target = 6
*/

var twoSum = function(nums, target) {
    let output = [];
    for (i = 0; i<=nums.length; i++) {
        let currentNumber = nums[i];
        if (currentNumber !== target) {
           for (j=0; j<=nums.length; j++) {
               let checkNumber = nums[j];
               if (j <= i) continue
               if (currentNumber + checkNumber === target) {
                   output.push(i);
                   output.push(j);
                   console.log(output);
                   return output;
               }
           } 
        }
        else {
            output.push(i);
        }
        
    }
    return output;
        
};