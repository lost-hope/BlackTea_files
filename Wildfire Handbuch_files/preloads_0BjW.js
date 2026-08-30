var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");

    (function() {
      var preconnectOrigins = ["https://web.archive.org/web/20260811120857/https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BYz7ePEv.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CnQ0tp4D.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.BPcdD3ym.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.ULvq3Xka.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayCheckoutGqlVersion.LompUVfI.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.D_oPnf6Y.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.D-HR7tTF.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.CO_WjTBq.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations.BYZxONaL.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-paymentMethodFromPaymentLines.DDjgdTAI.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-benchmark.DmSy1dfi.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.mIQPr3_5.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.BtK40M49.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.BZdXTxdv.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.CqM6UPnx.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.BaUdMFGi.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.Dg5P0OZT.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.BsFMfefY.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.BLGUqqce.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-de.DVm0IMt9.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.lG90aDW8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.D5y0qge5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.BYBntUKm.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.CB9ySx-A.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index.BiqZUUrm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.nVnGgMqb.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useHasOrdersFromMultipleShops.DUlRIXxv.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.kTi9zYfu.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.B15UO8Fn.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSandboxTelemetry.3_giymDD.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.Du5JR4RM.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.Dbydbxbd.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.DQJAJ9AA.js","/cdn/shopifycloud/checkout-web/assets/c1/localization-index.DSB4JV8I.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.BpPiqphX.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.CU229-Ge.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.7ScZI3K-.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.CHecFsXt.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.BVNaNCpo.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.B9GKov8I.js","/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks.Bgl1EzbH.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.Cqt9go0E.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.CTOI4wOD.js","/cdn/shopifycloud/checkout-web/assets/c1/components-useVaultedMsiInstallments.CAuHUT0m.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.BdzxQLZz.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-context.C92onmqw.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.DGsmRopi.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.CHcfR1SL.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-bankPaymentMethodBrandKeys.DTtXjJXy.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge.CZjmaKdo.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.D6aeoCQt.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useFilteredShopPayAvailablePaymentMethods.Cc36EsQN.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.C61IuwXN.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.B6sv2o23.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.DN8IMkma.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-hooks.dT0mrxpb.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.BNYLpKdV.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.DngGf_lP.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-monorail.CuUIjd6A.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscount.ClyKbAoj.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.Jm3rxgcx.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.DOSxsw1X.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.CGIUQzn1.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.BQ4phli1.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.DgNexuuH.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.DVWNSRb8.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.D1V2oXLY.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.BeAM7IyO.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BURr3nCc.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.DClBw5VR.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.Dul7JJcW.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.DEZlSyX9.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.DHM2tsRA.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.lXf29pIf.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.B1pzzLUA.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.SJccg0i1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayCheckoutGqlVersion.DwqzaEQ_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/stopwatch.j3OYqUtI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CEr7nb5K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.CXbHQpsO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useVaultedMsiInstallments.DeLmJ-wS.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CS-PIQ3P.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/cvvBridge.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useCanChangeCompanyLocation.jvH8TQL4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.CLVwzp6i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MerchandiseModal.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hooks.CRAl4z62.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://web.archive.org/web/20260811120857/https://cdn.shopify.com/s/files/1/0459/0888/5659/files/Large_93023aa2-d06c-4e77-81b7-708cfaa90694_x320.png?v=1681551403","https://web.archive.org/web/20260811120857/https://cdn.shopify.com/s/files/1/0459/0888/5659/files/DSC03316_2000x.jpg?v=1681552430"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
}

/*
     FILE ARCHIVED ON 12:08:57 Aug 11, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:07 Aug 30, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 4.53
  load_resource: 154.959
  PetaboxLoader3.resolve: 88.238
  PetaboxLoader3.datanode: 16.773
*/