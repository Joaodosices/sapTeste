import{nothing as i}from"../lit-html.js";import{AsyncDirective as t}from"../async-directive.js";import{directive as s}from"../directive.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=()=>new o;class o{}const h=new WeakMap,n=s(class extends t{render(t){return i}update(t,[s]){var e;const o=s!==this.U;return o&&void 0!==this.U&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.U=s,this.ht=null===(e=t.options)||void 0===e?void 0:e.host,this.ot(this.lt=t.element)),i}ot(i){var t;if("function"==typeof this.U){const s=null!==(t=this.ht)&&void 0!==t?t:globalThis;let e=h.get(s);void 0===e&&(e=new WeakMap,h.set(s,e)),void 0!==e.get(this.U)&&this.U.call(this.ht,void 0),e.set(this.U,i),void 0!==i&&this.U.call(this.ht,i)}else this.U.value=i}get rt(){var i,t,s;return"function"==typeof this.U?null===(t=h.get(null!==(i=this.ht)&&void 0!==i?i:globalThis))||void 0===t?void 0:t.get(this.U):null===(s=this.U)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});export{e as createRef,n as ref};
//# sourceMappingURL=ref.js.map
