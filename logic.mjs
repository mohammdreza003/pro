export class Logic{
    constructor(Data_base){
        this.data_base = Data_base;
    }
    insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category){
        return this.data_base.insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category);
    }
    display_item(){
        return this.data_base.display_item()
    }
    search_by_item_code(item_code){
        return this.data_base.search_by_item_code(item_code)
    }
    insert_delivery_info(delivery_code,delivery_date,delivery_time,delivery_address,item_code){
        return this.data_base.insert_delivery_info(delivery_code,delivery_date,delivery_time,delivery_address,item_code);
    }
    display_delivery(){
        return this.data_base.display_delivery()
    }
}