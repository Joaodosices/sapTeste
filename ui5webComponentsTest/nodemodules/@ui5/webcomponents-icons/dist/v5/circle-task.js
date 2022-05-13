import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "circle-task";
const pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5q0 52-20 98.5T437 436t-81.5 55-99.5 20q-52 0-98.5-20T76 436t-55-81.5T1 256q0-53 20-99.5T76 75t81.5-55T256 0zm0 460q42 0 79.5-16t65.5-44 44-65 16-79-16-79.5-44-65.5-65.5-44T256 51t-79 16-65 44-44 65.5T52 256t16 79 44 65 65 44 79 16z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };