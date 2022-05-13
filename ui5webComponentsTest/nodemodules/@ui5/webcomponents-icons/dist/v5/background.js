import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "background";
const pathData = "M416 1q34 0 57 22.5T496 81v319q0 34-23 57t-57 23H97q-34 0-57-23t-23-57V81q0-35 23-57.5T97 1h319zM97 54q-12 0-20 7.5T67 81v308l115-114q11-8 20-8 6 0 12 3l34 18 94-93q10-8 20-8 6 0 12 3l69 34V81q0-12-7.5-19.5T416 54H97zm66 53q17 0 28.5 11.5T203 147t-11.5 28.5T163 187t-28.5-11.5T123 147t11.5-28.5T163 107zm253 320q11 0 17.5-6t7.5-14v-1l-1-120-74-38-67 67 21 11q6 2 9.5 8.5T333 349q0 5-2 11-6 13-21 13-9 0-14-2l-87-45-102 101h309z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };