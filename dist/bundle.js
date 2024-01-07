!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.RealtimeCollabPlugin=t():e.RealtimeCollabPlugin=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>i});var o=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function l(e){try{c(n.next(e))}catch(e){r(e)}}function d(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,d)}c((n=n.apply(e,t||[])).next())}))},n=function(e,t){var o,n,i,r,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function d(d){return function(c){return function(d){if(o)throw new TypeError("Generator is already executing.");for(;r&&(r=0,d[0]&&(l=0)),l;)try{if(o=1,n&&(i=2&d[0]?n.return:d[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,d[1])).done)return i;switch(n=0,i&&(d=[2&d[0],i.value]),d[0]){case 0:case 1:i=d;break;case 4:return l.label++,{value:d[1],done:!1};case 5:l.label++,n=d[1],d=[0];continue;case 7:d=l.ops.pop(),l.trys.pop();continue;default:if(!((i=(i=l.trys).length>0&&i[i.length-1])||6!==d[0]&&2!==d[0])){l=0;continue}if(3===d[0]&&(!i||d[1]>i[0]&&d[1]<i[3])){l.label=d[1];break}if(6===d[0]&&l.label<i[1]){l.label=i[1],i=d;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(d);break}i[2]&&l.ops.pop(),l.trys.pop();continue}d=t.call(e,l)}catch(e){d=[6,e],n=0}finally{o=i=0}if(5&d[0])throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}([d,c])}}};const i=function(){function e(e){var t=e.editor,i=e.socket,r=e.socketMethodName,l=e.blockChangeThrottleDelay,d=void 0===l?500:l,c=this;this.editorBlockEvent="block changed",this.editorDomChangedEvent="redactor dom changed",this._isListening=!1,this.ignoreEvents={},this.onBlockSelectionChange=function(e){var t=e.mutations;console.log.apply(console,function(e,t,o){if(o||2===arguments.length)for(var n,i=0,r=t.length;i<r;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}(["🚀 ~ file: index.ts:117 ~ GroupCollab<SocketMethodName ~ mutations:"],t,!1))},this.onInlineSelectionChange=function(e){var t=document.getSelection();t&&(!t||c.isNodeInsideOfEditor(t.anchorNode))},this.onReceiveChange=function(e){switch(e.type){case"block-added":var t=e.index,o=e.block;c.addBlockToIgnoreListUntilNextRender(o.id,e.type),c.editor.blocks.insert(o.tool,o.data,null,t,!1,!1,o.id);break;case"block-changed":var n=e.index,i=e.block;c.addBlockToIgnoreListUntilNextRender(i.id,e.type),c.editor.blocks.update(i.id,i.data).catch((function(e){e.message==='Block with id "'.concat(i.id,'" not found')&&(c.addBlockToIgnoreListUntilNextRender(i.id,"block-added"),c.editor.blocks.insert(i.tool,i.data,null,n,!1,!1,i.id))}));break;case"block-moved":var r=e.toBlockId,l=e.fromBlockId,d=c.editor.blocks.getBlockIndex(r),a=c.editor.blocks.getBlockIndex(l);c.addBlockToIgnoreListUntilNextRender(l,e.type),c.editor.blocks.move(d,a);break;case"block-removed":var s=e.blockId;c.addBlockToIgnoreListUntilNextRender(s,e.type);var u=c.editor.blocks.getBlockIndex(s);c.editor.blocks.delete(u)}},this.onEditorBlockEvent=function(e){var t;if((null==e?void 0:e.event)instanceof CustomEvent&&e.event){var i=e.event;if(c.validateEventDetail(i)){var r=i.type,l=i.detail,d=l.target,a=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(l,["target"]);a.type=r;var s=d.id;(null===(t=c.ignoreEvents[s])||void 0===t?void 0:t.has(r))||setTimeout((function(){return o(c,void 0,void 0,(function(){var e,t,o,i,l,c,u;return n(this,(function(n){switch(n.label){case 0:return"block-changed"===r?"index"in a&&"number"==typeof a.index?(null===(l=this.handleBlockChange)||void 0===l||l.call(this,d,null!==(c=a.index)&&void 0!==c?c:0),[2]):[2]:[4,d.save()];case 1:return(e=n.sent())?("block-added"===(t={type:r,block:e}).type&&(t.index=a.index),"block-removed"===t.type&&(t.blockId=s),"block-moved"===t.type&&(i=(o=a).fromIndex,o.toIndex,t.fromBlockId=s,t.toBlockId=null===(u=this.editor.blocks.getBlockByIndex(i))||void 0===u?void 0:u.id),this.socket.send(this.socketMethodName,t),[2]):[2]}}))}))}),0)}}else console.error("block changed but its not custom event")},this.handleBlockChange=void 0,this.editor=t,this.socket=i,this.socketMethodName=null!=r?r:"editorjs-update",this.blockChangeThrottleDelay=d,this.initBlockChangeListener(),this.listen()}return Object.defineProperty(e.prototype,"isListening",{get:function(){return this._isListening},enumerable:!1,configurable:!0}),e.prototype.unlisten=function(){this.socket.off(this.socketMethodName),this.editor.off(this.editorBlockEvent,this.onEditorBlockEvent),this._isListening=!1},e.prototype.listen=function(){this.socket.on(this.socketMethodName,this.onReceiveChange),this.editor.on(this.editorBlockEvent,this.onEditorBlockEvent),this._isListening=!0},e.prototype.initBlockChangeListener=function(){var e=this;this.handleBlockChange=function(e,t,o){var n,i=o||{},r=i.noTrailing,l=void 0!==r&&r,d=i.noLeading,c=void 0!==d&&d,a=i.debounceMode,s=void 0===a?void 0:a,u=!1,h=0;function f(){n&&clearTimeout(n)}function v(){for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];var d=this,a=Date.now()-h;function v(){h=Date.now(),t.apply(d,i)}function p(){n=void 0}u||(c||!s||n||v(),f(),void 0===s&&a>e?c?(h=Date.now(),l||(n=setTimeout(s?p:v,e))):v():!0!==l&&(n=setTimeout(s?p:v,void 0===s?e-a:e)))}return v.cancel=function(e){var t=(e||{}).upcomingOnly,o=void 0!==t&&t;f(),u=!o},v}(this.blockChangeThrottleDelay,(function(t,i){return o(e,void 0,void 0,(function(){var e,o,r;return n(this,(function(n){switch(n.label){case 0:return this.isListening?(e=t.id,[4,t.save()]):[2];case 1:return(o=n.sent())?(r={type:"block-changed",block:o,index:i},this.isListening?(this.socket.send(this.socketMethodName,r),this.addBlockToIgnoreListUntilNextRender(e,"block-changed"),[2]):[2]):[2]}}))}))}))},e.prototype.validateEventDetail=function(e){return"object"==typeof e.detail&&e.detail&&("index"in e.detail&&"number"==typeof e.detail.index||"fromIndex"in e.detail&&"number"==typeof e.detail.fromIndex&&"toIndex"in e.detail&&"number"==typeof e.detail.toIndex)&&"target"in e.detail&&"object"==typeof e.detail.target&&e.detail.target},e.prototype.addBlockToIgnoreListUntilNextRender=function(e,t){var o=this;this.addBlockToIgnorelist(e,t),setTimeout((function(){o.removeBlockFromIgnorelist(e,t)}),0)},e.prototype.addBlockToIgnorelist=function(e,t){this.ignoreEvents[e]||(this.ignoreEvents[e]=new Set),this.ignoreEvents[e].add(t)},e.prototype.removeBlockFromIgnorelist=function(e,t){this.ignoreEvents[e].delete(t),this.ignoreEvents[e].size||delete this.ignoreEvents[e]},e.prototype.isNodeInsideOfEditor=function(e){var t,o,n,i,r,l,d=null===(n=null===(o=null===(t=this.editor)||void 0===t?void 0:t.ui)||void 0===o?void 0:o.nodes)||void 0===n?void 0:n.redactor;if(d instanceof HTMLElement)return d.contains(e);var c=null===(r=null===(i=this.editor)||void 0===i?void 0:i.configuration)||void 0===r?void 0:r.holder;if(c&&"string"==typeof c)return null===(l=document.getElementById(c))||void 0===l?void 0:l.contains(e);for(var a=e.parentElement;a&&a!==document.body;){var s=a.getAttribute("data-id"),u=a.classList.contains(this.editor.styles.block),h=s&&Boolean(this.editor.blocks.getById(s));if(u&&h)return!0;a=a.parentElement}return!1},e}();return t.default})()));