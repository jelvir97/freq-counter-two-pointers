// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
    if(msg.length > ltrs.length) return false;
    function makeBucket(str){
        const b = {}
        for(let c of str){
            b[c] = b[c] ? b[c] + 1 : 1
        }
        return b;
    }

    const msgBucket =  makeBucket(msg)
    const ltrBucket =  makeBucket(ltrs)

    for(let k of Object.keys(msgBucket)){
        if(!ltrBucket[k] || ltrBucket[k]< msgBucket[k]) return false;
    }
    return true;
}

module.exports = constructNote
