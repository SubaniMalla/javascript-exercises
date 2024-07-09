const sumAll = function(numStart, numEnd) {
    if((typeof numStart==='number')&&(typeof numEnd==='number')){
        let sum=0;
        if(numStart>numEnd){
            let temp=numEnd;
            numEnd=numStart;
            numStart=temp;
        }
        if((numEnd<0)||(numStart<0)){
            return 'ERROR'
        }
        for(let i = numStart;i<=numEnd;i++){
            sum+=i;
        }
        return sum;
    }
    else{
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
