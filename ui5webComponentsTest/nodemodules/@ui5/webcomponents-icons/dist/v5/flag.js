import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_FLAG } from "../generated/i18n/i18n-defaults.js";

const name = "flag";
const pathData = "M444 53q5 2 8.5 8.5T456 73v248q0 8-4.5 13.5T442 344l-18 7q-45 20-89 20-26 0-50-7t-47-18l-15-7q-28-15-59-15t-57 15v148q0 25-25 25t-25-25V26Q57 1 82 1t25 25v8q28-11 57-11 21 0 42 5.5T246 46l14 10q38 20 76 20 17 0 33.5-4T402 61l17-8q6-3 13-3 6 0 12 3z";
const ltr = true;
const accData = ICON_FLAG;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default { pathData, accData };