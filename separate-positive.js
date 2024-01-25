// add whatever parameters you deem necessary
function separatePositive(nums) {
    let negCount = 0;
    for(let i = 0; i < nums.length - negCount; i++){
        if(nums[i] < 0){
            nums.push(nums.splice(i,1)[0])
            negCount++;
            i--;
        }
    }
    return nums;
}

module.exports = separatePositive