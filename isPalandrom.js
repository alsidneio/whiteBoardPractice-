const isPermutation=(str1,str2)=>{
    if(str1.length!=str2.length){
        return false;
    }

    
    for(let item of str2){
        if(!str1.includes(item)){
            return false;
        }
    }
    return true;
}