(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10},{"id":"id-6","label":".npx","percentage":29},{"id":"id-7","label":".js","percentage":69}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(4),s=a.n(i),r=(a(12),a(13),a(1)),l=a(0);var o=function(e){var t=e.name?e.name:"Petra Marica",a=e.avatar?e.avatar:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg";if(t&&a)return Object(l.jsx)("img",{src:a,alt:t,className:"avatarImg"})};var d=function(e){var t=e.name?e.name:"Petra Marica",a=e.content?e.content:"";if(t&&a)return Object(l.jsx)("p",{className:t,children:a})};var b=function(e){var t=e.name?e.name:"Petra Marica",a=e.tag?e.tag:"@pmarica",n=e.location?e.location:"Salvador, Brasil",c=e.avatar?e.avatar:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg";return Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)(o,{avatar:c,name:t}),Object(l.jsx)(d,{name:"name",content:t}),Object(l.jsx)(d,{name:"tag",content:a}),Object(l.jsx)(d,{name:"location",content:n})]})};var u=function(e){var t=e.label?e.label:"-",a=e.quantity?e.quantity:"-";if(t&&a)return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"label",children:t}),Object(l.jsx)("span",{className:"quantity",children:a})]})};var j=function(e){var t=e.stats.followers?e.stats.followers:0,a=e.stats.views?e.stats.views:0,n=e.stats.likes?e.stats.likes:0;return Object(l.jsxs)("ul",{className:"stats",children:[Object(l.jsx)(u,{label:"Followers",quantity:t}),Object(l.jsx)(u,{label:"Views",quantity:a}),Object(l.jsx)(u,{label:"likes",quantity:n})]})};a(15);var m=function(e){return Object(l.jsxs)("div",{className:"profile",children:[Object(l.jsx)(b,{name:r.name,tag:r.tag,avatar:r.avatar,location:r.location}),Object(l.jsx)(j,{stats:r.stats})]})},f=(a(16),["#0081b7","#6303af","#940014","#007d89"]);var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.length-1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.length-1,a=e;return function(){return a<0&&(a=t),f[a--]}}();function v(e){var t=0,a=0!==e.data.length?e.data:[{id:"id_test",label:".test",percentage:"--"}];return Object(l.jsx)("ul",{className:"stat-list",children:a.map((function(e){var a=e.id?e.id.toString():"id-z0"+ ++t,n=e.label?e.label:"missing label",c=e.percentage?e.percentage:"missing percentage";return Object(l.jsxs)("li",{id:a,className:"item",style:{backgroundColor:p()},children:[Object(l.jsx)("span",{className:"label",children:n}),Object(l.jsxs)("span",{className:"percentage",children:[c,"%"]})]},a)}))})}var g=a(5);var h=function(){return Object(l.jsx)("div",{className:"statisticsBox",children:Object(l.jsxs)("section",{className:"statistics",children:[Object(l.jsx)("h2",{className:"title",children:"Upload stats"}),Object(l.jsx)(v,{data:g})]})})},y=(a(17),a(6));var O=function(){return y.map((function(e){var t=e.avatar,a=e.name,n=!0===e.isOnline?"on_line":"off_line";return Object(l.jsxs)("li",{className:"itemFriends "+n,children:[Object(l.jsx)("span",{className:"status",children:n}),Object(l.jsx)("img",{className:"avatar",src:t,alt:a,width:"48"}),Object(l.jsx)("p",{className:"name",children:a})]},"".concat(t,"+").concat(a))}))};var x=function(){return Object(l.jsx)("ul",{className:"friend-list",children:Object(l.jsx)(O,{})})},w=a(7),N=0;var S=function(){var e=!1;return function(){return e=!e}}();var P=function(){return w.map((function(e){var t=e.id?e.id.toString():"id-z0"+ ++N,a=e.type?e.type:"missing type",n=e.amount?e.amount:"missing amount",c=e.currency?e.currency:"missing currency",i=S()?"in_turn":"clasic";return Object(l.jsxs)("tr",{id:t,className:i,children:[Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:c})]},t)}))};a(18);var U=function(){return Object(l.jsxs)("table",{className:"transaction-history",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsx)(P,{})})]})};var k=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(h,{}),Object(l.jsx)(x,{}),Object(l.jsx)(U,{})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),C()}],[[19,1,2]]]);
//# sourceMappingURL=main.34708c69.chunk.js.map