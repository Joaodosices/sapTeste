import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "arrow-right";
const pathData = "M392 198l-86-87q-8-8-8-18 0-9 8-19 7-7 18-7t18 7l128 129q4 3 7 8t3 13-3 12.5-7 8.5L342 373q-7 8-18 8t-18-8q-8-8-8-18t8-18l86-87H58q-26 0-26-26t26-26h334z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };