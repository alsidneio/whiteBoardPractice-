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
