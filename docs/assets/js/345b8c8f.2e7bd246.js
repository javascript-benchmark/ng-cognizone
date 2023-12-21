"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[934],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"Pagination",title:"Interface: Pagination",sidebar_label:"Pagination",sidebar_position:0,custom_edit_url:null},c=void 0,s={unversionedId:"libraries/model-utils/api/interfaces/Pagination",id:"libraries/model-utils/api/interfaces/Pagination",title:"Interface: Pagination",description:"Generic pagination type, it originates from elastic query, but it's better",source:"@site/docs/libraries/model-utils/api/interfaces/Pagination.md",sourceDirName:"libraries/model-utils/api/interfaces",slug:"/libraries/model-utils/api/interfaces/Pagination",permalink:"/ng-cognizone/docs/libraries/model-utils/api/interfaces/Pagination",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Pagination",title:"Interface: Pagination",sidebar_label:"Pagination",sidebar_position:0,custom_edit_url:null},sidebar:"librariesSidebar",previous:{title:"LangStringSimple",permalink:"/ng-cognizone/docs/libraries/model-utils/api/interfaces/LangStringSimple"},next:{title:"SelectOption",permalink:"/ng-cognizone/docs/libraries/model-utils/api/interfaces/SelectOption"}},p=[{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"size",id:"size",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generic pagination type, it originates from elastic query, but it's better\nto use this interface everywhere we have pagination, to not mix it up with\nother kind of pagination, based on page number for example."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"from"},"from"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"from"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"absolute index of the first item of the page"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cognizone/ng-cognizone/blob/d22d5e5/libs/model-utils/src/lib/models/pagination.ts#L10"},"lib/models/pagination.ts:10")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"size"},"size"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"size"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Size of the page"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cognizone/ng-cognizone/blob/d22d5e5/libs/model-utils/src/lib/models/pagination.ts#L14"},"lib/models/pagination.ts:14")))}d.isMDXComponent=!0}}]);