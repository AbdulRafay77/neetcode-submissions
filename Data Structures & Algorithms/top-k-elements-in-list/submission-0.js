class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Count frequencies
        const count = new Map();

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // 2. Create buckets
        // Index = frequency
        // Value = numbers with that frequency
        const buckets = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        // 3. Put each number into its frequency bucket
        for (const [num, freq] of count) {
            buckets[freq].push(num);
        }

        // 4. Collect from highest frequency to lowest
        const result = [];

        for (let freq = nums.length; freq >= 1; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}