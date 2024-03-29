---
date: 2016-07-19 11:00:00 +0200
title: DNS Einstellungen
---

### DNS?

[DNS](https://www.heise.de/tipps-tricks/Was-ist-ein-DNS-Server-4672536.html) ist eine grundlegende Technik die das Internet wie wir es kennen und benutzen erst möglich macht. Zuverlässig werkelt es im Hintergrund und sorgt mit seiner problemlosigkeit dafür, dass man sich nicht darum kümmern muss. Das DNS ist so wie vor 20 Jahren erdacht auch heute weitestgehend unverändert im Einsatz und kommt mit den meisten Forderungen der heutigen Welt gut klar.

Mich stört allerdings eine Sache: Vor 20 Jahren war Verschlüsselung kein relevantes Thema und so ist es bei DNS leider auch geblieben. Aber auch [DNS-Sicherheitskonzepte](https://www.ionos.de/digitalguide/server/sicherheit/dns-over-tls/) entwickeln sich ja weiter. Die Verbesserungen [DNS-over-TLS (DoT)](https://heise.de/-4864255) sowie DNS-over-HTTPS (DoH) setzen sich nur sehr langsam durch.

Immerhin: iPhone und iPad ab iOS 14 unterstützen eine DoH sowie DoT Konfiguration. Statt der unverschlüsselten DNS-Server des gerade verwendeten Internetzugangs (WLAN oder Mobilfunk) werden dann immer die verschlüsselten verwendet. Diese Funktion muss über Profile eingestellt werden.

Mit einem iOS Gerät kann man sich z.B. eines dieser Profile installieren:

DNS over TLS

* [Quad9](/dns-config/dot-quad9.mobileconfig) — CH — Non-Profit Organisation betreibt weltweit hunderte DNS-Server mit Fokus auf IT-Sicherheit von Unternehmen
* [Digitalcourage](/dns-config/dot-digitalcourage.mobileconfig) — DE — Gemeinnütziger Verein betreibt einen DNS-Server ohne Logging und ohne Zensur
* [Freifunk FFMUC](/dns-config/dot-ffmuc.mobileconfig) — DE — Gemeinnütziger Verein betreibt in München einen DNS-Server ohne Logging und ohne Zensur
* [Digitale Gesellschaft](/dns-config/dot-digitale-gesellschaft.mobileconfig) — CH — Gemeinnütziger Verein betreibt einen DNS-Server ohne Logging und ohne Zensur
* [Cloudflare](/dns-config/dot-cloudflare.mobileconfig) — US — Weltweit agierender CDN-Anbieter, wertet aufgelöste Domainnamen aus, verspricht keine Daten (IP) der Nutzer aufzuzeichnen
* [Google](/dns-config/dot-google.mobileconfig) — US — Die Suchmaschine schlechthin, wertet die Anfrage aus. Hat den Vorteil dass sie aufgrund ihrer Größe/Integration/Überall-eingebunden-sein nicht gut durch Regierungen oder Provider gefiltert werden kann

DNS over HTTPS: 

* [Quad9](/dns-config/doh-quad9.mobileconfig)
* [Freifunk FFMUC](/dns-config/doh-ffmuc.mobileconfig)
* [Digitale Gesellschaft](/dns-config/doh-digitale-gesellschaft.mobileconfig)
* [DNS0](https://www.dns0.eu/de/dns0.eu.mobileconfig)
* [Cloudflare](/dns-config/doh-cloudflare.mobileconfig)

Die Profile sind alle signiert und werden verschlüsselt übertragen.

Fehlt eurer Meinung nach ein Profil oder ein DNS-Server? Dann gebt mir gerne einen [Hinweis]({{< relref "kontakt.md" >}}).

Mit einer FritzBox kann man übrigens [DoT im Router aktivieren](https://www.heise.de/select/ct/2020/22/2024813071272720771).

### Folgende DNS-Server verwende ich.

|Anbieter|IPv4|IPv6|DNS over HTTPS|DNS over TLS|
|---|---|---|---|---|
|[Quad9](https://quad9.net/)|9.9.9.9|2620:fe::fe|https://dns.quad9.net/dns-query|dns.quad9.net|
||149.112.112.112|2620:fe::9|||
|[Digitalcourage](https://digitalcourage.de/support/zensurfreier-dns-server)|5.9.164.112|2a01:4f8:251:554::2||dns3.digitalcourage.de|
|[Freifunk FFMUC](https://ffmuc.net/)|5.1.66.255|2001:678:e68:f000::|https://doh.ffmuc.net/dns-query|dot.ffmuc.net|
|[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/)|185.95.218.42|2a05:fc84::42|https://dns.digitale-gesellschaft.ch/dns-query|dns.digitale-gesellschaft.ch|
||185.95.218.43|2a05:fc84::43|||
|[DNS0](https://www.dns0.eu/)|193.110.81.0|2a0f:fc80::|https://dns0.eu/|dns0.eu|
||185.253.5.0|2a0f:fc81::|||
|[DNS.watch](https://dns.watch/)|84.200.69.80|2001:1608:10:25::1c04:b12f|||
||84.200.70.40|2001:1608:10:25::9249:d69b|||
|[Cloudflare DNS](https://1.1.1.1/)|1.1.1.1|2606:4700:4700::1111|https://cloudflare-dns.com/dns-query|one.one.one.one|
||1.0.0.1|2606:4700:4700::1001||1dot1dot1dot1.cloudflare-dns.com|
|[Google DNS](https://developers.google.com/speed/public-dns/)|8.8.8.8|2001:4860:4860::8888|https://dns.google.com/query|dns.google|
||8.8.4.4|2001:4860:4860::8844|||
|[OpenDNS](https://www.opendns.com/setupguide/)|208.67.222.222|2620:119:35::35|||
||208.67.220.220|2620:119:53::53|||
|[ComodoDNS](https://www.comodo.com/secure-dns/)|8.26.56.26|&mdash;|||
||8.20.247.20|&mdash;|||

Fehlt eurer Meinung nach ein Profil oder ein DNS-Server? Dann freue ich mich über einen [Hinweis]({{< relref "kontakt.md" >}}).
