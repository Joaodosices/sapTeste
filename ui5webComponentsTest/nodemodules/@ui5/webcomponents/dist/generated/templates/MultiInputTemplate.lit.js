/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}"><div class="ui5-input-content"><span id="${ifDefined(context._id)}-hiddenText-nMore" class="ui5-hidden-text">${ifDefined(context._tokensCountText)}</span><${scopeTag("ui5-tokenizer", tags, suffix)} class="ui5-multi-input-tokenizer" .morePopoverOpener=${ifDefined(context)} .popoverMinWidth=${ifDefined(context._inputWidth)} .valueState=${ifDefined(context.valueState)} ?expanded="${context.expandedTokenizer}" show-more @keydown="${context._onTokenizerKeydown}" @show-more-items-press=${context.showMorePress} @ui5-token-delete=${ifDefined(context.tokenDelete)} @focusout="${context._tokenizerFocusOut}"><slot name="tokens"></slot><div slot="valueStateMessage">${ context.shouldDisplayDefaultValueStateMessage ? block1(context, tags, suffix) : block2(context, tags, suffix) }</div></${scopeTag("ui5-tokenizer", tags, suffix)}><input id="${ifDefined(context._id)}-inner" class="ui5-input-inner" style="${styleMap(context.styles.innerInput)}" type="${ifDefined(context.inputType)}" inner-input ?inner-input-with-icon="${context.icon.length}" ?disabled="${context.disabled}" ?readonly="${context._readonly}" .value="${ifDefined(context.value)}" placeholder="${ifDefined(context._placeholder)}" maxlength="${ifDefined(context.maxlength)}" role="${ifDefined(context.accInfo.input.role)}" aria-controls="${ifDefined(context.accInfo.input.ariaControls)}" aria-invalid="${ifDefined(context.accInfo.input.ariaInvalid)}" aria-haspopup="${ifDefined(context.accInfo.input.ariaHasPopup)}" aria-describedby="${ifDefined(context.accInfo.input.ariaDescribedBy)}" aria-roledescription="${ifDefined(context.accInfo.input.ariaRoledescription)}" aria-autocomplete="${ifDefined(context.accInfo.input.ariaAutoComplete)}" aria-expanded="${ifDefined(context.accInfo.input.ariaExpanded)}" aria-label="${ifDefined(context.accInfo.input.ariaLabel)}" aria-required="${ifDefined(context.required)}" @input="${context._handleInput}" @change="${context._handleNativeInputChange}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click=${context._click} @focusin=${context.innerFocusIn} data-sap-focus-ref step="${ifDefined(context.nativeInputAttributes.step)}" min="${ifDefined(context.nativeInputAttributes.min)}" max="${ifDefined(context.nativeInputAttributes.max)}" />${ context.effectiveShowClearIcon ? block4(context, tags, suffix) : undefined }${ context.icon.length ? block5(context, tags, suffix) : undefined }<div class="ui5-input-value-state-icon">${unsafeHTML(context._valueStateInputIcon)}</div>${ context.showValueHelpIcon ? block6(context, tags, suffix) : undefined }${ context.showSuggestions ? block7(context, tags, suffix) : undefined }${ context.accInfo.input.ariaDescription ? block8(context, tags, suffix) : undefined }${ context.hasValueState ? block9(context, tags, suffix) : undefined }</div><slot name="formSupport"></slot></div> ` : html`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}"><div class="ui5-input-content"><span id="${ifDefined(context._id)}-hiddenText-nMore" class="ui5-hidden-text">${ifDefined(context._tokensCountText)}</span><ui5-tokenizer class="ui5-multi-input-tokenizer" .morePopoverOpener=${ifDefined(context)} .popoverMinWidth=${ifDefined(context._inputWidth)} .valueState=${ifDefined(context.valueState)} ?expanded="${context.expandedTokenizer}" show-more @keydown="${context._onTokenizerKeydown}" @show-more-items-press=${context.showMorePress} @ui5-token-delete=${ifDefined(context.tokenDelete)} @focusout="${context._tokenizerFocusOut}"><slot name="tokens"></slot><div slot="valueStateMessage">${ context.shouldDisplayDefaultValueStateMessage ? block1(context, tags, suffix) : block2(context, tags, suffix) }</div></ui5-tokenizer><input id="${ifDefined(context._id)}-inner" class="ui5-input-inner" style="${styleMap(context.styles.innerInput)}" type="${ifDefined(context.inputType)}" inner-input ?inner-input-with-icon="${context.icon.length}" ?disabled="${context.disabled}" ?readonly="${context._readonly}" .value="${ifDefined(context.value)}" placeholder="${ifDefined(context._placeholder)}" maxlength="${ifDefined(context.maxlength)}" role="${ifDefined(context.accInfo.input.role)}" aria-controls="${ifDefined(context.accInfo.input.ariaControls)}" aria-invalid="${ifDefined(context.accInfo.input.ariaInvalid)}" aria-haspopup="${ifDefined(context.accInfo.input.ariaHasPopup)}" aria-describedby="${ifDefined(context.accInfo.input.ariaDescribedBy)}" aria-roledescription="${ifDefined(context.accInfo.input.ariaRoledescription)}" aria-autocomplete="${ifDefined(context.accInfo.input.ariaAutoComplete)}" aria-expanded="${ifDefined(context.accInfo.input.ariaExpanded)}" aria-label="${ifDefined(context.accInfo.input.ariaLabel)}" aria-required="${ifDefined(context.required)}" @input="${context._handleInput}" @change="${context._handleNativeInputChange}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click=${context._click} @focusin=${context.innerFocusIn} data-sap-focus-ref step="${ifDefined(context.nativeInputAttributes.step)}" min="${ifDefined(context.nativeInputAttributes.min)}" max="${ifDefined(context.nativeInputAttributes.max)}" />${ context.effectiveShowClearIcon ? block4(context, tags, suffix) : undefined }${ context.icon.length ? block5(context, tags, suffix) : undefined }<div class="ui5-input-value-state-icon">${unsafeHTML(context._valueStateInputIcon)}</div>${ context.showValueHelpIcon ? block6(context, tags, suffix) : undefined }${ context.showSuggestions ? block7(context, tags, suffix) : undefined }${ context.accInfo.input.ariaDescription ? block8(context, tags, suffix) : undefined }${ context.hasValueState ? block9(context, tags, suffix) : undefined }</div><slot name="formSupport"></slot></div> `;
const block1 = (context, tags, suffix) => html`${ifDefined(context.valueStateText)}`;
const block2 = (context, tags, suffix) => html`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix)) }`;
const block3 = (item, index, context, tags, suffix) => html`${ifDefined(item)}`;
const block4 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-icon", tags, suffix)} @click=${context._clear} tabindex="-1" input-icon class="ui5-input-clear-icon" name="decline"></${scopeTag("ui5-icon", tags, suffix)}>` : html`<ui5-icon @click=${context._clear} tabindex="-1" input-icon class="ui5-input-clear-icon" name="decline"></ui5-icon>`;
const block5 = (context, tags, suffix) => html`<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`;
const block6 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-icon", tags, suffix)} @click=${context.valueHelpPress} @mousedown=${context.valueHelpMouseDown} @mouseup=${context.valueHelpMouseUp} input-icon name="value-help"></${scopeTag("ui5-icon", tags, suffix)}>` : html`<ui5-icon @click=${context.valueHelpPress} @mousedown=${context.valueHelpMouseDown} @mouseup=${context.valueHelpMouseUp} input-icon name="value-help"></ui5-icon>`;
const block7 = (context, tags, suffix) => html`<span id="${ifDefined(context._id)}-suggestionsText" class="ui5-hidden-text">${ifDefined(context.suggestionsText)}</span><span id="${ifDefined(context._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="${ifDefined(context._id)}-suggestionsCount" class="ui5-hidden-text" aria-live="polite">${ifDefined(context.availableSuggestionsCount)}</span>`;
const block8 = (context, tags, suffix) => html`<span id="${ifDefined(context._id)}-descr" class="ui5-hidden-text">${ifDefined(context.accInfo.input.ariaDescription)}</span>`;
const block9 = (context, tags, suffix) => html`<span id="${ifDefined(context._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(context.ariaValueStateHiddenText)}</span>`;


export default block0;