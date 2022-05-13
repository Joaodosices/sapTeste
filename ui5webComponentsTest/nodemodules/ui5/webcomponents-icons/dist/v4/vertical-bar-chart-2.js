import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "vertical-bar-chart-2";
const pathData = "M384 40q0-8 8-8h48q8 0 8 8v368q0 8-8 8h-48q-8 0-8-8V40zM160 168q0-8 8-8h48q8 0 8 8v240q0 8-8 8h-48q-8 0-8-8V168zm128 240V232q0-8 8-8h48q8 0 8 8v176q0 8-8 8h-48q-8 0-8-8zM64 360q0-8 8-8h48q8 0 8 8v48q0 8-8 8H72q-8 0-8-8v-48zM32 480v-32h448v32H32z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };