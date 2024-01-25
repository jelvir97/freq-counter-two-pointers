// add whatever parameters you deem necessary
function longestFall(nums) {
    if(nums.length ===0) return 0;
    console.log(nums)
    let max = 1;
    let start = 0;
    let end = 0;

    while(end < nums.length){
        console.log(start, end)
        if(nums[end] > nums[end+1]){
            end++;
            max = max > end - start ? max : max+1
        }else{
            start = end+1;
            end = start;
        }
    }

    return max;
}

module.exports = longestFall;