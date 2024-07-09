const removeFromArray = function(numList=[],...removeNum) {
    let newList = [];
    for(let i=0; i<numList.length;i++){
        newList.push(numList[i]);
        for(let j = 0; j<removeNum.length;j++){
            if(numList[i]===removeNum[j]){
                newList.pop();
            }
        }    
    }
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
