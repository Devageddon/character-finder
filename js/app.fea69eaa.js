(function(){"use strict";var e={7562:function(e,a,t){var r=t(5130),c=t(6768);function o(e,a,t,r,o,s){const n=(0,c.g2)("router-view");return(0,c.uX)(),(0,c.Wv)(n)}var s={name:"App"},n=t(1241);const i=(0,n.A)(s,[["render",o]]);var l=i,d=t(1387);const h={class:"navbar"},u={class:"form-container"},p={class:"form-group"},m={class:"form-group"},b={class:"form-group"},C={class:"form-group"},v={class:"action-buttons"};function f(e,a,t,o,s,n){const i=(0,c.g2)("AppOverlay");return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.Lk)("div",h,[(0,c.Lk)("button",{class:"btn btn-back",onClick:a[0]||(a[0]=(...e)=>n.goBack&&n.goBack(...e))},"Back"),a[7]||(a[7]=(0,c.Lk)("h2",{class:"title"},"Add New Character",-1)),a[8]||(a[8]=(0,c.Lk)("div",{class:"navbar-spacer"},null,-1))]),(0,c.Lk)("div",u,[a[13]||(a[13]=(0,c.Lk)("h2",null,"Add New Character",-1)),(0,c.Lk)("div",p,[a[9]||(a[9]=(0,c.Lk)("label",{for:"name"},"Name:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"name","onUpdate:modelValue":a[1]||(a[1]=e=>s.character.name=e),placeholder:"Enter character name"},null,512),[[r.Jo,s.character.name]])]),(0,c.Lk)("div",m,[a[10]||(a[10]=(0,c.Lk)("label",{for:"path"},"Path:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"path","onUpdate:modelValue":a[2]||(a[2]=e=>s.character.path=e),placeholder:"Enter image URL"},null,512),[[r.Jo,s.character.path]])]),(0,c.Lk)("div",b,[a[11]||(a[11]=(0,c.Lk)("label",{for:"htmlCode"},"HTML Code:",-1)),(0,c.bo)((0,c.Lk)("textarea",{id:"htmlCode","onUpdate:modelValue":a[3]||(a[3]=e=>s.character.htmlCode=e),placeholder:"Enter HTML code"},null,512),[[r.Jo,s.character.htmlCode]])]),(0,c.Lk)("div",C,[a[12]||(a[12]=(0,c.Lk)("label",{for:"tags"},"Tags:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"tags","onUpdate:modelValue":a[4]||(a[4]=e=>s.tagsInput=e),placeholder:"Enter tags, separated by commas"},null,512),[[r.Jo,s.tagsInput]])]),(0,c.Lk)("div",v,[(0,c.Lk)("button",{class:"btn btn-cancel",onClick:a[5]||(a[5]=(...a)=>e.cancelAdd&&e.cancelAdd(...a))},"Cancel"),(0,c.Lk)("button",{class:"btn btn-save",onClick:a[6]||(a[6]=(...e)=>n.addCharacter&&n.addCharacter(...e))},"Add")]),(0,c.bF)(i,{visible:s.added,message:"Added!"},null,8,["visible"])])])}t(4114);var k=t(4161),g=t(6400);const L={apiKey:"AIzaSyB724ERPtmM_gm3K2H63fbfKEjrU3jwVsQ",authDomain:"character-finder-70853.firebaseapp.com",projectId:"character-finder-70853",storageBucket:"character-finder-70853.appspot.com",messagingSenderId:"122301174396",appId:"1:122301174396:web:14ba70377dbcb829656ff9",measurementId:"G-C0Y1ED8FZP"},y=(0,g.Wp)(L),E=(0,k.C3)(y);var w=t(4232);const A={key:0,class:"overlay-background"},I={class:"overlay"},T={class:"overlay-message"};function x(e,a,t,r,o,s){return t.visible?((0,c.uX)(),(0,c.CE)("div",A,[(0,c.Lk)("div",I,[(0,c.Lk)("p",T,(0,w.v_)(t.message),1)])])):(0,c.Q3)("",!0)}var D={props:{visible:{type:Boolean,required:!0},message:{type:String,required:!0}}};const M=(0,n.A)(D,[["render",x],["__scopeId","data-v-ba1c96ea"]]);var X=M,_={components:{AppOverlay:X},data(){return{character:{name:"",path:"",htmlCode:"",tags:[]},tagsInput:"",added:!1}},methods:{async addCharacter(){if(this.character.name&&this.character.path){this.character.tags=this.tagsInput.split(",").map((e=>e.trim()));try{const e=(0,k.VC)((0,k.KR)(E,"characters"));await(0,k.hZ)(e,this.character),this.added=!0,this.character.name="",this.character.path="",this.character.htmlCode="",this.tagsInput="",setTimeout((()=>{this.added=!1,this.$router.push({name:"CharacterList"})}),2e3)}catch(e){console.error("Error adding character:",e),alert("Failed to add character.")}}else alert("Name and Path are required.")},goBack(){this.$router.push({name:"CharacterList"})}}};const H=(0,n.A)(_,[["render",f],["__scopeId","data-v-5b06b7ee"]]);var B=H;const O={class:"navbar"},Q={class:"details-container card"},$={class:"character-image-details"},j=["src"],V={class:"character-info"},J={class:"form-group"},N=["disabled"],U={class:"form-group"},F=["disabled"],K={class:"form-group"},z={class:"html-code-container"},P=["disabled"],R={key:0,class:"copy-overlay-details"},S={class:"form-group"},q=["disabled"],W={key:0,class:"action-buttons"},Y={class:"left-actions"},Z={class:"right-actions"},G={key:0,class:"delete-confirmation-overlay"},ee={class:"delete-confirmation-box"};function ae(e,a,t,o,s,n){return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.Lk)("div",O,[(0,c.Lk)("button",{class:"btn btn-close",onClick:a[0]||(a[0]=(...e)=>n.goBack&&n.goBack(...e))},"Back"),a[12]||(a[12]=(0,c.Lk)("h2",{class:"title"},"Character Details",-1)),s.isEditable?(0,c.Q3)("",!0):((0,c.uX)(),(0,c.CE)("button",{key:0,class:"btn btn-edit",onClick:a[1]||(a[1]=(...e)=>n.toggleEdit&&n.toggleEdit(...e))},"Edit"))]),(0,c.Lk)("div",Q,[(0,c.Lk)("div",$,[(0,c.Lk)("img",{src:s.character.path,alt:"Character Image"},null,8,j)]),(0,c.Lk)("div",V,[(0,c.Lk)("div",J,[a[13]||(a[13]=(0,c.Lk)("label",{for:"name"},"Name:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"name","onUpdate:modelValue":a[2]||(a[2]=e=>s.character.name=e),disabled:!s.isEditable},null,8,N),[[r.Jo,s.character.name]])]),(0,c.Lk)("div",U,[a[14]||(a[14]=(0,c.Lk)("label",{for:"path"},"Path:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"path","onUpdate:modelValue":a[3]||(a[3]=e=>s.character.path=e),disabled:!s.isEditable},null,8,F),[[r.Jo,s.character.path]])]),(0,c.Lk)("div",K,[a[15]||(a[15]=(0,c.Lk)("label",{for:"htmlCode"},"HTML Code:",-1)),(0,c.Lk)("div",z,[(0,c.bo)((0,c.Lk)("textarea",{id:"htmlCode","onUpdate:modelValue":a[4]||(a[4]=e=>s.character.htmlCode=e),disabled:!s.isEditable},null,8,P),[[r.Jo,s.character.htmlCode]]),s.copied?((0,c.uX)(),(0,c.CE)("div",R,"Copied!")):(0,c.Q3)("",!0)]),(0,c.Lk)("button",{class:"btn btn-copy",onClick:a[5]||(a[5]=(...e)=>n.copyHTMLCode&&n.copyHTMLCode(...e))},"Copy HTML Code")]),(0,c.Lk)("div",S,[a[16]||(a[16]=(0,c.Lk)("label",{for:"tags"},"Tags:",-1)),(0,c.bo)((0,c.Lk)("input",{id:"tags","onUpdate:modelValue":a[6]||(a[6]=e=>s.tagsInput=e),disabled:!s.isEditable,placeholder:"Enter tags, separated by commas"},null,8,q),[[r.Jo,s.tagsInput]])]),s.isEditable?((0,c.uX)(),(0,c.CE)("div",W,[(0,c.Lk)("div",Y,[(0,c.Lk)("button",{class:"btn btn-delete",onClick:a[7]||(a[7]=(...e)=>n.confirmDelete&&n.confirmDelete(...e))},"Delete")]),(0,c.Lk)("div",Z,[(0,c.Lk)("button",{class:"btn btn-cancel",onClick:a[8]||(a[8]=(...e)=>n.cancelEdit&&n.cancelEdit(...e))},"Cancel"),(0,c.Lk)("button",{class:"btn btn-save",onClick:a[9]||(a[9]=(...e)=>n.saveDetails&&n.saveDetails(...e))},"Save")])])):(0,c.Q3)("",!0)])]),s.showDeleteConfirmation?((0,c.uX)(),(0,c.CE)("div",G,[(0,c.Lk)("div",ee,[a[17]||(a[17]=(0,c.Lk)("p",null,"Are you sure you want to delete this character?",-1)),(0,c.Lk)("button",{class:"btn btn-yes",onClick:a[10]||(a[10]=(...e)=>n.deleteCharacter&&n.deleteCharacter(...e))},"Yes"),(0,c.Lk)("button",{class:"btn btn-no",onClick:a[11]||(a[11]=(...e)=>n.closeDeleteConfirmation&&n.closeDeleteConfirmation(...e))},"No")])])):(0,c.Q3)("",!0)])}var te={data(){return{character:{name:"",path:"",htmlCode:"",tags:[]},isEditable:!1,tagsInput:"",copied:!1,showDeleteConfirmation:!1}},methods:{async fetchCharacterDetails(){const e=this.$route.params.id,a=(0,k.KR)(E,`characters/${e}`);try{const e=await(0,k.Jt)(a);e.exists()?(this.character=e.val(),this.tagsInput=this.character.tags.join(", ")):console.error("Character not found")}catch(t){console.error("Error fetching character details:",t)}},toggleEdit(){this.isEditable=!this.isEditable},cancelEdit(){this.isEditable=!1,this.fetchCharacterDetails()},async saveDetails(){const e=this.$route.params.id;this.character.tags=this.tagsInput.split(",").map((e=>e.trim()));const a=(0,k.KR)(E,`characters/${e}`);try{await(0,k.yo)(a,this.character),this.isEditable=!1}catch(t){console.error("Error saving character details:",t)}},copyHTMLCode(){if(navigator.clipboard)navigator.clipboard.writeText(this.character.htmlCode).then((()=>{this.copied=!0,setTimeout((()=>{this.copied=!1}),2e3)})).catch((e=>console.error("Error copying HTML Code:",e)));else{const a=document.createElement("textarea");a.value=this.character.htmlCode,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select();try{document.execCommand("copy"),this.copied=!0,setTimeout((()=>{this.copied=!1}),2e3)}catch(e){console.error("Fallback: Error copying HTML Code.",e)}document.body.removeChild(a)}},goBack(){this.$router.push({name:"CharacterList"})},confirmDelete(){this.showDeleteConfirmation=!0},closeDeleteConfirmation(){this.showDeleteConfirmation=!1},async deleteCharacter(){const e=this.$route.params.id,a=(0,k.KR)(E,`characters/${e}`);try{await(0,k.TF)(a),this.$router.push({name:"CharacterList"})}catch(t){console.error("Error deleting character:",t)}}},mounted(){this.fetchCharacterDetails()}};const re=(0,n.A)(te,[["render",ae],["__scopeId","data-v-00934c7a"]]);var ce=re;const oe={class:"character-list"},se={class:"search-bar flex-center gap-10 p-20 bg-secondary"},ne={key:0,class:"character-grid"},ie=["onClick"],le=["src"],de={key:0,class:"copy-overlay"},he={class:"title-button-container"},ue=["onClick"],pe={key:1,class:"no-characters"},me={key:2,class:"all-characters"};function be(e,a,t,o,s,n){const i=(0,c.g2)("AppNavbar");return(0,c.uX)(),(0,c.CE)("div",oe,[(0,c.bF)(i),(0,c.Lk)("div",se,[(0,c.bo)((0,c.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>s.searchQuery=e),type:"text",placeholder:"Search characters...",class:"search-input w-500 font-medium",onInput:a[1]||(a[1]=(...e)=>n.searchCharacters&&n.searchCharacters(...e))},null,544),[[r.Jo,s.searchQuery]]),(0,c.Lk)("button",{class:"btn btn-search",onClick:a[2]||(a[2]=(...e)=>n.searchCharacters&&n.searchCharacters(...e))},"Search")]),s.filteredCharacters.length?((0,c.uX)(),(0,c.CE)("div",ne,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(s.filteredCharacters,((e,t)=>((0,c.uX)(),(0,c.CE)("div",{key:e.id,class:"character-card"},[(0,c.Lk)("div",{class:"character-image",onClick:a=>n.copyHTMLCode(e.htmlCode,t)},[(0,c.Lk)("img",{src:e.path,alt:"Character Image"},null,8,le),s.copiedIndex===t?((0,c.uX)(),(0,c.CE)("div",de,"Copied!")):(0,c.Q3)("",!0)],8,ie),(0,c.Lk)("div",he,[(0,c.Lk)("h3",null,(0,w.v_)(e.name),1),(0,c.Lk)("button",{onClick:a=>n.openCharacterDetails(e),class:"btn btn-info"},a[3]||(a[3]=[(0,c.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",class:"bi bi-info-circle",viewBox:"0 0 16 16"},[(0,c.Lk)("path",{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12z"}),(0,c.Lk)("path",{d:"M8.93 6.588a.5.5 0 1 0-.854-.354L8 7l-.076-.354a.5.5 0 0 0-.854.354l.252 1.086a.5.5 0 0 0 .487.374h1.224a.5.5 0 0 0 .487-.374l.252-1.086zM8 4.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM9 11v1H7v-1h2zm0-1V9H7v1h2z"})],-1)]),8,ue)])])))),128))])):s.searchQuery.trim()?((0,c.uX)(),(0,c.CE)("div",pe,a[4]||(a[4]=[(0,c.Lk)("p",null,"No characters found. Try adjusting your search.",-1)]))):((0,c.uX)(),(0,c.CE)("div",me,a[5]||(a[5]=[(0,c.Lk)("p",null,"To find an image, please search for a tag.",-1)])))])}const Ce={class:"navbar"};function ve(e,a,t,r,o,s){return(0,c.uX)(),(0,c.CE)("div",Ce,[a[1]||(a[1]=(0,c.Lk)("h2",{class:"title"},"Character Finder",-1)),s.showAddButton?((0,c.uX)(),(0,c.CE)("button",{key:0,class:"btn btn-add",onClick:a[0]||(a[0]=(...e)=>s.navigateToAddCharacter&&s.navigateToAddCharacter(...e))},"Add Character")):(0,c.Q3)("",!0)])}var fe={name:"AppNavbar",computed:{showAddButton(){return"AddCharacter"!==this.$route.name}},methods:{navigateToAddCharacter(){this.$router.push({name:"AddCharacter"})}}};const ke=(0,n.A)(fe,[["render",ve],["__scopeId","data-v-34de775a"]]);var ge=ke,Le={components:{AppNavbar:ge},data(){return{searchQuery:"",characters:[],filteredCharacters:[],copiedIndex:null}},methods:{openCharacterDetails(e){this.$router.push({name:"CharacterDetails",params:{id:e.id}})},copyHTMLCode(e,a){if(navigator.clipboard)navigator.clipboard.writeText(e).then((()=>{this.copiedIndex=a,setTimeout((()=>{this.copiedIndex=null}),2e3)})).catch((e=>console.error("Error copying HTML Code:",e)));else{const r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{document.execCommand("copy"),this.copiedIndex=a,setTimeout((()=>{this.copiedIndex=null}),2e3)}catch(t){console.error("Fallback: Error copying HTML Code.",t)}document.body.removeChild(r)}},searchCharacters(){if(""===this.searchQuery.trim())return void(this.filteredCharacters=[]);const e=this.searchQuery.toLowerCase().split(",").map((e=>e.trim())).filter((e=>""!==e));this.filteredCharacters=this.characters.filter((a=>{const t=e.some((e=>a.name.toLowerCase().includes(e))),r=a.tags&&a.tags.some((a=>e.some((e=>a.toLowerCase().includes(e)))));return t||r}))},async fetchCharacters(){const e=(0,k.KR)(E,"characters/");try{const a=await(0,k.Jt)(e);a.exists()?this.characters=Object.entries(a.val()).map((([e,a])=>({id:e,...a}))):console.log("No characters found in the database.")}catch(a){console.error("Error fetching characters:",a)}}},created(){this.fetchCharacters()}};const ye=(0,n.A)(Le,[["render",be],["__scopeId","data-v-0ffbbfff"]]);var Ee=ye;const we=[{path:"/",name:"CharacterList",component:Ee},{path:"/character/:id",name:"CharacterDetails",component:ce,props:!0},{path:"/add-character",name:"AddCharacter",component:B},{path:"/:pathMatch(.*)*",redirect:"/"}],Ae=(0,d.aE)({history:(0,d.LA)(),routes:we});var Ie=Ae;const Te=(0,r.Ef)(l);Te.use(Ie),Te.mount("#app")}},a={};function t(r){var c=a[r];if(void 0!==c)return c.exports;var o=a[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,r,c,o){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],c=e[d][1],o=e[d][2];for(var n=!0,i=0;i<r.length;i++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(n=!1,o<s&&(s=o));if(n){e.splice(d--,1);var l=c();void 0!==l&&(a=l)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,c,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,r){var c,o,s=r[0],n=r[1],i=r[2],l=0;if(s.some((function(a){return 0!==e[a]}))){for(c in n)t.o(n,c)&&(t.m[c]=n[c]);if(i)var d=i(t)}for(a&&a(r);l<s.length;l++)o=s[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},r=self["webpackChunkcharacter_finder"]=self["webpackChunkcharacter_finder"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(7562)}));r=t.O(r)})();
//# sourceMappingURL=app.fea69eaa.js.map