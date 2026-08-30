var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(){var __sections__={};(function(){for(var i=0,s=document.getElementById("sections-script").getAttribute("data-sections").split(",");i<s.length;i++)__sections__[s[i]]=!0})(),function(){if(__sections__.header)try{class StickyHeader extends HTMLElement{constructor(){super()}connectedCallback(){this.header=document.querySelector(".shopify-section-header"),this.headerIsAlwaysSticky=this.getAttribute("data-sticky-type")==="always",this.currentScrollTop=0,this.preventReveal=!1,this.headerCoords={},this.calcHeaderCoords(),this.onScrollHandler=this.onScroll.bind(this),this.hideHeaderOnScrollUp=()=>{this.preventReveal=!0},this.addEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.addEventListener("scroll",this.onScrollHandler,!1)}disconnectedCallback(){this.removeEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.removeEventListener("scroll",this.onScrollHandler)}calcHeaderCoords(){const clientRect=this.getBoundingClientRect(),pageYOffset=window.pageYOffset||document.documentElement.scrollTop;this.headerCoords.bottom=pageYOffset+clientRect.bottom,this.headerCoords.top=pageYOffset+clientRect.top}onScroll(){const scrollTop=window.pageYOffset||document.documentElement.scrollTop;if(this.headerIsAlwaysSticky&&(scrollTop>this.header.offsetHeight+1&&(this.header.classList.add("shopify-section-header-sticky"),this.header.classList.contains("color-background-overlay")&&(this.header.classList.remove("color-background-overlay"),this.header.classList.add("color-background-overlay-hidden"))),scrollTop<this.header.offsetHeight&&(this.header.classList.remove("shopify-section-header-sticky"),this.header.classList.contains("color-background-overlay-hidden")&&(this.header.classList.add("color-background-overlay"),this.header.classList.remove("color-background-overlay-hidden")))),scrollTop>this.currentScrollTop&&scrollTop>this.headerCoords.bottom){if(this.preventHide)return;requestAnimationFrame(this.hide.bind(this))}else scrollTop<this.currentScrollTop&&scrollTop>this.headerCoords.bottom?this.preventReveal?(window.clearTimeout(this.isScrolling),this.isScrolling=setTimeout(()=>{this.preventReveal=!1},66),requestAnimationFrame(this.hide.bind(this))):requestAnimationFrame(this.reveal.bind(this)):scrollTop<=this.headerCoords.top&&requestAnimationFrame(this.reset.bind(this));this.currentScrollTop=scrollTop}hide(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-hidden","shopify-section-header-sticky"),this.closeMenuDisclosure())}reveal(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-sticky","animate"),this.header.classList.remove("shopify-section-header-hidden"),this.header.classList.contains("color-background-overlay")&&(this.header.classList.remove("color-background-overlay"),this.header.classList.add("color-background-overlay-hidden")))}reset(){if(!this.headerIsAlwaysSticky&&(this.header.classList.remove("shopify-section-header-hidden","shopify-section-header-sticky","animate"),this.header.classList.contains("color-background-overlay-hidden"))){if(Array.from(document.querySelectorAll(".mega-menu")).some(megaMenu=>megaMenu.hasAttribute("open")))return;this.header.classList.add("color-background-overlay"),this.header.classList.remove("color-background-overlay-hidden")}}closeMenuDisclosure(){this.disclosures=this.disclosures||this.header.querySelectorAll("details-disclosure"),customElements.get("details-disclosure")&&this.disclosures.forEach(disclosure=>{disclosure.close()}),this.disclosureLists=this.header.querySelectorAll(".disclosure__list"),this.disclosureLists.forEach(disclosureList=>{disclosureList.setAttribute("hidden",!0)})}}customElements.define("sticky-header",StickyHeader)}catch(e){console.error(e)}}(),function(){if(__sections__["main-product"])try{class ProductModal extends ModalDialog{constructor(){super()}hide(){super.hide(),window.pauseAllMedia()}show(opener){super.show(opener),this.showActiveMedia()}showActiveMedia(){const activeMedia=this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);activeMedia.nodeName=="DEFERRED-MEDIA"&&activeMedia.querySelector("template")?.content?.querySelector(".js-youtube")&&activeMedia.loadContent()}}customElements.define("product-modal",ProductModal)}catch(e){console.error(e)}}()})();
//# sourceMappingURL=/cdn/shop/t/43/compiled_assets/scripts.js.map?3571=

}

/*
     FILE ARCHIVED ON 07:31:22 Aug 10, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:43 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 4.334
  load_resource: 71.447
  PetaboxLoader3.datanode: 53.69 (2)
  loaddict: 45.58
*/