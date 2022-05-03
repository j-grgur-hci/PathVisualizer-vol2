export class Stack{
    constructor(){
        this.nodes=[];
    }

    pop(){
        if(this.nodes.length===0){
            return "empty";
        }
        else{
            return this.nodes.pop();
        }

    }

    push(element){
        this.nodes.push(element);
    }

    isEmpty(){
        return this.nodes.length===0;
    }

    length(){
        return this.nodes.length;
    }
}