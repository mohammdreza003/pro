import { Item_information } from "./information_node.mjs";
export class Node{
    constructor(data){
        this. data = data ;
        this.next = null;
    }
}

export class linkedlist{
    constructor(){
        this.head = null;
        this.end = null;
        
    }

    append(data){
    const node = new Node(data)
    if (this.head === null){
        this.head = node;
        this.end = node;
    } else {
        this.end.next = node;
        this.end = node;
        
    }
    }

    remove_first(){
        let temp = this.head;
        if(temp === null){
            return;
        }
        this.head = temp.next ;
    }
    remove_by_data(data_code){
        let temp = this.head;
        if (temp === null) return;
    
        if (temp.data.code === data_code){
            this.remove_first();
            return;
        }
    
        while(temp.next !== null){
            if (temp.next.data.code === data_code){
                temp.next = temp.next.next;
                return console.log('true');
            }
            temp = temp.next;
            if(temp.next === null){
                this.end = temp;
            }
        }
        return console.log('false');
    }
        


    search(data){
        let temp = this.head;
       
        while (temp !== null ) {
            if (temp.data && temp.data.code === data) {
                return temp.data;
            }
            temp = temp.next; 
        }
        return false;
    }
    display(){
        let temp = this.head;
        let result = "";
        while(temp !== null){
            // console.log(temp.data + '->');
            result += "\n\n"+temp.data.tostring() + " -> ";
            // console.log(temp)
            temp = temp .next;

        }
        return result + "null"+ "\n"
    }
}
