var _paq = window._paq || [];
if (navigator.doNotTrack !== '1') {
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['addDownloadExtensions', "mobileconfig"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.husic.net/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
}
