// t is a binary tree node.

const isTreeSymmetric =(t)=> {
    if(!t){
        return true;
    }
    let stack=[];
    stack.unshift(t.left);
    stack.unshift(t.right);
    
    
    
    while(stack.length>0){
        let leftNode=stack.pop();
        let rightNode=stack.pop();
       // console.log(`left: ${leftNode}, right: ${rightNode}`)
        
        if(!leftNode && !rightNode){
            continue;
        }
        
        if(!leftNode || !rightNode || (rightNode.value!=leftNode.value)){
            return false;
        }
        
        stack.unshift(leftNode.left)
        stack.unshift(rightNode.right)
        
        stack.unshift(leftNode.right)
        stack.unshift(rightNode.left)
    }
    
    return true
   
}