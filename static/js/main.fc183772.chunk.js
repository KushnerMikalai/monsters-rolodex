(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=(n(13),n(3)),i=n(4),l=n(6),m=n(5),u=n(7),h=(n(14),function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card__image",src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=180x180"),alt:e.monster.name}),o.a.createElement("h2",null,e.monster.name),o.a.createElement("div",null,e.monster.email))}),d=(n(15),function(e){return o.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return o.a.createElement(h,{monster:e,key:e.id})}))}),f=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",onChange:n,placeholder:t})}),p=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({monsters:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return o.a.createElement("div",{className:"app"},o.a.createElement("h1",{className:"app__title"},"Monsters rolodex"),o.a.createElement(f,{handleChange:this.handleChange,placeholder:"Search monsters"}),o.a.createElement(d,{monsters:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.fc183772.chunk.js.map