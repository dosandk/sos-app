!function(e){function n(n){for(var s,o,l=n[0],r=n[1],d=n[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);for(c&&c(n);m.length;)m.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],s=!0,l=1;l<t.length;l++){var r=t[l];0!==i[r]&&(s=!1)}s&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var s={},i={0:0},a=[];function o(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=s,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)o.d(t,s,function(n){return e[n]}.bind(null,s));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/sos-app";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var c=r;a.push([12,1]),t()}({12:function(e,n,t){"use strict";t.r(n);const s=document.getElementById("root");function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t(8),t(9);var r=t(4),d=t.n(r);t(10),t(13);d.a.initializeApp({apiKey:"AIzaSyCte0dEwjImv8Gi-nQYvcjYu1_hql2dqtw",authDomain:"sos-app-21bc9.firebaseapp.com",databaseURL:"https://sos-app-21bc9.firebaseio.com",projectId:"sos-app-21bc9",storageBucket:"sos-app-21bc9.appspot.com",messagingSenderId:"77409901091",appId:"1:77409901091:web:9ddea37db73235db3caf96",measurementId:"G-83CSKJ236M"}),d.a.analytics(),console.error("firebase",d.a);new class{constructor(e){this.routes=e,this.initEventListeners(),this.renderPage(window.location.pathname)}initEventListeners(){document.addEventListener("click",e=>{const{target:n}=e,t=n.closest("a");if(t&&"router"===t.className){const n=t.getAttribute("href");n.startsWith("/")&&(e.preventDefault(),history.pushState(null,null,n),this.renderPage(n))}}),window.addEventListener("popstate",e=>{const{target:n}=e;this.renderPage(n.location.pathname)})}renderPage(e){const n=this.routes[e];s.innerHTML="",s.append(n.element)}}({"/":new class{constructor(){l(this,"element",void 0),l(this,"subElements",{}),this.render(),this.getSubElements(),this.initEventListeners()}render(){const e=document.createElement("div");e.innerHTML='\n      <div>\n        <h1>Login Page</h1>\n        <a class="router" href="/profile">\n          <div data-id="navigationBtn">Go to next page</div>\n        </a>\n      </div>\n    ',this.element=e.firstElementChild}getSubElements(){const e=this.element.querySelectorAll("[data-id]");for(const n of e)this.subElements[n.dataset.id]=n}initEventListeners(){}},"/profile":new class{constructor(){var e,n,t;t=void 0,(n="element")in(e=this)?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,this.render()}render(){const e=document.createElement("div");e.innerHTML='\n      <div>\n        <div>\n            <img src="https://via.placeholder.com/150" alt="avatar" class="rounded-circle img-thumbnail">\n        </div>\n\n        <p class="mt-2 mb-3">Eve Ziomek</p>\n        <p class="mt-3 mb-0 font-weight-bold">Reputation</p>\n\n        <div>\n            <p class="mb-5">4.34/5\n            <span>\n              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>\n                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"></path>\n                  <circle cx="8" cy="4.5" r="1"></circle>\n              </svg>\n            </span>\n            </p>\n\n        </div>\n\n        <a class="router" href="/confirm">\n            <button type="button" data-id="sosBtn" class="btn sos-button btn-danger rounded-circle">SOS</button>\n        </a>\n      </div>\n    ',this.element=e.firstElementChild}},"/confirm":new class{constructor(){var e,n,t;t=void 0,(n="element")in(e=this)?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,this.render()}render(){const e=document.createElement("div");e.innerHTML='\n        <div>\n            <a onclick="goBack()" class="fixed-btn">&#8249;</a>\n            <h1>MAP</h1>\n            <a class="router" href="/waiting">\n                <button type="button" data-id="confirmBtn" class="btn rounded mt-4 mb-2 btn-danger">Confirm</button>\n            </a>\n\n            <hr>\n\n            <div class="pictograms">\n              <p>You can specify your needs</p>\n\n              <p>//ACCIDENT_TYPES//</p>\n\n            </div>\n        </div>\n    ',this.element=e.firstElementChild}},"/waiting":new class{constructor(){var e,n,t;t=void 0,(n="element")in(e=this)?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,this.render()}render(){const e=document.createElement("div");e.innerHTML='\n      <div>\n        <a onclick="goBack()" class="fixed-btn">&#8249;</a>\n        <h1>MAP</h1>\n\n        <hr>\n\n        <p>00:20</p>\n        <h3 class="font-weight-bold">Help in: 09:18</h3>\n\n        <hr>\n\n        <p>//List of helpers//</p>\n      </div>\n    ',this.element=e.firstElementChild}}}),new class{constructor(){i(this,"element",void 0),i(this,"subElements",void 0),this.render(),this.getSubElements(),this.initEventListeners()}render(){const e=document.createElement("div");e.innerHTML='\n        <div class="modal showed" id="rateModal" tabindex="-1" role="dialog">\n          <div class="modal-dialog modal-dialog-centered">\n            <div class="modal-content">\n              <div class="modal-header">\n                <h5 class="modal-title">Rate</h5>\n                <button type="button" data-id="closeModalBtn" class="close" data-dismiss="modal">\n                  <span>&times;</span>\n                </button>\n              </div>\n              <div class="modal-body">\n\n                <img src="https://via.placeholder.com/150" alt="avatar" class="rounded-circle img-thumbnail">\n                <p class="mt-1 mb-3">2.31/5</p>\n                <p class="mt-1 mb-1 font-weight-bold">Adrian Szymanski</p>\n                <p class="mt-1 mb-3 font-weight-bold">+380 (99) 114 36 74</p>\n\n                <hr>\n\n                <p class="question mb-2">Rate</p>\n                <p>STARS</p>\n\n                <button type="button" data-id="confirmRateBtn" class="btn btn-success">Confirm</button>\n\n              </div>\n            </div>\n          </div>\n        </div>\n    ',this.element=e}getSubElements(){const e={},n=this.element.querySelectorAll("[data-id");for(const t of n)e[t.dataset.id]=t;this.subElements=e}initEventListeners(){const{closeModalBtn:e}=this.subElements;e.addEventListener("click",()=>{closeModal()})}},new class{constructor(){a(this,"element",void 0),a(this,"subElements",void 0),this.render(),this.getSubElements(),this.initEventListeners()}render(){const e=document.createElement("div");e.innerHTML='\n        <div class="modal showed" id="commentModal" tabindex="-1" role="dialog">\n          <div class="modal-dialog modal-dialog-centered">\n              <div class="modal-content">\n                  <div class="modal-header">\n                      <h5 class="modal-title">What do you need?</h5>\n                      <button type="button" data-id="closeModalBtn" class="close" data-dismiss="modal">\n                        <span>&times;</span>\n                      </button>\n                  </div>\n                  <div class="modal-body">\n                      <input class="form-control">\n                  </div>\n                  <div class="modal-footer">\n                      <button type="button" class="btn btn-danger">Save</button>\n                  </div>\n              </div>\n          </div>\n      </div>\n    ',this.element=e}getSubElements(){const e={},n=this.element.querySelectorAll("[data-id");for(const t of n)e[t.dataset.id]=t;this.subElements=e}initEventListeners(){const{closeModalBtn:e}=this.subElements;e.addEventListener("click",()=>{closeModal()})}},new class{constructor(){o(this,"element",void 0),o(this,"subElements",void 0),this.render(),this.getSubElements(),this.initEventListeners()}render(){const e=document.createElement("div");e.innerHTML='\n        <div class="modal fade show" id="deleteHelperModal" tabindex="-1" role="dialog"\n             aria-labelledby="exampleModalLiveLabel" style="display: block; " aria-modal="true">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h5 class="modal-title" id="exampleModalLiveLabel">Are you sure?</h5>\n                        <button type="button" data-id="closeModalBtn" class="close" data-dismiss="modal">\n                            <span>&times;</span>\n                        </button>\n                    </div>\n                    <div class="modal-body">\n                        <button type="button" class="btn btn-success">Yes</button>\n                        <button type="button" class="btn btn-danger">No</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ',this.element=e}getSubElements(){const e={},n=this.element.querySelectorAll("[data-id");for(const t of n)e[t.dataset.id]=t;this.subElements=e}initEventListeners(){const{closeModalBtn:e}=this.subElements;e.addEventListener("click",()=>{closeModal()})}}},8:function(e,n,t){},9:function(e,n,t){}});
//# sourceMappingURL=app.bundle.js.map