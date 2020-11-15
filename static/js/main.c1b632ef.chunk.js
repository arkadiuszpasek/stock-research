(this["webpackJsonpstock-research"]=this["webpackJsonpstock-research"]||[]).push([[0],{24:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var r,a=t(0),l=t.n(a),c=t(9),o=t.n(c),i=t(4),u=t(3),m=t(16),p=t(5),f=t.n(p),s=t(11),d=t(10),E="https://financialmodelingprep.com/api",b="?apikey=".concat("6c644445c1ba7094876d250d94496ede"),g=function(e){return"".concat(E,"/v3/profile/").concat(e).concat(b)},v=function(e){return"".concat(E,"/v3/key-metrics-ttm/").concat(e).concat(b)},h=function(e){return"".concat(E,"/v3/rating/").concat(e).concat(b)};!function(e){e.INPUT_CHANGE="INPUT_CHANGE",e.FETCH_KEY_METRICS="FETCH_KEY_DATA",e.FETCH_PROFILE="FETCH_PROFILE",e.FETCH_RATING="FETCH_RATING"}(r||(r={}));var T=t(6),x={metrics:void 0,profile:void 0,rating:void 0},O=Object(i.c)({input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.INPUT_CHANGE:return n.payload;default:return e}},stock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.FETCH_KEY_METRICS:return Object(T.a)(Object(T.a)({},e),{},{metrics:n.payload});case r.FETCH_PROFILE:return Object(T.a)(Object(T.a)({},e),{},{profile:n.payload});case r.FETCH_RATING:return Object(T.a)(Object(T.a)({},e),{},{rating:n.payload});default:return e}}}),y=t(17),j=t(18),k=t(23),F=t(22),w=t(1),C=t(2);function R(){var e=Object(w.a)(["\n  background-color: ",";\n  padding: 0.75rem 2rem;\n  border-radius: ",";\n  border: none;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #f3f3f3;\n    color: black;\n    cursor: pointer;\n  }\n"]);return R=function(){return e},e}function P(){var e=Object(w.a)(["\n  background-color: #f3f3f3;\n  color: ",";\n  padding: 0.75rem 1rem;\n  border-radius: ",";\n  margin: 1.5rem 0.5rem 0.5rem;\n  text-align: center;\n  border: none;\n"]);return P=function(){return e},e}var _=C.b.input(P(),"#312D33","2px"),S=C.b.button(R(),"#666685","2px"),D={updateInput:function(e){return{type:r.INPUT_CHANGE,payload:e}},fetchKeyMetrics:function(e){return function(){var n=Object(d.a)(f.a.mark((function n(t){var a,l,c,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(v(e));case 2:return a=n.sent,n.next=5,a.json();case 5:l=n.sent,c=Object(s.a)(l,1),o=c[0],console.log(o),t({type:r.FETCH_KEY_METRICS,payload:o});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},fetchProfile:function(e){return function(){var n=Object(d.a)(f.a.mark((function n(t){var a,l,c,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(g(e));case 2:return a=n.sent,n.next=5,a.json();case 5:l=n.sent,c=Object(s.a)(l,1),o=c[0],console.log(o),t({type:r.FETCH_PROFILE,payload:o});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},fetchRating:function(e){return function(){var n=Object(d.a)(f.a.mark((function n(t){var a,l,c,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(h(e));case 2:return a=n.sent,n.next=5,a.json();case 5:l=n.sent,c=Object(s.a)(l,1),o=c[0],console.log(o),t({type:r.FETCH_RATING,payload:o});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},I=Object(u.b)((function(e){return{input:e.input}}),D)((function(e){var n=e.input,t=e.updateInput,r=e.fetchKeyMetrics,a=e.fetchProfile,c=e.fetchRating,o=function(e){t(e.target.value.toUpperCase())},i=function(){a(n),setTimeout((function(){return r(n)}),1e3),setTimeout((function(){return c(n)}),2e3)},u=function(e){13===e.keyCode&&i()};return l.a.createElement("div",null,l.a.createElement(_,{onChange:o,onKeyDown:u,placeholder:"Enter stock ticker",value:n}),l.a.createElement(S,{onClick:i},"Search"))}));function M(){var e=Object(w.a)(["\n  &,\n  &:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em;\n  }\n\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.5s infinite linear;\n\n  @-webkit-keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n"]);return M=function(){return e},e}var N=C.b.div(M()),H=function(){return l.a.createElement(N,null)};function A(){var e=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 420px;\n  padding: .5rem;\n  margin: .25rem;\n  border-radius: ",";\n  border-bottom: 2px solid ",";\n  background-color: ",";\n"]);return A=function(){return e},e}function G(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"]);return G=function(){return e},e}var K=C.b.div(G()),B=C.b.div(A(),"2px","#f3f3f3","#5E788E"),U=function(e){var n=e.metrics;return l.a.createElement(K,null,l.a.createElement(B,null,l.a.createElement("p",null,"Revenue per share"),l.a.createElement("p",null,n.revenuePerShareTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"Net income per share"),l.a.createElement("p",null,n.netIncomePerShareTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"Operating cash flow per share"),l.a.createElement("p",null,n.operatingCashFlowPerShareTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"Free cash flow per share"),l.a.createElement("p",null,n.freeCashFlowPerShareTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"P/E ratio"),l.a.createElement("p",null,n.peRatioTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"P/S ratio"),l.a.createElement("p",null,n.priceToSalesRatioTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"P/FCF ratio"),l.a.createElement("p",null,n.pfcfRatioTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"P/B ratio"),l.a.createElement("p",null,n.pbRatioTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"Book value per share"),l.a.createElement("p",null,n.bookValuePerShareTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"Tangible book value per share"),l.a.createElement("p",null,n.tangibleBookValuePerShareTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"Dividend"),l.a.createElement("p",null,n.dividendYieldTTM.toFixed(3))),l.a.createElement(B,null,l.a.createElement("p",null,"Dividend %"),l.a.createElement("p",null,n.dividendYieldPercentageTTM.toFixed(3))))};function Y(){var e=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 420px;\n  padding: .5rem;\n  margin: .25rem;\n  border-radius: ",";\n  border-bottom: 2px solid ",";\n  background-color: ",";\n"]);return Y=function(){return e},e}function L(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"]);return L=function(){return e},e}var V=C.b.div(L()),Z=C.b.div(Y(),"2px","#f3f3f3","#5E788E"),z=function(e){var n=e.profile;return l.a.createElement(V,null,l.a.createElement(Z,null,l.a.createElement("p",null,"Ticker"),l.a.createElement("p",null,n.symbol)),l.a.createElement(Z,null,l.a.createElement("p",null,"Name"),l.a.createElement("p",null,n.companyName)),l.a.createElement(Z,null,l.a.createElement("p",null,"Describtion"),l.a.createElement("p",null,n.description&&n.description.substr(0,50)+"...")),l.a.createElement(Z,null,l.a.createElement("p",null,"Price"),l.a.createElement("p",null,n.price)),l.a.createElement(Z,null,l.a.createElement("p",null,"Market cap"),l.a.createElement("p",null,n.mktCap)),l.a.createElement(Z,null,l.a.createElement("p",null,"DCF"),l.a.createElement("p",null,n.dcf)),l.a.createElement(Z,null,l.a.createElement("p",null,"DCF difference"),l.a.createElement("p",null,n.dcfDiff)))};function J(){var e=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 420px;\n  padding: .5rem;\n  margin: .25rem;\n  border-radius: ",";\n  border-bottom: 2px solid ",";\n  background-color: ",";\n"]);return J=function(){return e},e}function X(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"]);return X=function(){return e},e}var q=C.b.div(X()),Q=C.b.div(J(),"2px","#f3f3f3","#5E788E"),W=function(e){var n=e.rating;return l.a.createElement(q,null,l.a.createElement(Q,null,l.a.createElement("p",null,"Rating"),l.a.createElement("p",null,n.rating)),l.a.createElement(Q,null,l.a.createElement("p",null,"Rating score"),l.a.createElement("p",null,n.ratingScore)),l.a.createElement(Q,null,l.a.createElement("p",null,"Rating DCF"),l.a.createElement("p",null,n.ratingDetailsDCFScore)),l.a.createElement(Q,null,l.a.createElement("p",null,"Rating DE"),l.a.createElement("p",null,n.ratingDetailsDEScore)),l.a.createElement(Q,null,l.a.createElement("p",null,"Rating PB"),l.a.createElement("p",null,n.ratingDetailsPBScore)),l.a.createElement(Q,null,l.a.createElement("p",null,"Rating PE"),l.a.createElement("p",null,n.ratingDetailsPEScore)),l.a.createElement(Q,null,l.a.createElement("p",null,"Rating ROA"),l.a.createElement("p",null,n.ratingDetailsROAScore)),l.a.createElement(Q,null,l.a.createElement("p",null,"Rating ROE"),l.a.createElement("p",null,n.ratingDetailsROEScore)))};function $(){var e=Object(w.a)(["\n  display: flex;\n  align-items: flex-start;\n"]);return $=function(){return e},e}var ee=C.b.div($()),ne=Object(u.b)((function(e){return{stock:e.stock}}),null)((function(e){var n=e.stock;return n.metrics||n.profile?(console.log(n),l.a.createElement(ee,null,n.metrics?l.a.createElement(U,{metrics:n.metrics}):l.a.createElement(H,null),n.profile?l.a.createElement(z,{profile:n.profile}):l.a.createElement(H,null),n.rating?l.a.createElement(W,{rating:n.rating}):l.a.createElement(H,null))):l.a.createElement(l.a.Fragment,null)}));function te(){var e=Object(w.a)(["\n  text-align: center;\n"]);return te=function(){return e},e}function re(){var e=Object(w.a)(["\n  width: 90%;\n  padding: 2rem;\n  text-align: center;\n"]);return re=function(){return e},e}function ae(){var e=Object(w.a)(["\n  body {\n    background-color: ",";\n  }\n  * {\n    font-family: 'Roboto', sans-serif;\n    color: white;\n    border-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"]);return ae=function(){return e},e}var le=Object(C.a)(ae(),"#3f3f3f"),ce=C.b.div(re()),oe=C.b.div(te()),ie=function(e){Object(k.a)(t,e);var n=Object(F.a)(t);function t(){return Object(y.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return l.a.createElement(oe,null,l.a.createElement(le,null),l.a.createElement(I,null),l.a.createElement(ce,null,l.a.createElement(ne,null)))}}]),t}(l.a.Component),ue=Object(u.b)(null,{})(ie),me="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,pe=Object(i.e)(O,me(Object(i.a)(m.a)));o.a.render(l.a.createElement(u.a,{store:pe},l.a.createElement(l.a.StrictMode,null,l.a.createElement(ue,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c1b632ef.chunk.js.map