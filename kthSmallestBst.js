function kthSmallestInBST(t, k) {
    if(!t){
        return ;
    }
    
    var result = null;
    var count = 0;
    var isFound = false;
    
    function recur(t) {
        if (t!== null && !isFound) {
            recur(t.left);
            count++;
            if (count === k) {
                result = t.value;
                isFound = true; 
                return;
            }
            recur(t.right);
        }
    }
    recur(t);
    return result;

    
}
