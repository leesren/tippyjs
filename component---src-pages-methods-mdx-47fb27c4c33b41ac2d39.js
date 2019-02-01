(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{163:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i}),t.d(a,"_frontmatter",function(){return u});var n=t(86),s=t.n(n),c=t(7),o=t.n(c),l=t(0),r=t.n(l),m=t(171),p=t(174),i=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:a},r.a.createElement(m.MDXTag,{name:"p",components:a},"Methods on instances allow you to control the tippy programmatically. See the\n",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/tippyjs/objects#instances"}},"Objects")," section for how to access a Tippy instance."),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Show the tippy"),r.a.createElement(m.MDXTag,{name:"p",components:a},"Programmatically show the tippy at any time:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"show"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Hide the tippy"),r.a.createElement(m.MDXTag,{name:"p",components:a},"Programmatically hide the tippy at any time:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"hide"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"For both the ",r.a.createElement("code",{className:"language-text"},"show()")," and ",r.a.createElement("code",{className:"language-text"},"hide()")," methods, you can pass a number in as an\nargument to use as the animation duration. This will override the instance's\noption."),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"show"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token number"},"1000"),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token comment"},"// 1000ms"),"\n","instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"hide"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token number"},"0"),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token comment"},"// 0ms")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Disable the tippy"),r.a.createElement(m.MDXTag,{name:"p",components:a},"Temporarily prevent a tippy from showing or hiding:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"disable"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"Re-enable it with this method:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"enable"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Destroy the tippy"),r.a.createElement(m.MDXTag,{name:"p",components:a},"To permanently destroy and clean up the instance, use this method:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"destroy"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"The ",r.a.createElement("code",{className:"language-text"},"_tippy")," property is deleted from the reference element upon destruction."),r.a.createElement(m.MDXTag,{name:"p",components:a},"If you're destroying a delegate instance (i.e., one you created with the\n",r.a.createElement("code",{className:"language-text"},"target")," option), pass ",r.a.createElement("code",{className:"language-text"},"true")," as an argument to destroy all child instances that\nmay have been created too."),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"destroy"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token boolean"},"true"),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Update the tippy"),r.a.createElement(m.MDXTag,{name:"p",components:a},"You can update any option after the instance has been created using the ",r.a.createElement("code",{className:"language-text"},"set()"),"\nmethod. Pass an object of new options in:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token keyword"},"set"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",r.a.createElement("span",{className:"token definition property"},"arrow"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token boolean"},"true"),r.a.createElement("span",{className:"token punctuation"},","),"\n","  ",r.a.createElement("span",{className:"token definition property"},"animation"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'scale'"),r.a.createElement("span",{className:"token punctuation"},","),"\n",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"There is also a shortcut for updating the content:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"instance",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"setContent"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'New content'"),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Static methods"),r.a.createElement(m.MDXTag,{name:"p",components:a},"The ",r.a.createElement("code",{className:"language-text"},"tippy")," function module also has static methods available."),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Create a single tooltip and get its instance"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token keyword"},"const")," instance ",r.a.createElement("span",{className:"token operator"},"=")," tippy",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"one"),r.a.createElement("span",{className:"token punctuation"},"("),"targets",r.a.createElement("span",{className:"token punctuation"},",")," options",r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Hide all visible tippys on the page"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token comment"},"// Hide all poppers"),"\n","tippy",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"hideAllPoppers"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},")"),"\n",r.a.createElement("span",{className:"token comment"},"// Hide all except a particular instance"),"\n","tippy",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"hideAllPoppers"),r.a.createElement("span",{className:"token punctuation"},"("),"instance",r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"Note that if the instance has ",r.a.createElement("code",{className:"language-text"},"hideOnClick: false"),", it won't hide. This will\nmost likely be changed in the next version."),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Defaults"),r.a.createElement(m.MDXTag,{name:"p",components:a},"You can set the default props for future instances so you don't need to specify\nthem over and over again. Pass an object of options in:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},"tippy",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"setDefaults"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",r.a.createElement("span",{className:"token definition property"},"arrow"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token boolean"},"true"),r.a.createElement("span",{className:"token punctuation"},","),"\n","  ",r.a.createElement("span",{className:"token definition property"},"duration"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token number"},"0"),r.a.createElement("span",{className:"token punctuation"},","),"\n",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},")")))))},a}(r.a.Component),u={}},171:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(176);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return c(n).default}});var s=t(172);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return c(s).default}})},172:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=l(t(0)),c=l(t(57)),o=l(t(1));function l(e){return e&&e.__esModule?e:{default:e}}var r=(0,c.default)({}),m=r.Provider,p=r.Consumer;a.withMDXComponents=function(e){return function(a){var t=a.components,c=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["components"]);return s.default.createElement(p,null,function(a){return s.default.createElement(e,n({components:t||a},c))})}};var i=function(e){var a=e.components,t=e.children;return s.default.createElement(m,{value:a},t)};i.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},a.default=i},176:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),c=t(0),o=m(c),l=m(t(177)),r=t(172);function m(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},i=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,c.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.parentName,s=e.props,c=void 0===s?{}:s,r=e.children,m=e.components,i=void 0===m?{}:m,u=e.Layout,g=e.layoutProps,d=i[t+"."+a]||i[a]||p[a]||a;return u?((0,l.default)(this,u),o.default.createElement(u,n({components:i},g),o.default.createElement(d,c,r))):o.default.createElement(d,c,r)}}]),a}();a.default=(0,r.withMDXComponents)(i)},177:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=m&&m(Object);e.exports=function e(a,t,i){if("string"!=typeof t){if(p){var u=m(t);u&&u!==p&&e(a,u,i)}var g=o(t);l&&(g=g.concat(l(t)));for(var d=0;d<g.length;++d){var E=g[d];if(!(n[E]||s[E]||i&&i[E])){var h=r(t,E);try{c(a,E,h)}catch(N){}}}return a}return a}}}]);
//# sourceMappingURL=component---src-pages-methods-mdx-47fb27c4c33b41ac2d39.js.map