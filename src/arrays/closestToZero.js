export function findClosestNumber(nums) {
    let closest = nums[0]

    for (const num of nums) {
        if (Math.abs(num) < Math.abs(closest)) {
            closest = num
        }
    }

    //edge case for comparing negative and positive value of same number
    if (closest < 0 && nums.includes(Math.abs(closest))) {
        closest = Math.abs(closest)
        return closest
    }
    else return closest;

}