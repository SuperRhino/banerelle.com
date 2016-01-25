!function e(t,n,r){function o(a,i){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!i&&l)return l(a,!0);if(u)return u(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var u="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(e){function t(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(e){return o.exec(e).slice(1)};n.resolve=function(){for(var n="",o=!1,u=arguments.length-1;u>=-1&&!o;u--){var a=u>=0?arguments[u]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,o="/"===a.charAt(0))}return n=t(r(n.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+n||"."},n.normalize=function(e){var o=n.isAbsolute(e),u="/"===a(e,-1);return e=t(r(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&u&&(e+="/"),(o?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var o=r(e.split("/")),u=r(t.split("/")),a=Math.min(o.length,u.length),i=a,l=0;a>l;l++)if(o[l]!==u[l]){i=l;break}for(var s=[],l=i;l<o.length;l++)s.push("..");return s=s.concat(u.slice(i)),s.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var t=u(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},n.basename=function(e,t){var n=u(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return u(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return 0>t&&(t=e.length+t),e.substr(t,n)}}).call(this,e("_process"))},{_process:2}],2:[function(e,t,n){function r(){c=!1,i.length?s=i.concat(s):f=-1,s.length&&o()}function o(){if(!c){var e=setTimeout(r);c=!0;for(var t=s.length;t;){for(i=s,s=[];++f<t;)i&&i[f].run();f=-1,t=s.length}i=null,c=!1,clearTimeout(e)}}function u(e,t){this.fun=e,this.array=t}function a(){}var i,l=t.exports={},s=[],c=!1,f=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new u(e,t)),1!==s.length||c||setTimeout(o,0)},u.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=a,l.addListener=a,l.once=a,l.off=a,l.removeListener=a,l.removeAllListeners=a,l.emit=a,l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},{}],3:[function(e,t,n){"use strict";var r=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=r},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var a=e("./ApiRequest"),i=(r(a),e("../Utils/Constants")),l=function(){function e(){o(this,e)}return u(e,null,[{key:"get",value:function(t){return"undefined"==typeof t&&(t=!1),new Promise(function(t,n){if(e._accessToken)return t(e._accessToken);var r=localStorage.getItem(i.Config.Storage.ACCESS_TOKEN);return null===r?(e.clear(),n(new Error({code:403,message:"Unauthorized"}))):void e.set(r,!0).then(t)})}},{key:"set",value:function(t,n){return e._accessToken=t,new Promise(function(e,r){n||localStorage.setItem(i.Config.Storage.ACCESS_TOKEN,t),e(t)})}},{key:"clear",value:function(){return e._accessToken=null,localStorage.removeItem(i.Config.Storage.ACCESS_TOKEN)}}]),e}();n["default"]=l},{"../Utils/Constants":13,"./ApiRequest":5}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var a=e("../Utils/Utils"),i=r(a),l=e("../Utils/Actions"),s=r(l),c=e("./ApiUtils"),f=r(c),d=e("./AccessToken"),p=r(d),h=e("superagent"),m=r(h),y=function(){function e(t,n){if(o(this,e),void 0===n?(n=t,t="get"):t=t.toLowerCase(),-1!==n.indexOf("?"))throw new Error("You must set query string data via the `query` function");this.isAnonymous=!1,this.handleErrors=!0,this.ignoreNetworkError=!1,this.url=f["default"].buildUrl(n),this._setupRequest(t)}return u(e,null,[{key:"updateNetworkIndicator",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"-":arguments[0];"+"===t?e.activeRequests++:e.activeRequests--,e.activeRequests<=0&&(e.activeRequests=0)}},{key:"create",value:function(e,t){return new this(e,t)}},{key:"createAnon",value:function(e,t){var n=new this(e,t);return n.setAnonymous(!0),n}},{key:"get",value:function(e){return new this("get",e)}},{key:"post",value:function(e){return new this("post",e)}},{key:"put",value:function(e){return new this("put",e)}},{key:"delete",value:function(e){return new this("delete",e)}}]),u(e,[{key:"setAnonymous",value:function(e){return this.isAnonymous=e,this}},{key:"setHandleErrors",value:function(e){return this.handleErrors=e,this}},{key:"setIgnoreNetworkError",value:function(e){return this.ignoreNetworkError=e,this}},{key:"configure",value:function(e){return e(this.request),this}},{key:"send",value:function(e,t){var n=this;return this.isAnonymous?this._sendIt(e,t):void p["default"].get().then(function(r){n.query({token:r}),n._sendIt(e,t)})}},{key:"data",value:function(e){return this.requestBody=JSON.stringify(e),this}},{key:"query",value:function(e){return this.queryData=Object.assign(this.queryData,e),this}},{key:"header",value:function(e,t){return this.requestHeaders[e]=t,this}},{key:"headers",value:function(e){return this.requestHeaders=Object.assign(this.requestHeaders,e),this}},{key:"_setupRequest",value:function(e){this.requestMethod=e?e:"get",this.requestHeaders={Accept:"application/json","Content-Type":"application/json"},this.queryData={},this.requestBody={},this.request=null}},{key:"_sendIt",value:function(t,n){var r=this;e.updateNetworkIndicator("+"),this.request=m["default"][this.requestMethod](this.url),i["default"].isEmpty(this.queryData)||this.request.query(this.queryData),i["default"].isEmpty(this.requestHeaders)||this.request.set(this.requestHeaders),this.request.send(this.requestBody).end(function(o,u){e.updateNetworkIndicator(),u.ok?t(u.body):u.unauthorized?(p["default"].clear(),s["default"].noauth()):(r.handleErrors&&f["default"].handleError(u.body.error),n&&n(u.body.error))})}}]),e}();y.activeRequests=0,n["default"]=y},{"../Utils/Actions":12,"../Utils/Utils":16,"./AccessToken":4,"./ApiUtils":6,superagent:"superagent"}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var a=e("../Utils/Utils"),i=r(a),l=e("../Utils/Constants"),s="There was a problem with your request",c=function(){function e(){o(this,e)}return u(e,null,[{key:"handleError",value:function(e){console.warn(e),i["default"].alertError(e.message||s)}},{key:"handleNetworkError",value:function(e){console.warn(e)}},{key:"buildUrl",value:function(e){return e=i["default"].trimChar(e,"/"),-1===e.indexOf(l.Config.api_root)&&(e=l.Config.api_root+e),e}}]),e}();n["default"]=c},{"../Utils/Constants":13,"../Utils/Utils":16}],7:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var l=e("react"),s=r(l),c=e("../Stores/CurrentUser"),f=r(c),d=function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={authorized:!0,user:n.props.user},n.onSubmit=n.onSubmit.bind(n),n._onUserChange=n._onUserChange.bind(n),n}return a(t,e),i(t,[{key:"componentWillMount",value:function(){this.stopUserSubscribe=f["default"].listen(this._onUserChange);var e=f["default"].get();this.setState({authorized:!!e.id,user:e})}},{key:"componentWillUnmount",value:function(){this.stopUserSubscribe()}},{key:"render",value:function(){return this.state.authorized?s["default"].createElement("div",{className:"row"},s["default"].createElement("h1",null,"Add Event"),s["default"].createElement("p",{className:"lead"},s["default"].createElement("em",null,"Add an event to the homepage and optionally add details page.")),s["default"].createElement("form",{className:"",role:"form",onSubmit:this.onSubmit},s["default"].createElement("div",{className:"form-group has-success has-feedback"},s["default"].createElement("input",{ref:"headline",id:"inputHeadline",className:"form-control input-lg",type:"text",placeholder:"Headline"}),s["default"].createElement("span",{className:"glyphicon glyphicon-ok form-control-feedback","aria-hidden":"true"})),s["default"].createElement("button",{type:"submit",className:"btn btn-success"},"ADD EVENT"))):s["default"].createElement("h4",null,"Must be logged in :(")}},{key:"onSubmit",value:function(e){e.preventDefault();var t={headline:this.refs.headline.value};console.log("onSubmit",t)}},{key:"_onUserChange",value:function(e){this.setState({authorized:!!e.id})}}]),t}(s["default"].Component);d.propTypes={},d.defaultProps={},n["default"]=d},{"../Stores/CurrentUser":11,react:"react"}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var l=e("react"),s=r(l),c=e("../Utils/Actions"),f=r(c),d=e("../Api/ApiRequest"),p=(r(d),function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={},n.onSubmit=n.onSubmit.bind(n),n}return a(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("form",{className:"navbar-form navbar-right",role:"form",onSubmit:this.onSubmit},s["default"].createElement("div",{className:"form-group",style:h.formField},s["default"].createElement("input",{ref:"username",type:"text",placeholder:"username",className:"form-control"})),s["default"].createElement("div",{className:"form-group",style:h.formField},s["default"].createElement("input",{ref:"password",type:"password",placeholder:"password",className:"form-control"})),s["default"].createElement("button",{type:"submit",className:"btn btn-default"},"Sign in"))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.refs.username.value,password:this.refs.password.value};f["default"].login(t)}}]),t}(s["default"].Component));p.propTypes={},p.defaultProps={},n["default"]=p;var h={formField:{margin:3}}},{"../Api/ApiRequest":5,"../Utils/Actions":12,react:"react"}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var l=e("react"),s=r(l),c=e("../Utils/Actions"),f=r(c),d=e("../Stores/CurrentUser"),p=r(d),h=function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={user:n.props.user},n}return a(t,e),i(t,[{key:"componentWillMount",value:function(){this.stopListening=p["default"].listen(this._onUserChange.bind(this)),this.setState({user:p["default"].get()})}},{key:"componentWillUnmount",value:function(){this.stopListening()}},{key:"render",value:function(){return s["default"].createElement("ul",{className:"nav navbar-nav navbar-right"},s["default"].createElement("li",{className:"dropdown"},s["default"].createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},this.state.user.username,s["default"].createElement("span",{className:"caret"})),s["default"].createElement("ul",{className:"dropdown-menu"},s["default"].createElement("li",null,s["default"].createElement("a",{href:"/add-event"},s["default"].createElement("span",{className:"glyphicon glyphicon-plus-sign","aria-hidden":"true",style:m.icon}),"Add Event")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#",onClick:this._onEditPress},s["default"].createElement("span",{className:"glyphicon glyphicon-edit","aria-hidden":"true",style:m.icon}),"Edit Something")),s["default"].createElement("li",{role:"separator",className:"divider"}),s["default"].createElement("li",{className:"dropdown-header"},"My Account"),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#",onClick:this._onLogoutPress},s["default"].createElement("span",{className:"glyphicon glyphicon-log-out","aria-hidden":"true",style:m.icon}),"Sign Out")))))}},{key:"_onEditPress",value:function(e){e.preventDefault(),console.log("_onEditPress")}},{key:"_onLogoutPress",value:function(e){e.preventDefault(),f["default"].logout()}},{key:"_onUserChange",value:function(e){this.setState({user:e})}}]),t}(s["default"].Component);h.propTypes={user:s["default"].PropTypes.object},h.defaultProps={user:{}},n["default"]=h;var m={icon:{paddingRight:"5px"}}},{"../Stores/CurrentUser":11,"../Utils/Actions":12,react:"react"}],10:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var l=e("react"),s=r(l),c=e("../Utils/Actions"),f=r(c),d=e("../Stores/CurrentUser"),p=r(d),h=e("./LoginForm"),m=r(h),y=e("./UserMenu"),v=r(y),b=function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={loading:!0,user:{}},n}return a(t,e),i(t,[{key:"componentWillMount",value:function(){var e=this;this.stopListening=p["default"].listen(this._onUserChange.bind(this)),this.stopAuthListen=f["default"].noauth.listen(function(){return e.setState({loading:!1})}),this.setState({user:p["default"].get()})}},{key:"componentWillUnmount",value:function(){this.stopListening(),this.stopAuthListen()}},{key:"renderLoginForm",value:function(){return s["default"].createElement(m["default"],null)}},{key:"renderUserMenu",value:function(){return s["default"].createElement(v["default"],{user:this.state.user})}},{key:"render",value:function(){return this.state.loading?null:s["default"].createElement("div",{style:g.container},this.state.user.id?this.renderUserMenu():this.renderLoginForm())}},{key:"_onUserChange",value:function(e){this.setState({user:e,loading:!1})}}]),t}(s["default"].Component);b.propTypes={},b.defaultProps={},n["default"]=b;var g={container:{height:"56px"},username:{margin:3,lineHeight:"44px",color:"white"}}},{"../Stores/CurrentUser":11,"../Utils/Actions":12,"./LoginForm":8,"./UserMenu":9,react:"react"}],11:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("reflux"),u=r(o),a=e("../Utils/Actions"),i=r(a),l=(e("../Utils/Constants"),e("../Api/ApiRequest")),s=r(l),c=e("../Api/ApiUtils"),f=(r(c),e("../Api/AccessToken")),d=r(f),p={id:null,username:null,session_id:null},h=Object.assign({},p);n["default"]=u["default"].createStore({listenables:[i["default"]],init:function(){},get:function(){return h},update:function(e){h=Object.assign({},e),this.trigger(h)},onLogin:function(e){s["default"].post("/account/login").data(e).setAnonymous(!0).send(function(e){d["default"].set(e.data.session_id).then(function(){return i["default"].login.completed(e)})},i["default"].login.failed)},onLoginCompleted:function(e){var t=e.data;this.update(t)},onLogout:function(){s["default"].post("/account/logout").setHandleErrors(!1).setIgnoreNetworkError(!0).send(i["default"].logout.completed,i["default"].logout.failed),this.update(p)},onLogoutCompleted:function(){d["default"].clear()},onLogoutFailed:function(){d["default"].clear()},onLoadUser:function(){s["default"].get("/account").send(i["default"].loadUser.completed,i["default"].loadUser.failed)},onLoadUserCompleted:function(e){this.update(e.data)}})},{"../Api/AccessToken":4,"../Api/ApiRequest":5,"../Api/ApiUtils":6,"../Utils/Actions":12,"../Utils/Constants":13,reflux:"reflux"}],12:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("reflux"),u=r(o),a=e("../Api/AccessToken"),i=r(a),l=e("../Api/ApiRequest"),s=(r(l),u["default"].createActions(["auth","unauth","noauth",{login:{asyncResult:!0}},{logout:{asyncResult:!0}},{loadUser:{asyncResult:!0}}]));s.auth.listen(function(){i["default"].get(!0).then(function(e){return s.loadUser(e)})["catch"](function(){return s.noauth()})}),n["default"]=s},{"../Api/AccessToken":4,"../Api/ApiRequest":5,reflux:"reflux"}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("keyMirror"),o="banerelle.com",u=window.location.hostname===o?"production":"dev",a=!0,i="http://"+o+"/api",l="http://"+o;switch(u){case"dev":a=!1,i="http://dev."+o+"/api",l="http://dev."+o}n.Config={ENV:u,api_root:i+"/",site_root:l+"/",Storage:r({ACCESS_TOKEN:null})}},{keyMirror:3}],14:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var a=e("jquery"),i=r(a),l=e("react"),s=r(l),c=e("react-dom"),f=r(c),d=e("../Utils/Actions"),p=r(d),h=e("../Components/UserNav"),m=r(h),y=function(){function t(){o(this,t)}return u(t,null,[{key:"globals",value:function(){window.jQuery=i["default"]}},{key:"bootstrap",value:function(){e("bootstrap")}},{key:"onReady",value:function(){var e=document.getElementById("btnComingSoon");e&&(e.onclick=function(){return ga&&ga("send","event","buttons","click","stay tuned"),console.log("send","event","buttons","click","stay tuned"),!1}),f["default"].render(s["default"].createElement(m["default"],null),document.getElementById("UserNav"))}},{key:"authUser",value:function(){p["default"].auth()}},{key:"onLoad",value:function(){t.globals(),t.bootstrap(),t.onReady(),t.authUser()}}]),t}();n["default"]=y},{"../Components/UserNav":10,"../Utils/Actions":12,bootstrap:"bootstrap",jquery:"jquery",react:"react","react-dom":"react-dom"}],15:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var a=e("react"),i=r(a),l=e("react-dom"),s=r(l),c=e("path"),f=r(c),d=e("../Utils/Utils"),p=(r(d),e("../Views/RsvpForm")),h=r(p),m=e("../Components/AddEventForm"),y=r(m),v=function(){function e(){o(this,e)}return u(e,null,[{key:"current",value:function(t){var n=f["default"].basename(t)||e.homeRoute,r=n.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()});"function"==typeof e[r]&&e[r]()}},{key:"home",value:function(){console.log("Home route")}},{key:"rsvp",value:function(){console.log("rsvp"),s["default"].render(i["default"].createElement(h["default"],null),document.getElementById("RsvpForm"))}},{key:"addEvent",value:function(){s["default"].render(i["default"].createElement(y["default"],null),document.getElementById("AddEventForm"))}}]),e}();v.homeRoute="home",n["default"]=v},{"../Components/AddEventForm":7,"../Utils/Utils":16,"../Views/RsvpForm":17,path:1,react:"react","react-dom":"react-dom"}],16:[function(e,t,n){"use strict";function r(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var a=(e("./Constants"),function(){function e(){o(this,e)}return u(e,null,[{key:"alertError",value:function(e){alert(e)}},{key:"getJSONP",value:function(e,t){var n=window.document.getElementsByTagName("script")[0],r=window.document.createElement("script");r.src=e+(e.indexOf("?")+1?"&":"?")+"callback="+t,n.parentNode.insertBefore(r,n),r.onload=function(){this.remove()}}},{key:"quoteRegex",value:function(e){return e.replace(/([()[{*+.$^\\|?])/g,"\\$1")}},{key:"trimChar",value:function(t,n){return n=e.quoteRegex(n),t.replace(new RegExp("^"+n+"+|"+n+"+$","g"),"")}},{key:"toQueryString",value:function(t,n){var o=[];for(var u in t)if(t.hasOwnProperty(u)){var a=n?n+"["+u+"]":u,i=t[u];o.push("object"==("undefined"==typeof i?"undefined":r(i))?e.toQueryString(i,a):encodeURIComponent(a)+"="+encodeURIComponent(i))}return o.join("&")}},{key:"isEmpty",value:function(e){return null==e?!0:e.length>0?!1:0===e.length?!0:Object.getOwnPropertyNames(e).length>0?!1:!0}}]),e}());n["default"]=a},{"./Constants":13}],17:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var l=e("react"),s=r(l),c=function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={},n.onYes=n.onYes.bind(n),n.onNope=n.onNope.bind(n),n}return a(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"row"},s["default"].createElement("h1",null,"RSVP ",s["default"].createElement("small",null,"Banerelle Wedding")),s["default"].createElement("p",{className:"lead"},"We'd love for you to join us. Start by finding your name:"),s["default"].createElement("form",{className:"",role:"form"},s["default"].createElement("div",{className:"form-group has-success has-feedback"},s["default"].createElement("input",{id:"inputLastName",className:"form-control input-lg",type:"text",placeholder:"Last name"}),s["default"].createElement("span",{className:"glyphicon glyphicon-ok form-control-feedback","aria-hidden":"true"})),s["default"].createElement("blockquote",null,s["default"].createElement("p",null,"Pick Your Eats")),s["default"].createElement("div",{className:"form-group"},s["default"].createElement("div",{className:"radio"},s["default"].createElement("label",null,s["default"].createElement("input",{type:"radio",name:"foodOptions",id:"foodOptions1",value:"Burrito"}),"Breakfast Burrito")),s["default"].createElement("div",{className:"radio"},s["default"].createElement("label",null,s["default"].createElement("input",{type:"radio",name:"foodOptions",id:"foodOptions2",value:"McMuffin"}),"Egg McMuffin"))),s["default"].createElement("blockquote",null,s["default"].createElement("p",null,"Guest")),s["default"].createElement("div",{className:"form-group"},s["default"].createElement("div",{className:"checkbox disabled"},s["default"].createElement("label",null,s["default"].createElement("input",{type:"checkbox",value:"+1",disabled:!0}),"+1"))),s["default"].createElement("button",{type:"submit",className:"btn btn-success",onClick:this.onYes},"YES"),s["default"].createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onNope},"Nope")))}},{key:"onYes",value:function(e){e.preventDefault(),console.log("onYes")}},{key:"onNope",value:function(e){e.preventDefault(),console.log("nope")}}]),t}(s["default"].Component);c.propTypes={},c.defaultProps={},n["default"]=c},{react:"react"}],18:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("react"),u=(r(o),e("react-dom")),a=(r(u),e("./Utils/Initialize")),i=r(a),l=e("./Utils/Routes"),s=r(l);i["default"].onLoad(),s["default"].current(window.location.pathname)},{"./Utils/Initialize":14,"./Utils/Routes":15,react:"react","react-dom":"react-dom"}]},{},[18]);