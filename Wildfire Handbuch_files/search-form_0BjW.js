var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
class SearchForm extends HTMLElement{constructor(){super(),this.input=this.querySelector('input[type="search"]'),this.resetBtn=this.querySelector(".search__button--reset"),this.input?.form?.addEventListener("reset",this.onFormReset.bind(this)),this.input?.addEventListener("input",debounce(event=>{this.onChange(event)},300).bind(this)),this.resetBtn?.addEventListener("click",this.onFormReset.bind(this))}toggleResetBtn(value){this.resetBtn&&(value?this.resetBtn.style.display="flex":this.resetBtn.style.display="none")}onChange(event){this.toggleResetBtn(event.target.value)}shouldResetForm(){return!document.querySelector('[aria-selected="true"] a')}onFormReset(event){event.preventDefault(),this.shouldResetForm()&&this.input&&(this.input.value="",this.input.focus(),this.toggleResetBtn(""))}}customElements.define("search-form",SearchForm);
//# sourceMappingURL=/cdn/shop/t/53/assets/search-form.js.map?v=130106166435850232461780042032

}

/*
     FILE ARCHIVED ON 12:08:57 Aug 11, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:10 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.416
  load_resource: 128.718
  PetaboxLoader3.resolve: 52.846
  PetaboxLoader3.datanode: 37.022
*/