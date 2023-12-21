"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6467],{3905:function(e,i,n){n.d(i,{Zo:function(){return s},kt:function(){return d}});var t=n(7294);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var i=t.useContext(p),n=i;return e&&(n="function"==typeof e?e(i):a(a({},i),e)),n},s=function(e){var i=c(e.components);return t.createElement(p.Provider,{value:i},e.children)},f={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return n?t.createElement(m,a(a({ref:i},s),{},{components:n})):t.createElement(m,a({ref:i},s))}));function d(e,i){var n=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in i)hasOwnProperty.call(i,p)&&(l[p]=i[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},249:function(e,i,n){n.r(i),n.d(i,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var t=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"ApplicationProfile",title:"Interface: ApplicationProfile",sidebar_label:"ApplicationProfile",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"libraries/application-profile/api/interfaces/ApplicationProfile",id:"libraries/application-profile/api/interfaces/ApplicationProfile",title:"Interface: ApplicationProfile",description:"Represents an ApplicationProfile (Ap for short) as it is used in our libraries.",source:"@site/docs/libraries/application-profile/api/interfaces/ApplicationProfile.md",sourceDirName:"libraries/application-profile/api/interfaces",slug:"/libraries/application-profile/api/interfaces/ApplicationProfile",permalink:"/ng-cognizone/docs/libraries/application-profile/api/interfaces/ApplicationProfile",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ApplicationProfile",title:"Interface: ApplicationProfile",sidebar_label:"ApplicationProfile",sidebar_position:0,custom_edit_url:null},sidebar:"librariesSidebar",previous:{title:"DatatypeLong",permalink:"/ng-cognizone/docs/libraries/application-profile/api/enums/DatatypeLong"},next:{title:"ApplicationProfileRaw",permalink:"/ng-cognizone/docs/libraries/application-profile/api/interfaces/ApplicationProfileRaw"}},s=[{value:"Properties",id:"properties",children:[{value:"types",id:"types",children:[{value:"Index signature",id:"index-signature",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"uri",id:"uri",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],f={toc:s};function u(e){var i=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Represents an ApplicationProfile (Ap for short) as it is used in our libraries.\nAn Ap describes the data model of one or multiple types of graphs. For more\ninformation about this, please take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/cognizone/Application-profile-1b42b93912814062b20371ccd53a9d47"},"this doc"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uri": "http://my-domain/my-ap",\n  "types": {\n    "Animal": {...},\n    "Cat": {...},\n    "Dog": {...}\n  }\n}\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"types"},"types"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"types"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")),(0,o.kt)("p",null,"Map of TypeProfile that constitutes the Ap"),(0,o.kt)("h4",{id:"index-signature"},"Index signature"),(0,o.kt)("p",null,"\u25aa ","[classId: ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,o.kt)("a",{parentName:"p",href:"TypeProfile"},(0,o.kt)("inlineCode",{parentName:"a"},"TypeProfile"))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cognizone/ng-cognizone/blob/d22d5e5/libs/application-profile/src/lib/models/application-profile.ts#L28"},"lib/models/application-profile.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"uri"},"uri"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"uri"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"uri of the Ap"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cognizone/ng-cognizone/blob/d22d5e5/libs/application-profile/src/lib/models/application-profile.ts#L24"},"lib/models/application-profile.ts:24")))}u.isMDXComponent=!0}}]);