import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sys-monitor";
const pathData = "M435.5 1q32 0 54 22t22 55v255q0 32-22 54.5t-54 22.5h-103v51h51q26 0 26 25 0 26-26 26h-255q-11 0-18.5-7t-7.5-19q0-11 7.5-18t18.5-7h51v-51h-102q-33 0-55-22.5T.5 333V78q0-33 22-55t55-22h358zm-154 409h-51v51h51v-51zm179-332q0-26-25-26h-358q-11 0-18.5 7t-7.5 19v255q0 11 7.5 18.5t18.5 7.5h358q11 0 18-7.5t7-18.5V78z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };