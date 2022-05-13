/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-responsive-popover", tags, suffix)} tokenizer-popover="true" style=${styleMap(context.styles.popover)} ?content-only-on-desktop="${context.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left"><div slot="header" class="ui5-responsive-popover-header" style="${styleMap(context.styles.popoverHeader)}">${ context._isPhone ? block1(context, tags, suffix) : undefined }${ !context.hasValueState ? block2(context, tags, suffix) : undefined }</div><${scopeTag("ui5-list", tags, suffix)} class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${ifDefined(context.itemDelete)}>${ repeat(context._tokens, (item, index) => item._id || index, (item, index) => block4(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}>${ context._isPhone ? block5(context, tags, suffix) : undefined }</${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html`<ui5-responsive-popover tokenizer-popover="true" style=${styleMap(context.styles.popover)} ?content-only-on-desktop="${context.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left"><div slot="header" class="ui5-responsive-popover-header" style="${styleMap(context.styles.popoverHeader)}">${ context._isPhone ? block1(context, tags, suffix) : undefined }${ !context.hasValueState ? block2(context, tags, suffix) : undefined }</div><ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${ifDefined(context.itemDelete)}>${ repeat(context._tokens, (item, index) => item._id || index, (item, index) => block4(item, index, context, tags, suffix)) }</ui5-list>${ context._isPhone ? block5(context, tags, suffix) : undefined }</ui5-responsive-popover>`;
const block1 = (context, tags, suffix) => suffix ? html`<div class="row" style="${styleMap(context.styles.popoverHeaderTitle)}"><${scopeTag("ui5-title", tags, suffix)} level="H5" class="ui5-responsive-popover-header-text">${ifDefined(context.morePopoverTitle)}</${scopeTag("ui5-title", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context.closeMorePopover}"></${scopeTag("ui5-button", tags, suffix)}></div>` : html`<div class="row" style="${styleMap(context.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">${ifDefined(context.morePopoverTitle)}</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context.closeMorePopover}"></ui5-button></div>`;
const block2 = (context, tags, suffix) => html`<div class="${classMap(context.classes.popoverValueState)}" style="${styleMap(context.styles.popoverValueStateMessage)}">${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix)) }</div>`;
const block3 = (item, index, context, tags, suffix) => html`${ifDefined(item)}`;
const block4 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-li", tags, suffix)} .tokenRef=${ifDefined(item)}>${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html`<ui5-li .tokenRef=${ifDefined(item)}>${ifDefined(item.text)}</ui5-li>`;
const block5 = (context, tags, suffix) => suffix ? html`<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${context.closeMorePopover}">OK</${scopeTag("ui5-button", tags, suffix)}></div>` : html`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${context.closeMorePopover}">OK</ui5-button></div>`;


export default block0;