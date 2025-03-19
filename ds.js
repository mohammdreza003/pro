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
    remove_by_data(data){
        let temp = this.head;
        if (data === temp.data){
            this.remove_first();
            return;

        }
        while(temp.next !== null){
            if (data === temp.next.data){
                temp.next = temp.next.next;
                return console.log('true');
            }
            temp = temp.next;
            if(temp.next ===null){
                this.end = temp
            }

        }   
        return console.log('false')
    } 

    search(data){
        let temp = this.head;
       
        while (temp !== null ) {
            if (data ===temp.data){
                return console.log(temp.data);
            }
            temp =temp.next; 
            

        }
        return console.log('false');
    }
    display(){
        let temp = this.head;
        while(temp !== null){
            // console.log(temp.data + '->');
            process.stdout.write(temp.data + ' -> ');
            // console.log(temp)
            temp = temp .next;

        }
    }
}

class Custoarray{
    constructor(size){
        this.size = size;
        this.arr = Array(size).fill(null);
        this.count = 0;
        this.i = 0;
        
    }
    insert(data){
        if (this.count<this.size){
            this.arr[this.count] = data;
            this.count+=1;
        }
        else{
            return;
        }
    }
    display(){
        for(let i=0;i<this.count;i++){
            process.stdout.write(this.arr[i] + '->');
        }
        return;
    }
}



