// 283.移动零

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[n] === 0 && nums[i] === 0)
            continue
        if (nums[n] === 0 && nums[i] !== nums[n]) {
            nums[n] = nums[i]
            nums[i] = 0
        }
        n++
    }
}