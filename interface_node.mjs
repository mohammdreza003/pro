const prompet = require  ('prompt-synce')();
export class Interface{
    constructor(Logic){
        this.Logic = Logic
    }
    menu(){
        while(true){
            let menu = (prompet("___menu__\n1.input item in system\n"));
            if (menu === '1'){
                this.get_item_info();
                break
            }
        }
    }
    get_item_info(){
        const item_code = prompet('itme code:')
        const item_wight = prompet("enter item wight:");
        const share_code = prompet('enter shere code:');
        const reg_time = prompet(" enter regester time :");
        const delivery_date = prompet('enter delivery data;')
        const ship_cost = prompet('enter shiping cost:');
        const category = prompet('enter category(f,c,o):')


    }
    // insert_item_info(){

    // }
    run(){
        this.menu
    }
}
