if (self.CavalryLogger) { CavalryLogger.start_js(["0dzEmK+"]); }

__d("CometNewsfeedKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f,g){"use strict";a=c("createKeyCommandWidget")();g["default"]=a}),98);
__d("HoveredProductIDContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({hoveredProductID:null,setHoveredProductID:c("emptyFunction")});g["default"]=b}),98);
__d("CometContentNotAvailable.react",["fbt","CometContentArea.react","NullStateGeneral","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx("div",{className:"k4urcfbm taijpn5t bkyfam09 j83agx80 bp9cbjyn",children:i.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:i.jsx(c("TetraNullState.react"),{headline:h._(/*FBT_CALL*/"Sorry, this content isn't available right now"/*FBT_CALL*/),icon:c("NullStateGeneral")})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("createPlainBlocksFromText",["CharacterMetadata","ContentBlock","generateRandomKey","immutable","sanitizeDraftText"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a.map(function(a){a=c("sanitizeDraftText")(a);var b=a.length;return new(c("ContentBlock"))({key:c("generateRandomKey")(),text:a,type:"unstyled",characterList:c("immutable").List(c("immutable").Repeat(c("CharacterMetadata").EMPTY,b))})})}g["default"]=a}),98);
__d("createCometComposerEditorStateFromTextWithEntities",["ContentState","DraftModifier","EditorState","SelectionState","UnicodeUtils","createPlainBlocksFromText","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e){e=e===void 0?{}:e;var f=e.allowUndo;f===void 0?!1:f;f=e.splitIntoBlocks;e=f===void 0?!1:f;if(a.ranges.length===0)return{__type:"plain-text",hasFocus:!1,isComposing:!1,isPendingSelection:!1,selectionOffsets:null,text:a.text};f=a.ranges;a=a.text;e=e?a.split(/(\r\n?|\n)/g):[a];var g=0,h=[],i=[];e.forEach(function(a,b){b%2===0&&(h.push(a),i.push(g)),g+=d("UnicodeUtils").strlen(a)});var j=c("createPlainBlocksFromText")(h);a=f.reduce(function(a,e,f){f=b(e,a);if(f==null)return a;var g=f.getLastCreatedEntityKey(),h=e.offset;e=h+e.length;var k,l,m,n;for(var o=0;o<i.length;o++){var p=i[o],q=i[o+1],r=q===void 0;(r||h>=p&&h<q)&&(k=j[o],l=h-p);if(r||e>=p&&e<q){m=j[o];n=e-p;break}}if(k==null||m==null){c("recoverableViolation")("createEditorStateWithRanges has failed to find the achor and focus of this entity","CometComposer");return a}r=d("UnicodeUtils").substr(k.getText(),0,l);q=r.length;p=d("UnicodeUtils").substr(m.getText(),0,n);e=p.length;h=new(c("SelectionState"))({anchorKey:k.getKey(),anchorOffset:q,focusKey:m.getKey(),focusOffset:e,hasFocus:!1,isBackward:!1});return d("DraftModifier").applyEntity(f,h,g)},c("ContentState").createFromBlockArray(j));return{__type:"editor-state-based",draftEditorState:c("EditorState").createWithContent(a)}}g["default"]=a}),98);
__d("CometPhotoTaggingConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;b=1;c=94;f.BOX_BORDER_SIZE=a;f.INITIAL_PHOTO_RENDER_SCALE=b;f.TAGGING_BOX_SIZE=c}),66);
__d("CometPhotoViewerViewStateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({highlightedKnownAITagID:null,isProductTagging:!1,knownAITags:null,tagModeEnabled:!1,unknownAITags:null});g["default"]=b}),98);
__d("CometPhotoViewerViewStateDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("LiveShoppingViewerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743808");c=b("FalcoLoggerInternal").create("live_shopping_viewer",a);e.exports=c}),null);
__d("XCometPageShopsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/shop/",Object.freeze({ref:"",preview:!1}),void 0);b=a;g["default"]=b}),98);