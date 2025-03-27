// import { promises as fs } from 'fs';
// import { linkedlist } from './ds.mjs';
import { Data_base } from './data_base.mjs';
import { Item_information } from './information_node.mjs';
import { promises as fs } from 'fs';
// import { Data_base } from './data_base.mjs'; 
// import path from 'path';
// export async function readFile() {
//     try {
//         console.log()
//         let data = await fs.readFile('D:\\p\\pro\\ppro\test_filesdelivered_parcel.txt', 'utf8');
//         console.log(data);
//         // let sll = new linkedlist()
//         // let dbs = new Data_base();
//         let sll = new linkedlist();
       
//         let lines = data.split('\n');
//         lines.forEach(line => {
//             let d = line.trim().split(',');
    
//             if (d.length === 7) {
//                 let item = new Item_information(
//                     d[0], 
//                     d[1], 
//                     d[2], 
//                     d[3], 
//                     d[4], 
//                     d[5], 
//                     d[6]
//                 );
//                 // console.log('item:', item);  
//                 // let a = dbs.insert_item_file(item);
//                 // console.log(a);
//                 sll.append(item)
                
//                 console.log(sll.display());
//             } 
//         });
    

        
//     } catch (err) {
//         console.error("Error reading file:", err);
//     }
// }
// readFile()




// console.log(path("./test_files/delivered_parcel.txt"));

export async function read_file() {
    let dbs = new Data_base();

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

                dbs.insert_item_file(item);
            } 
        });

        console.log(dbs.display_item()); 

    } catch (err) {
        console.error(`Error reading file: ${err}`);
    }
}


await read_file()
