
import { promises as fs } from 'fs';
import { linkedlist } from "./ds.mjs"
import { Item_information } from "./information_node.mjs";
export class Data_base{
    constructor(){
        // this.filePath = '/home/mohammadreza/data structure/project1/test_files/delivered_parcel.txt';
        this.sll_item = new linkedlist();
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
    async read_file(){
        
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
    
            console.log(this.display_item()); 
    
        } catch (err) {
            console.error(`Error reading file: ${err}`);
        }
    }
    
    
    
    
}

//     read_file(){
//         let sll = new linkedlist()
//         fs.readFile('./test_files/delivered_parcel.txt', (err, data) => {
//             if (err) {
//                 console.error(`there was an uncaught error: ${err}`);
//                 process.exit(1);
//             }
    
//             if (Buffer.isBuffer(data)) {
//                 data = data.toString('utf8');
//             }
    
//             let lines = data.split('\n');
//             lines.forEach(line => {
//                 let d = line.trim().split(',');
    
//                 if (d.length === 7) {
//                     let item = new Item_information(
//                         d[0], 
//                         d[1], 
//                         d[2], 
//                         d[3], 
//                         d[4], 
//                         d[5], 
//                         d[6]
//                     );
//                     console.log('item:', item);
//                     // this.sll_item.append(item)  
//                     // console.log(this.display_item());
                    
//                 } 
//             });
    
//         });
//     }
// }
    
//     async readFile() {
//         try {
//             let data = await fs.readFile(this.filePath, 'utf8');

//             if (Buffer.isBuffer(data)) {
//                 data = data.toString('utf8');
//             }

//             let lines = data.split('\n');
//             lines.forEach(line => {
//                 let d = line.trim().split(',');

//                 if (d.length === 7) {
//                     let item = new Item_information(
//                         d[0], 
//                         d[1], 
//                         d[2], 
//                         d[3], 
//                         d[4], 
//                         d[5], 
//                         d[6]
//                     );

//                     this.sll.append(item);
//                 }
//             });

//             this.sll.display();
//         } catch (err) {
//             console.error("Error reading file:", err);
//         }
//     }
// }
