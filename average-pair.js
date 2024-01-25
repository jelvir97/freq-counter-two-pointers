// add whatever parameters you deem necessary
function averagePair(nums, target) {
    let left = 0;
    let right = nums.length -1;
    while(left<right){
        if(nums[left]> target || nums[right]<target) break;
        let avg = (nums[right]+nums[left])/2
        if( avg === target){
            return true
        }else if(avg>target){
            right--;
        }else{
            left++;
        }
    }
    return false;
}

module.exports = averagePair;
