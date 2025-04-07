export class Delivery_inf_tahvil_node{
    constructor(employment_code  , item_code){
        this.del_eployment_code = employment_code;
        this.item_code = item_code;
    }
    tostring(){
        return `delivery employment code :${this.del_eployment_code}\n item code :${this.item_code}`
    }
    
}