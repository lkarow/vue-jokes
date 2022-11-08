(function(){"use strict";var e={942:function(e,n,t){var o=t(963),i=t(252);const r=(0,i._)("h1",{class:"headline"},"Make me laugh!",-1);function s(e,n,t,o,s,l){const a=(0,i.up)("JokeButton"),c=(0,i.up)("JokeView"),u=(0,i.up)("AcknowledgmentView");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i.Wm)(a,{joke:s.joke,isLoading:s.isLoading},null,8,["joke","isLoading"]),(0,i.Wm)(c,{joke:s.joke,isLoading:s.isLoading},null,8,["joke","isLoading"]),(0,i.Wm)(u)],64)}var l=t(577);const a=["disabled"];function c(e,n,t,o,r,s){return(0,i.wg)(),(0,i.iD)("button",{class:"joke-button",onClick:n[0]||(n[0]=(...e)=>s.fetchJoke&&s.fetchJoke(...e)),disabled:t.isLoading},(0,l.zw)(t.joke.setup?"Tell another one":"Tell a joke"),9,a)}var u={name:"JokeButton",props:["joke","isLoading"],methods:{fetchJoke(){this.$parent.fetchJoke()}}},d=t(744);const k=(0,d.Z)(u,[["render",c],["__scopeId","data-v-720b450c"]]);var p=k;const v=e=>((0,i.dD)("data-v-5d8c5bcb"),e=e(),(0,i.Cn)(),e),f={class:"joke-container"},h=v((()=>(0,i._)("div",{class:"joke"},[(0,i._)("div",{class:"joke-setup invisible"}),(0,i._)("div",{class:"joke-punchline invisible"})],-1)));function g(e,n,t,o,r,s){const l=(0,i.up)("LoadingSpinner");return(0,i.wg)(),(0,i.iD)("div",f,[t.isLoading?((0,i.wg)(),(0,i.j4)(l,{key:0})):(0,i.kq)("",!0),h])}const j=e=>((0,i.dD)("data-v-4549f678"),e=e(),(0,i.Cn)(),e),m={class:"lds-roller"},b=j((()=>(0,i._)("div",null,null,-1))),w=j((()=>(0,i._)("div",null,null,-1))),_=j((()=>(0,i._)("div",null,null,-1))),L=j((()=>(0,i._)("div",null,null,-1))),y=j((()=>(0,i._)("div",null,null,-1))),J=j((()=>(0,i._)("div",null,null,-1))),O=j((()=>(0,i._)("div",null,null,-1))),S=j((()=>(0,i._)("div",null,null,-1))),T=[b,w,_,L,y,J,O,S];function q(e,n,t,o,r,s){return(0,i.wg)(),(0,i.iD)("div",m,T)}var D={name:"LoadingSpinner"};const W=(0,d.Z)(D,[["render",q],["__scopeId","data-v-4549f678"]]);var I=W,A={name:"JokeView",components:{LoadingSpinner:I},props:["joke","isLoading"],methods:{typeWriter(e,n){if(!e)return;let t=0;const o=setInterval((()=>{t<e.length?(document.querySelector(`.${n}`).innerHTML+=e.charAt(t),t++):clearInterval(o)}),70)},deleteTypeWrittenJoke(){document.querySelector(".joke-setup").innerHTML="",document.querySelector(".joke-punchline").innerHTML=""}},watch:{joke(e){e&&(document.querySelector(".joke-punchline").classList.add("invisible"),this.deleteTypeWrittenJoke(),document.querySelector(".joke-setup").classList.remove("invisible"),this.typeWriter(this.joke.setup,"joke-setup"),setTimeout((()=>{document.querySelector(".joke-punchline").classList.remove("invisible"),this.typeWriter(this.joke.punchline,"joke-punchline")}),70*e.setup.length))},isLoading(e){e&&(document.querySelector(".joke-punchline").classList.add("invisible"),document.querySelector(".joke-setup").classList.add("invisible"))}}};const C=(0,d.Z)(A,[["render",g],["__scopeId","data-v-5d8c5bcb"]]);var V=C;const Z=e=>((0,i.dD)("data-v-f52d005e"),e=e(),(0,i.Cn)(),e),x={class:"acknowledgment"},H=Z((()=>(0,i._)("a",{class:"link",href:"https://github.com/15Dkatz/official_joke_api",target:"_blank"}," Thanks to the Joke API ",-1))),M=[H];function P(e,n,t,o,r,s){return(0,i.wg)(),(0,i.iD)("div",x,M)}var B={name:"AcknowledgmentView"};const z=(0,d.Z)(B,[["render",P],["__scopeId","data-v-f52d005e"]]);var $=z,E=t(196),F={name:"App",components:{JokeButton:p,JokeView:V,AcknowledgmentView:$},data(){return{url:"https://official-joke-api.appspot.com/jokes/random",joke:{},isLoading:!1}},methods:{async fetchJoke(){this.isLoading=!0;try{let e=await E.ZP.get(this.url);this.joke=e.data,this.isLoading=!1}catch(e){console.log(e)}}}};const Y=(0,d.Z)(F,[["render",s]]);var G=Y;(0,o.ri)(G).mount("#app")}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,r){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var l=!0,a=0;a<o.length;a++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(l=!1,r<s&&(s=r));if(l){e.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,r,s=o[0],l=o[1],a=o[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(a)var u=a(t)}for(n&&n(o);c<s.length;c++)r=s[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=self["webpackChunkvue_jokes"]=self["webpackChunkvue_jokes"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(942)}));o=t.O(o)})();
//# sourceMappingURL=app.362d04e1.js.map