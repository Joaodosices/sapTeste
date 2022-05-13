import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "to-be-reviewed";
const pathData = "M503.5 235q8 10 8 20t-8 20l-227 227q-9 9-20 9-12 0-20-9L9.5 275q-9-9-9-20t9-20l227-227q8-8 20-8 10 0 20 8zm-60 20l-187-187-188 187 188 188z";
const ltr = false;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };