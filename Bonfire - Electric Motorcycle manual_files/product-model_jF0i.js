var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
class ProductModel extends DeferredMedia{constructor(){super()}loadContent(){super.loadContent(),Shopify.loadFeatures([{name:"model-viewer-ui",version:"1.0",onLoad:this.setupModelViewerUI.bind(this)}])}setupModelViewerUI(errors){if(errors)return;this.modelViewerUI=new Shopify.ModelViewerUI(this.querySelector("model-viewer"));const $this=this,target=$this.querySelector("model-viewer");new MutationObserver(records=>{$this.closest(".swiper")!=null&&(target.classList.contains("shopify-model-viewer-ui__disabled")?$this.closest(".swiper").swiper.params.noSwiping=!1:($this.closest(".swiper").swiper.params.noSwiping=!0,$this.closest(".swiper").swiper.params.noSwipingClass="swiper-slide"))}).observe(target,{attributes:!0})}}customElements.define("product-model",ProductModel),window.ProductModel={loadShopifyXR(){Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:this.setupShopifyXR.bind(this)}])},setupShopifyXR(errors){if(!errors){if(!window.ShopifyXR){document.addEventListener("shopify_xr_initialized",()=>this.setupShopifyXR());return}document.querySelectorAll('[id^="ProductJSON-"]').forEach(modelJSON=>{window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent)),modelJSON.remove()}),window.ShopifyXR.setupXRElements()}}},window.addEventListener("DOMContentLoaded",()=>{window.ProductModel?.loadShopifyXR()});
//# sourceMappingURL=/cdn/shop/t/43/assets/product-model.js.map?v=33738294766022681231753358061

}

/*
     FILE ARCHIVED ON 07:31:18 Aug 10, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:46 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.395
  load_resource: 53.474
  PetaboxLoader3.datanode: 42.683 (2)
  loaddict: 24.847
*/