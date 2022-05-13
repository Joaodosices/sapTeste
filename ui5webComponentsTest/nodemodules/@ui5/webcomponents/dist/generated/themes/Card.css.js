import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js";
import defaultTheme from "./sap_fiori_3/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
export default {packageName:"@ui5/webcomponents",fileName:"themes/Card.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-card-root{width:100%;height:100%;color:var(--sapGroup_TitleTextColor);background:var(--sapTile_Background);box-shadow:var(--_ui5_card_box_shadow);border-radius:var(--_ui5_card_border-radius);border:var(--_ui5_card_border);overflow:hidden;font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);box-sizing:border-box}.ui5-card-root:hover{box-shadow:var(--_ui5_card_hover_box_shadow)}.ui5-card-root:active{box-shadow:var(--_ui5_card_box_shadow)}.ui5-card-root.ui5-card--nocontent{height:auto}.ui5-card-root.ui5-card--nocontent .ui5-card-header-root{border-bottom:none}.ui5-card--nocontent ::slotted([ui5-card-header]){--_ui5_card_header_focus_bottom_radius:var(--_ui5_card_header_focus_radius)}.ui5-card-root .ui5-card-header-root{border-bottom:var(--_ui5_card_header_border)}"}