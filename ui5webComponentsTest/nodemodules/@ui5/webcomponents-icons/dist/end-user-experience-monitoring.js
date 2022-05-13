import { isThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import pathDataV4 from "./v5/end-user-experience-monitoring.js";
import pathDataV5 from "./v4/end-user-experience-monitoring.js";
const pathData = isThemeFamily("sap_horizon") ? pathDataV5 : pathDataV4;
export default { pathData };