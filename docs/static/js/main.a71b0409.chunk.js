(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/add.6984be3a.svg"},function(t,e,n){t.exports=n.p+"static/media/add.6984be3a.svg"},function(t,e,n){t.exports=n(27)},,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(9),s=n.n(i),r=(n(17),n(7)),c=n(2),u=n(3),l=n(5),f=n(4),d=n(6),h=n(1),b=(n(19),n(21),function(t){var e=t.taken,n=t.shift,o=t.dark,i=t.index,s=t.mutate,r={};return e?r.left=n:r.right=n,a.a.createElement("div",{className:"Die"+(o?" dark":" light"),style:r,onClick:function(){return s(i)}})}),p=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"isDark",value:function(t){return 10===this.props.count?4===t||5===t:4===this.props.count?1===t||2===t:void 0}},{key:"render",value:function(){for(var t=this.props,e=t.taken,n=t.count,o=t.index,i=t.mutate,s=[],r=0,c=33.75*(n-1-e),u=0;u<n;u++)s.push(a.a.createElement(b,{taken:u<e,shift:u<e?r:c,dark:this.isDark(u),mutate:i.bind(null,o),index:u,key:u})),u<e?r+=33.75:c-=33.75;return a.a.createElement("div",{className:"Row"},a.a.createElement("div",{className:"Rail"}),s)}}]),e}(o.Component);var m=function(t){function e(t){var n;Object(c.a)(this,e),n=Object(l.a)(this,Object(f.a)(e).call(this,t));for(var o=[],a=0;a<n.props.rows;a++)o.push({count:n.props.quaters&&a===n.props.rows-3?4:10,taken:0});var i=localStorage.getItem(n.props.id);return n.state=i?JSON.parse(i):{rows:o,position:{x:-1e3,y:-1e3}},n.mutate=n.mutate.bind(Object(h.a)(Object(h.a)(n))),n.onmousedown=n.onmousedown.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.refs.body.ondragstart=function(){return!1},-1e3===this.state.position.x&&-1e3===this.state.position.y&&this.setState({position:{x:document.body.offsetWidth/2-this.refs.body.offsetHeight/2,y:document.body.offsetHeight/2-this.refs.body.offsetHeight/2}})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.id,JSON.stringify(this.state))}},{key:"mutate",value:function(t,e){var n=this.state.rows,o=0;o=n[t].taken>e?-(n[t].taken-e):-(n[t].taken-e-1),this.setState({rows:Object(r.a)(n.slice(0,t)).concat([{count:n[t].count,taken:n[t].taken+o}],Object(r.a)(n.slice(t+1)))})}},{key:"onmousedown",value:function(t){var e=this,n=function(t){var e=t.getBoundingClientRect();return{x:e.left+window.pageXOffset,y:e.top+window.pageYOffset}}(this.refs.body),o=t.pageX-n.x,a=t.pageY-n.y;if(!(o>30&&o<this.refs.body.offsetWidth-30&&a>30&&a<this.refs.body.offsetHeight-30)){this.props.toFront(this.props.id);var i=function(t){e.setState({position:{x:t.pageX-o,y:t.pageY-a}})};i(t),document.onmousemove=function(t){i(t)},this.refs.body.onmouseup=function(){document.onmousemove=null,e.refs.body.onmouseup=null}}}},{key:"render",value:function(){var t=this,e=this.state,n=e.rows,o=e.position,i={};return i.transform="translate(".concat(o.x,"px, ").concat(o.y,"px)"),a.a.createElement("div",{className:"Abacus",style:i,ref:"body",onMouseDown:this.onmousedown,onClick:function(){return t.props.toFront(t.props.id)}},n.map(function(e,n){return a.a.createElement(p,{taken:e.taken,count:e.count,mutate:t.mutate,index:n,key:n})}))}}]),e}(o.Component),v=(n(23),n(10)),g=n.n(v),w=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{onClick:this.props.onClick,className:"AddFab"},a.a.createElement("img",{src:g.a,alt:"+"}))}}]),e}(o.Component),k=(n(25),n(11)),y=n.n(k),O=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{onClick:this.props.onClick,className:"ClearFab"},a.a.createElement("img",{src:y.a,alt:"+"}))}}]),e}(o.Component);function j(){for(var t="",e=0;e<16;e++)t+=Math.floor(36*Math.random()).toString(36);return t}var S=function(t){function e(t){var n;Object(c.a)(this,e),n=Object(l.a)(this,Object(f.a)(e).call(this,t));var o=localStorage.getItem("abacuses");return"[]"===o&&(o=null),n.state={abacuses:o?JSON.parse(o):[{id:j(),rows:8,quaters:!0}]},o||localStorage.setItem("abacuses",JSON.stringify(n.state.abacuses)),n.newAbacus=n.newAbacus.bind(Object(h.a)(Object(h.a)(n))),n.toFront=n.toFront.bind(Object(h.a)(Object(h.a)(n))),n.clearAll=n.clearAll.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"newAbacus",value:function(){this.setState({abacuses:Object(r.a)(this.state.abacuses).concat([{id:j(),rows:8,quaters:!0}])})}},{key:"toFront",value:function(t){var e=this.state.abacuses,n=e.findIndex(function(e){return e&&e.id===t});n!==e.length-1&&(-1!==n?this.setState({abacuses:Object(r.a)(e.slice(0,n)).concat(Object(r.a)(e.slice(n+1)),[e[n]])}):console.error("oh"))}},{key:"clearAll",value:function(){this.state.abacuses.forEach(function(t){return localStorage.removeItem(t.id)}),this.setState({abacuses:[]})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("abacuses",JSON.stringify(this.state.abacuses))}},{key:"render",value:function(){var t=this;return a.a.createElement(a.a.Fragment,null,this.state.abacuses.map(function(e){return e&&a.a.createElement(m,{id:e.id,rows:e.rows,quaters:e.quaters,key:e.id,toFront:t.toFront})}),a.a.createElement(O,{onClick:this.clearAll}),a.a.createElement(w,{onClick:this.newAbacus}))}}]),e}(o.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}s.a.render(a.a.createElement(S,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");E?(function(t,e){fetch(t).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):x(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):x(e,t)})}}()}],[[12,2,1]]]);
//# sourceMappingURL=main.a71b0409.chunk.js.map