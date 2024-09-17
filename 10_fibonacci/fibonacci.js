const fibonacci = function(z) {
    let x=0,y=1,ans;
    if(z<0){
        return "OOPS";
    }
    if(z==0){
        return 0;
    }
    else if(z==1){
        return 1;
    }
    else{
        for(let i=1;i<z;i++){
            ans=x+y;
            x=y;
            y=ans;
        }
        return ans;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
