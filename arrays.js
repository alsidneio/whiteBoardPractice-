
// This is a two sum prpoblem with two arrays
// takes O(NlogN) and thats the best we can do if give two arrays 
// reurns true or false if a pair is present, doesnt save the values;
function sumOfTwo(a, b, v) {
    let map={};
    
    for(let itemA of a){
       map[itemA]=true;
    }
    
    for(let itemB of b){
        if(map[v-itemB]){
            return true
        }
    }
    return false
}
