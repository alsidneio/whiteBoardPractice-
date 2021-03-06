class graph{
    constructor(){
        this.adjList={};
    }

    addVert(key){
        if(this.adjList[key]){
            console.log("vertex already exists")
        }else{
            this.adjList[key]=[];
        
            console.log(this.adjList)
        }
    }

    removeVert(key){
        while(this.adjList[key].length>0){
            this.removeEdge(key,this.adjList[key][0])
        }

        delete this.adjList[key]
        console.log(this.adjList)
    }

    addEdge(v1,v2){
        this.adjList[v1].push(v2)
        console.log(this.adjList)
        this.adjList[v2].push(v1)
        console.log(this.adjList)
    }

    removeEdge(v1,v2){
        for(let i=0;i<this.adjList[v1].length;i++){
            if(this.adjList[v1][i]===v2){
                this.adjList[v1].splice(i,1)
            }
            console.log(this.adjList)
        }

        for(let i=0;i<this.adjList[v2].length;i++){
            if(this.adjList[v2][i]===v1){
                this.adjList[v2].splice(i,1)
            } 
            console.log(this.adjList)
        }
    }

     DFSRecurse(vertex){
        let result =[];
        let visted={};

        const traverse = (node) =>{
            if(!node){
                return;
            }

            result.push(node)
            if(!visted[node]){
                visted[node]=1;
            }

            //The following 3 lines  of code allow the traversal into
            //the pgraph children and when the if condition is false
            //allows us to traverse back out. 
            for (let item of this.adjList[node]){
                if(!visted[item]){
                    traverse(item);
                }
            }
        }

        traverse(vertex)
        return result
       
    }

    DFS(vertex){
        let visited={};
        let result=[];
        const traverse=(vertex)=>{
            if(!vertex){
                return
            }
            
            visted[vertex]= true;
            result.push(vertex);

            for( let item of this.adjList[vertex]){
                if(!visted[item]){
                    return traverse(item)
                }
            }
        }
        console.log(result);
        return result;
    }

    BFS(vertex){
        let visted={};
        let result=[];
        let queue=[];

        visted[vertex]=1;
        queue.unshift(vertex);
        while(queue.length>0){
            result.push(queue.pop())
            for(let item of this.adjList[result[result.length-1]]){
                if(!visted[item]){
                    visted[item]=1;
                    queue.unshift(item);
                }
            }
        }
        
        return result

    }

    isPath(node1,node2){
        let visited = {};
        let result = [];
        let queue = [];
        let current;

        visited[node1]=1;
        queue.unshift(node1);
        while(queue.length>0){
            current = queue.pop();
            result.push(current);
            for(let item of this.adjList[current]){
                if(item===node2){
                    return true; 
                }else{
                    if(!visited[item]){
                        visited[item]=1;
                        queue.unshift(item)
                    }
                }
            }
        }
        return(result, false);
    }

}

const testGraph = new graph();
testGraph.addVert("A")
testGraph.addVert("B")
testGraph.addVert("C")
testGraph.addVert("D")
testGraph.addVert("E")
testGraph.addVert("F")
console.log("================")

testGraph.addEdge("A","B")
testGraph.addEdge("A","C")
testGraph.addEdge("B","D")
testGraph.addEdge("C","E")
testGraph.addEdge("D","F")
testGraph.addEdge("D","E")
testGraph.addEdge("E","F")
console.log("================")

testGraph.DFS('A')
