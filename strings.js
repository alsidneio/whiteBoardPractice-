const revStr=(string)=>{
    let next="";
    let i=0;
    if(string[i+1]){
        next=revStr(string.slice(1));
    }

    return next+string[0]
}

revStr("abcdefg")