class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
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
            if(element <= parent) break;
            // if greater then swap the parent and new element
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax(){
        // remove the root
        const max = this.values[0];
        const end = this.values.pop();
        // replace with recently added element
        this.values[0] = end;
        // EDGE CASE HANDLING
        if(this.values.length > 0){
            // sink down - bubbling down process...
            this.sinkDown();
        }
        return max;
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
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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

// Main Execution
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39)
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);