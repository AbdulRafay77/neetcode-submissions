class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (const str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // Find the # that separates length from string
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            // Get the length
            const length = Number(str.slice(i, j));

            // Move past #
            i = j + 1;

            // Get exactly `length` characters
            result.push(str.slice(i, i + length));

            // Move to the next encoded string
            i = i + length;
        }

        return result;
    }
}
