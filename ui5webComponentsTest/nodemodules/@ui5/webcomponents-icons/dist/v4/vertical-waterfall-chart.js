import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "vertical-waterfall-chart";
const pathData = "M32 4q0-4 4-4h56q4 0 4 4v424q0 4-4 4H36q-4 0-4-4V4zm128 0q0-4 4-4h56q4 0 4 4v152q0 4-4 4h-56q-4 0-4-4V4zm128 160q0-4 4-4h56q4 0 4 4v104q0 4-4 4h-56q-4 0-4-4V164zm128 112q0-4 4-4h56q4 0 4 4v152q0 4-4 4h-56q-4 0-4-4V276zm96 204v32H0v-32h512z";
const ltr = true;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };