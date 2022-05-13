import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sys-back-2";
const pathData = "M0 256q0-53 20-100t55-81.5T156.5 20 256 0t100 20 81.5 54.5T492 156t20 100-20 99.5-54.5 81.5-81.5 55-100 20-99.5-20T75 437t-55-81.5T0 256zm256-128q-8-9-17-9-8 0-17 9l-102 99q-11 13-11 28 0 17 11 28l102 101q8 8 17.5 8t17.5-8q7-7 7-17t-7-17l-98-95 96-93q6-5 7.5-9.5t1.5-7.5q0-9-8-17zm115 0q-8-8-17-8-8 0-16 8l-103 99q-11 13-11 28 0 18 12 28l102 101q8 8 17 8t17-8 8-17-8-17l-97-95 96-93q5-5 6.5-9.5t1.5-7.5q0-10-8-17z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };