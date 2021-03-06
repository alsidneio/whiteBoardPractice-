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

    size(){
        let count=0
        let currNode=this.head;
        while(currNode){
            currNode=currNode.next;
            count++;
        }

        return count;
    }

    reverse(){

        //---------------------explanation----------------------//
        //reversing a list requires a shuffling of entir nodes;
        // NextNode: prserves the list state before the shuffle occurs 
        //currNode: moves us down the list chain
        //prevNode: is what we use to build the list in reverse
        //so for each iterartion we are going to:
        //      1. preserve the current state
        //      2. point CurrNode.next to prevNode(the whole collection)
        //      3. totally replace what in prevNode by setting prevNode=currNode
        //      4. totally replace CurrNode by setting it tothe node we preservered earlier
        let currNode= this.head;
        let prevNode=null;
        let nextNode;
        console.log(currNode);
        while(currNode){
            nextNode=currNode.next; //1
            currNode.next=prevNode//2
            //console.log(currNode)
            prevNode=currNode//3
            //console.log(prevNode)
            currNode=nextNode;//4
        }

       return prevNode;
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
const intersection=(node1, node2)=>{
    let count1=0, count2=0;
    let currNode1=node1.head;
    let currNode2=node2.head;

    while(currNode1){
        currNode1=currNode1.next;
        count1++;
    } 

    while(currNode2){
        currNode2=currNode2.next;
        count2++;
    } 

    currNode1= node1.head;
    currNode2= node2.head;

    let diff=Math.abs(count1-count2);
   

    if(count1>count2){
        count1=diff;
        while(count1>0){
            currNode1=currNode1.next
            count1--;
        }
    }else{
        count2=diff;
        while(count2>0){
            currNode2=currNode2.next;
            count2--
        }
    }
    while(currNode1){
        
        if(JSON.stringify(currNode1)===JSON.stringify(currNode2)){
            return currNode1;
        }else{
            currNode1=currNode1.next;
            currNode2=currNode2.next;
        }

    }

 return false;     

}
let testList= new LinkedList()
testList.add(5);
testList.add(7);
testList.add(1);
testList.add(3);
testList.add(7);
testList.add(5);

 
let testList2=new LinkedList();

testList2.add(3);
testList2.add(7);
testList2.add(5);
testList2.add(4);

intersection(testList,testList2)