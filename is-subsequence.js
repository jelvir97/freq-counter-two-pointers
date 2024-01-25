// add whatever parameters you deem necessary
function isSubsequence(sub, str) {
    let subIdx = 0, strIdx = 0;

    while(strIdx < str.length){
        if(subIdx >= sub.length) return true

        if(sub[subIdx] === str[strIdx]) subIdx++;

        strIdx++;
    }
    if(subIdx >= sub.length) return true

    return false;

}
module.exports = isSubsequence;