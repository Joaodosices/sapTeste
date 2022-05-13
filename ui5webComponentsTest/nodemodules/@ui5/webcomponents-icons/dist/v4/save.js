import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_SAVE } from "../generated/i18n/i18n-defaults.js";

const name = "save";
const pathData = "M32 363V86q0-23 15.5-38.5T86 32h340q22 0 38 15.5T480 86v340q0 23-16 38.5T426 480H149q-5 0-13-5L37 375q-5-5-5-12zm32-6l91 91h5V320q0-14 9-23t23-9h128q13 0 22.5 9t9.5 23v128h74q9 0 15.5-6.5T448 426V86q0-9-6.5-15.5T426 64h-42v128q0 14-9.5 23t-22.5 9H160q-14 0-23-9t-9-23V64H86q-9 0-15.5 6.5T64 86v271zm96-293v128h192V64H160zm160 384V320H192v128h128zm-96-56v-48q0-8 7-8h17q8 0 8 8v48q0 8-8 8h-17q-7 0-7-8z";
const ltr = false;
const accData = ICON_SAVE;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default { pathData, accData };