(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{yfYS:function(t,i,e){"use strict";e.r(i);var a=e("CcnG"),s=function(){return function(){}}(),l=e("pMnS"),n=e("mrSG"),m=e("Wf4p"),o=e("K9Ia"),r=(e("pugT"),e("ny24")),d=(e("lLAP"),e("n6gG"),e("YlbQ"),e("YSh2"),e("gIcY"),function(){return function(){}}()),p=Object(m.y)(d),b=function(){return function(){}}(),c=Object(m.y)(b),u=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i._stateChanges=new o.a,i}return Object(n.c)(i,t),i.prototype.ngOnChanges=function(){this._stateChanges.next()},i.prototype.ngOnDestroy=function(){this._stateChanges.complete()},i}(p),g=function(t){function i(i){var e=t.call(this)||this;return e._elementRef=i,e._stateChanges=new o.a,"action-list"===e._getListType()&&i.nativeElement.classList.add("mat-action-list"),e}return Object(n.c)(i,t),i.prototype._getListType=function(){var t=this._elementRef.nativeElement.nodeName.toLowerCase();return"mat-list"===t?"list":"mat-action-list"===t?"action-list":null},i.prototype.ngOnChanges=function(){this._stateChanges.next()},i.prototype.ngOnDestroy=function(){this._stateChanges.complete()},i}(p),h=function(t){function i(i,e,a,s){var l=t.call(this)||this;l._element=i,l._isInteractiveList=!1,l._destroyed=new o.a,l._isInteractiveList=!!(a||s&&"action-list"===s._getListType()),l._list=a||s;var n=l._getHostElement();return"button"!==n.nodeName.toLowerCase()||n.hasAttribute("type")||n.setAttribute("type","button"),l._list&&l._list._stateChanges.pipe(Object(r.a)(l._destroyed)).subscribe(function(){e.markForCheck()}),l}return Object(n.c)(i,t),i.prototype.ngAfterContentInit=function(){Object(m.C)(this._lines,this._element)},i.prototype.ngOnDestroy=function(){this._destroyed.next(),this._destroyed.complete()},i.prototype._isRippleDisabled=function(){return!this._isInteractiveList||this.disableRipple||!(!this._list||!this._list.disableRipple)},i.prototype._getHostElement=function(){return this._element.nativeElement},i}(c),x=function(){return function(){}}(),v=e("Ip0R"),f=e("Fzqc"),w=e("ZYjt"),y=e("dWZg"),_=function(){return function(){}}(),k=e("wFw1"),C=a.qb({encapsulation:2,styles:[".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"],data:{}});function z(t){return a.Gb(2,[a.Ab(null,0)],null,null)}var O=a.qb({encapsulation:2,styles:[],data:{}});function j(t){return a.Gb(2,[(t()(),a.sb(0,0,null,null,6,"div",[["class","mat-list-item-content"]],null,null,null,null,null)),(t()(),a.sb(1,0,null,null,1,"div",[["class","mat-list-item-ripple mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),a.rb(2,212992,null,0,m.t,[a.k,a.A,y.a,[2,m.k],[2,k.a]],{disabled:[0,"disabled"],trigger:[1,"trigger"]},null),a.Ab(null,0),(t()(),a.sb(4,0,null,null,1,"div",[["class","mat-list-text"]],null,null,null,null,null)),a.Ab(null,1),a.Ab(null,2)],function(t,i){var e=i.component;t(i,2,0,e._isRippleDisabled(),e._getHostElement())},function(t,i){t(i,1,0,a.Bb(i,2).unbounded)})}var M=e("ZYCi"),L=function(){function t(){this.demosList=[{title:"Game page",link:"./game-page"},{title:"Qrcode page",link:"./qrcode-demo"},{title:"Dashboard",link:"./dashboard"}]}return t.prototype.ngOnInit=function(){},t}(),P=a.qb({encapsulation:0,styles:[[".bg[_ngcontent-%COMP%]{height:100%;background-position:center;background-repeat:no-repeat;background-size:cover}.bg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;margin-top:40%}.bg[_ngcontent-%COMP%]   .centerColumn[_ngcontent-%COMP%]{float:none;margin:0 auto}.bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:2em}.custom-image[_ngcontent-%COMP%]{width:100%;height:100%}.center-adj[_ngcontent-%COMP%]{float:none;margin:0 auto;background:#ff0;display:block}.scrolling-wrapper-flexbox[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;margin-top:2em;background:#adff2f}.scrolling-wrapper-flexbox[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex:0 0 auto;margin-right:3px}.card[_ngcontent-%COMP%]{border:2px solid #00f;background:#000}section[_ngcontent-%COMP%]{margin-top:2em}"]],data:{}});function A(t){return a.Gb(0,[(t()(),a.sb(0,0,null,null,7,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],null,null,j,O)),a.rb(1,1228800,null,3,h,[a.k,a.h,[2,u],[2,g]],null,null),a.Db(603979776,1,{_lines:1}),a.Db(603979776,2,{_avatar:0}),a.Db(603979776,3,{_icon:0}),(t()(),a.sb(5,0,null,2,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,i,e){var s=!0;return"click"===i&&(s=!1!==a.Bb(t,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&s),s},null,null)),a.rb(6,671744,null,0,M.l,[M.k,M.a,v.g],{routerLink:[0,"routerLink"]},null),(t()(),a.Fb(7,null,["",""]))],function(t,i){t(i,6,0,i.context.$implicit.link)},function(t,i){t(i,0,0,a.Bb(i,1)._avatar||a.Bb(i,1)._icon,a.Bb(i,1)._avatar||a.Bb(i,1)._icon),t(i,5,0,a.Bb(i,6).target,a.Bb(i,6).href),t(i,7,0,i.context.$implicit.title)})}function D(t){return a.Gb(0,[(t()(),a.sb(0,0,null,null,3,"mat-list",[["class","mat-list mat-list-base"]],null,null,null,z,C)),a.rb(1,704512,null,0,g,[a.k],null,null),(t()(),a.hb(16777216,null,0,1,null,A)),a.rb(3,278528,null,0,v.h,[a.Q,a.N,a.t],{ngForOf:[0,"ngForOf"]},null)],function(t,i){t(i,3,0,i.component.demosList)},null)}function G(t){return a.Gb(0,[(t()(),a.sb(0,0,null,null,1,"app-landing",[],null,null,null,D,P)),a.rb(1,114688,null,0,L,[],null,null)],function(t,i){t(i,1,0)},null)}var B=a.ob("app-landing",L,G,{},{},[]),I=e("UodH");e.d(i,"LandingModuleNgFactory",function(){return F});var F=a.pb(s,[],function(t){return a.yb([a.zb(512,a.j,a.cb,[[8,[l.a,B]],[3,a.j],a.y]),a.zb(4608,v.k,v.j,[a.v,[2,v.w]]),a.zb(1073742336,v.b,v.b,[]),a.zb(1073742336,f.a,f.a,[]),a.zb(1073742336,m.l,m.l,[[2,m.e],[2,w.f]]),a.zb(1073742336,y.b,y.b,[]),a.zb(1073742336,m.u,m.u,[]),a.zb(1073742336,I.c,I.c,[]),a.zb(1073742336,m.m,m.m,[]),a.zb(1073742336,m.s,m.s,[]),a.zb(1073742336,_,_,[]),a.zb(1073742336,x,x,[]),a.zb(1073742336,M.m,M.m,[[2,M.r],[2,M.k]]),a.zb(1073742336,s,s,[]),a.zb(1024,M.i,function(){return[[{path:"",component:L}]]},[])])})}}]);