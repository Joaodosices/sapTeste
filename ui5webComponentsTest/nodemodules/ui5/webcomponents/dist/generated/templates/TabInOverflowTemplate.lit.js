/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-li-custom", tags, suffix)} id="${ifDefined(context._id)}" class="${ifDefined(context.overflowClasses)}" type="${ifDefined(context.overflowState)}" ?disabled="${context.effectiveDisabled}" aria-disabled="${ifDefined(context.effectiveDisabled)}" aria-selected="${ifDefined(context.effectiveSelected)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}" ._realTab="${ifDefined(context)}" style="${styleMap(context._style)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${ context.icon ? block1(context, tags, suffix) : undefined }${ifDefined(context.text)}${ context.additionalText ? block2(context, tags, suffix) : undefined }</div></div></${scopeTag("ui5-li-custom", tags, suffix)}>${ repeat(context.subTabs, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix)) } ` : html`<ui5-li-custom id="${ifDefined(context._id)}" class="${ifDefined(context.overflowClasses)}" type="${ifDefined(context.overflowState)}" ?disabled="${context.effectiveDisabled}" aria-disabled="${ifDefined(context.effectiveDisabled)}" aria-selected="${ifDefined(context.effectiveSelected)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}" ._realTab="${ifDefined(context)}" style="${styleMap(context._style)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${ context.icon ? block1(context, tags, suffix) : undefined }${ifDefined(context.text)}${ context.additionalText ? block2(context, tags, suffix) : undefined }</div></div></ui5-li-custom>${ repeat(context.subTabs, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix)) } `;
const block1 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(context.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html`<ui5-icon name="${ifDefined(context.icon)}"></ui5-icon>`;
const block2 = (context, tags, suffix) => html` (${ifDefined(context.additionalText)}) `;
const block3 = (item, index, context, tags, suffix) => html`${ifDefined(item.overflowPresentation)}`;


export default block0;