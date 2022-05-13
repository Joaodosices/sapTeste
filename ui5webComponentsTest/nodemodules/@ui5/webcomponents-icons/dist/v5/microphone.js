import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "microphone";
const pathData = "M444.5 243q0 36-12.5 68t-34 56.5-51 40.5-63.5 21v57q0 12-7.5 19t-19.5 7-19.5-7-7.5-19v-57q-34-5-64-21T114 367.5 80 311t-12.5-68q0-12 7.5-19t19.5-7 19.5 7 7.5 19q0 28 10.5 53t28.5 43 43 28.5 53 10.5 52.5-10.5 42.5-28.5 28.5-43 10.5-53q0-12 7.5-19t19.5-7 19.5 7 7.5 19zm-188 81q-35 0-58-23t-23-58V82q0-35 23-58t58-23q34 0 57 23t23 58v161q0 35-23 58t-57 23zm-27-81q0 13 7.5 20t19.5 7 19.5-7 7.5-20V82q0-12-7.5-19.5T256.5 55 237 62.5 229.5 82v161z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };