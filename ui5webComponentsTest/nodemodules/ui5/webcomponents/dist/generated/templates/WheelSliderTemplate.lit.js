/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<div id="${ifDefined(context._id)}" ?disabled= "${ifDefined(context.disabled)}" value = "${ifDefined(context.value)}" label = "${ifDefined(context.label)}" @click = ${ifDefined(context._onclick)} @keydown=${context._onkeydown} class = "${classMap(context.classes.root)}" data-sap-focus-ref tabindex="0" @wheel="${context._handleWheel}"><div class="ui5-wheelslider-header-block"><div id="${ifDefined(context._id)}--label" class="ui5-wheelslider-label">${ifDefined(context.label)}</div><div class="ui5-wheelslider-invisible-text"></div><${scopeTag("ui5-button", tags, suffix)} class="ui5-wheelslider-arrow" icon="navigation-up-arrow" @click=${context._onArrowUp} tabindex="-1"></${scopeTag("ui5-button", tags, suffix)}></div><div id="${ifDefined(context._id)}--inner" class="ui5-wheelslider-inner"><div id="${ifDefined(context._id)}--selection-frame" class="ui5-wheelslider-selection-frame"></div><div id="${ifDefined(context._id)}--wrapper" class="ui5-wheelslider-wrapper">${ context.expanded ? block1(context, tags, suffix) : block3(context, tags, suffix) }</div></div><div class="ui5-wheelslider-footer-block"><${scopeTag("ui5-button", tags, suffix)} class="ui5-wheelslider-arrow" icon="navigation-down-arrow" @click=${context._onArrowDown} tabindex="-1"></${scopeTag("ui5-button", tags, suffix)}></div></div>` : html`<div id="${ifDefined(context._id)}" ?disabled= "${ifDefined(context.disabled)}" value = "${ifDefined(context.value)}" label = "${ifDefined(context.label)}" @click = ${ifDefined(context._onclick)} @keydown=${context._onkeydown} class = "${classMap(context.classes.root)}" data-sap-focus-ref tabindex="0" @wheel="${context._handleWheel}"><div class="ui5-wheelslider-header-block"><div id="${ifDefined(context._id)}--label" class="ui5-wheelslider-label">${ifDefined(context.label)}</div><div class="ui5-wheelslider-invisible-text"></div><ui5-button class="ui5-wheelslider-arrow" icon="navigation-up-arrow" @click=${context._onArrowUp} tabindex="-1"></ui5-button></div><div id="${ifDefined(context._id)}--inner" class="ui5-wheelslider-inner"><div id="${ifDefined(context._id)}--selection-frame" class="ui5-wheelslider-selection-frame"></div><div id="${ifDefined(context._id)}--wrapper" class="ui5-wheelslider-wrapper">${ context.expanded ? block1(context, tags, suffix) : block3(context, tags, suffix) }</div></div><div class="ui5-wheelslider-footer-block"><ui5-button class="ui5-wheelslider-arrow" icon="navigation-down-arrow" @click=${context._onArrowDown} tabindex="-1"></ui5-button></div></div>`;
const block1 = (context, tags, suffix) => html`<ul id="${ifDefined(context._id)}--items-list" role="listbox" aria-label="${ifDefined(context.label)}">${ repeat(context._itemsToShow, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix)) }</ul>`;
const block2 = (item, index, context, tags, suffix) => html`<li class="ui5-wheelslider-item" data-item-index="${index}" role="option" aria-selected="${ifDefined(item.selected)}">${ifDefined(item.value)}</li>`;
const block3 = (context, tags, suffix) => html`<ul id="${ifDefined(context._id)}--items-list" role="listbox" aria-label="${ifDefined(context.label)}"><li class="ui5-wheelslider-item" role="option" aria-selected="true">${ifDefined(context.value)}</li></ul>`;


export default block0;