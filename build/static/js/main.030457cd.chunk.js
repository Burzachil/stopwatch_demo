(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(t,e,s){t.exports=s(15)},,,,,function(t,e,s){},function(t,e,s){t.exports=s.p+"static/media/logo.5d5d9eef.svg"},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),n=s.n(a),o=s(2),i=s.n(o),c=(s(12),s(3)),r=s(4),m=s(6),l=s(5),d=(s(13),s(14),function(t){Object(m.a)(s,t);var e=Object(l.a)(s);function s(t,a){var n;return Object(c.a)(this,s),(n=e.call(this,t,a)).formatter=function(t){var e=t.toString();return e.length<2?"0"+e:e.slice(-2)},n.formatTime=function(){n.setState({milliseconds:n.formatter(n.state.timePassed),seconds:n.formatter(Math.floor(n.state.timePassed/100%60)),minutes:n.formatter(Math.floor(n.state.timePassed/6e3%60))})},n.timeNow=function(){var t=parseInt(n.state.timePassed,10)+1;n.setState({timePassed:t}),n.formatTime()},n.resetTime=function(){window.clearInterval(n.interval),n.setState({started:!1,timePassed:0,milliseconds:"00",seconds:"00",minutes:"00",history:[]})},n.startTime=function(){!0!==n.state.started&&(n.interval=setInterval(n.timeNow,10),n.setState({started:!0}))},n.stopTime=function(){!1!==n.state.started&&(window.clearInterval(n.interval),n.setState({started:!1,history:n.state.history.concat("".concat(n.state.minutes,":").concat(n.state.seconds,":").concat(n.state.milliseconds)),timePassed:0,milliseconds:"00",seconds:"00",minutes:"00"}))},n.state={started:!1,timePassed:0,milliseconds:"00",seconds:"00",minutes:"00",history:[]},n}return Object(r.a)(s,[{key:"render",value:function(){return n.a.createElement("div",{className:"stopwatch"},n.a.createElement("div",{className:"stopwatch__screen"},this.state.minutes,n.a.createElement("span",{className:"stopwatch__colon"},":"),this.state.seconds,n.a.createElement("span",{className:"stopwatch__colon"},":"),this.state.milliseconds),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"stopwatch__button",onClick:this.startTime},"Start"),n.a.createElement("div",{className:"stopwatch__button",onClick:this.stopTime},"Stop"),n.a.createElement("div",{className:"stopwatch__button",onClick:this.resetTime},"Reset")),this.state.history.map((function(t){return n.a.createElement("span",{className:"stopwatch__history"},t)})))}}]),s}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.030457cd.chunk.js.map