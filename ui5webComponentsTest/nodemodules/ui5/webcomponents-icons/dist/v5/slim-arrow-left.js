import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "slim-arrow-left";
const pathData = "M340.5 358q9 9 9 22 0 11-9 22-9 9-22 9-11 0-22-9l-124-124q-9-11-9-22 0-13 9-22l124-124q11-9 22-9 13 0 22 9t9 22q0 11-9 22l-103 102z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };