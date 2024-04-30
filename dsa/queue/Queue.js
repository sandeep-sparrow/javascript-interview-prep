class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    // both operation should be O(1)
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    // dequeue() - equal to shift() in LinkedList
    // and removeFirst() in Java
    dequeue(){
        if(this.length == 0) return undefined;
        let temp = this.first;
        if(this.length == 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    ifEmpty(){
        return this.first === null;
    }

    printQueue() {
        let current = this.first;
        let result = "";
        while (current) {
          result += current.value + " ";
          current = current.next;
        }
        return result.trim();
      }
}

// Main Execution
let myQueue = new Queue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);

myQueue.enqueue(1311);
myQueue.enqueue("prajapati");


myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);

console.log(myQueue.printQueue());