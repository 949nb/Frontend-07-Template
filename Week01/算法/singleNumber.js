/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 */

const arr = [1,2,2,1,3]

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            i++
        } else {
            return nums[i]
        }
    }
};

console.log(singleNumber(arr));

/**
 * 这个算法想的很简单
 * 就是先排序 然后去循环对比相邻的两项就好了～
 */