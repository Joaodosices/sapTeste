/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(context._id)}-overflowMenu" horizontal-align="Right" placement-type="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover"><${scopeTag("ui5-list", tags, suffix)} mode="SingleSelect" separators="None" @ui5-item-click="${ifDefined(context._onOverflowListItemClick)}">${ repeat(context._overflowItems, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}><div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${context._closeRespPopover}">${ifDefined(context.popoverCancelButtonText)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html`<ui5-responsive-popover id="${ifDefined(context._id)}-overflowMenu" horizontal-align="Right" placement-type="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover"><ui5-list mode="SingleSelect" separators="None" @ui5-item-click="${ifDefined(context._onOverflowListItemClick)}">${ repeat(context._overflowItems, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }</ui5-list><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${context._closeRespPopover}">${ifDefined(context.popoverCancelButtonText)}</ui5-button></div></ui5-responsive-popover>`;
const block1 = (item, index, context, tags, suffix) => html`${ifDefined(item.overflowPresentation)}`;


export default block0;