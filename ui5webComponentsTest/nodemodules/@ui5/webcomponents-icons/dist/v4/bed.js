import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "bed";
const pathData = "M33 160v226h448V225h30v255h-30v-62H33v62H2V160h31zm81 96q17 0 28 11.5t11 29.5q0 16-11 28.5T114 338q-18 0-29.5-12.5T73 297q0-18 11.5-29.5T114 256zm52 95q4-3 13-22.5t9-44.5h187q30 0 51.5 15t21.5 46v6H166z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };