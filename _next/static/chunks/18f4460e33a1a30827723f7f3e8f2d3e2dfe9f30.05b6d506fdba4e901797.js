(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{eSoa:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return T}));var n=r("a3WO");var a=r("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r("o0o1"),o=r.n(i),s=r("ODXe"),l=r("rePB"),u=r("HaE+"),p=r("nKUr"),d=r("q1tI"),b=r("tofy"),m=r("v7Hm"),j=r("vG+z"),f=r("rGDf"),h=r("MAJE"),O=r("3L07"),x=r("flX4"),g=r("z0gp"),y=r("wZsY"),v=r("rnH0"),w=r("YFqc"),k=r.n(w),_=r("xLeG"),N=r("Cs6D"),S=r("8y4k"),E=r("7aKw"),C=r("8Kt/"),P=r.n(C),L=r("X2oF"),I=r("tcnT");function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e){return K.apply(this,arguments)}function K(){return(K=Object(u.a)(o.a.mark((function e(t){var r,n,a,c,i,l,u,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(S.a)(Object(S.d)("api/tours?currency=".concat(t||"USD"))),Object(S.a)(Object(S.d)("api/locations"))]);case 2:return r=e.sent,n=Object(s.a)(r,2),a=n[0],c=n[1],e.next=8,Promise.all([a.json(),c.json()]);case 8:return i=e.sent,l=Object(s.a)(i,2),u=l[0],p=l[1],e.abrupt("return",{props:{tours:u.items,locations:p}});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){var t=e.tour,r=e.showPrice,n=Object(L.a)(),a=n.imgRef,c=n.imgLoaded;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(b.a,W(W({flexDirection:["column","row"]},v.i[1]),{},{my:1,backgroundColor:"white",borderRadius:4,overflow:"hidden",minH:[240,220],maxHeight:[1e3,1e3,"200px"],children:[Object(p.jsx)(m.a,{minWidth:["100%","25%"],width:["100%","25%"],maxHeight:["75px","100%"],height:["75px","auto"],minHeight:"120px",children:Object(p.jsx)(j.a,{transition:"opacity 200ms",ref:a,src:Object(S.b)(t.images[0]+"_thumb.jpg"),opacity:c?100:0,width:"100%",height:"100%",objectFit:"cover",alt:c?t.title:""})}),Object(p.jsxs)(b.a,{flexDirection:"column",py:2,pl:4,pr:2,width:"100%",children:[Object(p.jsx)(k.a,{href:"/tour/[id]",as:"/tour/".concat(t.tourId),children:Object(p.jsx)("a",{children:Object(p.jsx)(f.a,W(W({as:"h2"},v.d),{},{fontSize:"1.3rem",color:"black",mx:0,mb:1,p:0,children:t.title}))})}),Object(p.jsx)(h.a,W(W({},v.c),{},{mx:0,mb:1,p:0,flexGrow:1,children:t.shortDescription})),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(h.a,W(W({},v.c),{},{mx:0,p:0,fontSize:"1rem",color:"purple.500",alignSelf:"flex-end",flexGrow:1,children:t.location.name})),Object(p.jsxs)(m.a,{alignSelf:"flex-end",children:[r?Object(p.jsxs)(h.a,{textStyle:"cardBody",p:0,children:["From ",Object(p.jsx)(v.a,{code:t.price.currencyCode,symbol:t.price.currencySymbol,amount:t.price.estimate/4,size:"lg"}),"per guest"]}):null,Object(p.jsx)(k.a,{href:"/tour/[id]",as:"/tour/".concat(t.tourId),children:Object(p.jsx)(O.a,W(W({},v.g),{},{borderRadius:4,float:"right",children:"See Details"}))})]})]})]})]}))})},H={control:function(e,t){return W(W({},e),{},{border:"1px solid #934aad",":hover":{border:"1px solid white"},cursor:"pointer"})},singleValue:function(e,t){var r=t.isDisabled||t.isFocused?.5:1;return W(W({},e),{},{opacity:r,transition:"opacity 300ms"})},dropdownIndicator:function(e){return W({},e)},indicatorSeparator:function(){}},T=!0;t.default=function(e){var t,r=e.tours,n=e.locations,a=e.location,i=d.useState(a||"all"),l=Object(s.a)(i,2),b=l[0],j=l[1],O=d.useState(r),w=Object(s.a)(O,2),k=w[0],S=w[1],C=Object(_.a)(function(){var e=Object(u.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:r=e.sent,n=r.props,S(n.tours);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(s.a)(C,1)[0],D=Object(d.useMemo)((function(){return k.filter((function(e){return"all"===b||e.location.slug===b}))}),[k,b]),K=Object(d.useMemo)((function(){return[].concat(c(n.map((function(e){return{value:e.slug,label:e.name}}))),[{value:"all",label:"All Locations"}])}),[n]),T=Object(d.useCallback)((function(e,t){var r=e;if(r)switch(r.value){case"all":j("all"),history.pushState(null,"","/tours");break;default:j(r.value),history.pushState(null,"","/tours/location/".concat(r.value))}}),[]),A="all"==b?{value:"all",label:"All Locations"}:K.find((function(e){return e.value==b}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(P.a,{children:[Object(p.jsx)("title",{children:"Tours in ".concat("all"==b?"Kansai":null===(t=n.find((function(e){return e.slug==b})))||void 0===t?void 0:t.name," - Nippondering Tours")}),Object(p.jsx)("meta",{property:"og:title",content:"Nippondering Tours - Your Friends in Kansai"}),Object(p.jsx)("meta",{property:"og:description",content:"Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!"}),Object(p.jsx)("meta",{property:"og:image",content:"https://nippondering.com/meta_logo.png"}),Object(p.jsx)("meta",{property:"og:url",content:"https://nippondering.com"}),Object(p.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(p.jsx)("meta",{property:"twitter:site",content:"@nippondering"}),Object(p.jsx)("meta",{property:"twitter:title",content:"Nippondering Tours"}),Object(p.jsx)("meta",{property:"twitter:description",content:"Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!"}),Object(p.jsx)("meta",{property:"twitter:image",content:"https://nippondering.com/meta_logo.png"})]}),Object(p.jsxs)(I.a,{children:[Object(p.jsxs)(x.a,W(W({},v.b),{},{children:[Object(p.jsx)(x.b,{children:Object(p.jsx)(x.c,{href:"/",children:"Home"})}),Object(p.jsx)(x.b,{children:Object(p.jsx)(x.c,{href:"/tours",children:"Tours"})})]})),Object(p.jsx)(f.a,{as:"h1",textStyle:"sectionTitle",fontSize:"1.8rem",children:"Tours We Offer"}),Object(p.jsx)(m.a,{maxWidth:"200px",mt:4,mr:["auto","auto","0"],ml:"auto",children:Object(p.jsx)(N.default,{id:"4",instanceId:"5",inputId:"6",options:K,onChange:T,isSearchable:!1,defaultValue:A,styles:H})}),Object(p.jsx)(m.a,{display:{base:"flex",md:"none"},justifyContent:"left",mt:4,flexWrap:"wrap",alignItems:"center",children:D&&D.map((function(e,t){return Object(p.jsx)(m.a,{flexGrow:1,flexBasis:"calc((999px - 100%) * 1024)",mx:1,children:Object(p.jsx)(F,{tour:e,showPrice:L})},e.tourId)}))}),Object(p.jsx)(g.a,{display:{base:"none",md:"grid"},columns:[1,1,2,3],spacing:4,mt:4,children:D&&D.map((function(e,t){return Object(p.jsx)(E.a,{tour:e,isBig:!0},e.tourId)}))}),Object(p.jsxs)(y.a,{textStyle:"notes",my:8,spacing:1,children:[Object(p.jsx)(h.a,{children:"Looking for something a little more personalised?"}),Object(p.jsx)(h.a,{children:"Let us know what you're interested in and we'll see what we can do!"}),Object(p.jsx)(h.a,{as:"b",children:"booking@nippondering.com"})]})]})]})}},flX4:function(e,t,r){"use strict";r.d(t,"c",(function(){return j})),r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return h}));var n=r("sKyC"),a=r("5+Am"),c=r("U6LL"),i=r("4jWa"),o=r("CRla"),s=r("pr4h"),l=r("epLR"),u=r("JX03"),p=r("q1tI");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var m=Object(n.a)((function(e,t){var{spacing:r}=e,n=b(e,["spacing"]),i=d({mx:r},Object(a.d)().separator);return p.createElement(c.a.span,d({ref:t,role:"presentation"},n,{__css:i}))}));s.a&&(m.displayName="BreadcrumbSeparator");var j=Object(n.a)((function(e,t){var{isCurrentPage:r,as:n,className:i}=e,o=b(e,["isCurrentPage","as","className"]),s=Object(a.d)(),u=d({ref:t,as:n,className:Object(l.b)("chakra-breadcrumb__link",i)},o);return r?p.createElement(c.a.span,d({"aria-current":"page"},u)):p.createElement(c.a.a,d({__css:s.link},u))}));s.a&&(j.displayName="BreadcrumbLink");var f=Object(n.a)((function(e,t){var{isCurrentPage:r,separator:n,isLastChild:a,spacing:i,children:o,className:s}=e,f=b(e,["isCurrentPage","separator","isLastChild","spacing","children","className"]),h=Object(u.b)(o).map(e=>e.type===j?p.cloneElement(e,{isCurrentPage:r}):e.type===m?p.cloneElement(e,{spacing:i,children:e.props.children||n}):e),O=Object(l.b)("chakra-breadcrumb__list-item",s);return p.createElement(c.a.li,d({ref:t,className:O},f,{__css:{display:"inline-flex",alignItems:"center"}}),h,!a&&p.createElement(m,{spacing:i},n))}));s.a&&(f.displayName="BreadcrumbItem");var h=Object(n.a)((function(e,t){var r=Object(i.a)("Breadcrumb",e),n=Object(o.b)(e),{children:s,spacing:m="0.5rem",separator:j="/",className:f}=n,h=b(n,["children","spacing","separator","className"]),O=Object(u.b)(s),x=O.length,g=O.map((e,t)=>p.cloneElement(e,{separator:j,spacing:m,isLastChild:x===t+1})),y=Object(l.b)("chakra-breadcrumb",f);return p.createElement(c.a.nav,d({ref:t,"aria-label":"breadcrumb",className:y},h),p.createElement(a.b,{value:r},p.createElement(c.a.ol,{className:"chakra-breadcrumb__list"},g)))}));s.a&&(h.displayName="Breadcrumb")},wZsY:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r("U6LL"),a=r("sKyC"),c=r("x9W9"),i=r("JX03"),o=r("epLR"),s=r("pr4h"),l=r("q1tI");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=e=>l.createElement(n.a.div,u({className:"chakra-stack__item"},e,{__css:u({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),d=Object(a.a)((function(e,t){var{isInline:r,direction:a,align:s,justify:d,spacing:b="0.5rem",wrap:m,children:j,divider:f,className:h,shouldWrapChildren:O}=e,x=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),g=r?"row":null!=a?a:"column",y="& > *:not(style) ~ *:not(style)",v={column:{mt:b,ml:0},row:{ml:b,mt:0},"column-reverse":{mb:b,mr:0},"row-reverse":{mr:b,mb:0}},w={flexDirection:g,[y]:Object(c.b)(g,e=>v[e])},k=Object(c.b)(g,e=>e.includes("row")?{mx:b,my:0,borderLeftWidth:"1px",borderBottomWidth:0}:{mx:0,my:b,borderLeftWidth:0,borderBottomWidth:"1px"}),_=!!f,N=!O&&!_,S=Object(i.b)(j),E=N?S:S.map((e,t)=>{var r=t+1===S.length,n=O?l.createElement(p,{key:t},e):e;if(!_)return n;var a=r?null:l.cloneElement(f,{__css:{"&":k}});return l.createElement(l.Fragment,{key:t},n,a)}),C=Object(o.b)("chakra-stack",h);return l.createElement(n.a.div,u({ref:t,display:"flex",alignItems:s,justifyContent:d,flexDirection:w.flexDirection,flexWrap:m,className:C,__css:_?{}:{[y]:w[y]}},x),E)}));s.a&&(d.displayName="Stack");var b=Object(a.a)((e,t)=>l.createElement(d,u({align:"center"},e,{direction:"row",ref:t})));s.a&&(b.displayName="HStack");var m=Object(a.a)((e,t)=>l.createElement(d,u({align:"center"},e,{direction:"column",ref:t})));s.a&&(m.displayName="VStack")}}]);