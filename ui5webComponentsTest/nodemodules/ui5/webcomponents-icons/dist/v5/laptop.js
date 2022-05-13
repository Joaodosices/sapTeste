import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_LAPTOP } from "../generated/i18n/i18n-defaults.js";

const name = "laptop";
const pathData = "M494 405q21 0 21 21t-21 21H24q-9 0-15-5.5T3 426t6-15.5 15-5.5h26q0-2-1-3v-1q-3-9-3-18V170q0-27 18-45.5t46-18.5h298q28 0 46 18.5t18 45.5v213q0 11-4 22h26zM88 383h342V170q0-21-22-21H110q-22 0-22 21v213z";
const ltr = false;
const accData = ICON_LAPTOP;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default { pathData, accData };