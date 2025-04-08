import promptSync from "prompt-sync";
const prompet = promptSync();
export class Interface{
    constructor(Logic){
        this.Logic = Logic
    }
    menu(){
        while(true){
            let menu = (prompet("___menu__ \n 1.item manager\n 2.delivery manager\n 3.exit\n"));
            if (menu === '1'){
                this.item_menu()
            }
            else if (menu === '2'){
                this.delivery_menu()
            }
            else if (menu === '3'){
                process.exit(1);
            }
            else {
                console.log("invalid input")
            }
            
        }
    }
    delivery_menu(){
        while(true){

            let menu = (prompet("___menu__\n1.input delivery in system\n2.display\n3.search by delivery code\n4.display all item send by delivery(not working) \n5.edit delivery\n6.display all seccse deliverd \n7.exit\n"));
                if (menu === '1'){
                    this.get_delivery_info();
                }
                else if (menu === '2'){
                    this.display_delivery();
                }
                else if (menu ==='3'){
                    this.search_by_delivery_code()
                }
                else if (menu === '4'){
                    this.display_all_item_send_by_delivery()
                }
                else if (menu === '5'){
                    this.edit_delivery()
                }
                else if (menu === '6'){
                    this.ss_delivered()
                }
                else if (menu === '7'){
                    process.exit(1);
                }
            }
    }
    item_menu(){
        while(true){
            let menu = (prompet("___menu__\n1.input item in system\n2.display\n3.search by item code\n4.exit\n"));
                if (menu === '1'){
                    this.get_item_info();
                }
                else if (menu === '2'){
                    this.display_item();
                }
                else if (menu ==='3'){
                    this.search_by_item_code()
                }
                else if (menu === '4'){
                    process.exit(1);
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
    search_by_item_code(){
        const item_code = prompet('enter item code to search:');
        const a = this.Logic.search_by_item_code(item_code);
        console.log(a);
    }
    get_delivery_info(){
        const delivery_name = prompet('enter delivery name:');
        const delivery_last_name = prompet('enter delivery last name:');
        const delivery_nat_code = prompet('enter delivery nat code:');
        const delivery_capacity = prompet('enter delivery capacity:');
        const delivery_status = prompet('enter delivery status:(please enter a or d for active or deactive)');
        
        this.insert_delivery_info(delivery_name,delivery_last_name,delivery_nat_code,delivery_capacity,delivery_status)
    }
    insert_delivery_info(delivery_code,delivery_date,delivery_time,delivery_address,item_code){
        const s = this.Logic.insert_delivery_info(delivery_code,delivery_date,delivery_time,delivery_address,item_code);
        if (s == true){
            console.log("seccesful.");
            
        }
    }
    display_delivery(){
       const a =this.Logic.display_delivery();
       console.log(a);
    }
    display_all_item_send_by_delivery(){
        const delivery_code = prompet('enter delivery name  :');
        const delivery_last_name = prompet('enter delivery last name  :');
        const a = this.Logic.display_all_item_send_by_delivery(delivery_code,delivery_last_name);
        console.log(a);
    }
    edit_delivery(){
        const delivery_code = prompet('enter delivery code to edit:')
        
        const delivery_name = prompet('enter delivery name:')
        const delivery_last_name = prompet('enter delivery last name:')
        const delivery_nat_code = prompet('enter delivery nat code:')
        const delivery_capacity = prompet('enter delivery capacity:')
        const delivery_status = prompet('enter delivery status:(please enter a or d for active or deactive)')
        
        this.Logic.edit_delivery(delivery_code,delivery_name,delivery_last_name,delivery_nat_code,delivery_capacity,delivery_status)
    }
    ss_delivered(){
    
       const a = this.Logic.ss_delivered();
       if (a!=null){
            console.log(a);
            
       }
    }
    
    run(){
        this.menu()
    }
}
