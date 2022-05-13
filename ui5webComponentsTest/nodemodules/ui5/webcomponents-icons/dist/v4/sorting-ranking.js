import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sorting-ranking";
const pathData = "M256.5 0l219 224h-439zm0 46l-144 146h287zm0 466l-220-224h439zm0-46l143-146h-287z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };