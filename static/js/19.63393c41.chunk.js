(this["webpackJsonpcloud-menu"]=this["webpackJsonpcloud-menu"]||[]).push([[19],{36:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},37:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},38:function(t,e,n){"use strict";function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function c(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}n.d(e,"a",(function(){return i}))},39:function(t,e,n){"use strict";function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},61:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var o=n(36),r=n(37),c=n(39),i=n(38),s=n(0),a=n.n(s),u=n(9),l=n(33),f=(n(61),n(1)),p=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).Check=function(e){var n=document.getElementById("pro"),o=document.getElementById("com");console.log(e),"pro"==e?(t.setState({ChooseValue:"pro"}),o.style.background="#777777",n.style.background="#2d74ff "):"com"==e&&(t.setState({ChooseValue:"com"}),o.style.background="#2d74ff",n.style.background="#777777")},t.state={ChooseValue:""},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state.ChooseValue;return Object(f.jsx)("div",{className:"CCroot",children:Object(f.jsxs)("div",{className:"CCmaindiv",children:[Object(f.jsx)(u.b,{to:"/",children:Object(f.jsx)("div",{className:"CBackBtnOut",children:Object(f.jsx)(l.b,{className:"CBackBtn"})})}),Object(f.jsx)(u.b,{to:"pro"==e?"/intro":"/introcompany",children:Object(f.jsx)("div",{className:"CNextBtnOut",children:Object(f.jsx)(l.c,{className:"CNextBtn"})})}),Object(f.jsx)("div",{className:"CCtitle",children:"I'm a:"}),Object(f.jsxs)("div",{className:"CProfessionalDiv",id:"pro",children:[Object(f.jsx)("input",{type:"radio",name:"chooselevel",className:"Ccheck-radio",onClick:function(){return t.Check("pro")}}),Object(f.jsxs)("div",{className:"CradioText",children:[Object(f.jsx)("p",{children:"Professional"}),"I want to meet startups, join Connect community & earn $."]})]}),Object(f.jsxs)("div",{className:"CProfessionalDiv",id:"com",children:[Object(f.jsx)("input",{type:"radio",name:"chooselevel",className:"Ccheck-radio",onClick:function(){return t.Check("com")}}),Object(f.jsxs)("div",{className:"CradioText",children:[Object(f.jsx)("p",{children:"Company Representative"}),"I want to grow a recruiting network to hire top talent."]})]})]})})}}]),n}(a.a.Component);e.default=p}}]);
//# sourceMappingURL=19.63393c41.chunk.js.map