import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_COLLAPSE_GROUP } from "../generated/i18n/i18n-defaults.js";

const name = "collapse-group";
const pathData = "M267.5 120q-6-6-12-6-5 0-11 6l-159 157q-10 10-23 10t-22-10q-10-9-10-22t10-23l193-191q9-9 22.5-9t22.5 9l192 192q10 10 10 23t-10 23q-9 9-22.5 9t-22.5-9zm0 193q-6-6-12-6-5 0-11 6l-159 157q-10 10-23 10t-22-10q-10-9-10-22t10-23l193-191q9-9 22.5-9t22.5 9l192 192q10 10 10 23t-10 23q-9 9-22.5 9t-22.5-9z";
const ltr = false;
const accData = ICON_COLLAPSE_GROUP;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default { pathData, accData };