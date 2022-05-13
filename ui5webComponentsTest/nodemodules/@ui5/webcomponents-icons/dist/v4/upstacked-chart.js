import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "upstacked-chart";
const pathData = "M368 88V40q0-8 8-8h80q8 0 8 8v48q0 8-8 8h-80q-8 0-8-8zM208 72q0-8 8-8h80q8 0 8 8v144q0 8-8 8h-80q-8 0-8-8V72zm168 56h80q8 0 8 8v112q0 8-8 8h-80q-8 0-8-8V136q0-8 8-8zM48 248v-80q0-8 8-8h80q8 0 8 8v80q0 8-8 8H56q-8 0-8-8zm168 8h80q8 0 8 8v48q0 8-8 8h-80q-8 0-8-8v-48q0-8 8-8zm152 216V288h88q8 0 8 8v176q0 8-8 8h-80q-8 0-8-8zM56 288h80q8 0 8 8v48q0 8-8 8H56q-8 0-8-8v-48q0-8 8-8zm152 64h88q8 0 8 8v112q0 8-8 8h-80q-8 0-8-8V352zM56 384h80q8 0 8 8v80q0 8-8 8H56q-8 0-8-8v-80q0-8 8-8z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };