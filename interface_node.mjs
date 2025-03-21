import promptSync from "prompt-sync";
const prompet = promptSync();
export class Interface{
    constructor(Logic){
        this.Logic = Logic
    }
    menu(){
        while(true){
            let menu = (prompet("___menu__\n1.input item in system\n2.display\n"));
            if (menu === '1'){
                this.get_item_info();
                
            }
            if (menu === '2'){
                this.display_item();
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
        this.insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category)

    }
    insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category){
        const s = this.Logic.insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category);
        if (s == true){
            console.log("seccesful.");
            
        }
    }
    display_item(){
       const a =this.Logic.display_item();
       console.log(a);
       
    
    }
    run(){
        this.menu()
    }
}
