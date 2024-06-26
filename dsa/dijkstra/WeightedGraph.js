class PriorityQueue{ // need to use Binary Queue
    constructor(){
        this.values= [];
    }

    enqueue(value, priority){
        this.values.push({value, priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        } 
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest = undefined;
        let path = [];

        // build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        console.log(distances);
        console.log(previous);
        console.log(nodes);

        // as long as there is something to visit
        while(nodes.values.length){
            // current smallest value
            smallest = nodes.dequeue().value;
            if(smallest === finish){
                // we are done
                // build up path to return
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neightbour in this.adjacencyList[smallest]){
                    // find the neighour node
                    let nextNode = this.adjacencyList[smallest][neightbour];
                    // calculate new distance
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNeighbour]){
                        // updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate;
                        // updating previous - how we get to the neighbour
                        previous[nextNeighbour] = smallest;
                        // refresh
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }

}

// Main Execution
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.adjacencyList);

console.log(graph.Dijkstra("A", "E"));