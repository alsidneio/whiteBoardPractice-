const countdown= (num)=>{
    if(num<=0){
        console.log("all done");
        return;
    }
 
    console.log(num);
    num--
    countdown(num);
 }
 
 countdown(10)

 const sumRange =(num)=>{
     if(num ==1){
         return 1
     }

     return num+sumRange(num-1)
 }

 sumRange(3)

 const factorial =(num)=>{
     if(num==1){
         return 1
     }
     return n*factorial(n-1)
 }