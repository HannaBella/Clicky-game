(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"},{"id":2,"image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{"id":3,"image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{"id":4,"image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"},{"id":5,"image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423"},{"id":6,"image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511"},{"id":7,"image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607"},{"id":8,"image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416"},{"id":11,"image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836"},{"id":12,"image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png"}]')},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(3),o=a.n(c),r=a(4),s=a(5),l=a(7),m=a(6),g=a(8);a(14);var d=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.id,src:e.image,onClick:function(){return e.handleClick(e.id)}})),n.a.createElement("span",{onClick:function(){return e.handleClick(e.id)},className:"spin"}))};a(15);var p=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(16);var u=function(e){return n.a.createElement("nav",{className:"navbar fixed-bottom footer"},n.a.createElement("span",null,"Clicky Game"))},v=a(1);a(17);var f=function(e){return n.a.createElement("nav",{className:"navbar sticky-top text-white nav-justified"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 pt-3"},n.a.createElement("h3",null,"Clicky Game")),n.a.createElement("div",{className:"col-md-5 alert"},n.a.createElement("h4",null,"Click an image to begin!")),n.a.createElement("div",{className:"col-md-2 pt-3"},n.a.createElement("h5",null,"Score: ",e.score)),n.a.createElement("div",{className:"col-md-1 "},n.a.createElement("h5",null,"Top Score: ",e.topScore)))))};function k(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}return e}var h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={friends:v,score:0,topScore:0,ids:[]},a.handleClick=function(e){var t=a.state.ids,i=a.state.score,n=a.state.topScore;-1===t.indexOf(e)?(t.push(e),a.setState({score:a.state.score+1}),a.makeShuffle(),i+1>=n&&a.setState({topScore:a.state.score+1})):(a.setState({score:0}),a.setState({ids:[]}),a.makeShuffle())},a.makeShuffle=function(){a.setState({friends:k(v)})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement(p,null,this.state.friends.map((function(t){return n.a.createElement(d,{id:t.id,key:t.id,image:t.image,handleClick:e.handleClick})}))),n.a.createElement(u,null))}}]),t}(i.Component);a(18);o.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.dcdabfe9.chunk.js.map