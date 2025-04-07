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
    };
    display_all_item_send_by_delivery(delivery_code,delivery_last_name){
        return this.data_base.display_all_item_send_by_delivery(delivery_code,delivery_last_name)
    };
    edit_delivery(delivery_code,delivery_name,delivery_last_name,delivery_nat_code,delivery_capacity,delivery_status)
    
    {
        return this.data_base.edit_delivery(delivery_code,delivery_name,delivery_last_name,delivery_nat_code,delivery_capacity,delivery_status)
    }
}