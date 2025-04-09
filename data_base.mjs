
import { promises as fs } from 'fs';
import { linkedlist } from "./ds.mjs"
import { Item_information } from "./information_node.mjs";
import { Delivery_inf_node } from './delivery_information.mjs';
import { Not_send_node } from './not_send_node.mjs';
import { log } from 'console';
export class Data_base{
    constructor(){
        this.sll_item = new linkedlist();
        this.sll_delivery = new linkedlist();
        this.sll_not_delivery = new linkedlist();
        this.sll_ss_delivery = new linkedlist();
        this.delivery_code = 0;
    }
    insert_item_file(item){
        this.sll_item.append(item);
        return true;
    }
    insert_item_info(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category){
        const item = new Item_information(item_code,item_wight,share_code,reg_time,delivery_date,ship_cost,category)
        this.sll_item.append(item);
        return true;
    }
    display_item(){
        return this.sll_item.display()
    }
    search_by_item_code(item_code){
        return this.sll_item.search(item_code);
    }
    async read_file_item(){
        
        try {
            let data = await fs.readFile('./test_files/delivered_parcel.txt', 'utf8');
            let lines = data.split('\n');
    
            lines.forEach(line => {
                let d = line.trim().split(',');
    
                if (d.length === 7) {
                    let item = new Item_information(
                        d[0], 
                        d[1], 
                        d[2], 
                        d[3], 
                        d[4], 
                        d[5], 
                        d[6]
                    );
    
                    this.insert_item_file(item);
                      
                } 
            });
        } catch (err) {
            console.error(`Error reading file: ${err}`);
        }
    }
    async read_file_delivery(){
        try {
            let data = await fs.readFile('./test_files/delivery_information.txt', 'utf8');
            let lines = data.split('\n');
    
            lines.forEach(line => {
                let d = line.trim().split(',');
    
                if (d.length === 5) {
                    this.delivery_code +=1;
                    let item = new Delivery_inf_node(
                        d[0], 
                        d[1], 
                        d[2], 
                        d[3], 
                        d[4],
                        this.delivery_code
                    );
    
                    this.insert_delivery_file(item);
                    this.sll_delivery.display()
                } 
            });
        } catch (err) {
            console.error(`Error reading file: ${err}`);
        }
    }
    async read_file_delivery_parcel(){
        try {
            let data = await fs.readFile('./test_files/delivery_parcel_information.txt', 'utf8');
            let lines = data.split('\n');
    
            lines.forEach(line => {
                let d = line.trim().split(',');
                let a = this.sll_delivery.search1(d[0])
                if (a!== null){ {
                    if (typeof a.send_item === 'function') {
                        a.send_item(d[0], d[1]);
                    } 

                }
            }}
            );
        } catch (err) {
            console.error(`Error reading file: ${err}`);
        }
    }
    
    async read_file_not_delivery(){
        try {
            let data = await fs.readFile('./test_files/not_delivered_parcel.txt', 'utf8');
            let lines = data.split('\n');

            lines.forEach(line => {
                let d = line.trim().split(',');
                if (d.length === 6) {
                    let item = new Not_send_node(d[0],d[1],d[2],d[3],d[4],d[5])
                    this.sll_not_delivery.append(item);
                      
                }
                
            }
        )}
        catch (err) {
            console.error(`Error reading file: ${err}`);
        }
    }
        
                
    
    insert_delivery_info(delivery_name,delivery_last_name,delivery_nat_code,delivery_capacity,delivery_status){
        this.delivery_code +=1;
        const item = new Delivery_inf_node(delivery_name , delivery_last_name , delivery_nat_code , delivery_capacity , delivery_status , this.delivery_code)
        this.sll_delivery.append(item);
        return true;
    }
    insert_delivery_file(item){
        this.sll_delivery.append(item);
        return true;
    }
    display_delivery(){
        return this.sll_delivery.display()
    }
    search_delivery(delivery_code){
        return this.sll_delivery.search1(delivery_code)
    }
    edit_delivery(delivery_code,delivery_name,delivery_last_name,delivery_nat_code,delivery_capacity,delivery_status){
        const a = this.search_delivery(delivery_code);
        if (a !== null && typeof a === 'object') {
            if ('del_name' in a && 'del_last_name' in a && 'del_nat_code' in a && 'del_capacity' in a && 'del_status' in a) {
                a.del_name = delivery_name;
                a.del_last_name = delivery_last_name;
                a.del_nat_code = delivery_nat_code;
                a.del_capacity = delivery_capacity;
                a.del_status = delivery_status;
                return true;
            } else {
                console.error(`Error: The object does not have the required properties.`);
            }
        } else {
            console.error(`Error: Delivery with code ${delivery_code} not found or invalid object.`);
        }

    }
    
    invert_time(node) {
        if (!node.register_time || !node.delivery_date) {
            return 0;  
        }
    
        const data1 = new Date(node.rehister_time);
        const data2 = new Date(node.delivery_date);
    
        
    
        const delta = data2 - data1;
        const delta_day = delta / (1000 * 60 * 60 * 24);
    
        return Number(delta_day);
    
        
    }
    system_for_delivery(){
        
        let temp = this.sll_item.head;

        while (temp !== null) {
            let next = temp.next;  
            let a = this.invert_time(temp.data);
                
            if (temp.data.category == 'F' && a >= 2) {
                this.ss_insert(temp.data);
                
            }
            else if (temp.data.category == 'C' && a >= 5) {
                this.ss_insert(temp.data);
            }
            else if (temp.data.category =='O' && a >= 10) {
                this.ss_insert(temp.data);
            }
           
            
        
             
            temp = next;  
        }

            
    }
    ss_insert(item){
        this.ss_delivered(item);

    }
    ss_display(){
        return this.sll_ss_delivery.display()

    }
    ss_delivered(){
        this.system_for_delivery();
        // this.ss_display()
        // return this.sll_not_delivery.display();
    }
    display_all_item_send_by_delivery(del_code){
        const a = this.search_delivery(del_code)
        if (a!==null){
            return a.display();
        }
    }

    }


        

        
        
        
        


