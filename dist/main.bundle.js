(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i),s=t(421),l=o()(a());l.i(s.A),l.push([e.id,':root {\n  --grid-border: #109ee5;\n  --ship: rgba(0, 4, 255, 0.247);\n  --highlight: #6495ed;\n  --label: #deb887;\n  --top-bar: #30343f;\n  --bg-main: #eff1f3;\n  --bg-form: #dadffb;\n  --second-bg: #606980;\n  --text: #2d2d2a;\n  --btn: #c8cef9;\n  --disabled: #aaa;\n  --ship-border: rgba(0, 0, 255, 0.5);\n\n  font-family: Charter, "Bitstream Charter", "Sitka Text", Cambria, serif;\n  font-weight: normal;\n  color: var(--text);\n}\n/* Default styles reset */\nh1 {\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n}\n\n/* Main */\nbody {\n  background-color: var(--bg-main);\n}\n\n.top-bar {\n  color: white;\n  background-color: var(--top-bar);\n}\n\n.title {\n  font-size: 2.5rem;\n  padding: 1rem 0;\n  text-align: center;\n  letter-spacing: 2px;\n}\n\nsection {\n  max-width: 1024px;\n  margin: 0 auto;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  justify-content: center;\n  margin-top: 5rem;\n}\n\n/* Game form */\n#menu {\n  max-width: 740px;\n}\n\nh2 {\n  margin: 0 0 2.5rem;\n  font-size: 2rem;\n  font-weight: 500;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n}\n\nform > div {\n  display: flex;\n  gap: 3rem;\n}\n\n.menu-col {\n  display: flex;\n  justify-content: center;\n  background-color: var(--bg-form);\n  min-width: 250px;\n  padding: 1rem 1.3rem;\n  border-radius: 0.75rem;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.menu-col label {\n  font-size: 1.5rem;\n}\n\n.menu-col select,\n.menu-col input {\n  font-size: 1rem;\n  padding: 0.5rem;\n}\n\n.menu-col > div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nform > button {\n  font-size: 1.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.3rem;\n  border: none;\n  background-color: var(--btn);\n}\n\nform > button:active {\n  transform: translateY(4px);\n}\n\n.disabled-label {\n  color: var(--disabled);\n}\n\n/* Grid */\n#game-container {\n  display: flex;\n  justify-content: space-around;\n  gap: 10rem;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-label {\n  padding: 0 0.5rem;\n  letter-spacing: 2px;\n  border-radius: 0.5rem;\n  margin-bottom: 2rem;\n  font-size: 1.5rem;\n  transition: background-color 0.5s ease, color 0.5s ease;\n}\n\n.active {\n  background-color: var(--label);\n}\n\n.grid {\n  border: solid var(--grid-border) 1px;\n}\n\n.grid-wrap,\n.row,\n.label-row {\n  display: flex;\n}\n\n.label-row > *,\n.label-column > * {\n  flex: 1;\n}\n\n.gambeboard.active-board .game-cell {\n  cursor: pointer;\n}\n\n.game-cell,\n.label-cell {\n  width: 2rem;\n  height: 2rem;\n}\n\n.label-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.label-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-cell:not(:last-child) {\n  border-right: solid var(--grid-border) 1px;\n}\n\n.row:not(:last-child) .game-cell {\n  border-bottom: solid var(--grid-border) 1px;\n}\n\n.game-cell {\n  position: relative;\n}\n\n#reveal-check {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.5rem;\n  align-self: center;\n}\n\n#reveal-check input {\n  width: 1rem;\n  height: 1rem;\n}\n\n/* Ship setup Menu */\n#ship-menu {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-head,\n.tooltip {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-head {\n  width: 100%;\n  margin: 0 0 2rem;\n}\n\n.menu-head > h2,\n.ship-container {\n  margin-left: 1rem;\n}\n\n.tooltip {\n  width: fit-content;\n  gap: 0.2rem;\n  border: 1px solid;\n  padding: 0.5rem 1rem;\n  background-color: var(--second-bg);\n  color: white;\n}\n\n#ship-menu > .ship-container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: repeat(4, 1fr);\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  font-size: 1rem;\n}\n\n.ship-bay {\n  display: flex;\n  margin: 0.5rem;\n  gap: 1rem;\n}\n\n.ship-wrapper {\n  display: flex;\n  position: relative;\n  height: 2rem;\n}\n\n.ship-wrapper[draggable="true"] {\n  cursor: move;\n}\n\n.game-object {\n  display: flex;\n  position: absolute;\n  border: 1px solid var(--ship-border);\n}\n\n.game-object > .ship-cell {\n  flex: 1;\n  height: 2rem;\n  width: 2rem;\n}\n\n.game-object > .ship-cell:not(:last-child) {\n  border-right: 1px solid var(--ship-border);\n}\n\n.game-cell .ship-wrapper {\n  z-index: 9999;\n}\n\n.game-cell .game-object,\n.game-cell .game-object .ship-cell {\n  border: none;\n}\n\n.confirm-ships-btn {\n  cursor: pointer;\n  border-radius: 0.3rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  background-color: var(--btn);\n  align-self: baseline;\n  margin-top: 2rem;\n}\n\n.confirm-ships-btn:active {\n  transform: translateY(4px);\n}\n\n.error-msg {\n  display: none;\n  width: fit-content;\n  color: red;\n  margin-top: 1rem;\n}\n\n.shake {\n  animation: shake 0.5s linear;\n}\n\n@keyframes shake {\n  0% {\n    transform: translateX(30px);\n  }\n  20% {\n    transform: translateX(-30px);\n  }\n  40% {\n    transform: translateX(15px);\n  }\n  60% {\n    transform: translateX(-15px);\n  }\n  80% {\n    transform: translateX(8px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n\n/* Ships */\n.game-cell .lord,\n.game-cell.lord {\n  background-color: #d7e8ba;\n}\n\n.game-cell .titan,\n.game-cell.titan {\n  background-color: #a7c0dd;\n}\n\n.game-cell .serpent,\n.game-cell.serpent {\n  background-color: #b9dcdf;\n}\n\n.game-cell .prowler,\n.game-cell.prowler {\n  background-color: #ffdcad;\n}\n\n.gameboard .game-cell.hide:not(.hit) {\n  background-color: white;\n}\n\n/* Attack status */\n.game-cell.hit::before {\n  content: "X";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2rem;\n  color: crimson;\n}\n\n.game-cell.missed::before {\n  content: "O";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2rem;\n  color: dimgrey;\n}\n\n/* Other */\n.result {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.result > b {\n  color: var(--highlight);\n}\n',""]);const d=l},421:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=o},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),n.push(c))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var l=e[s],d=r.base?l[0]+r.base:l[0],c=i[d]||0,h="".concat(d," ").concat(c);i[d]=c+1;var p=t(h),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var u=a(m,r);r.byIndex=s,n.splice(s,0,{identifier:h,updater:u,references:1})}o.push(h)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var l=r(e,a),d=0;d<i.length;d++){var c=t(i[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=l}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;const r=Object.freeze({MAX_ROWS:10,MAX_COLUMNS:10}),a=Object.freeze([{name:"prowler",length:1,count:4},{name:"serpent",length:2,count:3},{name:"titan",length:3,count:2},{name:"lord",length:4,count:1}]);class i{constructor(e,n){this.name=n,this.length=e,this.hits=0}hit(){this.hits++}isSunk(){return this.hits>=this.length}}function o(e,n,t,r){const a=[];for(let i=0;i<e;i++)"horizontal"===n?a.push([t,r+i]):"vertical"===n&&a.push([t+i,r]);return a}function s(e,n,t,a){const[i,o]=[r.MAX_ROWS,r.MAX_COLUMNS];return a=Number(a),e=Number(e),n=Number(n),"horizontal"===t?n>=0&&n+a-1<=o:e>=0&&e+a-1<=i}function l(e,n){return e>=1&&e<=r.MAX_ROWS&&n>=1&&n<=r.MAX_COLUMNS}function d(e,n){const t=function(e){const n=new Set;for(const[t,r]of e)[[t-1,r],[t+1,r],[t,r-1],[t,r+1],[t-1,r-1],[t-1,r+1],[t+1,r-1],[t+1,r+1]].forEach((([e,t])=>{l(e,t)&&n.add(`${e},${t}`)}));return n}(e);for(const[t,r]of e)if(n.has(`${t},${r}`))return!1;for(const e of t)if(n.has(e))return!1;return!0}class c{static idCounter=0;constructor(e=null,n,t=null){this.gameBoard=e,this.name=n,this.id=t||""+ ++c.idCounter}grid(){return this.gameBoard?this.gameBoard.grid:null}}class h extends c{constructor(e=null,n,t){super(e,n,t)}}class p extends c{constructor(e=null,n){super(e,"computer",n),this.attackHistory=new Set,this.gameBoardHistory=new Set,this.populateGameBoard()}populateGameBoard(){for(let e=0;e<10;e++){if(this.attemptToPlaceAllShips(50))return;console.log("Taking another reset attempt: ",e),this.resetGameBoard()}throw new Error("Failed to place all ships after multiple resets")}attemptToPlaceAllShips(e){for(const n of a)for(let t=0;t<n.count;t++)if(!this.placeSingleShip(n,e))return!1;return!0}placeSingleShip(e,n){const{rowCount:t,columnCount:r}=this.gameBoard.getDimensions();for(let a=0;a<n;a++){const n=Math.random()<.5?"horizontal":"vertical",a=Math.floor(Math.random()*t)+1,i=Math.floor(Math.random()*r)+1,l=o(e.length,n,a,i);if(s(a,i,n,e.length)&&d(l,this.gameBoardHistory))return this.placeShipOnBoard(e,l),!0}return!1}placeShipOnBoard(e,n){this.gameBoard.place(new i(e.length,e.name),n),n.forEach((([e,n])=>{this.gameBoardHistory.add(`${e},${n}`)}))}resetGameBoard(){this.gameBoardHistory.clear(),this.gameBoard.clear()}chooseRandomMove(e){let n,t;const{rowCount:r,columnCount:a}=e.getDimensions();do{n=Math.floor(Math.random()*r)+1,t=Math.floor(Math.random()*a)+1}while(this.attackHistory.has(`${n}, ${t}`));return this.attackHistory.add(`${n}, ${t}`),[n,t]}}class m{constructor(e=r.MAX_ROWS,n=r.MAX_COLUMNS){this.grid=Array.from({length:e},(()=>new Array(n).fill(null).map((()=>({ship:null,attacked:!1})))))}getDimensions(){return{rowCount:this.grid.length,columnCount:this.grid[0].length}}place(e,n){if(Array.isArray(n[0]))n.forEach((([n,t])=>{this.grid[n-1][t-1]={ship:e,attacked:!1,name:e.name}}));else{const[t,r]=n;this.grid[t-1][r-1]={ship:e,attacked:!1,name:e.name}}}clear(){return this.grid.forEach((e=>{e.forEach(((e,n,t)=>{t[n]={ship:null,attacked:!1}}))}))}receiveAttack(e){const[n,t]=e,r=this.grid[n-1][t-1];return r.attacked?"already_attacked":(r.attacked=!0,null===r.ship?"missed":(r.ship.hit(),"hit"))}isClear(){return this.grid.every((e=>e.every((e=>1===e||null===e.ship||e.attacked&&e.ship.isSunk()))))}}class u{static createPlayer(e){const n=e.querySelector("select").value,t=e.querySelector("input").value;return"computer"===n?new p(new m):new h(new m,t)}}function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}class f{constructor(){this.handleDragStart=this.handleDragStart.bind(this),this.handleDragOver=this.handleDragOver.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleDragEnd=this.handleDragEnd.bind(this)}handleDragStart(e){e.stopPropagation();const n=e.currentTarget,t=n.id,r=document.elementFromPoint(e.clientX,e.clientY),a=[...r.parentNode.children].indexOf(r);e.dataTransfer.setData("text/plain",JSON.stringify({shipId:t,shipIndex:a})),this.toggleElementVisibility(n)}handleDragOver(e){return e.preventDefault(),e.dataTransfer.dropEffect="move",!1}handleDragEnd(e){const n=e.currentTarget;this.toggleElementVisibility(n)}handleDrop(e){e.preventDefault();const n=e.dataTransfer.getData("text/plain"),{shipId:t,shipIndex:r}=JSON.parse(n),a=document.getElementById(t),i=e.target,o=this.calculateNewPosition(i,a.dataset.direction,r,a.dataset.length),s=document.querySelector(o);s&&e.target.classList.contains("game-cell")&&s.appendChild(a)}setupDragAndDrop(e){this.setupShipListeners(),this.setupCellListeners(e)}setupShipListeners(){document.querySelectorAll(".ship-wrapper").forEach((e=>{e.setAttribute("draggable",!0),e.addEventListener("dragstart",this.handleDragStart),e.addEventListener("dragend",this.handleDragEnd)}))}setupCellListeners(e){e.forEach((e=>{"computer"!==e.id&&e.querySelectorAll(".game-cell").forEach((e=>{e.addEventListener("dragover",this.handleDragOver),e.addEventListener("drop",this.handleDrop),this.disableUserSelect(e)}))}))}toggleElementVisibility(e){setTimeout((()=>{e.style.opacity="0"===e.style.opacity?"1":"0"}),0)}disableUserSelect(e){e.style.userSelect="none"}calculateNewPosition(e,n,t,r){const[a,i]=[Number(e.dataset.row),Number(e.dataset.col)],[o,l]="horizontal"===n?[a,i-t]:[a-t,i];if(s(o,l,n,r))return`.game-cell[data-row="${o}"][data-col="${l}"]`}}var b=t(72),y=t.n(b),v=t(825),w=t.n(v),x=t(659),S=t.n(x),C=t(56),k=t.n(C),E=t(540),L=t.n(E),P=t(113),M=t.n(P),A=t(208),z={};z.styleTagTransform=M(),z.setAttributes=k(),z.insert=S().bind(null,"head"),z.domAPI=w(),z.insertStyleElement=L(),y()(A.A,z),A.A&&A.A.locals&&A.A.locals,new class{constructor(e,n){this.game=e,this.view=n,this.handleGridClick=this.handleGridClick.bind(this),this.handleInitialShipSetup=this.handleInitialShipSetup.bind(this),this.handleFormStartClick=this.handleFormStartClick.bind(this),this.handleShipConfirmation=this.handleShipConfirmation.bind(this),this.handleMove=this.handleMove.bind(this),this.humanPlayersQueue=[]}init(){this.view.showPlayersForm(this.handleFormStartClick)}setupPlayerFleet(e){this.view.showShipSetup(e,(()=>this.handleShipConfirmation(e)))}setupNewGame(){const e=this.game.getPlayers(),n=this.game.getCurrentPlayer();this.view.showGameView(e,n),this.#e(),this.isComputerOnlyGame()&&this.game.performComputerTurn(this.handleMove)}handleGridClick(e){if("computer"===this.game.getCurrentPlayer().name)return;const n=e.target.closest(".game-cell");if(n){const t=[n.dataset.row,n.dataset.col];this.handleMove(t,e)}}handleFormStartClick(){const e=document.querySelectorAll(".menu-col");this.game.setupPlayers(e),this.humanPlayersQueue=this.game.getHumanPlayers(),this.handleInitialShipSetup()}handleInitialShipSetup(){if(0===this.humanPlayersQueue.length)return this.setupNewGame();const e=this.humanPlayersQueue.shift();this.setupPlayerFleet(e)}handleShipConfirmation(e){if(this.view.hasUnplacedShips()){const e="Can't continue unless all ships are placed on gameboard";return this.view.showError(e)}const n=this.view.getShipPlacementData();if(this.game.storePlayerShips(e,n),0===this.humanPlayersQueue.length)return this.setupNewGame();const t=this.humanPlayersQueue.shift();this.setupPlayerFleet(t)}handleMove(e,n=null){const t=this.game.getCurrentPlayer();if(n&&n.target.closest(".grid").id===t.name)return;const r=this.game.processMove(e);if(!r)return;const{opponentId:a,status:i}=r;this.view.updateGameCell(a,e,i);const o=this.game.checkWinner(i);if(o)return this.#n(o);this.game.endTurn(i,this.handleMove),this.#t()}isComputerOnlyGame(){return 0===this.game.getHumanPlayers().length}#n(e){this.#r(),this.view.showGameResult(e)}#t(){const e=this.game.getCurrentPlayer();this.view.updatePlayerLabel(e)}#e(){this.view.gridHTML.forEach((e=>{e.addEventListener("click",this.handleGridClick)}))}#r(){this.view.gridHTML.forEach((e=>{e.removeEventListener("click",this.handleGridClick)}))}}(new class{#a;#i;constructor(){this.#a=[],this.#i=null}getCurrentPlayer(){return this.#i}getPlayers(){return this.#a}getHumanPlayers(){return this.#a.filter((e=>"computer"!==e.name))}setupPlayers(e){const n=[...e];this.#a=n.map((e=>u.createPlayer(e))),this.#o()}storePlayerShips(e,n){n.forEach((n=>{e.gameBoard.place(new i(n.length,n.name),n.coordinates)}))}processMove(e){const n=this.#s(),t=n.gameBoard.receiveAttack(e);return"already_attacked"!==t?{opponentId:n.id,status:t}:null}checkWinner(){return this.#a[0].gameBoard.isClear()?this.#a[1].name:this.#a[1].gameBoard.isClear()?this.#a[0].name:null}endTurn(e,n){this.#l(e),"computer"===this.#i.name&&setTimeout((()=>{this.performComputerTurn(n)}),1e3)}performComputerTurn(e){const n=this.#s().gameBoard,t=this.#i.chooseRandomMove(n);t&&e(t)}#o(){this.#i=this.#a.find((e=>"computer"!==e.name))||this.#a[0]}#s(){return this.#a.find((e=>e!==this.#i))}#d(){this.#i=this.#s()}#l(e){"hit"!==e&&this.#d()}},new class{constructor(){this.DragAndDropManager=new f,this.gameWrapper=document.querySelector(".wrapper"),this.gameContainer=document.getElementById("game-container"),this.gridHTML=[],this.toggleShipDirection=this.toggleShipDirection.bind(this),this.toggleFormNameLabel=this.toggleFormNameLabel.bind(this),this.toggleNameLabel=this.toggleNameLabel.bind(this)}showPlayersForm(e){this.gameContainer.innerHTML="";const n=this.#c();this.gameContainer.appendChild(n),this.#h(e)}showShipSetup(e,n){this.gameContainer.innerHTML="",this.gameWrapper.style.flexDirection="row",this.#p();const t=function(){const e=document.createElement("div");return e.id="ship-menu",e.innerHTML='\n    <div class="menu-head">\n      <h2>Available Ships</h2>\n      <div class="tooltip">\n        <span>Drag and drop your ships on the gameboard to position them.</span> \n        <span>Click on ships to change their orientation.</span>\n      </div>\n    </div>\n    <div class="ship-container">\n        <div>Prowlers:</div>\n        <div class="ship-bay">\n            <div class="ship-wrapper prowler" id="prowler-1" data-type="prowler" data-length="1" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n            <div class="ship-wrapper prowler" id="prowler-2" data-type="prowler" data-length="1" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n            <div class="ship-wrapper prowler" id="prowler-3" data-type="prowler" data-length="1" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n            <div class="ship-wrapper prowler" id="prowler-4" data-type="prowler" data-length="1" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n        </div>\n        <div>Sea Serpent:</div>\n        <div class="ship-bay">\n            <div class="ship-wrapper serpent" id="serpent-1" data-type="serpent" data-length="2" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n            <div class="ship-wrapper serpent" id="serpent-2" data-type="serpent" data-length="2" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n            <div class="ship-wrapper serpent" id="serpent-3" data-type="serpent" data-length="2" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n        </div>\n        <div>Tempest Titan:</div>\n        <div class="ship-bay">\n            <div class="ship-wrapper titan" id="titan-1" data-type="titan" data-length="3" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n            <div class="ship-wrapper titan" id="titan-2" data-type="titan" data-length="3" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n        </div>\n        <div>Leaviathan Lord:</div>\n        <div class="ship-bay">\n            <div class="ship-wrapper lord" id="lord-1" data-type="lord" data-length="4" data-direction="horizontal">\n              <div class="game-object"></div>\n            </div>\n        </div>\n    </div>  \n    <button class="confirm-ships-btn">Confirm placement</button>\n    <span class="error-msg"></span>\n  ',setTimeout((()=>{e.querySelectorAll(".ship-wrapper").forEach((e=>{const n=e.getAttribute("data-length");if(n)for(let t=n;t>0;t--){const n=e.querySelector(".game-object"),t=document.createElement("div");t.classList.add("ship-cell"),n.appendChild(t)}e.style.width=32*n+(n-1)+"px"}))}),0),e}();this.gameWrapper.prepend(t),this.#m(e),this.#u(),this.#g(n),this.DragAndDropManager.setupDragAndDrop(this.gridHTML)}showGameView(e,n){this.gameContainer.innerHTML="",this.gameWrapper.style.flexDirection="column",this.#p(),this.#m(e),e.forEach((e=>this.#f(e))),this.updatePlayerLabel(n),this.showRevealCheckBox()}showRevealCheckBox(){const e=function(){const e=document.createElement("div");return e.id="reveal-check",e.innerHTML='\n    <input id="reveal" type="checkbox"></input>\n    <label for="reveal">Reveal ships?</label>\n    ',e}();this.gameWrapper.prepend(e),this.#b()}showGameResult(e){const n=function(e){const n=document.createElement("div");return n.className="result",n.innerHTML=`The game is over! <b>${g(e)}</b> is the winner!</div>`,n}(e);this.gameWrapper.prepend(n)}showError(e){const n=document.querySelector(".error-msg");n.textContent=e,n.classList.add("shake"),n.style.display="block",setTimeout((()=>{n.classList.remove("shake")}),500)}getShipPlacementData(){const e=document.querySelector(".grid").querySelectorAll(".ship-wrapper");return Array.from(e).map((e=>{const n=e.closest(".game-cell"),t=e.dataset.type,r=e.dataset.direction,a=Number(e.dataset.length);return{length:a,coordinates:o(a,r,Number(n.dataset.row),Number(n.dataset.col)),name:t}}))}updateGameCell(e,n,t){const[r,a]=n,i=`.row[data-row="${r}"] .game-cell[data-col="${a}"]`,o=document.querySelector(`.grid-wrap > div[data-id="${e}"]`).querySelector(i);switch(t){case"missed":o.classList.add("missed");break;case"hit":o.classList.add("hit");break;default:console.log(`Unknown status ${t}`)}}updatePlayerLabel(e){const n=document.querySelector(".player-label.active");n&&n.classList.remove("active");const t=document.querySelector(`.player-label[data-id="${e.id}"]`);t&&t.classList.add("active")}hasUnplacedShips(){const e=this.gameWrapper.querySelectorAll(".ship-bay");if(e){for(const n of e)if(0!==n.children.length)return!0;return!1}}toggleShipDirection(e){const n=e.currentTarget,t=n.querySelector(".game-object"),r=t.closest(".game-cell");if(!r)return;const{direction:a,length:i}=n.dataset,o="horizontal"===a,l=o?"vertical":"horizontal";s(r.dataset.row,r.dataset.col,l,i)&&(n.dataset.direction=l,t.style.flexDirection=o?"column":"row",o?(n.style.height=n.style.width,n.style.width="2rem"):(n.style.width=n.style.height,n.style.height="2rem"))}toggleFormNameLabel(e){const n="computer"===e.target.value;e.target.closest(".menu-col").querySelector('input[type="text"]').disabled=n,this.toggleNameLabel(e)}toggleNameLabel(e){e.target.closest(".menu-col").querySelector('label[for$="-name"').classList.toggle("disabled-label")}handleCheckBox(e){const n=e.target;document.querySelectorAll(".grid").forEach((e=>{e.querySelectorAll(".game-cell").forEach((e=>{n.checked?e.classList.remove("hide"):e.classList.add("hide")}))}))}#p(){const e=document.getElementById("ship-menu");e&&e.remove()}#b(){document.getElementById("reveal").addEventListener("change",this.handleCheckBox)}#g(e){document.querySelector(".confirm-ships-btn").addEventListener("click",e)}#u(){document.querySelectorAll(".ship-wrapper").forEach((e=>{e.addEventListener("click",this.toggleShipDirection)}))}#c(){return this.gameContainer.innerHTML="",function(){const e=document.createElement("div");return e.id="menu",e.innerHTML='\n    <form id="game-form">\n        <h2>Choose Players</h2>\n        <div>\n            <div class="menu-col">\n                <div>\n                    <label for="player1-type">Player 1:</label>\n                    <select id="player1-type" name="player1-type">\n                        <option value="human">Human</options>\n                        <option value="computer">Computer</options>\n                    </select>\n                </div>\n                <div>\n                    <label for="player1-name">Name:</label>\n                    <input id="player1-name" name="player1-name" type="text" required></input>\n                </div>\n            </div>\n            <div class="menu-col">\n                <div>\n                    <label for="player2-type">Player 2:</label>\n                    <select id="player2-type" name="player2-type">\n                        <option value="human">Human</options>\n                        <option selected value="computer">Computer</options>\n                    </select>\n                </div>\n                <div>\n                    <label for="player2-name" class="disabled-label">Name:</label>\n                    <input id="player2-name" name="player2-name" type="text" required disabled></input>\n                </div>\n            </div>\n        </div>\n        <button type="submit">Start Game</button>\n    </form>\n    ',e}()}#h(e){const n=document.getElementById("game-form");n.querySelectorAll('select[name$="-type"]').forEach((e=>{e.addEventListener("change",(e=>{this.toggleFormNameLabel(e)}))})),n.addEventListener("submit",(n=>{n.preventDefault(),e()}))}#m(e){const n=function(e){let n="";return(Array.isArray(e)?e:[e]).forEach((e=>{const{rowCount:t,columnCount:r}=e.gameBoard.getDimensions();let a="";for(let e=1;e<=r;e++)a+=`<div class="label-cell">${String.fromCharCode(64+e)}</div>`;let i="";for(let e=1;e<=t;e++)i+=`<div class="label-cell">${e}</div>`;let o=`\n      <div class="gameboard">\n      <div class="player-label" data-player="${e.name}" data-id="${e.id}">\n      ${g(e.name)} (${e.id})\n      </div>\n        <div class="label-row">\n          <div class="label-cell"></div>\n        ${a}\n        </div>\n        <div class="grid-wrap">\n          <div class="label-column">${i}</div>\n          <div id="${e.name}" data-id="${e.id}" class="grid">\n    `;for(let e=1;e<=t;e++){let n=`<div class="row" data-row="${e}">`;for(let t=1;t<=r;t++)n+=`<div class="game-cell hide" data-row="${e}" data-col="${t}"></div>`;n+="</div>",o+=n}o+="\n        </div>\n      </div>\n    </div>\n    ",n+=o})),n}(e);this.gameContainer.innerHTML=n,this.gridHTML=document.querySelectorAll(".grid")}#f(e){const n=e.grid();null!==n&&n.forEach(((n,t)=>{n.forEach(((n,r)=>{if(n.ship&&"object"==typeof n.ship){const a=`.row[data-row="${t+1}"] .game-cell[data-col="${r+1}"]`,i=document.querySelector(`.grid-wrap > [data-id="${e.id}"]`).querySelector(a);i.classList.add("ship"),i.classList.add(`${n.ship.name}`)}}))}))}}).init()})();