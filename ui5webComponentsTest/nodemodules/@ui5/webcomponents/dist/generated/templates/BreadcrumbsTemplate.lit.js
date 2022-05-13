/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<nav class="ui5-breadcrumbs-root" aria-label="${ifDefined(context._accessibleNameText)}"><ol @focusin="${context._onfocusin}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${context._isOverflowEmpty}"><${scopeTag("ui5-link", tags, suffix)} @click="${context._openRespPopover}" accessible-role="button" aria-label="${ifDefined(context._dropdownArrowAccessibleNameText)}" aria-haspopup="${ifDefined(context._ariaHasPopup)}"><${scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down" title="${ifDefined(context._dropdownArrowAccessibleNameText)}"></${scopeTag("ui5-icon", tags, suffix)}></${scopeTag("ui5-link", tags, suffix)}></li>${ repeat(context._linksData, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }${ context._endsWithCurrentLocationLabel ? block2(context, tags, suffix) : undefined }</ol></nav>` : html`<nav class="ui5-breadcrumbs-root" aria-label="${ifDefined(context._accessibleNameText)}"><ol @focusin="${context._onfocusin}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${context._isOverflowEmpty}"><ui5-link @click="${context._openRespPopover}" accessible-role="button" aria-label="${ifDefined(context._dropdownArrowAccessibleNameText)}" aria-haspopup="${ifDefined(context._ariaHasPopup)}"><ui5-icon name="slim-arrow-down" title="${ifDefined(context._dropdownArrowAccessibleNameText)}"></ui5-icon></ui5-link></li>${ repeat(context._linksData, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }${ context._endsWithCurrentLocationLabel ? block2(context, tags, suffix) : undefined }</ol></nav>`;
const block1 = (item, index, context, tags, suffix) => suffix ? html`<li class="ui5-breadcrumbs-link-wrapper" id="${ifDefined(item._id)}-link-wrapper"><${scopeTag("ui5-link", tags, suffix)} @click="${context._onLinkPress}" href="${ifDefined(item.href)}" target="${ifDefined(item.target)}" id="${ifDefined(item._id)}-link" accessible-name="${ifDefined(item._accessibleNameText)}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.innerText)}</${scopeTag("ui5-link", tags, suffix)}></li>` : html`<li class="ui5-breadcrumbs-link-wrapper" id="${ifDefined(item._id)}-link-wrapper"><ui5-link @click="${context._onLinkPress}" href="${ifDefined(item.href)}" target="${ifDefined(item.target)}" id="${ifDefined(item._id)}-link" accessible-name="${ifDefined(item._accessibleNameText)}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.innerText)}</ui5-link></li>`;
const block2 = (context, tags, suffix) => suffix ? html`<li class="ui5-breadcrumbs-current-location" @click="${context._onLabelPress}"><span aria-label="${ifDefined(context._currentLocationAccName)}" role="link" id="${ifDefined(context._id)}-labelWrapper"><${scopeTag("ui5-label", tags, suffix)} aria-current="page">${ifDefined(context._currentLocationText)}</${scopeTag("ui5-label", tags, suffix)}></span></li>` : html`<li class="ui5-breadcrumbs-current-location" @click="${context._onLabelPress}"><span aria-label="${ifDefined(context._currentLocationAccName)}" role="link" id="${ifDefined(context._id)}-labelWrapper"><ui5-label aria-current="page">${ifDefined(context._currentLocationText)}</ui5-label></span></li>`;


export default block0;