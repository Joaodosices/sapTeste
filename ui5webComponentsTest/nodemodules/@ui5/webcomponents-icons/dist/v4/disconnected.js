import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "disconnected";
const pathData = "M54.5 32l67 69 12-14q24-25 57-25 35 0 60 25l45 49-38 38 38 38q5 4 5 10.5t-5 9.5q-4 4-8 4t-8-4l-41-39-49 50 40 37q5 3 5 9t-5 9q-5 5-10 5t-8-5l-39-39-39 39-46-45q-26-26-26-59t26-58l15-16-71-69zm39 162q0 20 17 37l23 22 118-118-24-26q-15-15-37-15-18 0-33 15l-47 49q-16 16-17 36zm301 53l50 48q25 25 25 57t-25 57l-8 7 44 44-19 20-47-43-20 19q-26 26-57 26-32 0-55-26l-50-47zm-116 161l26 25v1h1q13 16 32 16 18 0 34-16l50-48q15-14 15-34 0-21-14-33l-28-27z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };