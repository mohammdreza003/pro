export class Logic{
    constructor(Data_base){
        this.data_base = Data_base;
    }
    insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category){
        this.data_base.insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category);
    }
}