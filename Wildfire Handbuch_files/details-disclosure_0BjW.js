var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
class DetailsDisclosure extends HTMLElement{constructor(){super(),this.mainDetailsToggle=this.querySelector("details"),document.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("click",this.onFocusOut.bind(this))}onKeyUp(event){event.code==="Escape"&&this.mainDetailsToggle.removeAttribute("open")}onFocusOut(e){e.composedPath().includes(this.mainDetailsToggle)||this.mainDetailsToggle?.removeAttribute("open")}close(){this.mainDetailsToggle?.removeAttribute("open")}}customElements.define("details-disclosure",DetailsDisclosure);
//# sourceMappingURL=/cdn/shop/t/53/assets/details-disclosure.js.map?v=101038006898019338281780042032

}

/*
     FILE ARCHIVED ON 12:08:57 Aug 11, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:09 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.987
  load_resource: 74.775
  PetaboxLoader3.resolve: 62.515
  PetaboxLoader3.datanode: 11.398
*/