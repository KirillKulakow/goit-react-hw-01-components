(this["webpackJsonpapp-hw-01"]=this["webpackJsonpapp-hw-01"]||[]).push([[0],[,function(e,a,t){e.exports={container:"Profile_container__33lxE",profile:"Profile_profile__1dRSD",description:"Profile_description__2eM4r",avatar:"Profile_avatar__1c7Cc",name:"Profile_name__3on_V",tag:"Profile_tag__2W5JL",location:"Profile_location__JUMO_",stats:"Profile_stats__2V8gB",label:"Profile_label__2i1AK",quantity:"Profile_quantity__39v3s"}},function(e,a,t){e.exports={"friend-list":"FriendsList_friend-list__1f5Oj",online:"FriendsList_online__3m31T",offline:"FriendsList_offline__aEwDy",item:"FriendsList_item__3v3D1",avatar:"FriendsList_avatar__2WVlO",name:"FriendsList_name__3sUXJ"}},,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,,,,,,function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports={transactionsHistory:"TransactionsHistory_transactionsHistory__2PAOz"}},,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),i=t.n(c),l=(t(23),t(5)),s=t(1),o=t.n(s),u=function(e){var a=Object.keys(e.stats),t=Object.values(e.stats),n=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},c=function(e){return e?e[0].toUpperCase()+e.slice(1):e};return r.a.createElement("div",{className:o.a.profile},r.a.createElement("div",{className:o.a.description},r.a.createElement("img",{src:e.src,alt:"user avatar",className:o.a.avatar}),r.a.createElement("p",{className:o.a.name},e.name),r.a.createElement("p",{className:o.a.tag},"@",e.tag),r.a.createElement("p",{className:o.a.location},e.locate)),r.a.createElement("ul",{className:o.a.stats},r.a.createElement("li",null,r.a.createElement("span",{className:o.a.label},c(a[0])),r.a.createElement("span",{className:o.a.quantity},n(t[0]))),r.a.createElement("li",null,r.a.createElement("span",{className:o.a.label},c(a[1])),r.a.createElement("span",{className:o.a.quantity},n(t[1]))),r.a.createElement("li",null,r.a.createElement("span",{className:o.a.label},c(a[2])),r.a.createElement("span",{className:o.a.quantity},n(t[2])))))};u.defaultProps={name:"Unknown",locate:"Anywhere",stats:{followers:0,views:0,likes:0}};var m=u,d=t(7),f=t(3),p=t(4);function b(){var e=Object(f.a)(["\n    font-size: 18px;\n    color: white;\n    font-weight: bold;\n    display: block;\n    text-align: center;\n"]);return b=function(){return e},e}function y(){var e=Object(f.a)(["\n    font-size: 14px;\n    color: white;\n    display: block;\n    text-align: center;\n    margin-bottom: 5px;\n"]);return y=function(){return e},e}function E(){var e=Object(f.a)(["\n    width: 50px;\n    padding: 15px;\n"]);return E=function(){return e},e}function _(){var e=Object(f.a)(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n"]);return _=function(){return e},e}function v(){var e=Object(f.a)(["\n    margin: 25px 0;\n    text-align: center;\n    color: #666666;\n"]);return v=function(){return e},e}function g(){var e=Object(f.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    width: auto;\n    margin: 0 auto;\n"]);return g=function(){return e},e}var w=p.a.section(g()),h=p.a.h2(v()),N=p.a.ul(_()),O=p.a.li(E()),j=p.a.span(y()),x=p.a.span(b()),P=function(e){return Math.floor(Math.random()*Math.floor(e))},U=function(e){return r.a.createElement(O,{style:{background:"rgb(".concat(P(255),",").concat(P(255),",").concat(P(255),")")}},r.a.createElement(j,null,e.label),r.a.createElement(x,null,e.percentage,"%"))},k=function(e){return r.a.createElement(w,null,(e.title,""!==e.title?r.a.createElement(h,null,e.title.toUpperCase()):null),r.a.createElement(N,null,e.stats.map((function(e){return r.a.createElement(U,{label:e.label,percentage:e.percentage,key:e.id})}))))};k.defaultProps={title:""};var J=k,L=t(14),M=t(2),C=t.n(M),z=function(e){return r.a.createElement("li",{className:C.a.item},r.a.createElement("span",{className:e.isOnline?C.a.online:C.a.offline}),r.a.createElement("img",{className:C.a.avatar,src:e.avatar,alt:"",width:"48"}),r.a.createElement("p",{className:C.a.name},e.name))};z.defaultProps={isOnline:!1,name:"Unknown"};var S=z,A=function(e){return r.a.createElement("ul",{className:C.a["friend-list"]},e.friends.map((function(e){return r.a.createElement(S,{isOnline:e.isOnline,avatar:e.avatar,name:e.name,key:e.id})})))},D=t(15),F=t(16),R=t.n(F),T=function(e){var a;return r.a.createElement("tr",null,r.a.createElement("td",null,(a=e.type)?a[0].toUpperCase()+a.slice(1):a),r.a.createElement("td",null,e.amount),r.a.createElement("td",null,e.currency))},q=function(e){return r.a.createElement("table",{className:R.a.transactionsHistory},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"TYPE"),r.a.createElement("th",null,"AMOUNT"),r.a.createElement("th",null,"CURRENCY"))),r.a.createElement("tbody",null,e.transactions.map((function(e){return r.a.createElement(T,{type:e.type,amount:e.amount,currency:e.currency,key:e.id})}))))};var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contain"},r.a.createElement(m,{name:l.name,tag:l.tag,locate:l.location,src:l.avatar,stats:l.stats})),r.a.createElement("div",{className:"contain"},r.a.createElement(J,{title:d.find((function(e){var a="";return"string"===typeof e&&(a=e),a})),stats:d.filter((function(e){return"object"===typeof e}))})),r.a.createElement("div",{className:"contain"},r.a.createElement(A,{friends:L})),r.a.createElement("div",{className:"contain"},r.a.createElement(q,{transactions:D})))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4275f9ce.chunk.js.map