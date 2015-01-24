/**
 * uno-zen - Minimalist and Elegant theme for Ghost
 * @version  v1.1.24
 * @homepage https://github.com/kikobeats/uno-zen
 * @author   Kiko Beats (https://github.com/kikobeats)
 * @license  MIT
 */(function(){"use strict";$(document).ready(function(){var a;window.Uno=a={version:"1.1.24",cover:{width:function(){return $(".panel-cover").width()},isCollapsed:function(){return $(".panel-cover").hasClass("panel-cover--collapsed")}},search:{container:function(){return $("#results")},form:function(a){return $("#search")[a]()}},loadingBar:function(a){return $(".pace")[a]()},readTime:function(){var a,b,c,d,e;b=$(".content-wrapper");e=$(".post-reading-time");d=b.length>0&&e.length>0;c=$(".post-list__meta > time").length>0;a=function(a,b){$(a).each(function(){var a,b,c;a=$(this).html();c=new Date(Date.now());b=Math.floor((c-new Date(a))/864e5);if(b===0){b="today"}else if(b===1){b="yesterday"}else{b=""+b+" days ago"}$(this).html(b);$(this).mouseover(function(){return $(this).html(a)});return $(this).mouseout(function(){return $(this).html(b)})});return typeof b==="function"?b():void 0};if(c){return a(".post-list__meta > time")}else if(d){return a(".post-meta > time",function(){return b.readingTime({readingTimeTarget:".post-reading-time"})})}}()};return $("body").removeClass("no-js")})}).call(this);(function(){"use strict";$(document).ready(function(){if(!Uno.cover.isCollapsed()){$(".navigation--social").css("margin-left","1.5em");Uno.loadingBar("hide");Uno.search.form("hide")}$("a.blog-button").click(function(){var a;Uno.search.form("show");$(".navigation--social").css("margin-left","0px;");if(!Uno.cover.isCollapsed()){if(Uno.cover.width()<960){$(".panel-cover").addClass("panel-cover--collapsed");return $(".content-wrapper").addClass("animated slideInRight")}else{$(".navigation--social").css("margin-left","0px");$(".panel-cover").css("max-width",Uno.cover.width());return $(".panel-cover").animate({"max-width":"400px",width:"28%"},400,a="swing",function(){return{}})}}});if(location.hash==="#open"){$(".navigation--social").css("margin-left","0px");$(".panel-cover").addClass("panel-cover--collapsed");Uno.search.form("show")}if(window.location.pathname&&window.location.pathname!=="/"){Uno.search.form("show")}if(window.location.pathname.substring(0,5)==="/tag/"){$(".panel-cover").addClass("panel-cover--collapsed")}$(".btn-mobile-menu").click(function(){$(".navigation-wrapper").toggleClass("visible animated bounceInDown");return $(".btn-mobile-menu__icon").toggleClass("icon-list icon-x-circle animated fadeIn")});return $(".navigation-wrapper .blog-button").click(function(){$(".navigation-wrapper").toggleClass("visible");return $(".btn-mobile-menu__icon").toggleClass("icon-list icon-x-circle animated fadeIn")})})}).call(this);(function(){"use strict";var a,b;b=function(){$(".content-wrapper__inner").hide();Uno.search.container.css("margin-top","3rem");return Uno.search.container.css("margin-bottom","9rem")};a=function(){$(".content-wrapper__inner").show();Uno.search.container.css("padding-top","0");return Uno.search.container.css("margin-bottom","0")};$(document).ready(function(){return $("#search-field").ghostHunter({results:"#results",zeroResultsInfo:false,onKeyUp:true,displaySearchInfo:true,onComplete:function(c){if(c.length>0){return b()}else{return a()}}})})}).call(this);(function(a){var b=function(a){var c=new b.Index;return c.pipeline.add(b.stopWordFilter,b.stemmer),a&&a.call(c,c),c};b.version="0.4.3","undefined"!=typeof module&&(module.exports=b),b.utils={},b.utils.warn=function(a){return function(b){a.console&&console.warn&&console.warn(b)}}(this),b.utils.zeroFillArray=function(){var a=[0];return function(b){for(;b>a.length;)a=a.concat(a);return a.slice(0,b)}}(),b.EventEmitter=function(){this.events={}},b.EventEmitter.prototype.addListener=function(){var a=Array.prototype.slice.call(arguments),b=a.pop(),c=a;if("function"!=typeof b)throw new TypeError("last argument must be a function");c.forEach(function(a){this.hasHandler(a)||(this.events[a]=[]),this.events[a].push(b)},this)},b.EventEmitter.prototype.removeListener=function(a,b){if(this.hasHandler(a)){var c=this.events[a].indexOf(b);this.events[a].splice(c,1),this.events[a].length||delete this.events[a]}},b.EventEmitter.prototype.emit=function(a){if(this.hasHandler(a)){var b=Array.prototype.slice.call(arguments,1);this.events[a].forEach(function(a){a.apply(void 0,b)})}},b.EventEmitter.prototype.hasHandler=function(a){return a in this.events},b.tokenizer=function(a){if(!arguments.length||null==a||void 0==a)return[];if(Array.isArray(a))return a.map(function(a){return a.toLowerCase()});for(var b=(""+a).replace(/^\s+/,""),c=b.length-1;c>=0;c--)if(/\S/.test(b.charAt(c))){b=b.substring(0,c+1);break}return b.split(/\s+/).map(function(a){return a.replace(/^\W+/,"").replace(/\W+$/,"").toLowerCase()})},b.Pipeline=function(){this._stack=[]},b.Pipeline.registeredFunctions={},b.Pipeline.registerFunction=function(a,c){c in this.registeredFunctions&&b.utils.warn("Overwriting existing registered function: "+c),a.label=c,b.Pipeline.registeredFunctions[a.label]=a},b.Pipeline.warnIfFunctionNotRegistered=function(a){var c=a.label&&a.label in this.registeredFunctions;c||b.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",a)},b.Pipeline.load=function(a){var c=new b.Pipeline;return a.forEach(function(a){var d=b.Pipeline.registeredFunctions[a];if(!d)throw Error("Cannot load un-registered function: "+a);c.add(d)}),c},b.Pipeline.prototype.add=function(){var a=Array.prototype.slice.call(arguments);a.forEach(function(a){b.Pipeline.warnIfFunctionNotRegistered(a),this._stack.push(a)},this)},b.Pipeline.prototype.after=function(a,c){b.Pipeline.warnIfFunctionNotRegistered(c);var d=this._stack.indexOf(a)+1;this._stack.splice(d,0,c)},b.Pipeline.prototype.before=function(a,c){b.Pipeline.warnIfFunctionNotRegistered(c);var d=this._stack.indexOf(a);this._stack.splice(d,0,c)},b.Pipeline.prototype.remove=function(a){var b=this._stack.indexOf(a);this._stack.splice(b,1)},b.Pipeline.prototype.run=function(a){for(var b=[],c=a.length,d=this._stack.length,e=0;c>e;e++){for(var f=a[e],g=0;d>g&&(f=this._stack[g](f,e,a),void 0!==f);g++);void 0!==f&&b.push(f)}return b},b.Pipeline.prototype.toJSON=function(){return this._stack.map(function(a){return b.Pipeline.warnIfFunctionNotRegistered(a),a.label})},b.Vector=function(a){this.elements=a},b.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var a,b=0,c=this.elements,d=c.length,e=0;d>e;e++)a=c[e],b+=a*a;return this._magnitude=Math.sqrt(b)},b.Vector.prototype.dot=function(a){for(var b=this.elements,c=a.elements,d=b.length,e=0,f=0;d>f;f++)e+=b[f]*c[f];return e},b.Vector.prototype.similarity=function(a){return this.dot(a)/(this.magnitude()*a.magnitude())},b.Vector.prototype.toArray=function(){return this.elements},b.SortedSet=function(){this.length=0,this.elements=[]},b.SortedSet.load=function(a){var b=new this;return b.elements=a,b.length=a.length,b},b.SortedSet.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(a){~this.indexOf(a)||this.elements.splice(this.locationFor(a),0,a)},this),this.length=this.elements.length},b.SortedSet.prototype.toArray=function(){return this.elements.slice()},b.SortedSet.prototype.map=function(a,b){return this.elements.map(a,b)},b.SortedSet.prototype.forEach=function(a,b){return this.elements.forEach(a,b)},b.SortedSet.prototype.indexOf=function(a,b,c){var b=b||0,c=c||this.elements.length,d=c-b,e=b+Math.floor(d/2),f=this.elements[e];return 1>=d?f===a?e:-1:a>f?this.indexOf(a,e,c):f>a?this.indexOf(a,b,e):f===a?e:void 0},b.SortedSet.prototype.locationFor=function(a,b,c){var b=b||0,c=c||this.elements.length,d=c-b,e=b+Math.floor(d/2),f=this.elements[e];if(1>=d){if(f>a)return e;if(a>f)return e+1}return a>f?this.locationFor(a,e,c):f>a?this.locationFor(a,b,e):void 0},b.SortedSet.prototype.intersect=function(a){for(var c=new b.SortedSet,d=0,e=0,f=this.length,g=a.length,h=this.elements,i=a.elements;;){if(d>f-1||e>g-1)break;h[d]!==i[e]?h[d]<i[e]?d++:h[d]>i[e]&&e++:(c.add(h[d]),d++,e++)}return c},b.SortedSet.prototype.clone=function(){var a=new b.SortedSet;return a.elements=this.toArray(),a.length=a.elements.length,a},b.SortedSet.prototype.union=function(a){var b,c,d;return this.length>=a.length?(b=this,c=a):(b=a,c=this),d=b.clone(),d.add.apply(d,c.toArray()),d},b.SortedSet.prototype.toJSON=function(){return this.toArray()},b.Index=function(){this._fields=[],this._ref="id",this.pipeline=new b.Pipeline,this.documentStore=new b.Store,this.tokenStore=new b.TokenStore,this.corpusTokens=new b.SortedSet,this.eventEmitter=new b.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},b.Index.prototype.on=function(){var a=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,a)},b.Index.prototype.off=function(a,b){return this.eventEmitter.removeListener(a,b)},b.Index.load=function(a){a.version!==b.version&&b.utils.warn("version mismatch: current "+b.version+" importing "+a.version);var c=new this;return c._fields=a.fields,c._ref=a.ref,c.documentStore=b.Store.load(a.documentStore),c.tokenStore=b.TokenStore.load(a.tokenStore),c.corpusTokens=b.SortedSet.load(a.corpusTokens),c.pipeline=b.Pipeline.load(a.pipeline),c},b.Index.prototype.field=function(a,b){var b=b||{},c={name:a,boost:b.boost||1};return this._fields.push(c),this},b.Index.prototype.ref=function(a){return this._ref=a,this},b.Index.prototype.add=function(a,c){var d={},e=new b.SortedSet,f=a[this._ref],c=void 0===c?!0:c;this._fields.forEach(function(c){var f=this.pipeline.run(b.tokenizer(a[c.name]));d[c.name]=f,b.SortedSet.prototype.add.apply(e,f)},this),this.documentStore.set(f,e),b.SortedSet.prototype.add.apply(this.corpusTokens,e.toArray());for(var g=0;e.length>g;g++){var h=e.elements[g],i=this._fields.reduce(function(a,b){var c=d[b.name].length;if(!c)return a;var e=d[b.name].filter(function(a){return a===h}).length;return a+e/c*b.boost},0);this.tokenStore.add(h,{ref:f,tf:i})}c&&this.eventEmitter.emit("add",a,this)},b.Index.prototype.remove=function(a,b){var c=a[this._ref],b=void 0===b?!0:b;if(this.documentStore.has(c)){var d=this.documentStore.get(c);this.documentStore.remove(c),d.forEach(function(a){this.tokenStore.remove(a,c)},this),b&&this.eventEmitter.emit("remove",a,this)}},b.Index.prototype.update=function(a,b){var b=void 0===b?!0:b;this.remove(a,!1),this.add(a,!1),b&&this.eventEmitter.emit("update",a,this)},b.Index.prototype.idf=function(a){if(this._idfCache[a])return this._idfCache[a];var b=this.tokenStore.count(a),c=1;return b>0&&(c=1+Math.log(this.tokenStore.length/b)),this._idfCache[a]=c},b.Index.prototype.search=function(a){var c=this.pipeline.run(b.tokenizer(a)),d=b.utils.zeroFillArray(this.corpusTokens.length),e=[],f=this._fields.reduce(function(a,b){return a+b.boost},0),g=c.some(function(a){return this.tokenStore.has(a)},this);if(!g)return[];c.forEach(function(a,c,g){var h=1/g.length*this._fields.length*f,i=this,j=this.tokenStore.expand(a).reduce(function(c,e){var f=i.corpusTokens.indexOf(e),g=i.idf(e),j=1,k=new b.SortedSet;if(e!==a){var l=Math.max(3,e.length-a.length);j=1/Math.log(l)}return f>-1&&(d[f]=h*g*j),Object.keys(i.tokenStore.get(e)).forEach(function(a){k.add(a)}),c.union(k)},new b.SortedSet);e.push(j)},this);var h=e.reduce(function(a,b){return a.intersect(b)}),i=new b.Vector(d);return h.map(function(a){return{ref:a,score:i.similarity(this.documentVector(a))}},this).sort(function(a,b){return b.score-a.score})},b.Index.prototype.documentVector=function(a){for(var c=this.documentStore.get(a),d=c.length,e=b.utils.zeroFillArray(this.corpusTokens.length),f=0;d>f;f++){var g=c.elements[f],h=this.tokenStore.get(g)[a].tf,i=this.idf(g);e[this.corpusTokens.indexOf(g)]=h*i}return new b.Vector(e)},b.Index.prototype.toJSON=function(){return{version:b.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},b.Store=function(){this.store={},this.length=0},b.Store.load=function(a){var c=new this;return c.length=a.length,c.store=Object.keys(a.store).reduce(function(c,d){return c[d]=b.SortedSet.load(a.store[d]),c},{}),c},b.Store.prototype.set=function(a,b){this.store[a]=b,this.length=Object.keys(this.store).length},b.Store.prototype.get=function(a){return this.store[a]},b.Store.prototype.has=function(a){return a in this.store},b.Store.prototype.remove=function(a){this.has(a)&&(delete this.store[a],this.length--)},b.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},b.stemmer=function(){var a={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},b={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},c="[^aeiou]",d="[aeiouy]",e=c+"[^aeiouy]*",f=d+"[aeiou]*",g="^("+e+")?"+f+e,h="^("+e+")?"+f+e+"("+f+")?$",i="^("+e+")?"+f+e+f+e,j="^("+e+")?"+d;return function(c){var f,k,l,m,n,o,p;if(3>c.length)return c;if(l=c.substr(0,1),"y"==l&&(c=l.toUpperCase()+c.substr(1)),m=/^(.+?)(ss|i)es$/,n=/^(.+?)([^s])s$/,m.test(c)?c=c.replace(m,"$1$2"):n.test(c)&&(c=c.replace(n,"$1$2")),m=/^(.+?)eed$/,n=/^(.+?)(ed|ing)$/,m.test(c)){var q=m.exec(c);m=RegExp(g),m.test(q[1])&&(m=/.$/,c=c.replace(m,""))}else if(n.test(c)){var q=n.exec(c);f=q[1],n=RegExp(j),n.test(f)&&(c=f,n=/(at|bl|iz)$/,o=RegExp("([^aeiouylsz])\\1$"),p=RegExp("^"+e+d+"[^aeiouwxy]$"),n.test(c)?c+="e":o.test(c)?(m=/.$/,c=c.replace(m,"")):p.test(c)&&(c+="e"))}if(m=/^(.+?)y$/,m.test(c)){var q=m.exec(c);f=q[1],m=RegExp(j),m.test(f)&&(c=f+"i")}if(m=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,m.test(c)){var q=m.exec(c);f=q[1],k=q[2],m=RegExp(g),m.test(f)&&(c=f+a[k])}if(m=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,m.test(c)){var q=m.exec(c);f=q[1],k=q[2],m=RegExp(g),m.test(f)&&(c=f+b[k])}if(m=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,n=/^(.+?)(s|t)(ion)$/,m.test(c)){var q=m.exec(c);f=q[1],m=RegExp(i),m.test(f)&&(c=f)}else if(n.test(c)){var q=n.exec(c);f=q[1]+q[2],n=RegExp(i),n.test(f)&&(c=f)}if(m=/^(.+?)e$/,m.test(c)){var q=m.exec(c);f=q[1],m=RegExp(i),n=RegExp(h),o=RegExp("^"+e+d+"[^aeiouwxy]$"),(m.test(f)||n.test(f)&&!o.test(f))&&(c=f)}return m=/ll$/,n=RegExp(i),m.test(c)&&n.test(c)&&(m=/.$/,c=c.replace(m,"")),"y"==l&&(c=l.toLowerCase()+c.substr(1)),c}}(),b.Pipeline.registerFunction(b.stemmer,"stemmer"),b.stopWordFilter=function(a){return-1===b.stopWordFilter.stopWords.indexOf(a)?a:void 0},b.stopWordFilter.stopWords=new b.SortedSet,b.stopWordFilter.stopWords.length=119,b.stopWordFilter.stopWords.elements=["","a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"],b.Pipeline.registerFunction(b.stopWordFilter,"stopWordFilter"),b.TokenStore=function(){this.root={docs:{}},this.length=0},b.TokenStore.load=function(a){var b=new this;return b.root=a.root,b.length=a.length,b},b.TokenStore.prototype.add=function(a,b,c){var c=c||this.root,d=a[0],e=a.slice(1);return d in c||(c[d]={docs:{}}),0===e.length?(c[d].docs[b.ref]=b,this.length+=1,void 0):this.add(e,b,c[d])},b.TokenStore.prototype.has=function(a){if(!a)return!1;for(var b=this.root,c=0;a.length>c;c++){if(!b[a[c]])return!1;b=b[a[c]]}return!0},b.TokenStore.prototype.getNode=function(a){if(!a)return{};for(var b=this.root,c=0;a.length>c;c++){if(!b[a[c]])return{};b=b[a[c]]}return b},b.TokenStore.prototype.get=function(a,b){return this.getNode(a,b).docs||{}},b.TokenStore.prototype.count=function(a,b){return Object.keys(this.get(a,b)).length},b.TokenStore.prototype.remove=function(a,b){if(a){for(var c=this.root,d=0;a.length>d;d++){if(!(a[d]in c))return;c=c[a[d]]}delete c.docs[b]}},b.TokenStore.prototype.expand=function(a,b){var c=this.getNode(a),d=c.docs||{},b=b||[];return Object.keys(d).length&&b.push(a),Object.keys(c).forEach(function(c){"docs"!==c&&b.concat(this.expand(a+c,b))},this),b},b.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}};a.fn.ghostHunter=function(b){var d=a.extend({},a.fn.ghostHunter.defaults,b);if(d.results){c.init(this,d);return c}};a.fn.ghostHunter.defaults={results:false,rss:"/rss",onKeyUp:false,result_template:"<a href='{{link}}'><p><h2>{{title}}</h2><h4>{{pubDate}}</h4></p></a>",info_template:"<p>Number of posts found: {{amount}}</p>",displaySearchInfo:true,zeroResultsInfo:true,before:false,onComplete:false};var c={isInit:false,init:function(a,c){var d=this;this.target=a;this.rss=c.rss;this.results=c.results;this.blogData=[];this.result_template=c.result_template;this.info_template=c.info_template;this.zeroResultsInfo=c.zeroResultsInfo;this.displaySearchInfo=c.displaySearchInfo;this.before=c.before;this.onComplete=c.onComplete;this.index=b(function(){this.field("title",{boost:10});this.field("description");this.field("link");this.field("category");this.field("pubDate");this.ref("id")});a.focus(function(){d.loadRSS()});a.closest("form").submit(function(b){b.preventDefault();d.find(a.val())});if(c.onKeyUp){d.loadRSS();a.keyup(function(){d.find(a.val())})}},loadRSS:function(){if(this.isInit)return false;var b=this.index,c=this.rss,d=this.blogData;a.get(c,function(c){var e=a(c).find("item");for(var f=0;e&&f<e.length;f++){var g=e.eq(f);var h={id:f+1,title:g.find("title").text(),description:g.find("description").text(),category:g.find("category").text(),pubDate:g.find("pubDate").text(),link:g.find("link").text()};b.add(h);d.push(h)}});this.isInit=true},find:function(b){var c=this.index.search(b);var d=a(this.results);var e=[];d.empty();if(this.before){this.before()}if(this.zeroResultsInfo||c.length>0){if(this.displaySearchInfo)d.append(this.format(this.info_template,{amount:c.length}))}for(var f=0;f<c.length;f++){var g=this.blogData[c[f].ref-1];d.append(this.format(this.result_template,g));e.push(g)}if(this.onComplete){this.onComplete(e)}},clear:function(){a(this.results).empty();this.target.val("")},format:function(a,b){return a.replace(/{{([^{}]*)}}/g,function(a,c){var d=b[c];return typeof d==="string"||typeof d==="number"?d:a})}}})(jQuery);(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(d in b.prototype)try{e.push(null==a[d]&&"function"!=typeof b[d]?"function"==typeof Object.defineProperty?Object.defineProperty(a,d,{get:function(){return b.prototype[d]},configurable:!0,enumerable:!0}):a[d]=b.prototype[d]:void 0)}catch(f){c=f}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);(function(a){a.fn.readingTime=function(b){if(!this.length){return this}var c={readingTimeTarget:".eta",wordCountTarget:null,wordsPerMinute:270,round:true,lang:"en",remotePath:null,remoteTarget:null};var d=this;var e=a(this);d.settings=a.extend({},c,b);var f=d.settings.readingTimeTarget;var g=d.settings.wordCountTarget;var h=d.settings.wordsPerMinute;var i=d.settings.round;var j=d.settings.lang;var k=d.settings.remotePath;var l=d.settings.remoteTarget;if(j=="fr"){var m="Moins d'une minute";var n="min"}else{if(j=="de"){var m="Weniger als eine Minute";var n="min"}else{if(j=="es"){var m="Menos de un minuto";var n="min"
}else{var m="Less than a minute";var n="min"}}}var o=function(a){var b=a.split(" ").length;var c=h/60;var d=b/c;var j=Math.round(d/60);var k=Math.round(d-j*60);if(i===true){if(j>0){e.find(f).text(j+" "+n)}else{e.find(f).text(m)}}else{var l=j+":"+k;e.find(f).text(l)}if(g!==""&&g!==undefined){e.find(g).text(b)}};e.each(function(){if(k!=null&&l!=null){a.get(k,function(b){o(a(b).children().text())})}else{o(e.text())}})}})(jQuery);