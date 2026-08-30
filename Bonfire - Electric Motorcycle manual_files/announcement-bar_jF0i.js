var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(){const initAnnBar=()=>{const annBar=document.querySelector(".section-announcement");let observer;(()=>{observer&&observer.disconnect(),observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const annBarHeight=annBar?.getBoundingClientRect().height||0;document.documentElement.style.setProperty("--ann-height",`${(annBarHeight*entry.intersectionRatio).toFixed(2)}px`)}else document.documentElement.style.setProperty("--ann-height","0px")})},{threshold:Array.from({length:1e3},(_,i)=>i/1e3)}),annBar&&observer.observe(annBar)})()};document.addEventListener("shopify:section:load",initAnnBar),document.addEventListener("shopify:section:unload",initAnnBar),document.addEventListener("shopify:section:reorder",initAnnBar),initAnnBar()})();
//# sourceMappingURL=/cdn/shop/t/43/assets/announcement-bar.js.map?v=62342160776736250801753358060

}

/*
     FILE ARCHIVED ON 07:31:25 Aug 10, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:45 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.703
  load_resource: 91.629
  PetaboxLoader3.resolve: 52.603
  PetaboxLoader3.datanode: 30.579 (2)
  loaddict: 21.255
*/