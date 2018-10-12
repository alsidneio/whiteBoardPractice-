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

class Node{
    constructor(data){
        this.data=data;
        this.right=null;
        this.left=null;
    }
}
// this function bulds a tree given an array.
const buildTree =(arr)=>{
    lastParent=Math.floor(((arr.length-1)-2)/2)
    let queue=[];
   
   
    let i=0;
    let node= new Node(arr[0]);
    let head =node;
    while(i<=arr.length){
        
        if(arr[(2*i)+1]){
            node.left=new Node(arr[(2*i)+1]);  //left child of any element is 2n+1
            queue.unshift(node.left);
        }
        
        if(arr[(2*i)+2]){
            node.right=new Node(arr[(2*i)+2]);  //right child of any element is 2n+2
            queue.unshift(node.right);
        }

        node = queue.pop();
        i++;
    }
    console.log(i,lastParent)
    return head;
}

buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])

// the following function builds a linked list from a Binary tree 
//and stores the data elements of all children on the tree level as 
//the data for the linked list. The number of list nodes will be equal
//to the depth of the tree

class list{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const bin2linkedListByLevel=(tree)=>{
    let holder=[tree];
    let node = new list([]);
    let head = node;
    let level = 0; 

    while(hoder.length>0){
        currNode= holder.pop();
        node.data.push(currNode.data);

        if(node.data.length===Math.pow(2,level)){
            node.next=new list([]);
            node=node.next;
            level++;
        }

        if(currNode.left){
            holder.unshift(currNode.left)
        }

        if(currNode.right){
            holder.unshift(currNode.right)
        }


    }

    return head;
}


//The following code verifies that th tree is a BST
//has a time complexity of O(N) because we have to visit every node. 
const isBst=(tree, min=Number.MIN_VALUE, max=Number.MAX_VALUE)=>{
    //means we've gotton to the bottom fo a true without hitting a false 
    if(!tree){
        return true;
    }
    //when we go left the min value updates, when we go right the max value updates 
    if(tree.value<=min || tree.value>max){
        return false;
    }
    
    // true||false values are returned up the tree to give us our final result 
    return isBst(tree.left,min, tree.value) && isBst(tree.right, tree.value,max)
}

//My implemention of finding the successor of a random node in a BST

const succesor = (n)=>{
   //if it has a right node give me the left most of that right node 
    if(n.right){
        next(n.right)
    }

    const next= (node)=>{
        if(node.left){
            next(node.left)
        }
        return node.value 
    }
    //if im at a left most node at the bottom of the tree
    if(!n.left && !n.right && n.value<n.parent.value){
        return n.parent.value
    }

    // if im at the right most node at the bottom of the tree, traverse up till 
    //I find a greter parent and return that parent.
    if(!n.left && !n.right && n.value> n.parent.value){
        return up(n)
    }

    const up =(node)=>{
        if(node.parent===null){
            return null
        }

        if(node.value>node,parent.value){
            return up(node)
        }

        return node.parent.value
    }

}

const commonAncestor =(tree,node1,node2)=>{
    // if the tree is null of we have reached the bottom of the tree
    if(!tree){
        return null;
    }

    if(tree===node1 || tree===node2){ //stop descending and return the node
        return tree;
    }

    left = commonAncestor(tree.left, node1, node2); //descend to the left 
    right = commonAncestor(tree.right, node1,node2); //descend to the right 

    if(left && right){
        return tree;
    }else{
        return(left?left:right) //because we descend to the left if there is nothing there it has to be on the right.
    }
}

const largestValuesInTreeRows=(t)=> {
    let result=[]
    if(!t){
        return result
    }
    
    let holder=[t]
    while(holder.length>0){
        let max=-Infinity;
        let size=holder.length;
        console.log(holder)
        for(let i=0; i<size; i++){
            let currNode=holder.pop();
            max=Math.max(max,currNode.value);
            if(currNode.left){
                holder.unshift(currNode.left)
            }
            
            if(currNode.right){
                holder.unshift(currNode.right)
            }
        }
        result.push(max)  
    }
    return result;

}
