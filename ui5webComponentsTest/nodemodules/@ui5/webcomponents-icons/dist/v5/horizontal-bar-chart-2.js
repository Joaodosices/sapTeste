import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "horizontal-bar-chart-2";
const pathData = "M485.5 461q26 0 26 25 0 11-7 18.5t-19 7.5h-459q-12 0-19-7.5T.5 486V26q0-25 26-25 25 0 25 25v435h434zm-357-154q-26 0-26-25 0-26 26-26h128q25 0 25 26 0 25-25 25h-128zm0-204q-26 0-26-26 0-25 26-25h76q26 0 26 25 0 26-26 26h-76zm0 102q-26 0-26-26 0-25 26-25h179q25 0 25 25 0 26-25 26h-179zm0 204q-26 0-26-25 0-11 7-18.5t19-7.5h255q12 0 19 7.5t7 18.5q0 25-26 25h-255z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };