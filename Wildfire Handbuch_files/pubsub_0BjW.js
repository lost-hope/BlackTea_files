var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
let subscribers={};function subscribe(eventName,callback){return subscribers[eventName]===void 0&&(subscribers[eventName]=[]),subscribers[eventName]=[...subscribers[eventName],callback],function(){subscribers[eventName]=subscribers[eventName].filter(cb=>cb!==callback)}}function publish(eventName,data){subscribers[eventName]&&subscribers[eventName].forEach(callback=>{callback(data)})}
//# sourceMappingURL=/cdn/shop/t/53/assets/pubsub.js.map?v=2921868252632587581780042032

}

/*
     FILE ARCHIVED ON 12:08:56 Aug 11, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:07 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.458
  load_resource: 105.568
  PetaboxLoader3.resolve: 41.231
  PetaboxLoader3.datanode: 35.291
*/