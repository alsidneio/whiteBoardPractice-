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
testList.add(5);
testList.add(16);
testList.add(23);
testList.add(16);
testList.add(4);
testList.removeDups();