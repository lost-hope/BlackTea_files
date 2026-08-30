var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
function manageChatStateBasedOnCurrentSettings(
  currentData,
  previousSettings,
  currentSettings,
) {
  Object.keys(currentSettings).forEach(key => {
    if (previousSettings[key] !== currentSettings[key]) {
      settingChanged(key, currentSettings[key], currentData);
    }
  });
}

function settingChanged(key, value, currentData) {
  switch (key) {
    case 'icon':
    case 'text':
      localStorage.setItem(
        'shopifyChatData',
        JSON.stringify({...currentData, isOpen: false}),
      );
      break;
    case 'greetingMessage':
      localStorage.setItem(
        'shopifyChatData',
        JSON.stringify({
          ...currentData,
          conversationId: null,
          sessionId: null,
          hasSentCustomerInfo: false,
          isOpen: true,
        }),
      );
      break;
  }
}

(function load() {
  const chatButton = document.getElementById('chat-button-container');
  const chatSettings = chatButton.dataset;
  const buttonHorizontalPosition = chatButton.getAttribute(
    'data-horizontal-position',
  );
  const buttonVerticalPosition = chatButton.getAttribute(
    'data-vertical-position',
  );
  const buttonIcon = chatButton.getAttribute('data-icon');
  const buttonText = chatButton.getAttribute('data-text');
  const buttonColor = chatButton.getAttribute('data-color');
  const buttonSecondaryColor = chatButton.getAttribute('data-secondary-color');
  const buttonTernaryColor = chatButton.getAttribute('data-ternary-color');
  const shopDomain = chatButton.getAttribute('data-domain');
  const externalIdentifier = chatButton.getAttribute(
    'data-external-identifier',
  );
  const customerId = chatButton.getAttribute('data-customer-id');
  const customerEmail = chatButton.getAttribute('data-customer-email');
  const customerFirstName = chatButton.getAttribute('data-customer-first-name');
  const customerLastName = chatButton.getAttribute('data-customer-last-name');
  const customerAcceptsMarketing = chatButton.getAttribute(
    'data-customer-accepts-marketing',
  );
  const customerLogoutUrl = chatButton.getAttribute('data-customer-logout-url');

  if (Shopify.designMode) {
    const chatPreviewJSON =
      sessionStorage.getItem('chatPreview') || JSON.stringify({});
    const previousSettings = JSON.parse(chatPreviewJSON);
    sessionStorage.setItem('chatPreview', JSON.stringify(chatSettings));

    const currentData =
      JSON.parse(localStorage.getItem('shopifyChatData')) || {};
    manageChatStateBasedOnCurrentSettings(
      currentData,
      previousSettings,
      chatSettings,
    );
  }

  const src = document.currentScript.src;
  const script = document.createElement('script');

  const chatSrc = 'shopifyChatV1Widget.js';
  const indexSrc = src.replace('inbox-chat-loader.js', chatSrc);

  script.src = indexSrc;
  script.type = 'module';
  script.defer = true;
  script.async = true;
  Object.assign(script.dataset, {
    buttonColor: buttonColor,
    secondaryColor: buttonSecondaryColor,
    ternaryColor: buttonTernaryColor,
    icon: buttonIcon,
    text: buttonText,
    position: buttonHorizontalPosition,
    verticalPosition: buttonVerticalPosition,
    shopId: externalIdentifier,
    shop: shopDomain,
    shopDomain: shopDomain,
    ...(customerId && {customerId}),
    ...(customerEmail && {customerEmail}),
    ...(customerFirstName && {customerFirstName}),
    ...(customerLastName && {customerLastName}),
    ...(customerAcceptsMarketing && {customerAcceptsMarketing}),
    ...(customerLogoutUrl && {customerLogoutUrl}),
  });

  chatButton.parentNode.appendChild(script);
})();

}

/*
     FILE ARCHIVED ON 16:48:13 Aug 10, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:49 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.482
  load_resource: 169.173
  PetaboxLoader3.resolve: 104.521
  PetaboxLoader3.datanode: 42.481
*/