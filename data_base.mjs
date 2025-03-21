import { linkedlist } from "./ds.mjs"
import { Item_information } from "./information_node.mjs";
export class Data_base{
    constructor(){
        this.sll_item = new linkedlist();
    }
    insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category){
        this.sll_item.append(new Item_information(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category));
        return true;
    }
    display_item(){
        return this.sll_item.display()
    }
    search_by_item_code(item_code){
        return this.sll_item.search(item_code);
    }

}
