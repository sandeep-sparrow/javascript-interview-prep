class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // append(int value) - Java
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // removeLast() - Java
    pop(){
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    // prepend(int value) - Java
    unShift(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // removeFirst() - Java
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return temp;
    }

    // get(index) - Java
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    // set(index, value) - Java
    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }

    // insert(index, value) - Java
    insert(index, value){
        if(index === 0) return this.unShift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return false;

        let newNode = new Node(value);
        let temp = this.get(index -1);

        newNode.next = temp.next;
        temp.next = newNode;

        this.length++;
        return true;
    }

    // remove(index) - Java
    remove(index){
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        const before = this.get(index - 1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    // reverse() - Java - Common Interview question
    reverse(){
        // swap head and tail
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // declare variable
        let next = temp.next;
        let prev = null;

        // reverse all the nodes
        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev; // reverse the pointer
            prev = temp;
            temp = next;
        }
    }
}

// Main Execution
let myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(20);
console.log(myLinkedList);
myLinkedList.shift();
myLinkedList.unShift(25);
myLinkedList.insert(1, 15);
myLinkedList.pop();
myLinkedList.remove(1);
myLinkedList.push(10);
console.log(myLinkedList);
myLinkedList.reverse();
console.log(myLinkedList);