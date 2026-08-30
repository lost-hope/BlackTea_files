var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(){const slideUp=(element,duration=300)=>{element&&(element.style.height=`${element.scrollHeight}px`,element.style.overflow="hidden",element.style.transition=`height ${duration}ms ease`,requestAnimationFrame(()=>{element.style.height="0"}),setTimeout(()=>{element.style.display="none",element.style.removeProperty("height"),element.style.removeProperty("overflow"),element.style.removeProperty("transition")},duration))},slideDown=(element,duration=300)=>{if(!element)return;element.style.removeProperty("display");let display=window.getComputedStyle(element).display;display==="none"&&(display="block"),element.style.display=display;const height=element.scrollHeight;element.style.height="0",element.style.overflow="hidden",element.style.transition=`height ${duration}ms ease`,requestAnimationFrame(()=>{element.style.height=`${height}px`}),setTimeout(()=>{element.style.removeProperty("height"),element.style.removeProperty("overflow"),element.style.removeProperty("transition")},duration)},toggleCollapsible=(event,toggles)=>{if(!toggles)return;const answer=event.currentTarget.querySelector(".collapsible-content__answer"),activeItem=Array.from(toggles).find(item=>item.classList.contains("active"));if(event.currentTarget!==activeItem){if(activeItem){activeItem.classList.remove("active");const activeAnswer=activeItem.querySelector(".collapsible-content__answer");activeAnswer&&slideUp(activeAnswer)}event.currentTarget.classList.add("active"),slideDown(answer)}else event.currentTarget.classList.remove("active"),slideUp(answer)},initCollapsibleContent=section=>{if(!section||!section?.classList.contains("collapsible-content-section"))return;const toggles=section.querySelectorAll(".collapsible-content__item");toggles.forEach(toggle=>toggle.addEventListener("click",event=>toggleCollapsible(event,toggles)))};document.addEventListener("DOMContentLoaded",initCollapsibleContent(document.currentScript.parentElement)),document.addEventListener("shopify:section:load",function(event){initCollapsibleContent(event.target)})})();
//# sourceMappingURL=/cdn/shop/t/43/assets/collapsible-content.js.map?v=116433040800619036841753358061

}

/*
     FILE ARCHIVED ON 07:31:40 Aug 10, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:49 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.269
  load_resource: 138.411
  PetaboxLoader3.resolve: 79.634
  PetaboxLoader3.datanode: 26.92 (2)
  loaddict: 45.208
*/