import { Interface } from "./interface_node.mjs";
import { Logic } from "./logic.mjs";
import { Data_base } from "./data_base.mjs";
const dbs = new Data_base();
const lg = new Logic(dbs);
const inter =new Interface(lg)
inter.run()
