class MinPriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        // get the lowest element
        let idx = this.values.length - 1;
        const element = this.values[idx];
        // loop through to swap if highest and break if <= the parent element
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            // if greater then swap the parent and new element
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        // remove the root
        const min = this.values[0];
        const end = this.values.pop();
        // replace with recently added element
        this.values[0] = end;
        // EDGE CASE HANDLING
        if(this.values.length > 0){
            // sink down - bubbling down process...
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            // left child
            let leftChildIdx = 2 * idx + 1;
            // right child
            let rightChildIdx = 2 * idx + 2; // make sure it is not out of bound
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }

    }
}

class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

// Main Execution
let ER = new MinPriorityQueue(); // MAX PRIORITY QUEUE
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);

console.log(ER);
ER.dequeue();
console.log(ER);