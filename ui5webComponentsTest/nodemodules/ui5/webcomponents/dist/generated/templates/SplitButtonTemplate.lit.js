/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<div class="ui5-split-button-root" role="group" tabindex=${ifDefined(context._tabIndex)} aria-labelledby="${ifDefined(context._id)}-invisibleTextDefault ${ifDefined(context._id)}-invisibleText" @focusout=${context._onFocusOut} @focusin=${context._onFocusIn} @keydown=${context._onKeyDown} @keyup=${context._onKeyUp}><${scopeTag("ui5-button", tags, suffix)} class="ui5-split-text-button" design="${ifDefined(context.design)}" dir=${ifDefined(context.effectiveDir)} icon="${ifDefined(context._textButtonIcon)}" tabindex="-1" ?disabled="${context.disabled}" ?active="${context._textButtonActive}" @click="${context._fireClick}" @touchstart=${context._textButtonPress} @mousedown=${context._textButtonPress} @mouseup=${context._textButtonRelease} @focusin=${context._setTabIndexValue} @focusout=${context._onFocusOut}><slot></slot></${scopeTag("ui5-button", tags, suffix)}><div class="ui5-split-arrow-button-wrapper" dir=${ifDefined(context.effectiveDir)}><${scopeTag("ui5-button", tags, suffix)} class="ui5-split-arrow-button" design="${ifDefined(context.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${context.disabled}" ?active="${context._arrowButtonActive}" aria-expanded="${ifDefined(context.accessibilityInfo.ariaExpanded)}" aria-haspopup="${ifDefined(context.accessibilityInfo.ariaHaspopup)}" @click="${context._fireArrowClick}" @focusin=${context._setTabIndexValue} @focusout=${context._onFocusOut}></${scopeTag("ui5-button", tags, suffix)}></div><span id="${ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(context.accessibilityInfo.description)}${ifDefined(context.accessibilityInfo.keyboardHint)}${ifDefined(context.accessibleName)}</span><span id="${ifDefined(context._id)}-invisibleTextDefault" class="ui5-hidden-text">${ifDefined(context.textButtonAccText)}</span></div>` : html`<div class="ui5-split-button-root" role="group" tabindex=${ifDefined(context._tabIndex)} aria-labelledby="${ifDefined(context._id)}-invisibleTextDefault ${ifDefined(context._id)}-invisibleText" @focusout=${context._onFocusOut} @focusin=${context._onFocusIn} @keydown=${context._onKeyDown} @keyup=${context._onKeyUp}><ui5-button class="ui5-split-text-button" design="${ifDefined(context.design)}" dir=${ifDefined(context.effectiveDir)} icon="${ifDefined(context._textButtonIcon)}" tabindex="-1" ?disabled="${context.disabled}" ?active="${context._textButtonActive}" @click="${context._fireClick}" @touchstart=${context._textButtonPress} @mousedown=${context._textButtonPress} @mouseup=${context._textButtonRelease} @focusin=${context._setTabIndexValue} @focusout=${context._onFocusOut}><slot></slot></ui5-button><div class="ui5-split-arrow-button-wrapper" dir=${ifDefined(context.effectiveDir)}><ui5-button class="ui5-split-arrow-button" design="${ifDefined(context.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${context.disabled}" ?active="${context._arrowButtonActive}" aria-expanded="${ifDefined(context.accessibilityInfo.ariaExpanded)}" aria-haspopup="${ifDefined(context.accessibilityInfo.ariaHaspopup)}" @click="${context._fireArrowClick}" @focusin=${context._setTabIndexValue} @focusout=${context._onFocusOut}></ui5-button></div><span id="${ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(context.accessibilityInfo.description)}${ifDefined(context.accessibilityInfo.keyboardHint)}${ifDefined(context.accessibleName)}</span><span id="${ifDefined(context._id)}-invisibleTextDefault" class="ui5-hidden-text">${ifDefined(context.textButtonAccText)}</span></div>`;


export default block0;