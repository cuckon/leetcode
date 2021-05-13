/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x == 0) return true;

    let n = Math.ceil(Math.log10(x + 1)) | 0
    if (n<1) {
        return false;
    }
    let digits = [];
    let n2 = Math.floor(n/2);
    for (let i = 0; i < n; i++){
        let digit = x % 10;
        x = Math.trunc(x / 10);

        if (n % 2 && i == n2)
            continue;

        if (i < n2){
            digits.push(digit);
        } else {
            to_compare = digits[n - 1 - i];
            if (to_compare != digit)
                return false;
        }
    }
    return true
};
