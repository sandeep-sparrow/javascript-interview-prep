class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(value){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true){
            if (newNode.value === temp.value){
                return undefined;
            }
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }else{
                if(temp.right == null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value){
        if(this.root === null) return false;
        let temp = this.root;
        while(temp){
            if(value < temp.value){
                temp = temp.left;
            }else if(value > temp.value){
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }
}

// Main execution
let myTree = new BST();
myTree.insert(10);
myTree.insert(15);
myTree.insert(20);
myTree.insert(5);
myTree.insert(3);
myTree.insert(6);
myTree.insert(14);
console.log(myTree);
console.log(myTree.contains(11));