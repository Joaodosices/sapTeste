import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "expand-all";
const pathData = "M178 359q8-8 18-8 9 0 19 8 7 7 7 18t-7 18l-78 77q-8 8-18 8t-18-8l-77-77q-8-8-8-18t8-18 18-8 18 8l33 33V94q0-11 7.5-18.5T119 68t18.5 7.5T145 94v298zm112-240q-11 0-18.5-7T264 94t7.5-18.5T290 68h180q11 0 18.5 7.5T496 94t-7.5 18-18.5 7H290zm180 65q11 0 18.5 7.5T496 210t-7.5 18-18.5 7H290q-11 0-18.5-7t-7.5-18 7.5-18.5T290 184h180zm0 129q11 0 18.5 7t7.5 18-7.5 18.5T470 364H290q-11 0-18.5-7.5T264 338t7.5-18 18.5-7h180zm0 115q11 0 18.5 7.5T496 454t-7.5 18.5T470 480H290q-11 0-18.5-7.5T264 454t7.5-18.5T290 428h180z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };