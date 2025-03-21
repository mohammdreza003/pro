export class Item_information{
    // وزن رو اشتباه نوشتی
    constructor(item_code, wight , share_code ,  reg_time, deliv_time , ship_cost , cate){
        this.item_code = item_code
        this.wight = wight
        this.share_code = share_code
        this.register_time = reg_time
        this.delivery_date = deliv_time
        this.shippingcost = ship_cost
        this.category = cate
    }
    tostring(){
        return `(item_code:${this.item_code})\nwight:${this.wight}\nregister time:${this.register_time}\ndelivery date:${this.delivery_date}\nshiping cost:${this.shippingcost}\ncategory:${this.category}`
    }
}