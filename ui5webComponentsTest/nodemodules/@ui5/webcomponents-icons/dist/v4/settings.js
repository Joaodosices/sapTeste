import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_SETTINGS } from "../generated/i18n/i18n-defaults.js";

const name = "settings";
const pathData = "M1.5 131V99h34q1-14 12-28l-24-24 22-23 25 24q12-8 27-12V2h32v34q15 4 29 12l24-24 23 23-24 24q4 7 7 13.5t5 14.5h34v32h-34q-4 17-12 28l24 25-23 22-24-24q-14 9-29 12v34h-32v-34q-15-3-27-12l-25 24-22-22 24-25q-9-12-12-28h-34zm65-16q0 20 14 34.5t34 14.5q2 0 6-.5t9-1.5l6-3q18-10 25-28 1-4 1.5-7.5t.5-8.5q0-15-9.5-27.5T129.5 70q-5-1-9-1.5t-6-.5q-9 0-17 3-18 6-27 23 0 2-.5 2.5t-.5 2.5q-3 7-3 16zm80 243l31-12q-1-5-1.5-10.5t-.5-11.5q0-16 3-29l-30-13q-6-3-8-7.5t-2-7.5q0-4 2-7l12-28q4-10 16-10h-1 1q2 1 7 2l29 13q8-11 17.5-20t19.5-16l-11-30q-1-3-1-6t2-8 9-7l28-12q1-1 6-1 10 0 15 11l12 31q5-1 10.5-2t11.5-1q8 0 15 1l14 2 13-29q4-10 16-10 5 0 6 1l29 13q6 3 8 7.5t2 7.5q0 4-2 7l-13 30q21 16 34 37l31-12q1-1 6-1 11 0 16 11l11 28q1 3 1 6 0 4-2 9t-9 7l-31 12q1 5 1.5 10.5t.5 10.5q0 15-3 30l30 13q7 3 8.5 8t1.5 8-1 6l-13 28q-4 10-16 10-5 0-6-1l-30-13q-8 10-16.5 18t-19.5 16l12 30q1 3 1 6 0 4-2 9t-9 7l-29 11q-1 1-6 1-12 0-16-10l-12-31q-5 1-10.5 1.5t-10.5.5q-15 0-30-3l-13 30q-4 10-15 10h1-1q-2-1-7-2l-27-12q-11-5-11-14 0-4 2-9l13-30q-10-8-19-16t-16-19l-30 11q-1 1-7 1-11 0-15-10l-11-29q-1-4-1-7t2-8 8-7zm177 63q20 0 37.5-7.5t31-20.5 21-31 7.5-38-7.5-37.5-21-30.5-31-20.5-37.5-7.5q-42 0-69 28t-27 68q0 42 27 69.5t69 27.5z";
const ltr = false;
const accData = ICON_SETTINGS;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default { pathData, accData };