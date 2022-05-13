import { isThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import pathDataV4 from "./v5/future.js";
import pathDataV5 from "./v4/future.js";
const pathData = isThemeFamily("sap_horizon") ? pathDataV5 : pathDataV4;
export default { pathData };