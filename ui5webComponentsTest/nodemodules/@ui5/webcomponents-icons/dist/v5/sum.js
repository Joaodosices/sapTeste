import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sum";
const pathData = "M66.5 54q2-9 10.5-15.5T95.5 32h320q14 0 23 9t9 23-9 23-23 9h-234l157 134q5 5 9 11.5t4 14.5q0 17-13 26l-157 134h234q14 0 23 9t9 23-9 23-23 9h-320q-10 0-18.5-6.5T66.5 458q-1-4-1-10 0-13 11-26l195-166-195-166q-13-10-13-23 0-6 3-13z";
const ltr = true;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };