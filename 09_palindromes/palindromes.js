const palindromes = function (arr) {
    let palin='';
    arr=arr.toLowerCase()
            .replace(/ /g,"")
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
            console.log(arr);
    for(let i =arr.length-1; i >= 0 ; i --){
            palin+= arr[i];
    }
   
    if(arr==palin){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
