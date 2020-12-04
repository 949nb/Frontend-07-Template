
/**
 * 给定一个<em>排序数组</em>，你需要在 原地 删除重复出现的元素，
 * 使得每个元素只出现一次，返回移除后数组的新长度。
 * 
 * 例子：
 * 给定数组 nums = [1,1,2], 
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 不需要考虑数组中超出新长度后面的元素。
 */

let nums = [1,1,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let i = 0

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {            
            i++
            nums[i] = nums[j]
        }
    }

    return i + 1

}

const i = removeDuplicates(nums)

console.log(nums, i)

 /**
  * 这道题用双指针来解决
  * 分为快指针和慢指针 快指针指向1 慢指针指向0
  * 慢指针和快指针进行对比，如果相等 则什么都不干
  * 如果不相等 就将慢指针向前移动一位然后把快指针赋给它。
  */

  /**
   * 这个算法时间复杂度为O(n) 
   * 假设这个数组的长度为n, 那么执行n次。
   */
