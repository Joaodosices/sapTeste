import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_ERROR } from "../generated/i18n/i18n-defaults.js";

const name = "error";
const pathData = "M375 183q9-11 9-23 0-13-9-23-10-9-23-9-12 0-23 9l-73 74-73-74q-10-9-23-9-12 0-23 9-9 10-9 23 0 12 9 23l74 73-74 73q-9 10-9 23 0 12 9 23 11 9 23 9 13 0 23-9l73-74 73 74q11 9 23 9 13 0 23-9 9-11 9-23 0-13-9-23l-74-73zM256 512q-53 0-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0t99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20z";
const ltr = false;
const accData = ICON_ERROR;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default { pathData, accData };