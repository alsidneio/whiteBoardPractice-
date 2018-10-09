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