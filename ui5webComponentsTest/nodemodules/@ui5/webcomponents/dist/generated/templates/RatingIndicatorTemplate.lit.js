/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => html`<div class="ui5-rating-indicator-root" role="slider" aria-roledescription="${ifDefined(context._ariaRoleDescription)}" aria-valuemin="0" aria-valuenow="${ifDefined(context.value)}" aria-valuemax="${ifDefined(context.max)}" aria-valuetext="${ifDefined(context.value)} of ${ifDefined(context.max)}" aria-orientation="horizontal" aria-disabled="${ifDefined(context._ariaDisabled)}" aria-readonly="${ifDefined(context.ariaReadonly)}" tabindex="${ifDefined(context.tabIndex)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @click="${context._onclick}" @keydown="${context._onkeydown}" title="${ifDefined(context.tooltip)}" aria-label="${ifDefined(context.accessibleName)}"><div class="ui5-rating-indicator-stars-wrapper" aria-hidden="true">${ repeat(context._stars, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }</div></div>`;
const block1 = (item, index, context, tags, suffix) => html`${ item.selected ? block2(item, index, context, tags, suffix) : block3(item, index, context, tags, suffix) }`;
const block2 = (item, index, context, tags, suffix) => html`<div class="ui5-rating-indicator-icon ui5-rating-indicator-active-icon" data-value="${ifDefined(item.index)}">&#9733;</div>`;
const block3 = (item, index, context, tags, suffix) => html`${ item.halfStar ? block4(item, index, context, tags, suffix) : block5(item, index, context, tags, suffix) }`;
const block4 = (item, index, context, tags, suffix) => html`<div class="ui5-rating-indicator-icon ui5-rating-indicator-half-icon" data-value="${ifDefined(item.index)}">&#9734;</div>`;
const block5 = (item, index, context, tags, suffix) => html`${ context.readonly ? block6(item, index, context, tags, suffix) : block7(item, index, context, tags, suffix) }`;
const block6 = (item, index, context, tags, suffix) => html`<div class="ui5-rating-indicator-icon ui5-rating-indicator-readonly-unselected-icon" data-value="${ifDefined(item.index)}">&#9733;</div>`;
const block7 = (item, index, context, tags, suffix) => html`<div class="ui5-rating-indicator-icon" data-value="${ifDefined(item.index)}">&#9734;</div>`;


export default block0;