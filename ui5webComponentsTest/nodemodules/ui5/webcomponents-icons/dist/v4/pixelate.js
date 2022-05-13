import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "pixelate";
const pathData = "M96 352H32v-64h64v-64H32V64q0-13 9-22.5T64 32h384q14 0 23 9.5t9 22.5v160h-64v64h64v64h-64v64h64v32q0 14-9 23t-23 9h-32v-64h-64v64h-64v-64h-64v64h-64v-64H96v64H64q-14 0-23-9t-9-23v-32h64v-64zm256-128h64v-64h-64v64zM160 352v64h64v-64h64v64h64v-64h-64v-64h-64v64h-64v-64h64v-64h64v64h64v64h64v-64h-64v-64h-64v-64h-64v64h-64v-64H96v64h64v64H96v64h64z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default { pathData };