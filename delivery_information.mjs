export class Delivery_inf_node{
    constructor(name , last_name , na_code , Capacity, status , code){
        this.del_name = name
        this.del_last_name = last_name
        this.del_nat_code = na_code
        this.del_capacity  = Capacity
        this.del_status  =  status
        this.del_code = code
        
    }
    tostring(){
        return `delivery name :${this.del_name}\n delivery lastname :${this.del_last_name}\n delivery national code :${this.del_nat_code}\n delivery capacity :${this.del_capacity}\n delivery status :${this.del_status} \n delivery code :${this.del_code}`
    }
}