import { Data_base } from "./data_base.mjs";
import { Logic } from "./logic.mjs";
import { Interface } from "./interface_node.mjs";
import { readFile } from "./read_file.mjs";
const dbs = new Data_base();
const log = new Logic(dbs);
const intre = new Interface(log);
// dbs.read_file();
readFile()
intre.run();