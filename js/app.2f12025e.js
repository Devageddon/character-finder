(function(){"use strict";var a={7079:function(a,e,t){var r=t(5130),c=t(6768);function s(a,e,t,r,s,o){const n=(0,c.g2)("router-view");return(0,c.uX)(),(0,c.Wv)(n)}var o={name:"App"},n=t(1241);const i=(0,n.A)(o,[["render",s]]);var l=i,d=t(1387);const h={class:"navbar"},u={class:"form-container"},p={class:"form-group"},m={class:"form-group"},b={class:"form-group"},C={class:"form-group"},v={class:"action-buttons"};function f(a,e,t,s,o,n){const i=(0,c.g2)("AppOverlay");return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.Lk)("div",h,[(0,c.Lk)("button",{class:"btn btn-back",onClick:e[0]||(e[0]=(...a)=>n.goBack&&n.goBack(...a))},"Back"),e[7]||(e[7]=(0,c.Lk)("h2",{class:"title"},"Add New Character",-1)),e[8]||(e[8]=(0,c.Lk)("div",{class:"navbar-spacer"},null,-1))]),(0,c.Lk)("div",u,[e[13]||(e[13]=(0,c.Lk)("h2",null,"Add New Character",-1)),(0,c.Lk)("div",p,[e[9]||(e[9]=(0,c.Lk)("label",{for:"name"},"Name:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"name","onUpdate:modelValue":e[1]||(e[1]=a=>o.character.name=a),placeholder:"Enter character name"},null,512),[[r.Jo,o.character.name]])]),(0,c.Lk)("div",m,[e[10]||(e[10]=(0,c.Lk)("label",{for:"path"},"Path:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"path","onUpdate:modelValue":e[2]||(e[2]=a=>o.character.path=a),placeholder:"Enter image URL"},null,512),[[r.Jo,o.character.path]])]),(0,c.Lk)("div",b,[e[11]||(e[11]=(0,c.Lk)("label",{for:"htmlCode"},"HTML Code:",-1)),(0,c.bo)((0,c.Lk)("textarea",{id:"htmlCode","onUpdate:modelValue":e[3]||(e[3]=a=>o.character.htmlCode=a),placeholder:"Enter HTML code"},null,512),[[r.Jo,o.character.htmlCode]])]),(0,c.Lk)("div",C,[e[12]||(e[12]=(0,c.Lk)("label",{for:"tags"},"Tags:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"tags","onUpdate:modelValue":e[4]||(e[4]=a=>o.tagsInput=a),placeholder:"Enter tags, separated by commas"},null,512),[[r.Jo,o.tagsInput]])]),(0,c.Lk)("div",v,[(0,c.Lk)("button",{class:"btn btn-cancel",onClick:e[5]||(e[5]=(...e)=>a.cancelAdd&&a.cancelAdd(...e))},"Cancel"),(0,c.Lk)("button",{class:"btn btn-save",onClick:e[6]||(e[6]=(...a)=>n.addCharacter&&n.addCharacter(...a))},"Add")]),(0,c.bF)(i,{visible:o.added,message:"Added!"},null,8,["visible"])])])}t(4114);var k=t(4161),g=t(6400);const L={apiKey:"AIzaSyB724ERPtmM_gm3K2H63fbfKEjrU3jwVsQ",authDomain:"character-finder-70853.firebaseapp.com",projectId:"character-finder-70853",storageBucket:"character-finder-70853.appspot.com",messagingSenderId:"122301174396",appId:"1:122301174396:web:14ba70377dbcb829656ff9",measurementId:"G-C0Y1ED8FZP"},y=(0,g.Wp)(L),E=(0,k.C3)(y);var w=t(4232);const A={key:0,class:"overlay-background"},I={class:"overlay"},T={class:"overlay-message"};function D(a,e,t,r,s,o){return t.visible?((0,c.uX)(),(0,c.CE)("div",A,[(0,c.Lk)("div",I,[(0,c.Lk)("p",T,(0,w.v_)(t.message),1)])])):(0,c.Q3)("",!0)}var x={props:{visible:{type:Boolean,required:!0},message:{type:String,required:!0}}};const M=(0,n.A)(x,[["render",D],["__scopeId","data-v-ba1c96ea"]]);var X=M,H={components:{AppOverlay:X},data(){return{character:{name:"",path:"",htmlCode:"",tags:[]},tagsInput:"",added:!1}},methods:{async addCharacter(){if(this.character.name&&this.character.path){this.character.tags=this.tagsInput.split(",").map((a=>a.trim()));try{const a=(0,k.VC)((0,k.KR)(E,"characters"));await(0,k.hZ)(a,this.character),this.added=!0,this.character.name="",this.character.path="",this.character.htmlCode="",this.tagsInput="",setTimeout((()=>{this.added=!1,this.$router.push({name:"CharacterList"})}),2e3)}catch(a){console.error("Error adding character:",a),alert("Failed to add character.")}}else alert("Name and Path are required.")},goBack(){this.$router.push({name:"CharacterList"})}}};const _=(0,n.A)(H,[["render",f],["__scopeId","data-v-5b06b7ee"]]);var B=_;const O={class:"navbar"},Q={class:"details-container card"},$={class:"character-image-details"},j=["src"],V={class:"character-info"},J={class:"form-group"},N=["disabled"],U={class:"form-group"},F=["disabled"],K={class:"form-group"},z={class:"html-code-container"},P=["disabled"],R={key:0,class:"copy-overlay-details"},S={class:"form-group"},q=["disabled"],W={key:0,class:"action-buttons"},Y={class:"left-actions"},Z={class:"right-actions"},G={key:0,class:"delete-confirmation-overlay"},aa={class:"delete-confirmation-box"};function ea(a,e,t,s,o,n){return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.Lk)("div",O,[(0,c.Lk)("button",{class:"btn btn-close",onClick:e[0]||(e[0]=(...a)=>n.goBack&&n.goBack(...a))},"Back"),e[12]||(e[12]=(0,c.Lk)("h2",{class:"title"},"Character Details",-1)),o.isEditable?(0,c.Q3)("",!0):((0,c.uX)(),(0,c.CE)("button",{key:0,class:"btn btn-edit",onClick:e[1]||(e[1]=(...a)=>n.toggleEdit&&n.toggleEdit(...a))},"Edit"))]),(0,c.Lk)("div",Q,[(0,c.Lk)("div",$,[(0,c.Lk)("img",{src:o.character.path,alt:"Character Image"},null,8,j)]),(0,c.Lk)("div",V,[(0,c.Lk)("div",J,[e[13]||(e[13]=(0,c.Lk)("label",{for:"name"},"Name:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"name","onUpdate:modelValue":e[2]||(e[2]=a=>o.character.name=a),disabled:!o.isEditable},null,8,N),[[r.Jo,o.character.name]])]),(0,c.Lk)("div",U,[e[14]||(e[14]=(0,c.Lk)("label",{for:"path"},"Path:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"path","onUpdate:modelValue":e[3]||(e[3]=a=>o.character.path=a),disabled:!o.isEditable},null,8,F),[[r.Jo,o.character.path]])]),(0,c.Lk)("div",K,[e[15]||(e[15]=(0,c.Lk)("label",{for:"htmlCode"},"HTML Code:",-1)),(0,c.Lk)("div",z,[(0,c.bo)((0,c.Lk)("textarea",{id:"htmlCode","onUpdate:modelValue":e[4]||(e[4]=a=>o.character.htmlCode=a),disabled:!o.isEditable},null,8,P),[[r.Jo,o.character.htmlCode]]),o.copied?((0,c.uX)(),(0,c.CE)("div",R,"Copied!")):(0,c.Q3)("",!0)]),(0,c.Lk)("button",{class:"btn btn-copy",onClick:e[5]||(e[5]=(...a)=>n.copyHTMLCode&&n.copyHTMLCode(...a))},"Copy HTML Code")]),(0,c.Lk)("div",S,[e[16]||(e[16]=(0,c.Lk)("label",{for:"tags"},"Tags:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"tags","onUpdate:modelValue":e[6]||(e[6]=a=>o.tagsInput=a),disabled:!o.isEditable,placeholder:"Enter tags, separated by commas"},null,8,q),[[r.Jo,o.tagsInput]])]),o.isEditable?((0,c.uX)(),(0,c.CE)("div",W,[(0,c.Lk)("div",Y,[(0,c.Lk)("button",{class:"btn btn-delete",onClick:e[7]||(e[7]=(...a)=>n.confirmDelete&&n.confirmDelete(...a))},"Delete")]),(0,c.Lk)("div",Z,[(0,c.Lk)("button",{class:"btn btn-cancel",onClick:e[8]||(e[8]=(...a)=>n.cancelEdit&&n.cancelEdit(...a))},"Cancel"),(0,c.Lk)("button",{class:"btn btn-save",onClick:e[9]||(e[9]=(...a)=>n.saveDetails&&n.saveDetails(...a))},"Save")])])):(0,c.Q3)("",!0)])]),o.showDeleteConfirmation?((0,c.uX)(),(0,c.CE)("div",G,[(0,c.Lk)("div",aa,[e[17]||(e[17]=(0,c.Lk)("p",null,"Are you sure you want to delete this character?",-1)),(0,c.Lk)("button",{class:"btn btn-yes",onClick:e[10]||(e[10]=(...a)=>n.deleteCharacter&&n.deleteCharacter(...a))},"Yes"),(0,c.Lk)("button",{class:"btn btn-no",onClick:e[11]||(e[11]=(...a)=>n.closeDeleteConfirmation&&n.closeDeleteConfirmation(...a))},"No")])])):(0,c.Q3)("",!0)])}var ta={data(){return{character:{name:"",path:"",htmlCode:"",tags:[]},isEditable:!1,tagsInput:"",copied:!1,showDeleteConfirmation:!1}},methods:{async fetchCharacterDetails(){const a=this.$route.params.id,e=(0,k.KR)(E,`characters/${a}`);try{const a=await(0,k.Jt)(e);a.exists()?(this.character=a.val(),this.tagsInput=this.character.tags.join(", ")):console.error("Character not found")}catch(t){console.error("Error fetching character details:",t)}},toggleEdit(){this.isEditable=!this.isEditable},cancelEdit(){this.isEditable=!1,this.fetchCharacterDetails()},async saveDetails(){const a=this.$route.params.id;this.character.tags=this.tagsInput.split(",").map((a=>a.trim()));const e=(0,k.KR)(E,`characters/${a}`);try{await(0,k.yo)(e,this.character),this.isEditable=!1}catch(t){console.error("Error saving character details:",t)}},copyHTMLCode(){navigator.clipboard.writeText(this.character.htmlCode).then((()=>{this.copied=!0,setTimeout((()=>{this.copied=!1}),2e3)})).catch((a=>console.error("Error copying HTML Code:",a)))},goBack(){this.$router.push({name:"CharacterList"})},confirmDelete(){this.showDeleteConfirmation=!0},closeDeleteConfirmation(){this.showDeleteConfirmation=!1},async deleteCharacter(){const a=this.$route.params.id,e=(0,k.KR)(E,`characters/${a}`);try{await(0,k.TF)(e),this.$router.push({name:"CharacterList"})}catch(t){console.error("Error deleting character:",t)}}},mounted(){this.fetchCharacterDetails()}};const ra=(0,n.A)(ta,[["render",ea],["__scopeId","data-v-3be7e3b4"]]);var ca=ra;const sa={class:"character-list"},oa={class:"search-bar flex-center gap-10 p-20 bg-secondary"},na={key:0,class:"character-grid"},ia=["onClick"],la=["src"],da={key:0,class:"copy-overlay"},ha={class:"title-button-container"},ua=["onClick"],pa={key:1,class:"no-characters"},ma={key:2,class:"all-characters"};function ba(a,e,t,s,o,n){const i=(0,c.g2)("AppNavbar");return(0,c.uX)(),(0,c.CE)("div",sa,[(0,c.bF)(i),(0,c.Lk)("div",oa,[(0,c.bo)((0,c.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.searchQuery=a),type:"text",placeholder:"Search characters...",class:"search-input w-500 font-medium",onInput:e[1]||(e[1]=(...a)=>n.searchCharacters&&n.searchCharacters(...a))},null,544),[[r.Jo,o.searchQuery]]),(0,c.Lk)("button",{class:"btn btn-search",onClick:e[2]||(e[2]=(...a)=>n.searchCharacters&&n.searchCharacters(...a))},"Search")]),o.filteredCharacters.length?((0,c.uX)(),(0,c.CE)("div",na,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(o.filteredCharacters,((a,t)=>((0,c.uX)(),(0,c.CE)("div",{key:a.id,class:"character-card"},[(0,c.Lk)("div",{class:"character-image",onClick:e=>n.copyHTMLCode(a.htmlCode,t)},[(0,c.Lk)("img",{src:a.path,alt:"Character Image"},null,8,la),o.copiedIndex===t?((0,c.uX)(),(0,c.CE)("div",da,"Copied!")):(0,c.Q3)("",!0)],8,ia),(0,c.Lk)("div",ha,[(0,c.Lk)("h3",null,(0,w.v_)(a.name),1),(0,c.Lk)("button",{onClick:e=>n.openCharacterDetails(a),class:"btn btn-info"},e[3]||(e[3]=[(0,c.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",class:"bi bi-info-circle",viewBox:"0 0 16 16"},[(0,c.Lk)("path",{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12z"}),(0,c.Lk)("path",{d:"M8.93 6.588a.5.5 0 1 0-.854-.354L8 7l-.076-.354a.5.5 0 0 0-.854.354l.252 1.086a.5.5 0 0 0 .487.374h1.224a.5.5 0 0 0 .487-.374l.252-1.086zM8 4.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM9 11v1H7v-1h2zm0-1V9H7v1h2z"})],-1)]),8,ua)])])))),128))])):o.searchQuery.trim()?((0,c.uX)(),(0,c.CE)("div",pa,e[4]||(e[4]=[(0,c.Lk)("p",null,"No characters found. Try adjusting your search.",-1)]))):((0,c.uX)(),(0,c.CE)("div",ma,e[5]||(e[5]=[(0,c.Lk)("p",null,"To find an image, please search for a tag.",-1)])))])}const Ca={class:"navbar"};function va(a,e,t,r,s,o){return(0,c.uX)(),(0,c.CE)("div",Ca,[e[1]||(e[1]=(0,c.Lk)("h2",{class:"title"},"Character Finder",-1)),o.showAddButton?((0,c.uX)(),(0,c.CE)("button",{key:0,class:"btn btn-add",onClick:e[0]||(e[0]=(...a)=>o.navigateToAddCharacter&&o.navigateToAddCharacter(...a))},"Add Character")):(0,c.Q3)("",!0)])}var fa={name:"AppNavbar",computed:{showAddButton(){return"AddCharacter"!==this.$route.name}},methods:{navigateToAddCharacter(){this.$router.push({name:"AddCharacter"})}}};const ka=(0,n.A)(fa,[["render",va],["__scopeId","data-v-34de775a"]]);var ga=ka,La={components:{AppNavbar:ga},data(){return{searchQuery:"",characters:[],filteredCharacters:[],copiedIndex:null}},methods:{openCharacterDetails(a){this.$router.push({name:"CharacterDetails",params:{id:a.id}})},copyHTMLCode(a,e){navigator.clipboard.writeText(a).then((()=>{this.copiedIndex=e,setTimeout((()=>{this.copiedIndex=null}),2e3)})).catch((a=>{console.error("Failed to copy HTML Code:",a),alert("Failed to copy HTML Code.")}))},searchCharacters(){if(""===this.searchQuery.trim())return void(this.filteredCharacters=[]);const a=this.searchQuery.toLowerCase().split(",").map((a=>a.trim())).filter((a=>""!==a));this.filteredCharacters=this.characters.filter((e=>{const t=a.some((a=>e.name.toLowerCase().includes(a))),r=e.tags&&e.tags.some((e=>a.some((a=>e.toLowerCase().includes(a)))));return t||r}))},async fetchCharacters(){const a=(0,k.KR)(E,"characters/");try{const e=await(0,k.Jt)(a);e.exists()?this.characters=Object.entries(e.val()).map((([a,e])=>({id:a,...e}))):console.log("No characters found in the database.")}catch(e){console.error("Error fetching characters:",e)}}},created(){this.fetchCharacters()}};const ya=(0,n.A)(La,[["render",ba]]);var Ea=ya;const wa=[{path:"/",name:"CharacterList",component:Ea},{path:"/character/:id",name:"CharacterDetails",component:ca,props:!0},{path:"/add-character",name:"AddCharacter",component:B},{path:"/:pathMatch(.*)*",redirect:"/"}],Aa=(0,d.aE)({history:(0,d.LA)(),routes:wa});var Ia=Aa;const Ta=(0,r.Ef)(l);Ta.use(Ia),Ta.mount("#app")}},e={};function t(r){var c=e[r];if(void 0!==c)return c.exports;var s=e[r]={exports:{}};return a[r].call(s.exports,s,s.exports,t),s.exports}t.m=a,function(){var a=[];t.O=function(e,r,c,s){if(!r){var o=1/0;for(d=0;d<a.length;d++){r=a[d][0],c=a[d][1],s=a[d][2];for(var n=!0,i=0;i<r.length;i++)(!1&s||o>=s)&&Object.keys(t.O).every((function(a){return t.O[a](r[i])}))?r.splice(i--,1):(n=!1,s<o&&(o=s));if(n){a.splice(d--,1);var l=c();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=a.length;d>0&&a[d-1][2]>s;d--)a[d]=a[d-1];a[d]=[r,c,s]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var r in e)t.o(e,r)&&!t.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,r){var c,s,o=r[0],n=r[1],i=r[2],l=0;if(o.some((function(e){return 0!==a[e]}))){for(c in n)t.o(n,c)&&(t.m[c]=n[c]);if(i)var d=i(t)}for(e&&e(r);l<o.length;l++)s=o[l],t.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return t.O(d)},r=self["webpackChunkcharacter_finder"]=self["webpackChunkcharacter_finder"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(7079)}));r=t.O(r)})();
//# sourceMappingURL=app.2f12025e.js.map