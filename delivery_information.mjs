import { linkedlist } from "./ds.mjs"
import { Delivery_inf_tahvil_node } from "./delivery_info_tahvel.mjs";
export class Delivery_inf_node{
    constructor(name , last_name , na_code , Capacity, status , code){
        this.del_name = name
        this.del_last_name = last_name;
        this.del_nat_code = na_code;
        this.del_capacity  = Capacity;
        this.del_status  =  status;
        this.code = code;
        this.del_sent = new linkedlist();
    }
    send_item(code,item_code){
        this.del_sent.append(new Delivery_inf_tahvil_node(code,item_code))
    }
    
    display(){
        return this.del_sent.display()
    }   
    tostring(){
        return `delivery name :${this.del_name}\n delivery lastname :${this.del_last_name}\n delivery national code :${this.del_nat_code}\n delivery capacity :${this.del_capacity}\n delivery status :${this.del_status} \n delivery code :${this.code}`
    }
}