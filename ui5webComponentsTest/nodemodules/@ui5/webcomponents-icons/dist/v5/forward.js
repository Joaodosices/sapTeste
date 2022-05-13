import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_FORWARD } from "../generated/i18n/i18n-defaults.js";

const name = "forward";
const pathData = "M473 160q7 7 7 18t-7 18L332 337q-8 8-18 8t-18-8-8-18 8-18l97-97h-79q-48 0-90 18t-73.5 49.5T101 345t-18 90v51q0 11-7 18.5T58 512t-18.5-7.5T32 486v-51q0-58 22.5-109.5T115 236t89.5-60.5T314 153h79l-85-85q-7-7-7-18t7.5-18 18.5-7 18 7z";
const ltr = false;
const accData = ICON_FORWARD;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default { pathData, accData };