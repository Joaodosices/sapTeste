import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "clear-all";
const pathData = "M496 64l-65 63 65 66-32 32-63-66-65 66-32-32 65-66-65-63 32-32 65 64 63-64zm-64 385V288h32v161q0 13-8.5 22.5T433 481H48q-13 0-22.5-9.5T16 449V64q0-13 9-22t23-9h193v32H48v384h384z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };