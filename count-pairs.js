// add whatever parameters you deem necessary
function countPairs(nums, target) {
    nums.sort((a,b)=> a-b)
    let count = 0;
    let left = 0;
    let right = nums.length - 1

    while(left< right){
        let sum = nums[left]+nums[right]
        if(sum === target){
            count++
            left++;
        }else if(sum > target){
            right--;
        }
        else{
            left++;
        }
    }

    return count;
}

module.exports = countPairs;
