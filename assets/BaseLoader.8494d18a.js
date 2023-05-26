import{h as k,H,J as F,l as b,K as J,x as K,c as u,y as B,P as y,z as m,L as C,ai as X,aU as Y,w as p,s as P,r as G,O as Q,aq as Z,aV as w,k as ee,j as M,a3 as te,U as ae,Y as le,aW as se,aX as ie,a2 as V}from"./index.4bf4fb5a.js";import{s as ne,v as oe,B as ce}from"./BaseCard.vue_vue_type_script_setup_true_lang.6a676577.js";const ue=k({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...H(),...F()},"v-divider"),Te=b()({name:"VDivider",props:ue(),setup(e,d){let{attrs:c}=d;const{themeClasses:s}=J(e),{textColorClasses:v,textColorStyles:l}=ne(K(e,"color")),n=u(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=y(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=y(e.thickness)),i});return B(()=>m("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,v.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!c.role||c.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${c.role||"separator"}`},null)),{}}});const re=k({dynamicHeight:Boolean,...H()},"v-virtual-scroll-item"),de=b()({name:"VVirtualScrollItem",props:re(),emits:{"update:height":e=>!0},setup(e,d){let{emit:c,slots:s}=d;const{resizeRef:v,contentRect:l}=C();X(()=>e.dynamicHeight,()=>{p(()=>{var i;return(i=l.value)==null?void 0:i.height},i=>{i!=null&&c("update:height",i)})});function n(){e.dynamicHeight&&l.value&&c("update:height",l.value.height)}Y(n),B(()=>{var i;return m("div",{ref:e.dynamicHeight?v:void 0,class:["v-virtual-scroll__item",e.class],style:e.style},[(i=s.default)==null?void 0:i.call(s)])})}}),z=-1,D=1,ve=k({items:{type:Array,default:()=>[]},itemHeight:[Number,String],...H(),...oe()},"v-virtual-scroll"),ke=b()({name:"VVirtualScroll",props:ve(),setup(e,d){let{slots:c}=d;const s=P(0),v=P(e.itemHeight),l=u({get:()=>{var t;return parseInt((t=v.value)!=null?t:0,10)},set(t){v.value=t}}),n=G(),{resizeRef:i,contentRect:x}=C();Q(()=>{i.value=n.value});const N=Z(),I=new Map;let h=w(e.items.length).map(()=>l.value);const f=u(()=>{var t,a;return Math.max(12,Math.ceil(((a=(t=x.value)==null?void 0:t.height)!=null?a:N.height.value)/l.value*1.7+1))});function O(t,a){l.value=Math.max(l.value,a),h[t]=a,I.set(e.items[t],a)}function g(t){return h.slice(0,t).reduce((a,o)=>a+(o||l.value),0)}function U(t){const a=e.items.length;let o=0,r=0;for(;r<t&&o<a;)r+=h[o++]||l.value;return o-1}let R=0;function W(){if(!n.value||!x.value)return;const t=x.value.height,a=n.value.scrollTop,o=a<R?z:D,r=U(a+t/2),_=Math.round(f.value/3);o===z&&r<=s.value+_*2-1?s.value=M(r-_,0,e.items.length):o===D&&r>=s.value+_*2-1&&(s.value=M(r-_,0,e.items.length-f.value)),R=n.value.scrollTop}function E(t){if(!n.value)return;const a=g(t);n.value.scrollTop=a}const L=u(()=>e.items.map((t,a)=>({raw:t,index:a}))),T=u(()=>Math.min(e.items.length,s.value+f.value)),$=u(()=>L.value.slice(s.value,T.value)),j=u(()=>g(s.value)),q=u(()=>g(e.items.length)-g(T.value)),{dimensionStyles:A}=ce(e);return ee(()=>{l.value||(l.value=h.slice(s.value,T.value).reduce((t,a)=>t+a,0)/f.value)}),p(()=>e.items.length,()=>{h=w(e.items.length).map(()=>l.value),I.forEach((t,a)=>{const o=e.items.indexOf(a);o===-1?I.delete(a):h[o]=t})}),B(()=>m("div",{ref:n,class:["v-virtual-scroll",e.class],onScroll:W,style:[A.value,e.style]},[m("div",{class:"v-virtual-scroll__container",style:{paddingTop:y(j.value),paddingBottom:y(q.value)}},[$.value.map(t=>m(de,{key:t.index,dynamicHeight:!e.itemHeight,"onUpdate:height":a=>O(t.index,a)},{default:()=>{var a;return[(a=c.default)==null?void 0:a.call(c,{item:t.raw,index:t.index})]}}))])])),{scrollToIndex:E}}});const he={},S=e=>(se("data-v-0ba4ead2"),e=e(),ie(),e),me={class:"lds-ring"},fe=S(()=>V("div",null,null,-1)),ge=S(()=>V("div",null,null,-1)),_e=S(()=>V("div",null,null,-1)),ye=S(()=>V("div",null,null,-1)),Ve=[fe,ge,_e,ye];function Se(e,d){return ae(),le("div",me,Ve)}const He=te(he,[["render",Se],["__scopeId","data-v-0ba4ead2"]]);export{He as B,Te as V,ke as a};
