class Node{ 
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    add(data){
        let node = new Node(data)
        if(!this.head){
            this.head=node;
        }else{
            let currNode=this.head
            
            while(currNode.next){
              currNode=currNode.next
            }

            currNode.next=node 
        }
    }

    removeNthFromLast(k){
        //O comlexity: O(n): it will at most cycle through the list twice
        //-----------------------Explanation----------------------------//
        //First Find the size of the list
        //Use a while loop to stop at the node prior to the one youre trying to delete
        //IMPORTANT: SET YOUR COUNTER VARIABLE TO 1
        //Create a while loop, that updates the node you are at, make sure to do nothing
        //when you hit the node before the node you want to delete;
        //Exit while loop, set current nodes next prop to be node after. 
        let size=0;
        let probNode=this.head;
        let changeNode=this.head;
        while(probNode){
            probNode=probNode.next
            size++
        }
        
        
        let node=1;

        while(node<size-k){
            if(node===size-k-1){
             console.log("did nothing")
            }else{
                console.log(changeNode)
            changeNode=changeNode.next
            }

            node++    
        }
        changeNode.next=changeNode.next.next
        return(this.head);

    }

    
    palindrome(){
        let stack =[];
        let currNode=this.head;
        while(currNode){
            stack.unshift(currNode.data);
            currNode=currNode.next;
        }
            
        currNode=this.head;
        
        while(stack.length>0){
            let value=stack.shift();
            if(!(value===currNode.data)){
               return false 
            }
            currNode=currNode.next
        }

        return true;

    }

    removeDups(){
        //---------------------Explanation--------------------------//
        //Concept: need two tracking Nodes: 1 to probe the other to change.
        //The trick to this is tto have a previous qand a current Node
        //if its a duplicate, set prevNode.next = currNode.next 
        //if not prevNode= to currNode 
        //ALWAYS increment CurrNode such that its always one step ahead of prevNode
        //at the beginning of the loop. 
        let map ={};
        if(!this.head){
            return;
        }

        map[this.head.data]=true

        let currNode=this.head.next
        let prevNode= this.head;
            
        while(currNode){
          console.log(currNode.data)
            
          if(!map[currNode.data]){
              map[currNode.data]=true;
              
              prevNode=currNode;
          }else{
              prevNode.next=currNode.next
          }
          currNode=currNode.next
        }
        console.log(this.head);    
    }
}

let testList= new LinkedList()
testList.add(5);
testList.add(7);
testList.add(1);
testList.add(3);
testList.add(7);
testList.add(5);
testList.palindrome();