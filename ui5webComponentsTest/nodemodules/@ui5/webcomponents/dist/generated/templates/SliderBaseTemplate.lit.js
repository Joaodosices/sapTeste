/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => html`<div class="ui5-slider-root ${classMap(context.classes.root)}" @mousedown="${context._onmousedown}" @touchstart="${context._ontouchstart}" @mouseover="${context._onmouseover}" @mouseout="${context._onmouseout}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" dir="${ifDefined(context.effectiveDir)}"><div class="ui5-slider-inner">${ context.step ? block1(context, tags, suffix) : undefined }</div><span id="${ifDefined(context._id)}-sliderDesc" class="ui5-hidden-text">${ifDefined(context._ariaLabelledByText)}</span></div> `;
const block1 = (context, tags, suffix) => html`${ context.showTickmarks ? block2(context, tags, suffix) : undefined }`;
const block2 = (context, tags, suffix) => html`<div class="ui5-slider-tickmarks" style="${styleMap(context.styles.tickmarks)}"></div>${ context.labelInterval ? block3(context, tags, suffix) : undefined }`;
const block3 = (context, tags, suffix) => html`<ul class="ui5-slider-labels ${classMap(context.classes.labelContainer)}" style="${styleMap(context.styles.labelContainer)}">${ repeat(context._labels, (item, index) => item._id || index, (item, index) => block4(item, index, context, tags, suffix)) }</ul>`;
const block4 = (item, index, context, tags, suffix) => html`<li style="${styleMap(context.styles.label)}">${ifDefined(item)}</li>`;


export default block0;