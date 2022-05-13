/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-dialog", tags, suffix)} header-text="${ifDefined(context.moreColorsFeature.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><${scopeTag("ui5-color-picker", tags, suffix)}></${scopeTag("ui5-color-picker", tags, suffix)}></div><div slot="footer" class="ui5-cp-dialog-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${context._chooseCustomColor}">${ifDefined(context.moreColorsFeature.colorPaletteDialogOKButton)}</${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${context._closeDialog}">${ifDefined(context.moreColorsFeature.colorPaletteCancelButton)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-dialog", tags, suffix)}>` : html`<ui5-dialog header-text="${ifDefined(context.moreColorsFeature.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><ui5-color-picker></ui5-color-picker></div><div slot="footer" class="ui5-cp-dialog-footer"><ui5-button design="Transparent" @click="${context._chooseCustomColor}">${ifDefined(context.moreColorsFeature.colorPaletteDialogOKButton)}</ui5-button><ui5-button design="Transparent" @click="${context._closeDialog}">${ifDefined(context.moreColorsFeature.colorPaletteCancelButton)}</ui5-button></div></ui5-dialog>`;


export default block0;