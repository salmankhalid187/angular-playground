(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{yfYS:function(t,i,e){"use strict";e.r(i);var a=e("8Y7J");class s{}var l=e("pMnS"),m=e("Xd0L"),n=e("XNiG"),o=(e("quSY"),e("1G5W"));e("5GAg"),e("KCVW"),e("8bJo"),e("dvZr"),e("s7LF");class r{}const d=Object(m.y)(r);class p{}const b=Object(m.y)(p),c=(()=>(class extends d{constructor(){super(...arguments),this._stateChanges=new n.a}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}))(),g=(()=>(class extends d{constructor(t){super(),this._elementRef=t,this._stateChanges=new n.a,"action-list"===this._getListType()&&t.nativeElement.classList.add("mat-action-list")}_getListType(){const t=this._elementRef.nativeElement.nodeName.toLowerCase();return"mat-list"===t?"list":"mat-action-list"===t?"action-list":null}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}))(),h=(()=>(class extends b{constructor(t,i,e,a){super(),this._element=t,this._isInteractiveList=!1,this._destroyed=new n.a,this._isInteractiveList=!!(e||a&&"action-list"===a._getListType()),this._list=e||a;const s=this._getHostElement();"button"!==s.nodeName.toLowerCase()||s.hasAttribute("type")||s.setAttribute("type","button"),this._list&&this._list._stateChanges.pipe(Object(o.a)(this._destroyed)).subscribe(()=>{i.markForCheck()})}ngAfterContentInit(){Object(m.C)(this._lines,this._element)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_isRippleDisabled(){return!this._isInteractiveList||this.disableRipple||!(!this._list||!this._list.disableRipple)}_getHostElement(){return this._element.nativeElement}}))(),u=(()=>(class{}))();var x=e("SVse"),v=e("IP0z"),f=e("cUpR"),w=e("/HVE");const _=(()=>(class{}))();var y=e("omvX"),k=a.nb({encapsulation:2,styles:[".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"],data:{}});function C(t){return a.Db(2,[a.xb(null,0)],null,null)}var O=a.nb({encapsulation:2,styles:[],data:{}});function L(t){return a.Db(2,[(t()(),a.pb(0,0,null,null,6,"div",[["class","mat-list-item-content"]],null,null,null,null,null)),(t()(),a.pb(1,0,null,null,1,"div",[["class","mat-list-item-ripple mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),a.ob(2,212992,null,0,m.t,[a.k,a.x,w.a,[2,m.k],[2,y.a]],{disabled:[0,"disabled"],trigger:[1,"trigger"]},null),a.xb(null,0),(t()(),a.pb(4,0,null,null,1,"div",[["class","mat-list-text"]],null,null,null,null,null)),a.xb(null,1),a.xb(null,2)],function(t,i){var e=i.component;t(i,2,0,e._isRippleDisabled(),e._getHostElement())},function(t,i){t(i,1,0,a.yb(i,2).unbounded)})}var M=e("iInd");class P{constructor(){this.demosList=[{title:"Game page",link:"./game-page"},{title:"Qrcode page",link:"./qrcode-demo"},{title:"Dashboard",link:"./dashboard"}]}ngOnInit(){}}var z=a.nb({encapsulation:0,styles:[[".bg[_ngcontent-%COMP%]{height:100%;background-position:center;background-repeat:no-repeat;background-size:cover}.bg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;margin-top:40%}.bg[_ngcontent-%COMP%]   .centerColumn[_ngcontent-%COMP%]{float:none;margin:0 auto}.bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:2em}.custom-image[_ngcontent-%COMP%]{width:100%;height:100%}.center-adj[_ngcontent-%COMP%]{float:none;margin:0 auto;background:#ff0;display:block}.scrolling-wrapper-flexbox[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;margin-top:2em;background:#adff2f}.scrolling-wrapper-flexbox[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex:0 0 auto;margin-right:3px}.card[_ngcontent-%COMP%]{border:2px solid #00f;background:#000}section[_ngcontent-%COMP%]{margin-top:2em}"]],data:{}});function j(t){return a.Db(0,[(t()(),a.pb(0,0,null,null,7,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],null,null,L,O)),a.ob(1,1228800,null,3,h,[a.k,a.h,[2,c],[2,g]],null,null),a.Ab(603979776,1,{_lines:1}),a.Ab(603979776,2,{_avatar:0}),a.Ab(603979776,3,{_icon:0}),(t()(),a.pb(5,0,null,2,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,i,e){var s=!0;return"click"===i&&(s=!1!==a.yb(t,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&s),s},null,null)),a.ob(6,671744,null,0,M.l,[M.k,M.a,x.g],{routerLink:[0,"routerLink"]},null),(t()(),a.Cb(7,null,["",""]))],function(t,i){t(i,6,0,i.context.$implicit.link)},function(t,i){t(i,0,0,a.yb(i,1)._avatar||a.yb(i,1)._icon,a.yb(i,1)._avatar||a.yb(i,1)._icon),t(i,5,0,a.yb(i,6).target,a.yb(i,6).href),t(i,7,0,i.context.$implicit.title)})}function D(t){return a.Db(0,[(t()(),a.pb(0,0,null,null,3,"mat-list",[["class","mat-list mat-list-base"]],null,null,null,C,k)),a.ob(1,704512,null,0,g,[a.k],null,null),(t()(),a.eb(16777216,null,0,1,null,j)),a.ob(3,278528,null,0,x.h,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null)],function(t,i){t(i,3,0,i.component.demosList)},null)}function A(t){return a.Db(0,[(t()(),a.pb(0,0,null,null,1,"app-landing",[],null,null,null,D,z)),a.ob(1,114688,null,0,P,[],null,null)],function(t,i){t(i,1,0)},null)}var E=a.lb("app-landing",P,A,{},{},[]),I=e("Fwaw");e.d(i,"LandingModuleNgFactory",function(){return R});var R=a.mb(s,[],function(t){return a.vb([a.wb(512,a.j,a.Z,[[8,[l.a,E]],[3,a.j],a.v]),a.wb(4608,x.k,x.j,[a.s,[2,x.w]]),a.wb(1073742336,x.b,x.b,[]),a.wb(1073742336,v.a,v.a,[]),a.wb(1073742336,m.l,m.l,[[2,m.e],[2,f.f]]),a.wb(1073742336,w.b,w.b,[]),a.wb(1073742336,m.u,m.u,[]),a.wb(1073742336,I.c,I.c,[]),a.wb(1073742336,m.m,m.m,[]),a.wb(1073742336,m.s,m.s,[]),a.wb(1073742336,_,_,[]),a.wb(1073742336,u,u,[]),a.wb(1073742336,M.m,M.m,[[2,M.r],[2,M.k]]),a.wb(1073742336,s,s,[]),a.wb(1024,M.i,function(){return[[{path:"",component:P}]]},[])])})}}]);