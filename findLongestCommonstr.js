
//This function allows me to build an array table
// that fills and properly tracks the common characters
const fillTable=(str1,str2)=>{
    let strMatrix =buildArray(str1,str2);
    let maxLength=0;
    let str="";
    for(let i=0; i<str1.length; i++){
        for(let j=0; j<str2.length; j++){
            if(str1[i]==str2[j]){
                if(!str1[i-1] && !str2[j-1]){
                    strMatrix[i][j]=1;
                }else{
                    strMatrix[i][j]=strMatrix[i-1][j-1]+1
                }
                //------Where the magic happens------------//
                //The following block of code tracks the longest string 
                //and at the same time builds it the string whenever a new 
                //longer sequence is found. There is an inefficiency because we destroy
                //the previous characters in the string. but we dont have to worry 
                //about tracking last position  
                if(strMatrix[i][j]>maxLength){
                    maxLength=strMatrix[i][j];
                    str="";
                    let k=i, p=j;
                    while(strMatrix[k] && strMatrix[k][p]){
                        str= str1[k] + str
                        k--;
                        p--;
                    }
                }
                //-----------end------------------------//
            }else{
                strMatrix[i][j]=0;
            }
        }
    }
    return str
}

// This function allows me to build 
// an empty 2D array given any two strings 
const buildArray=(str1, str2)=>{
    let matrix;
    matrix=new Array(str1.length)

    for(i=0; i<matrix.length; i++){
        matrix[i]=new Array(str2.length);
    }
   return matrix; 
}



fillTable("abgfertpwer","apowerd")