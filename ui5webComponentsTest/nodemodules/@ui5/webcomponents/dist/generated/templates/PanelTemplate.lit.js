/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => html`<div class="ui5-panel-root" role="${ifDefined(context.accRole)}" aria-label="${ifDefined(context.effectiveAccessibleName)}"><div @click="${context._headerClick}" @keydown="${context._headerKeyDown}" @keyup="${context._headerKeyUp}" class="ui5-panel-header" tabindex="${ifDefined(context.headerTabIndex)}" role="${ifDefined(context.accInfo.role)}" aria-expanded="${ifDefined(context.accInfo.ariaExpanded)}" aria-controls="${ifDefined(context.accInfo.ariaControls)}" aria-labelledby="${ifDefined(context.accInfo.ariaLabelledby)}">${ !context.fixed ? block1(context, tags, suffix) : undefined }${ context._hasHeader ? block4(context, tags, suffix) : block5(context, tags, suffix) }</div><div class="ui5-panel-content" id="${ifDefined(context._id)}-content" tabindex="-1" style="${styleMap(context.styles.content)}" part="content"><slot></slot></div></div>`;
const block1 = (context, tags, suffix) => html`<div class="ui5-panel-header-button-root">${ context._hasHeader ? block2(context, tags, suffix) : block3(context, tags, suffix) }</div>`;
const block2 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-button", tags, suffix)} design="Transparent" class="ui5-panel-header-button ${classMap(context.classes.headerBtn)}" icon="slim-arrow-right" @click="${context._toggleButtonClick}" .accessibilityAttributes=${ifDefined(context.accInfo.button.accessibilityAttributes)} tooltip="${ifDefined(context.accInfo.button.title)}" accessible-name="${ifDefined(context.accInfo.button.ariaLabelButton)}"></${scopeTag("ui5-button", tags, suffix)}>` : html`<ui5-button design="Transparent" class="ui5-panel-header-button ${classMap(context.classes.headerBtn)}" icon="slim-arrow-right" @click="${context._toggleButtonClick}" .accessibilityAttributes=${ifDefined(context.accInfo.button.accessibilityAttributes)} tooltip="${ifDefined(context.accInfo.button.title)}" accessible-name="${ifDefined(context.accInfo.button.ariaLabelButton)}"></ui5-button>`;
const block3 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-panel-header-button ui5-panel-header-icon ${classMap(context.classes.headerBtn)}" name="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html`<ui5-icon class="ui5-panel-header-button ui5-panel-header-icon ${classMap(context.classes.headerBtn)}" name="slim-arrow-right"></ui5-icon>`;
const block4 = (context, tags, suffix) => html`<slot name="header"></slot>`;
const block5 = (context, tags, suffix) => html`<div id="${ifDefined(context._id)}-header-title" role="heading" aria-level="${ifDefined(context.headerAriaLevel)}" class="ui5-panel-header-title">${ifDefined(context.headerText)}</div>`;


export default block0;