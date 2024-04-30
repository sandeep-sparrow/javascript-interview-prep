class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.height = 1;
    }

    // push(int value) - Java, equal to upShift(value) in JS or prepend(int value) in Java
    // LINKEDLIST
    push(value){
        const newNode = new Node(value);
        if(this.height == 0){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.height++;
        return this; // return entire stack
    }

    // pop() - also called removeFirst(int value) in Java
    pop(){
        if(this.height === 0) return undefined;

        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.height--;
        return temp;
    }
}

// Main Execution
let myStack = new Stack(5);
myStack.push(10);
myStack.push(20);
console.log(myStack);
myStack.pop();
console.log(myStack);