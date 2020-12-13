// 344.反转字符串

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let rhl,lhl
    if (s.length <= 1) {
        return
    } else if (s.length % 2 === 0) {
        rhl = s.length / 2
        lhl = rhl - 1
    } else {
        rhl = Math.floor(s.length / 2)
        lhl = Math.floor(s.length / 2)
    }

    while (lhl >= 0) {
        if (s[lhl] === s[rhl]) {
            lhl--
            rhl++
            continue
        }
        let temp = s[lhl]
        s[lhl] = s[rhl]
        s[rhl] = temp
        lhl--
        rhl++
    }

}