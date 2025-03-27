class Delivery_inf_node{
    constructor(name , last_name , na_code , Capacity, status){
        this.del_name = name
        this.del_last_name = last_name
        this.del_nat_code = na_code
        this.del_capacity  = Capacity
        this.del_status  =  status

    }
    tostring(){
        return `name : ${this.del_name} , last name : ${this.del_last_name} , national number : ${this.del_nat_code} , capacity : ${this.del_capacity} , status  (a or d) :${this.del_status}`
    }
}