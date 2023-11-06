var E=Object.defineProperty;var C=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as m,n as y,f as N,h as T,i as A,j,k as b,l as B,m as D,p as v,q as H,v as I,w as P}from"./scheduler.e108d1fd.js";let $=!1;function q(){$=!0}function M(){$=!1}function O(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function R(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&l.push(o)}t=l}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let l=0;l<t.length;l++){const s=t[l].claim_order,o=(r>0&&t[n[r]].claim_order<=s?r+1:O(1,r,_=>t[n[_]].claim_order,s))-1;i[l]=n[o]+1;const u=o+1;n[u]=l,r=Math.max(u,r)}const f=[],a=[];let c=t.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(f.push(t[l-1]);c>=l;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);f.reverse(),a.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<a.length;l++){for(;s<f.length&&a[l].claim_order>=f[s].claim_order;)s++;const o=s<f.length?f[s]:null;e.insertBefore(a[l],o)}}function z(e,t){if($){for(R(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function U(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,r=!1){W(e);const f=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const l=n(c);return l===void 0?e.splice(a,1):e[a]=l,r||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const l=n(c);return l===void 0?e.splice(a,1):e[a]=l,r?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function F(e,t,n,i){return S(e,r=>r.nodeName===t,r=>{const f=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||f.push(c.name)}f.forEach(a=>r.removeAttribute(a))},()=>i(t))}function le(e,t,n){return F(e,t,n,U)}function G(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function se(e){return G(e," ")}function ae(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ce(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const f=r.textContent.trim();f===`HEAD_${e}_END`?(i-=1,n.push(r)):f===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ue(e,t){return new e(t)}const h=new Set;let d;function oe(){d={r:0,c:[],p:d}}function de(){d.r||m(d.c),d=d.p}function J(e,t){e&&e.i&&(h.delete(e),e.i(t))}function _e(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function he(e){e&&e.c()}function me(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),b(()=>{const f=e.$$.on_mount.map(H).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...f):m(f),e.$$.on_mount=[]}),r.forEach(b)}function Q(e,t){const n=e.$$;n.fragment!==null&&(B(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(I.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $e(e,t,n,i,r,f,a=null,c=[-1]){const l=D;v(e);const s=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:N(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};a&&a(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(u,_,...g)=>{const w=g.length?g[0]:_;return s.ctx&&r(s.ctx[u],s.ctx[u]=w)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](w),o&&X(e,u)),_}):[],s.update(),o=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){q();const u=V(t.target);s.fragment&&s.fragment.l(u),u.forEach(L)}else s.fragment&&s.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),M(),T()}v(l)}class pe{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{pe as S,ee as a,de as b,se as c,J as d,ie as e,L as f,U as g,le as h,$e as i,V as j,re as k,fe as l,x as m,G as n,ae as o,oe as p,ue as q,he as r,ne as s,_e as t,me as u,K as v,Q as w,z as x,te as y,ce as z};
