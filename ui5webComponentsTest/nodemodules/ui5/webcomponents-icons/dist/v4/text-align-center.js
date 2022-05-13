import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "text-align-center";
const pathData = "M80 96q-16 0-16-16t16-16h352q16 0 16 16t-16 16H80zm288 64q16 0 16 16t-16 16H144q-16 0-16-16t16-16h224zm64 96q16 0 16 16t-16 16H80q-16 0-16-16t16-16h352zm-64 96q16 0 16 16t-16 16H144q-16 0-16-16t16-16h224zm64 96q16 0 16 16t-16 16H80q-16 0-16-16t16-16h352z";
const ltr = true;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };