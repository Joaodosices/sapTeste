import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "order-status";
const pathData = "M338.5 188q8 8 8 18t-8 18l-103 102q-8 8-17.5 8t-17.5-8l-51-51q-8-8-8-18t8-18 17.5-8 17.5 8l34 33 84-84q8-8 18-8t18 8zm110 69q25 0 25 26 0 25-25 25h-77q-11 0-18.5-7t-7.5-18q0-12 7.5-19t18.5-7h77zm0 153q11 0 18 7.5t7 18.5q0 25-25 25h-77q-11 0-18.5-7t-7.5-18 7.5-18.5 18.5-7.5h77zm-161 59q8 8 8 18t-8 18-18 8-18-8l-33-33-34 33q-8 8-17.5 8t-17.5-8-8-18 8-18l33-33-33-33q-8-8-8-18t8-18 17.5-8 17.5 8l34 33 33-33q8-8 18-8t18 8 8 18-8 18l-34 33zm-187-289l-10 11v296q0 11-7 18.5t-19 7.5q-11 0-18-7.5t-7-18.5V180q0-10 7-18l154-153q7-7 18-7h204q11 0 18.5 7t7.5 18v77q0 11-7.5 18t-18.5 7-18.5-7-7.5-18V53h-168l-10 10v66q0 21-15 36t-37 15h-66z";
const ltr = true;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };