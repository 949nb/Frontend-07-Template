// 48. 旋转图像
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 利用了4个指针分别对应了变化的几种情况
 * 时间复杂度O(n^2)
 * 空间复杂度O(n)
 */
var rotate = function (matrix) {
	let fakeMatrix = JSON.parse(JSON.stringify(matrix));

	let l = fakeMatrix.length - 1;
	let x = 0;
	while (l >= 0) {
		let t = fakeMatrix.length - 1;
		for (let i = 0; i < matrix.length; i++) {
			matrix[x][i] = fakeMatrix[t][x];
			t--;
		}
		x++;
		l--;
	}
};
