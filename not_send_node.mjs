export class Not_send_node{
    // share_code منظور کد اشتراک هست 
    constructor(item_code,wight,share_code,reg_time , ship_cost , cate){
        this.item_code = item_code;
        this.wight = wight;
        this.share_code = share_code;
        this.register_time = reg_time;
        this.ship_cost = ship_cost;
        this.category = cate;
    }
    tostring(){
        return `____not send___\nitem code :${this.item_code}\n item wight :${this.wight}\n item share code :${this.share_code}\n item register time :${this.register_time}\n item ship cost :${this.ship_cost}\n item category :${this.category}`
    }
}