var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(){const initAnimation=section=>{if(!section||!section.querySelector(".animate-on-scroll"))return;const footerBlocksContainer=section.querySelector(".footer-blocks");if(!footerBlocksContainer)return;const footerBlocks=footerBlocksContainer.querySelectorAll(".footer-block, .accordion"),observer=new IntersectionObserver(entries=>{entries[0].isIntersecting&&(footerBlocks.forEach(block=>{gsap.fromTo(block,{maskPosition:"100% 0%"},{maskPosition:"0% 0%",duration:1.75,ease:"ease",onComplete:()=>{block.style.webkitMaskImage="none",block.style.maskImage="none"}})}),observer.disconnect())},{threshold:0});observer.observe(footerBlocksContainer)};initAnimation(document.currentScript.parentElement),document.addEventListener("shopify:section:load",function(event){initAnimation(event.target)})})();
//# sourceMappingURL=/cdn/shop/t/53/assets/footer.js.map?v=162720781161176316621780042032

}

/*
     FILE ARCHIVED ON 12:08:57 Aug 11, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:11 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.771
  load_resource: 214.485 (2)
  PetaboxLoader3.resolve: 128.0 (2)
  PetaboxLoader3.datanode: 85.284 (2)
*/