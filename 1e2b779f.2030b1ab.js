(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||d[s]||l;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(175)),i={id:"feel-built-in-functions-temporal",title:"Temporal Functions"},o={unversionedId:"reference/builtin-functions/feel-built-in-functions-temporal",id:"version-1.13/reference/builtin-functions/feel-built-in-functions-temporal",isDocsHomePage:!1,title:"Temporal Functions",description:"now()",source:"@site/versioned_docs/version-1.13/reference/builtin-functions/feel-built-in-functions-temporal.md",slug:"/reference/builtin-functions/feel-built-in-functions-temporal",permalink:"/feel-scala/docs/1.13/reference/builtin-functions/feel-built-in-functions-temporal",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.13/reference/builtin-functions/feel-built-in-functions-temporal.md",version:"1.13",sidebar:"version-1.13/Reference",previous:{title:"Context Functions",permalink:"/feel-scala/docs/1.13/reference/builtin-functions/feel-built-in-functions-context"},next:{title:"Function Provider SPI",permalink:"/feel-scala/docs/1.13/reference/developer-guide/function-provider-spi"}},c=[{value:"now()",id:"now",children:[]},{value:"today()",id:"today",children:[]},{value:"day of week()",id:"day-of-week",children:[]},{value:"day of year()",id:"day-of-year",children:[]},{value:"week of year()",id:"week-of-year",children:[]},{value:"month of year()",id:"month-of-year",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"now"},"now()"),Object(l.b)("p",null,"Returns the current date and time including the timezone."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters: no"),Object(l.b)("li",{parentName:"ul"},"result: date-time with timezone")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'now()\n// date and time("2020-07-31T14:27:30@Europe/Berlin")\n')),Object(l.b)("h2",{id:"today"},"today()"),Object(l.b)("p",null,"Returns the current date."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters: no"),Object(l.b)("li",{parentName:"ul"},"result: date")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'today()\n// date("2020-07-31")\n')),Object(l.b)("h2",{id:"day-of-week"},"day of week()"),Object(l.b)("p",null,"Returns the day of the week according to the Gregorian calendar. Note that it returns always the english name of the day."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters: ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"date"),": date/date-time"))),Object(l.b)("li",{parentName:"ul"},"result: string")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'day of week(date("2019-09-17"))\n// "Tuesday"\n')),Object(l.b)("h2",{id:"day-of-year"},"day of year()"),Object(l.b)("p",null,"Returns the Gregorian number of the day within the year."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters: ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"date"),": date/date-time"))),Object(l.b)("li",{parentName:"ul"},"result: number")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'day of year(date("2019-09-17"))\n// 260\n')),Object(l.b)("h2",{id:"week-of-year"},"week of year()"),Object(l.b)("p",null,"Returns the Gregorian number of the week within the year, according to ISO 8601."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters: ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"date"),": date/date-time"))),Object(l.b)("li",{parentName:"ul"},"result: number")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'week of year(date("2019-09-17"))\n// 38\n')),Object(l.b)("h2",{id:"month-of-year"},"month of year()"),Object(l.b)("p",null,"Returns the month of the week according to the Gregorian calendar. Note that it returns always the english name of the month."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters: ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"date"),": date/date-time"))),Object(l.b)("li",{parentName:"ul"},"result: string")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'month of year(date("2019-09-17"))\n// "September"\n')))}b.isMDXComponent=!0}}]);