// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
    function makeBucket(str){
        const b = {}
        for(let c of str){
            b[c] = b[c] ? b[c] + 1 : 1
        }
        return b;
    }
    let n1Str = n1.toString(), n2Str = n2.toString()

    if(n1Str.length !== n2Str.length) return false
    
    let n1Bucket = makeBucket(n1Str)
    let n2Bucket = makeBucket(n2Str)

    for(let k of Object.keys(n1Bucket)){
        if(!n2Bucket[k] || n1Bucket[k]!== n2Bucket[k]) return false;
    }
    return true;
}

module.exports = sameFrequency