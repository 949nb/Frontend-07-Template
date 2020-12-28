// abcdabce
function KMP(source, pattern) {
	let time = 0;
	// 计算table
	let pre_table = new Array(pattern.length).fill(0);

	// len 指的是pattern最长前后缀的长度
	let len = 0,
		i = 1;
	while (i < pattern.length) {
		time++;
		if (pattern[i] === pattern[len]) {
			++len, ++i;
			pre_table[i] = len;
		} else {
			if (len > 0) {
				len = pre_table[len];
			} else {
				if (len < 0) {
					len = 0;
				}
				++i;
			}
		}
	}

	// 匹配
	let sIndex = 0;
	let pIndex = 0;
	while (sIndex < source.length) {
		time++;
		if (source[sIndex] === pattern[pIndex]) {
			++pIndex, ++sIndex;
			if (pattern.length === pIndex) {

				console.log(time, source.length, pattern.length);
				return true;
			}
		} else {
			if (pIndex === 0) {
				++sIndex;
				continue;
			}
			pIndex = pre_table[pIndex];
		}
	}

	console.log(time, source.length, pattern.length);
	return [source, pre_table];
}

console.log(KMP('lkasjdflkjasdkfjlaskdfkjabdacccccccebcd', 'ccc'));
