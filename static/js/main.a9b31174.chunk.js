(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__2kQ7C",description:"Profile_description__2SufY",avatar:"Profile_avatar__1Rcqr",name:"Profile_name__2Szs0",tag:"Profile_tag__3F_nX",location:"Profile_location__2dcyV",stats:"Profile_stats__1TQ11",box:"Profile_box__IgBP4",label:"Profile_label__15or8",quantity:"Profile_quantity__3j_a3"}},function(a,e,t){a.exports={transactionHistory:"TransactionHistory_transactionHistory__1wFyE",th:"TransactionHistory_th__3u-Fs",td:"TransactionHistory_td__mDMos",tr:"TransactionHistory_tr__3LAJz"}},function(a,e,t){a.exports={item:"FriendList_item__2r79z",name:"FriendList_name__3USCx",status:"FriendList_status__tnfg_",onLine:"FriendList_onLine__12Dip",offLine:"FriendList_offLine__Sgg9s"}},function(a,e,t){a.exports={statistics:"Statistics_statistics__NmKEU",title:"Statistics_title__6OvCv",statList:"Statistics_statList__1ncml",item:"Statistics_item__3k8Ag",label:"Statistics_label__sB0SU",percentage:"Statistics_percentage__2Ngrc"}},function(a){a.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a){a.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(a,e,t){a.exports={App:"App_App__1LvAc"}},,,,,,function(a,e,t){},,function(a,e,t){"use strict";t.r(e);var c=t(6),s=t.n(c),n=t(8),i=t.n(n),r=t(5),l=t(9),d=t(10),o=t(11),b=t(1),p=t.n(b),m=t(0);var u=function(a){var e=a.username,t=a.tag,c=a.location,s=a.avatar,n=void 0===s?"no avatar":s,i=a.stats;return Object(m.jsxs)("div",{className:p.a.profile,children:[Object(m.jsxs)("div",{className:p.a.description,children:[Object(m.jsx)("img",{src:n,alt:"User avatar",className:p.a.avatar}),Object(m.jsx)("p",{className:p.a.name,children:e}),Object(m.jsx)("p",{className:p.a.tag,children:"@"+t}),Object(m.jsx)("p",{className:p.a.location,children:c})]}),Object(m.jsxs)("ul",{className:p.a.stats,children:[Object(m.jsxs)("li",{className:p.a.box,children:[Object(m.jsx)("span",{className:p.a.label,children:"Followers"}),Object(m.jsx)("span",{className:p.a.quantity,children:i.followers})]}),Object(m.jsxs)("li",{className:p.a.box,children:[Object(m.jsx)("span",{className:p.a.label,children:"Views"}),Object(m.jsx)("span",{className:p.a.quantity,children:i.views})]}),Object(m.jsxs)("li",{className:p.a.box,children:[Object(m.jsx)("span",{className:p.a.label,children:"Likes"}),Object(m.jsx)("span",{className:p.a.quantity,children:i.likes})]})]})]})},j=t(4),f=t.n(j);var _=function(a){var e=a.title,t=a.stats;return Object(m.jsxs)("section",{className:f.a.statistics,children:[Object(m.jsx)("h2",{className:f.a.title,children:e}),Object(m.jsx)("ul",{className:f.a.statList,children:t.map((function(a){return Object(m.jsxs)("li",{className:f.a.item,style:{backgroundColor:"#"+Math.round(16777215*Math.random()).toString(16)},children:[Object(m.jsx)("span",{className:f.a.label,children:a.label}),Object(m.jsxs)("span",{className:f.a.percentage,children:[a.percentage,"%"]})]},a.id)}))})]})},y=t(3),h=t.n(y);var x=function(a){var e=a.friends;return Object(m.jsx)("ul",{className:h.a.friendList,children:e.map((function(a){return Object(m.jsxs)("li",{className:h.a.item,children:[Object(m.jsx)("span",{className:"".concat(h.a.status," ").concat(a.isOnline?h.a.onLine:h.a.offLine),children:a.isOnline}),Object(m.jsx)("img",{className:h.a.avatar,src:a.avatar,alt:"User avatar",width:"48"}),Object(m.jsx)("p",{className:h.a.name,children:a.name})]},a.id)}))})},O=t(2),N=t.n(O);var v=function(a){var e=a.items;return Object(m.jsxs)("table",{className:N.a.transactionHistory,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:N.a.th,children:"Type"}),Object(m.jsx)("th",{className:N.a.th,children:"Amount"}),Object(m.jsx)("th",{className:N.a.th,children:"Currency"})]})}),Object(m.jsx)("tbody",{className:N.a.tbody,children:e.map((function(a){return Object(m.jsxs)("tr",{className:N.a.tr,children:[Object(m.jsx)("td",{className:N.a.td,children:a.type}),Object(m.jsx)("td",{className:N.a.td,children:a.amount}),Object(m.jsx)("td",{className:N.a.td,children:a.currency})]},a.id)}))})]})},g=t(12),w=t.n(g);var L=function(){return Object(m.jsxs)("div",{className:w.a.App,children:[Object(m.jsx)(u,{username:r.username,tag:r.tag,location:r.location,avatar:r.avatar,stats:r.stats}),Object(m.jsx)(_,{title:"Upload stats",stats:l}),Object(m.jsx)(x,{friends:d}),Object(m.jsx)(v,{items:o})]})};t(18),t(19);i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.a9b31174.chunk.js.map