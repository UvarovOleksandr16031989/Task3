!function(e,t,n,o,i){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(e,t){"use strict";function n(n,s){function g(e,t){e||In(0),jn("autoScrolling",e,t);var n=i(ie)[0];if(s.autoScrolling&&!s.scrollBar)c(qn,{overflow:"hidden",height:"100%"}),b(Lo.recordHistory,"internal"),c(io,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&In(n.offsetTop);else if(c(qn,{overflow:"visible",height:"initial"}),b(!1,"internal"),c(io,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Tt(n.offsetTop);o.element.scrollTo(0,o.options)}}function b(e,t){jn("recordHistory",e,t)}function L(e,t){jn("scrollingSpeed",e,t)}function O(e,t){jn("fitToSection",e,t)}function D(e){s.lockAnchors=e}function V(e){e?(xn(),Tn()):(Ln(),An())}function Ae(e,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),t.forEach(function(t){Bn(e,t,"m")})):(Bn(e,"all","m"),e?(V(!0),kn()):(V(!1),Mn()))}function Oe(e,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),t.forEach(function(t){Bn(e,t,"k")})):(Bn(e,"all","k"),s.keyboardScrolling=e)}function Ie(){var e=u(i(ie)[0],oe);e||!s.loopTop&&!s.continuousVertical||(e=p(i(oe))),null!=e&&bt(e,null,!0)}function Re(){var e=f(i(ie)[0],oe);e||!s.loopBottom&&!s.continuousVertical||(e=i(oe)[0]),null!=e&&bt(e,null,!1)}function Ne(e,t){L(0,"internal"),je(e,t),L(Lo.scrollingSpeed,"internal")}function je(e,t){var n=vn(e);"undefined"!=typeof t?hn(e,t):null!=n&&bt(n)}function Pe(e){gt("right",e)}function De(e){gt("left",e)}function Ve(t){if(!a(io,q)){ao=!0,ro=l();for(var n=i(oe),o=0;o<n.length;++o){var r=n[o],u=i(be,r)[0],f=i(ge,r);s.verticalCentered&&c(i(ae,r),{height:fn(r)+"px"}),c(r,{height:ro+"px"}),f.length>1&&Gt(u,i(me,u)[0])}s.scrollOverflow&&fo.createScrollBarForAll();var d=i(ie)[0],v=h(d,oe);v&&Ne(v+1),ao=!1,R(s.afterResize)&&t&&s.afterResize.call(io,e.innerWidth,e.innerHeight),R(s.afterReBuild)&&!t&&s.afterReBuild.call(io)}}function Ye(e){var t=a(Qn,_);e?t||(g(!1,"internal"),O(!1,"internal"),m(i(ue)),S(Qn,_),R(s.afterResponsive)&&s.afterResponsive.call(io,e)):t&&(g(Lo.autoScrolling,"internal"),O(Lo.autoScrolling,"internal"),y(i(ue)),w(Qn,_),R(s.afterResponsive)&&s.afterResponsive.call(io,e))}function Ue(){s.css3&&(s.css3=En()),s.scrollBar=s.scrollBar||s.hybrid,_e(),Ke(),Ae(!0),g(s.autoScrolling,"internal"),tn(),wn(),"complete"===t.readyState&&zt(),e.addEventListener("load",zt)}function Fe(){e.addEventListener("scroll",rt),e.addEventListener("hashchange",Nt),e.addEventListener("blur",Xt),e.addEventListener("resize",en),t.addEventListener("keydown",Pt),t.addEventListener("keyup",Vt),["click","touchstart"].forEach(function(e){t.addEventListener(e,function(e){var t=e.target;t&&A(t,ue+" a")?_t.call(t,e):z(t,de)?Dt.call(t):z(t,ke)?Wt.call(t,e):(z(t,Te)||null!=A(t,Te))&&Kt.call(t,e)})}),s.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){We(e,!1)}),["mouseleave","touchend"].forEach(function(e){We(e,!0)}))}function We(e,n){t["fp_"+e]=n,t.addEventListener(e,Xe,!0)}function Xe(e){if(e.target!=t){var n=s.normalScrollElements.split(",");n.forEach(function(n){z(e.target,n)&&Ae(t["fp_"+e.type])})}}function _e(){if(!s.anchors.length){var e="[data-anchor]",t=i(s.sectionSelector.split(",").join(e+",")+e,io);t.length&&t.forEach(function(e){s.anchors.push(e.getAttribute("data-anchor").toString())})}if(!s.navigationTooltips.length){var e="[data-tooltip]",n=i(s.sectionSelector.split(",").join(e+",")+e,io);n.length&&n.forEach(function(e){s.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}function Ke(){c(io,{height:"100%",position:"relative"}),S(io,W),S(i("html"),Q),ro=l(),w(io,q),$e();for(var e=i(oe),t=0;t<e.length;t++){var n=t,o=e[t],r=i(ge,o),a=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Qe(o,n),Ge(o,n),a>0?qe(o,r,a):s.verticalCentered&&un(o)}s.fixedElements&&s.css3&&i(s.fixedElements).forEach(function(e){Qn.appendChild(e)}),s.navigation&&Ze(),et(),s.scrollOverflow?fo=s.scrollOverflowHandler.init(s):ot()}function qe(e,n,o){var r=100*o,a=100/o,l=t.createElement("div");l.className=ye,x(n,l);var u=t.createElement("div");u.className=Se,x(n,u),c(i(we,e),{width:r+"%"}),o>1&&(s.controlArrows&&Je(e),s.slidesNavigation&&mn(e,o)),n.forEach(function(e){c(e,{width:a+"%"}),s.verticalCentered&&un(e)});var f=i(me,e)[0];null!=f&&(0!==h(i(ie),oe)||0===h(i(ie),oe)&&0!==h(f))?Hn(f,"internal"):S(n[0],$)}function Qe(e,t){t||null!=i(ie)[0]||S(e,$),eo=i(ie)[0],c(e,{height:ro+"px"}),s.paddingTop&&c(e,{"padding-top":s.paddingTop}),s.paddingBottom&&c(e,{"padding-bottom":s.paddingBottom}),"undefined"!=typeof s.sectionsColor[t]&&c(e,{"background-color":s.sectionsColor[t]}),"undefined"!=typeof s.anchors[t]&&e.setAttribute("data-anchor",s.anchors[t])}function Ge(e,t){"undefined"!=typeof s.anchors[t]&&a(e,$)&&ln(s.anchors[t],t),s.menu&&s.css3&&null!=A(i(s.menu)[0],X)&&Qn.appendChild(i(s.menu)[0])}function $e(){S(i(s.sectionSelector,io),ne),S(i(s.slideSelector,io),he)}function Je(e){var t=[j('<div class="'+Ce+'"></div>'),j('<div class="'+Be+'"></div>')];k(i(be,e)[0],t),"#fff"!==s.controlArrowColor&&(c(i(ze,e),{"border-color":"transparent transparent transparent "+s.controlArrowColor}),c(i(He,e),{"border-color":"transparent "+s.controlArrowColor+" transparent transparent"})),s.loopHorizontal||m(i(He,e))}function Ze(){var e=t.createElement("div");e.setAttribute("id",se);var n=t.createElement("ul");e.appendChild(n),E(e,Qn);var o=i(ue)[0];S(o,"fp-"+s.navigationPosition),s.showActiveTooltip&&S(o,ve);for(var r="",a=0;a<i(oe).length;a++){var l="";s.anchors.length&&(l=s.anchors[a]),r+='<li><a href="#'+l+'"><span></span></a>';var u=s.navigationTooltips[a];"undefined"!=typeof u&&""!==u&&(r+='<div class="'+fe+" fp-"+s.navigationPosition+'">'+u+"</div>"),r+="</li>"}i("ul",o)[0].innerHTML=r,c(i(ue),{"margin-top":"-"+i(ue)[0].offsetHeight/2+"px"});var f=i("li",i(ue)[0])[h(i(ie)[0],oe)];S(i("a",f),$)}function et(){i('iframe[src*="youtube.com/embed/"]',io).forEach(function(e){tt(e,"enablejsapi=1")})}function tt(e,t){var n=e.getAttribute("src");e.setAttribute("src",n+nt(n)+t)}function nt(e){return/\?/.test(e)?"&":"?"}function ot(){var e=i(ie)[0];S(e,Z),Ct(e),Ht(e),s.scrollOverflow&&s.scrollOverflowHandler.afterLoad(),it()&&R(s.afterLoad)&&St("afterLoad",{activeSection:null,element:e,direction:null,anchorLink:e.getAttribute("data-anchor"),sectionIndex:h(e,oe)}),R(s.afterRender)&&St("afterRender")}function it(){var e=vn(jt().section);return!e||"undefined"!=typeof e&&h(e)===h(eo)}function rt(){var e;if(!s.autoScrolling||s.scrollBar){var t=C(),n=ct(t),o=0,r=t+l()/2,c=Qn.offsetHeight-l()===t,u=i(oe);if(c)o=u.length-1;else if(t)for(var f=0;f<u.length;++f){var d=u[f];d.offsetTop<=r&&(o=f)}else o=0;if(lt(n)&&(a(i(ie)[0],Z)||(S(i(ie)[0],Z),w(H(i(ie)[0]),Z))),e=u[o],!a(e,$)){xo=!0;var v,p,g=i(ie)[0],m=h(g,oe)+1,y=cn(e),b=e.getAttribute("data-anchor"),E=h(e,oe)+1,L=i(me,e)[0],x={activeSection:g,sectionIndex:E-1,anchorLink:b,element:e,leavingSection:m,direction:y};L&&(p=L.getAttribute("data-anchor"),v=h(L)),co&&(S(e,$),w(H(e),$),R(s.onLeave)&&St("onLeave",x),R(s.afterLoad)&&St("afterLoad",x),Rt(g),Ct(e),Ht(e),ln(b,E-1),s.anchors.length&&($n=b),yn(v,p,b,E)),clearTimeout(go),go=setTimeout(function(){xo=!1},100)}s.fitToSection&&(clearTimeout(mo),mo=setTimeout(function(){s.fitToSection&&i(ie)[0].offsetHeight<=ro&&at()},s.fitToSectionDelay))}}function at(){co&&(ao=!0,bt(i(ie)[0]),ao=!1)}function lt(e){var t=i(ie)[0].offsetTop,n=t+l();return"up"==e?n>=C()+l():t<=C()}function ct(e){var t=e>To?"down":"up";return To=e,Ho=e,t}function st(e){if(uo.m[e]){var t="down"===e?Re:Ie;if(s.scrollOverflow){var n=s.scrollOverflowHandler.scrollable(i(ie)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!s.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function ut(e){s.autoScrolling&&dt(e)&&I(e)}function ft(t){var n=A(t.target,oe);if(dt(t)){s.autoScrolling&&I(t);var o=Cn(t);Mo=o.y,Oo=o.x,i(be,n).length&&Math.abs(ko-Oo)>Math.abs(Ao-Mo)?!to&&Math.abs(ko-Oo)>e.innerWidth/100*s.touchSensitivity&&(ko>Oo?uo.m.right&&Pe(n):uo.m.left&&De(n)):s.autoScrolling&&co&&Math.abs(Ao-Mo)>e.innerHeight/100*s.touchSensitivity&&(Ao>Mo?st("down"):Mo>Ao&&st("up"))}}function dt(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function vt(e){if(s.fitToSection&&(bo=!1),dt(e)){var t=Cn(e);Ao=t.y,ko=t.x}}function pt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),i=0;i<o.length;i++)n+=o[i];return Math.ceil(n/t)}function ht(t){var n=(new Date).getTime(),o=a(i(ee)[0],ce);if(s.autoScrolling&&!Zn&&!o){t=t||e.event;var r=t.wheelDelta||-t.deltaY||-t.detail,l=Math.max(-1,Math.min(1,r)),c="undefined"!=typeof t.wheelDeltaX||"undefined"!=typeof t.deltaX,u=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!c;so.length>149&&so.shift(),so.push(Math.abs(r)),s.scrollBar&&I(t);var f=n-Co;if(Co=n,f>200&&(so=[]),co){var d=pt(so,10),v=pt(so,70),p=d>=v;p&&u&&st(l<0?"down":"up")}return!1}s.fitToSection&&(bo=!1)}function gt(e,t){var n=null==t?i(ie)[0]:t,o=i(be,n)[0];if(!(null==o||to||i(ge,o).length<2)){var r=i(me,o)[0],a=null;if(a="left"===e?u(r,ge):f(r,ge),null==a){if(!s.loopHorizontal)return;var l=H(r);a="left"===e?l[l.length-1]:l[0]}to=!Gn.test.isTesting,Gt(o,a,e)}}function mt(){for(var e=i(me),t=0;t<e.length;t++)Hn(e[t],"internal")}function yt(e){var t=e.offsetHeight,n=e.offsetTop,o=n,i=n>Ho,r=o-ro+t,a=s.bigSectionsDestination;return t>ro?(i||a)&&"bottom"!==a||(o=r):(i||ao&&null==v(e))&&(o=r),Ho=o,o}function bt(e,t,n){if(null!=e){var o,r,l=yt(e),c={element:e,callback:t,isMovementUp:n,dtop:l,yMovement:cn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:h(e,oe),activeSlide:i(me,e)[0],activeSection:i(ie)[0],leavingSection:h(i(ie),oe)+1,localIsResizing:ao};if(!(c.activeSection==e&&!ao||s.scrollBar&&C()===c.dtop&&!a(e,le))){if(null!=c.activeSlide&&(o=c.activeSlide.getAttribute("data-anchor"),r=h(c.activeSlide)),R(s.onLeave)&&!c.localIsResizing){var u=c.yMovement;if("undefined"!=typeof n&&(u=n?"up":"down"),c.direction=u,St("onLeave",c)===!1)return}s.autoScrolling&&s.continuousVertical&&"undefined"!=typeof c.isMovementUp&&(!c.isMovementUp&&"up"==c.yMovement||c.isMovementUp&&"down"==c.yMovement)&&(c=At(c)),c.localIsResizing||Rt(c.activeSection),s.scrollOverflow&&s.scrollOverflowHandler.beforeLeave(),S(e,$),w(H(e),$),Ct(e),s.scrollOverflow&&s.scrollOverflowHandler.onLeave(),co=Gn.test.isTesting,yn(r,o,c.anchorLink,c.sectionIndex),xt(c),$n=c.anchorLink,ln(c.anchorLink,c.sectionIndex)}}}function St(e,t){var n=Lt(e,t);if(s.v2compatible){if(s[e].apply(n[0],n.slice(1))===!1)return!1}else if(B(io,e,n),s[e].apply(n[Object.keys(n)[0]],F(n))===!1)return!1;return!0}function wt(e){return e?new Xn(e):null}function Et(e){return e?new _n(e):null}function Lt(e,t){var n;return n=s.v2compatible?{afterRender:function(){return[io]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:wt(i(ie)[0]),slide:Et(i(me,i(ie)[0])[0])}},onLeave:function(){return{origin:wt(t.activeSection),destination:wt(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:wt(t.section),origin:Et(t.prevSlide),destination:Et(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}},n[e]()}function xt(e){if(s.css3&&s.autoScrolling&&!s.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";dn(t,!0),s.scrollingSpeed?(clearTimeout(po),po=setTimeout(function(){Mt(e)},s.scrollingSpeed)):Mt(e)}else{var n=Tt(e.dtop);Gn.test.top=-e.dtop+"px",Vn(n.element,n.options,s.scrollingSpeed,function(){s.scrollBar?setTimeout(function(){Mt(e)},30):Mt(e)})}}function Tt(t){var n={};return s.autoScrolling&&!s.scrollBar?(n.options=-t,n.element=i(X)[0]):(n.options=t,n.element=e),n}function At(e){return e.isMovementUp?M(i(ie)[0],Y(e.activeSection,oe)):k(i(ie)[0],U(e.activeSection,oe).reverse()),In(i(ie)[0].offsetTop),mt(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=cn(e.element),e.leavingSection=h(e.activeSection,oe)+1,e.sectionIndex=h(e.element,oe),e}function kt(e){null!=e.wrapAroundElements&&(e.isMovementUp?M(i(oe)[0],e.wrapAroundElements):k(i(oe)[i(oe).length-1],e.wrapAroundElements),In(i(ie)[0].offsetTop),mt())}function Mt(e){kt(e),R(s.afterLoad)&&!e.localIsResizing&&St("afterLoad",e),s.scrollOverflow&&s.scrollOverflowHandler.afterLoad(),e.localIsResizing||Ht(e.element),S(e.element,Z),w(H(e.element),Z),co=!0,R(e.callback)&&e.callback()}function Ot(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Ct(e){if(s.lazyLoading){var t=Bt(e);i("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",t).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=e.getAttribute("data-"+t);null!=n&&n&&Ot(e,t)}),z(e,"source")){var t=A(e,"video, audio");t&&t.load()}})}}function Ht(e){var t=Bt(e);i("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),i('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&It(e),e.onload=function(){e.hasAttribute("data-autoplay")&&It(e)}})}function It(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Rt(e){var t=Bt(e);i("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),i('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Bt(e){var t=i(me,e);return t.length&&(e=t[0]),e}function zt(){var e=jt(),t=e.section,n=e.slide;t&&(s.animateAnchor?hn(t,n):Ne(t,n))}function Nt(){if(!xo&&!s.lockAnchors){var e=jt(),t=e.section,n=e.slide,o="undefined"==typeof $n,i="undefined"==typeof $n&&"undefined"==typeof n&&!to;t&&t.length&&(t&&t!==$n&&!o||i||!to&&Jn!=n)&&hn(t,n)}}function jt(){var t,n,o=e.location.hash;if(o.length){var i=o.replace("#","").split("/"),r=o.indexOf("#/")>-1;t=r?"/"+i[1]:decodeURIComponent(i[0]);var a=r?i[2]:i[1];a&&a.length&&(n=decodeURIComponent(a))}return{section:t,slide:n}}function Pt(e){clearTimeout(yo);var n=t.activeElement,o=e.keyCode;if(9===o)Ft(e);else if(!z(n,"textarea")&&!z(n,"input")&&!z(n,"select")&&"true"!==n.getAttribute("contentEditable")&&""!==n.getAttribute("contentEditable")&&s.keyboardScrolling&&s.autoScrolling){var i=[40,38,32,33,34];i.indexOf(o)>-1&&I(e),Zn=e.ctrlKey,yo=setTimeout(function(){qt(e)},150)}}function Dt(){B(d(this),"click")}function Vt(e){lo&&(Zn=e.ctrlKey)}function Yt(e){2==e.which&&(Io=e.pageY,io.addEventListener("mousemove",Qt))}function Ut(e){2==e.which&&io.removeEventListener("mousemove",Qt)}function Ft(e){function n(e){return I(e),s[0].focus()}var o=e.shiftKey,r=t.activeElement,a=i(ie)[0],l=i(me,a)[0],c=l?l:a,s=i(Eo+':not([tabindex="-1"])',c);r?null==A(r,ie+","+me)&&(r=n(e)):n(e),(!o&&r==s[s.length-1]||o&&r==s[0])&&I(e)}function Wt(){var e=A(this,oe);a(this,Me)?uo.m.left&&De(e):uo.m.right&&Pe(e)}function Xt(){lo=!1,Zn=!1}function _t(e){I(e);var t=h(A(this,ue+" li"));bt(i(oe)[t])}function Kt(e){I(e);var t=i(be,A(this,oe))[0],n=i(ge,t)[h(A(this,"li"))];Gt(t,n)}function qt(e){var t=e.shiftKey;if(co||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:uo.k.up&&Ie();break;case 32:if(t&&uo.k.up){Ie();break}case 40:case 34:uo.k.down&&Re();break;case 36:uo.k.up&&je(1);break;case 35:uo.k.down&&je(i(oe).length);break;case 37:uo.k.left&&De();break;case 39:uo.k.right&&Pe();break;default:return}}function Qt(e){co&&(e.pageY<Io&&uo.m.up?Ie():e.pageY>Io&&uo.m.down&&Re()),Io=e.pageY}function Gt(e,t,n){var o=A(e,oe),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:h(t),section:o,sectionIndex:h(o,oe),anchorLink:o.getAttribute("data-anchor"),slidesNav:i(xe,o)[0],slideAnchor:Sn(t),prevSlide:i(me,o)[0],prevSlideIndex:h(i(me,o)[0]),localIsResizing:ao};return r.xMovement=sn(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(co=!1),s.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&R(s.onSlideLeave)&&St("onSlideLeave",r)===!1?void(to=!1):(S(t,$),w(H(t),$),r.localIsResizing||(Rt(r.prevSlide),Ct(t)),!s.loopHorizontal&&s.controlArrows&&(N(i(He,o),0!==r.slideIndex),N(i(ze,o),null!=v(t))),a(o,$)&&!r.localIsResizing&&yn(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),void Jt(e,r,!0))}function $t(e){Zt(e.slidesNav,e.slideIndex),e.localIsResizing||(R(s.afterSlideLoad)&&St("afterSlideLoad",e),co=!0,Ht(e.destiny)),to=!1}function Jt(e,t,n){var o=t.destinyPos;if(s.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";Gn.test.translate3dH[t.sectionIndex]=r,c(nn(i(we,e)),Rn(r)),ho=setTimeout(function(){n&&$t(t)},s.scrollingSpeed)}else Gn.test.left[t.sectionIndex]=Math.round(o.left),Vn(e,Math.round(o.left),s.scrollingSpeed,function(){n&&$t(t)})}function Zt(e,t){s.slidesNavigation&&null!=e&&(w(i(J,e),$),S(i("a",i("li",e)[t]),$))}function en(){if(tn(),no){var e=t.activeElement;if(!z(e,"textarea")&&!z(e,"input")&&!z(e,"select")){var n=l();Math.abs(n-Ro)>20*Math.max(Ro,n)/100&&(Ve(!0),Ro=n)}}else clearTimeout(vo),vo=setTimeout(function(){Ve(!0)},350)}function tn(){var t=s.responsive||s.responsiveWidth,n=s.responsiveHeight,o=t&&e.innerWidth<t,i=n&&e.innerHeight<n;t&&n?Ye(o||i):t?Ye(o):n&&Ye(i)}function nn(e){var t="all "+s.scrollingSpeed+"ms "+s.easingcss3;return w(e,K),c(e,{"-webkit-transition":t,transition:t})}function on(e){return S(e,K)}function rn(e,t){s.navigation&&null!=i(ue)[0]&&(w(i(J,i(ue)[0]),$),e?S(i('a[href="#'+e+'"]',i(ue)[0]),$):S(i("a",i("li",i(ue)[0])[t]),$))}function an(e){var t=i(s.menu)[0];s.menu&&null!=t&&(w(i(J,t),$),S(i('[data-menuanchor="'+e+'"]',t),$))}function ln(e,t){an(e),rn(e,t)}function cn(e){var t=h(i(ie)[0],oe),n=h(e,oe);return t==n?"none":t>n?"up":"down"}function sn(e,t){return e==t?"none":e>t?"left":"right"}function un(e){if(!a(e,Ee)){var n=t.createElement("div");n.className=re,n.style.height=fn(e)+"px",S(e,Ee),T(e,n)}}function fn(e){var t=ro;if(s.paddingTop||s.paddingBottom){var n=e;a(n,ne)||(n=A(e,oe));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=ro-o}return t}function dn(e,t){t?nn(io):on(io),c(io,Rn(e)),Gn.test.translate3d=e,setTimeout(function(){w(io,K)},10)}function vn(e){var t=i(oe+'[data-anchor="'+e+'"]',io)[0];if(!t){var n="undefined"!=typeof e?e-1:0;t=i(oe)[n]}return t}function pn(e,t){var n=i(ge+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e="undefined"!=typeof e?e:0,n=i(ge,t)[e]),n}function hn(e,t){var n=vn(e);if(null!=n){var o=pn(t,n);e===$n||a(n,$)?gn(o):bt(n,function(){gn(o)})}}function gn(e){null!=e&&Gt(A(e,be),e)}function mn(e,t){E(j('<div class="'+Le+'"><ul></ul></div>'),e);var n=i(xe,e)[0];S(n,"fp-"+s.slidesNavPosition);for(var o=0;o<t;o++)E(j('<li><a href="#"><span></span></a></li>'),i("ul",n)[0]);c(n,{"margin-left":"-"+n.innerWidth/2+"px"}),S(i("a",i("li",n)[0]),$)}function yn(e,t,n,o){var i="";s.anchors.length&&!s.lockAnchors&&(e?(null!=n&&(i=n),null==t&&(t=e),Jn=t,bn(i+"/"+t)):null!=e?(Jn=t,bn(n)):bn(n)),wn()}function bn(t){if(s.recordHistory)location.hash=t;else if(no||oo)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function Sn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=h(e);return null==t&&(t=n),t}function wn(){var e=i(ie)[0],t=i(me,e)[0],n=Sn(e),o=Sn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?"+G+"-[^\\s]+\\b","g");Qn.className=Qn.className.replace(a,""),S(Qn,G+"-"+r)}function En(){var n,o=t.createElement("p"),i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};o.style.display="block",t.body.insertBefore(o,null);for(var r in i)void 0!==o.style[r]&&(o.style[r]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(i[r]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}function Ln(){t.addEventListener?(t.removeEventListener("mousewheel",ht,!1),t.removeEventListener("wheel",ht,!1),t.removeEventListener("MozMousePixelScroll",ht,!1)):t.detachEvent("onmousewheel",ht)}function xn(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var i="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==i?t[n](o+"MozMousePixelScroll",ht,!1):t[n](o+i,ht,!1)}function Tn(){io.addEventListener("mousedown",Yt),io.addEventListener("mouseup",Ut)}function An(){io.removeEventListener("mousedown",Yt),io.removeEventListener("mouseup",Ut)}function kn(){(no||oo)&&(s.autoScrolling&&(Qn.removeEventListener(wo.touchmove,ut,{passive:!1}),Qn.addEventListener(wo.touchmove,ut,{passive:!1})),i(X)[0].removeEventListener(wo.touchstart,vt),i(X)[0].removeEventListener(wo.touchmove,ft,{passive:!1}),i(X)[0].addEventListener(wo.touchstart,vt),i(X)[0].addEventListener(wo.touchmove,ft,{passive:!1}))}function Mn(){(no||oo)&&(s.autoScrolling&&(Qn.removeEventListener(wo.touchmove,ft,{passive:!1}),Qn.removeEventListener(wo.touchmove,ut,{passive:!1})),i(X)[0].removeEventListener(wo.touchstart,vt),i(X)[0].removeEventListener(wo.touchmove,ft,{passive:!1}))}function On(){var t;return t=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Cn(e){var t=[];return t.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,oo&&dt(e)&&s.scrollBar&&"undefined"!=typeof e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Hn(e,t){L(0,"internal"),"undefined"!=typeof t&&(ao=!0),Gt(A(e,be),e),"undefined"!=typeof t&&(ao=!1),L(Lo.scrollingSpeed,"internal")}function In(e){var t=Math.round(e);if(s.css3&&s.autoScrolling&&!s.scrollBar){var n="translate3d(0px, -"+t+"px, 0px)";dn(n,!1)}else if(s.autoScrolling&&!s.scrollBar)c(io,{top:-t+"px"}),Gn.test.top=-t+"px";else{var o=Tt(t);Yn(o.element,o.options)}}function Rn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Bn(e,t,n){"all"!==t?uo[n][t]=e:Object.keys(uo[n]).forEach(function(t){uo[n][t]=e})}function zn(n){g(!1,"internal"),Ae(!1),Oe(!1),S(io,q),clearTimeout(ho),clearTimeout(po),clearTimeout(vo),clearTimeout(go),clearTimeout(mo),e.removeEventListener("scroll",rt),e.removeEventListener("hashchange",Nt),e.removeEventListener("resize",en),t.removeEventListener("keydown",Pt),t.removeEventListener("keyup",Vt);var o=[_t,Dt,Wt,Kt];["click","touchstart"].forEach(function(e){o.forEach(function(n){t.removeEventListener(e,n)})}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,Xe,!0)}),clearTimeout(ho),clearTimeout(po),n&&Nn()}function Nn(){In(0),i("img[data-src], source[data-src], audio[data-src], iframe[data-src]",io).forEach(function(e){Ot(e,"src")}),i("img[data-srcset]").forEach(function(e){Ot(e,"srcset")}),P(i(ue+", "+xe+", "+ke)),c(i(oe),{height:"","background-color":"",padding:""}),c(i(ge),{width:""}),c(io,{height:"",position:"","-ms-touch-action":"","touch-action":""}),c(qn,{overflow:"",height:""}),w(i("html"),Q),w(Qn,_),Qn.className.split(/\s+/).forEach(function(e){0===e.indexOf(G)&&w(Qn,e)}),i(oe+", "+ge).forEach(function(e){s.scrollOverflowHandler&&s.scrollOverflowHandler.remove(e),w(e,Ee+" "+$+" "+Z);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles"))}),on(io),[ae,we,be].forEach(function(e){i(e,io).forEach(function(e){e.outerHTML=e.innerHTML})}),c(io,{"-webkit-transition":"none",transition:"none"}),i("html")[0].scrollTo(0,0),i("body")[0].scrollTo(0,0);var e=[ne,he,Se];e.forEach(function(e){w(i("."+e),e)})}function jn(e,t,n){s[e]=t,"internal"!==n&&(Lo[e]=t)}function Pn(){Kn||(o("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),o("error","https://github.com/alvarotrigo/fullPage.js#options."));var e=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"];return a(i("html"),Q)?void o("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(s.continuousVertical&&(s.loopTop||s.loopBottom)&&(s.continuousVertical=!1,o("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),s.scrollBar&&s.scrollOverflow&&o("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!s.continuousVertical||!s.scrollBar&&s.autoScrolling||(s.continuousVertical=!1,o("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),s.scrollOverflow&&null==s.scrollOverflowHandler&&(s.scrollOverflow=!1,o("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),e.forEach(function(e){s[e]&&o("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),void s.anchors.forEach(function(e){var t=[].slice.call(i("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(i("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(o("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&o("error",'"'+e+'" is is being used by another element `id` property'),t.length&&o("error",'"'+e+'" is is being used by another element `name` property'))}))}function Dn(t){var n;return n=t.self!=e&&a(t,ye)?t.scrollLeft:!s.autoScrolling||s.scrollBar?C():t.offsetTop}function Vn(t,n,o,i){var r=Dn(t),a=n-r,l=0,c=20;bo=!0;var u=function(){if(bo){var f=n;l+=c,o&&(f=e.fp_easings[s.easing](l,r,a,o)),Yn(t,f),l<o?setTimeout(u,c):"undefined"!=typeof i&&i()}else l<o&&i()};u()}function Yn(t,n){!s.autoScrolling||s.scrollBar||t.self!=e&&a(t,ye)?t.self!=e&&a(t,ye)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function Un(){var e=i(me,i(ie)[0])[0];return Et(e)}function Fn(){return new Xn(i(ie)[0])}function Wn(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=h(e,t),this.isLast=this.index===i(t).length-1,this.isFirst=!this.index}function Xn(e){Wn.call(this,e,oe)}function _n(e){Wn.call(this,e,ge)}var Kn=s&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|OPEN-SOURCE-GPLV3-LICENSE").test(s.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1;if(a(i("html"),Q))return void Pn();var qn=i("html, body"),Qn=i("body")[0],Gn={};s=r({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:te,slideSelector:pe,v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},s);var $n,Jn,Zn,eo,to=!1,no=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),oo="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,io="string"==typeof n?i(n)[0]:n,ro=l(),ao=!1,lo=!0,co=!0,so=[],uo={};uo.m={up:!0,down:!0,left:!0,right:!0},uo.k=r({},uo.m);var fo,vo,po,ho,go,mo,yo,bo,So=On(),wo={touchmove:"ontouchmove"in e?"touchmove":So.move,touchstart:"ontouchstart"in e?"touchstart":So.down},Eo='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',Lo=r({},s);Pn(),e.fp_easings=r(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),io&&(Gn.version="3.0.2",Gn.setAutoScrolling=g,Gn.setRecordHistory=b,Gn.setScrollingSpeed=L,Gn.setFitToSection=O,Gn.setLockAnchors=D,Gn.setMouseWheelScrolling=V,Gn.setAllowScrolling=Ae,Gn.setKeyboardScrolling=Oe,Gn.moveSectionUp=Ie,Gn.moveSectionDown=Re,Gn.silentMoveTo=Ne,Gn.moveTo=je,Gn.moveSlideRight=Pe,Gn.moveSlideLeft=De,Gn.fitToSection=at,Gn.reBuild=Ve,Gn.setResponsive=Ye,Gn.getFullpageData=s,Gn.destroy=zn,Gn.getActiveSection=Fn,Gn.getActiveSlide=Un,Gn.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<i(s.sectionSelector,io).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<i(s.sectionSelector,io).length;t++)e.push(0);return e}(),options:s,setAutoScrolling:g},Gn.shared={afterRenderActions:ot},e.fullpage_api=Gn,Ue(),Fe());var xo=!1,To=0,Ao=0,ko=0,Mo=0,Oo=0,Co=(new Date).getTime(),Ho=0,Io=0,Ro=ro;return Gn}function o(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function i(e,n){return n=arguments.length>1?n:t,n?n.querySelectorAll(e):null}function r(e){e=e||{};for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var o in n)n.hasOwnProperty(o)&&("object"==typeof n[o]&&null!=n[o]?e[o]=r(e[o],n[o]):e[o]=n[o])}return e}function a(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function l(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function c(e,t){e=g(e);var n;for(n in t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){var i=e[o];i.style[n]=t[n]}return e}function s(e,t,n){for(var o=e[n];o&&!z(o,t);)o=o[n];return o}function u(e,t){return s(e,t,"previousElementSibling")}function f(e,t){return s(e,t,"nextElementSibling")}function d(e){return e.previousElementSibling}function v(e){return e.nextElementSibling}function p(e){return e[e.length-1]}function h(e,t){e=b(e)?e[0]:e;for(var n=null!=t?i(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function g(e){return b(e)?e:[e]}function m(e){e=g(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function y(e){e=g(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function b(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function S(e,t){e=g(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function w(e,t){e=g(e);for(var n=t.split(" "),o=0;o<n.length;o++){
t=n[o];for(var i=0;i<e.length;i++){var r=e[i];r.classList?r.classList.remove(t):r.className=r.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function E(e,t){t.appendChild(e)}function L(e,n,o){var i;n=n||t.createElement("div");for(var r=0;r<e.length;r++){var a=e[r];(o&&!r||!o)&&(i=n.cloneNode(!0),a.parentNode.insertBefore(i,a)),i.appendChild(a)}return e}function x(e,t){L(e,t,!0)}function T(e,t){for("string"==typeof t&&(t=j(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function A(e,t){return e&&1===e.nodeType?z(e,t)?e:A(e.parentNode,t):null}function k(e,t){O(e,e.nextSibling,t)}function M(e,t){O(e,e,t)}function O(e,t,n){b(n)||("string"==typeof n&&(n=j(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function C(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function H(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function I(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function R(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function B(n,o,i){var r;i="undefined"==typeof i?{}:i,"function"==typeof e.CustomEvent?r=new CustomEvent(o,{detail:i}):(r=t.createEvent("CustomEvent"),r.initCustomEvent(o,!0,!0,i)),n.dispatchEvent(r)}function z(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function N(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function j(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function P(e){e=g(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function D(e,t){Array.prototype.filter.call(e,t)}function V(e,t,n){for(var o=e[n],i=[];o;)(z(o,t)||null==t)&&i.push(o),o=o[n];return i}function Y(e,t){return V(e,t,"nextElementSibling")}function U(e,t){return V(e,t,"previousElementSibling")}function F(e){return Object.keys(e).map(function(t){return e[t]})}var W="fullpage-wrapper",X="."+W,_="fp-responsive",K="fp-notransition",q="fp-destroyed",Q="fp-enabled",G="fp-viewing",$="active",J="."+$,Z="fp-completely",ee="."+Z,te=".section",ne="fp-section",oe="."+ne,ie=oe+J,re="fp-tableCell",ae="."+re,le="fp-auto-height",ce="fp-normal-scroll",se="fp-nav",ue="#"+se,fe="fp-tooltip",de="."+fe,ve="fp-show-active",pe=".slide",he="fp-slide",ge="."+he,me=ge+J,ye="fp-slides",be="."+ye,Se="fp-slidesContainer",we="."+Se,Ee="fp-table",Le="fp-slidesNav",xe="."+Le,Te=xe+" a",Ae="fp-controlArrow",ke="."+Ae,Me="fp-prev",Oe="."+Me,Ce=Ae+" "+Me,He=ke+Oe,Ie="fp-next",Re="."+Ie,Be=Ae+" "+Ie,ze=ke+Re;return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:i,deepExtend:r,hasClass:a,getWindowHeight:l,css:c,until:s,prevUntil:u,nextUntil:f,prev:d,next:v,last:p,index:h,getList:g,hide:m,show:y,isArrayOrList:b,addClass:S,removeClass:w,appendTo:E,wrap:L,wrapAll:x,wrapInner:T,closest:A,after:k,before:M,insertBefore:O,getScrollTop:C,siblings:H,preventDefault:I,isFunction:R,trigger:B,matches:z,toggle:N,createElementFromHTML:j,remove:P,filter:D,untilAll:V,nextAll:Y,prevAll:U},n}),window.jQuery&&window.fullpage&&!function(e,t){"use strict";return e&&t?void(e.fn.fullpage=function(n){var o=new t("#"+e(this).attr("id"),n);Object.keys(o).forEach(function(t){e.fn.fullpage[t]=o[t]})}):void window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(jQuery,fullpage);