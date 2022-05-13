import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js";
import defaultTheme from "./sap_fiori_3/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
export default {packageName:"@ui5/webcomponents",fileName:"themes/Switch.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}.ui5-switch-root{position:relative;display:flex;align-items:center;width:100%;height:var(--_ui5_switch_height);min-width:var(--_ui5_switch_width);cursor:pointer;outline:none;border-radius:var(--_ui5-switch-root-border-radius)}.ui5-switch-root.ui5-switch--no-label{min-width:var(--_ui5_switch_no_label_width)}.ui5-switch-inner{display:flex;align-items:center;justify-content:center;height:100%;width:100%;min-width:inherit;overflow:hidden;pointer-events:none;will-change:transform}:host([checked]) .ui5-switch-inner{border-radius:6.25rem;box-shadow:var(--_ui5-switch-root-box-shadow)}.ui5-switch-track{height:var(--_ui5_switch_track_height);width:100%;display:flex;align-items:center;background:var(--_ui5-switch_track-off-background);border:var(--_ui5-switch-track-border);border-color:var(--_ui5-switch-track-border_color);border-radius:var(--_ui5_switch_track_border_radius);box-sizing:border-box;transition:var(--_ui5-switch-track-transition)}.ui5-switch--no-label .ui5-switch-track{height:var(--_ui5_switch_track_no_label_height)}.ui5-switch-slider{position:relative;height:var(--_ui5_switch_height);width:100%;transition:transform .1s ease-in;transform-origin:top left}.ui5-switch-slider>:not(.ui5-switch-handle){display:var(--_ui5-switch-slider-texts-display)}.ui5-switch-handle{position:absolute;display:flex;justify-content:center;align-items:center;left:var(--_ui5-switch-handle-left);width:var(--_ui5_switch_handle_width);height:var(--_ui5_switch_handle_height);background:var(--_ui5_switch_handle_bg);border:var(--_ui5-switch-handle-border);border-radius:var(--_ui5_switch_handle_border_radius);box-sizing:border-box}.ui5-switch-handle-icon{display:var(--_ui5-switch-handle-icon-display);color:var(--_ui5-switch_track-off-background);transition:var(--_ui5-switch-track-transition)}:host([checked]) .ui5-switch-handle-icon{color:var(--_ui5-switch_track-on-background)}.ui5-switch-text{display:flex;justify-content:center;position:absolute;min-width:1.625rem;padding:0 .125rem;font-size:var(--sapFontSmallSize);font-family:\"72override\",var(--sapFontFamily);text-transform:uppercase;text-align:center;color:var(--sapTextColor);white-space:nowrap;user-select:none;-webkit-user-select:none;-ms-user-select:none}.ui5-switch-text--on{left:var(--_ui5_switch_text_on_left)}.ui5-switch-text--off{right:0}.ui5-switch-handle,.ui5-switch-text{top:50%;transform:translateY(-50%)}.ui5-switch-desktop.ui5-switch-root:focus:after{content:\"\";position:absolute;left:var(--_ui5_switch_root_outline_left_right);width:var(--_ui5_switch_focus_width_size);height:var(--_ui5_switch_focus_height_size);top:var(--_ui5_switch_root_outline_top_bottom);bottom:var(--_ui5_switch_root_outline_top_bottom);right:var(--_ui5_switch_root_outline_left_right);border:var(--_ui5_switch_focus_outline);border-radius:var(--_ui5_switch_root_after_boreder_radius);pointer-events:none;transition:var(--_ui5-switch-track-transition);outline:var(--_ui5_switch_root_after_outline)}.ui5-switch-root .ui5-switch-input{position:absolute;left:0;width:0;height:0;margin:0;visibility:hidden;-webkit-appearance:none}.ui5-switch-root.ui5-switch--disabled{opacity:var(--_ui5_switch_disabled_opacity);cursor:default}.ui5-switch-root.ui5-switch--disabled.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5_switch_handle_disabled_checked_bg)}.ui5-switch-root.ui5-switch--disabled .ui5-switch-handle{background:var(--_ui5_switch_handle_disabled_bg)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled .ui5-switch-track{background:var(--_ui5_switch_track_disabled_semantic_checked_bg)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled .ui5-switch-handle{background:var(--_ui5_switch_handle_disabled_semantic_checked_bg)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5_switch_track_disabled_semantic_bg)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5_switch_semantic_button_background)}.ui5-switch-root.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5_switch_handle_checked_bg);border-color:var(--_ui5_switch_handle_checked_border_color)}.ui5-switch-root.ui5-switch--checked .ui5-switch-track{background:var(--_ui5-switch_track-on-background)}.ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5_switch_slide_transform)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled) .ui5-switch-text--on,.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off{color:var(--sapButton_Track_Selected_TextColor)}.ui5-switch-text .ui5-switch-text--on .ui5-switch-no-label-icon{display:flex;justify-content:center;font-size:var(--sapFontSmallSize)}.ui5-switch--no-label .ui5-switch-no-label-icon-on{color:var(--sapButton_Track_Selected_TextColor);width:.75rem;height:.75rem;display:var(--_ui5-switch-track-icon-display)}.ui5-switch--no-label .ui5-switch-no-label-icon-off{color:var(--sapButton_Track_TextColor);width:.75rem;height:.75rem;display:var(--_ui5-switch-track-icon-display)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-handle{border-color:var(--sapSuccessBorderColor)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-track{border-color:var(--_ui5_switch_track_semantic_border_color);background:var(--_ui5_switch_track_semantic_success_backgroud_color)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-handle{background:var(--_ui5_switch_semantic_button_background)}.ui5-switch-root.ui5-switch--no-label .ui5-switch-text,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text{display:flex;justify-content:center;font-size:var(--sapFontSmallSize)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on{width:.75rem;height:.75rem}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on{border-color:var(--sapSuccessBorderColor);color:var(--sapPositiveElementColor)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off{color:var(--sapNegativeElementColor)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track{border-color:var(--_ui5_switch_track_semantic_not_checked_border_color);background:var(--_ui5_switch_track_semantic_error_backgroud_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle{border-color:var(--sapErrorBorderColor);background:var(--_ui5_switch_semantic_button_background)}:host([active]) .ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled) .ui5-switch-track{background:var(--_ui5-switch_track-off-active-background)}:host([active]) .ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-switch_track-on-active-background)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-track{border-color:var(--_ui5_switch_handle_hover_border_color)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle-icon{color:var(--_ui5-switch_track-off-hover-color)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--sapButton_Hover_Background);box-shadow:var(--_ui5-switch_handle-off-hover_box_shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--sapButton_Selected_Hover_Background);border-color:var(--_ui5_switch_handle_checked_border_color);box-shadow:var(--_ui5-switch_handle-on-hover_box_shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{border-color:var(--_ui5_switch_handle_hover_border_color);background:var(--_ui5-switch_track-on-hover-background)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle-icon{color:var(--_ui5-switch_track-on-hover-color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5_switch_handle_semantic_hover_bg);border-color:var(--_ui5_switch_handle_semantic_hover_border_color);box-shadow:var(--sapContent_Negative_Shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-track{border-color:var(--_ui5_switch_track_semantic_hover_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5_switch_handle_semantic_checked_hover_bg);border-color:var(--_ui5_switch_handle_semantic_checked_hover_border_color);box-shadow:var(--sapContent_Informative_Shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{border-color:var(--_ui5_switch_track_semantic_checked_hover_border_color);background:var(--_ui5_switch_track_semantic_success_backgroud_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled .ui5-switch-icon--on,.ui5-switch-root.ui5-switch--semantic:hover .ui5-switch-icon--on{color:var(--_ui5_switch_text_on_semantic_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled .ui5-switch-icon--off,.ui5-switch-root.ui5-switch--semantic:hover .ui5-switch-icon--off{color:var(--_ui5_switch_text_off_semantic_color)}[dir=rtl].ui5-switch-root .ui5-switch-handle{left:0;right:-1px}[dir=rtl].ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5_switch_rtl_transform)}[dir=rtl].ui5-switch-root .ui5-switch-text--on{right:var(--_ui5_switch_text_right);left:auto}[dir=rtl].ui5-switch-root .ui5-switch-text--off{right:auto;left:0}"}