import fs from 'fs'
import { linkedlist } from './ds.mjs';
import { Item_information } from './information_node.mjs';
 
export function read_file(){
    let sll = new linkedlist()
fs.readFile('./test_files/delivered_parcel.txt', (err, data) => {
    if (err) {
        console.error(`there was an uncaught error: ${err}`);
        process.exit(1);
    }

    if (Buffer.isBuffer(data)) {
        data = data.toString('utf8');
    }

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
            console.log('item:', item);  
            sll.append(item);  
        } 
    });

    sll.display();
});




}
