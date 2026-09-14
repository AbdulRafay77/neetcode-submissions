class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            // 26 positions for a-z
            const count = new Array(26).fill(0);

            // Count each character
            for (const char of str) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                count[index]++;
            }

            // Convert array into a string to use as Map key
            const key = count.join('#');

            // Create group if it doesn't exist
            if (!map.has(key)) {
                map.set(key, []);
            }

            // Add string to its anagram group
            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}