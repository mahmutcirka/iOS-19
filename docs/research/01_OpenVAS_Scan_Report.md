# 🔍 OpenVAS Zafiyet Tarama Raporu

> **Proje:** SessizMesaj — iOS 19 Sıfır Tıklama Zafiyet Analizi  
> **Kurum:** İstinye Üniversitesi — Siber Güvenlik Bölümü  
> **Belge Türü:** Zafiyet Tarama Raporu  
> **Gizlilik Seviyesi:** AKADEMİK — SINIFLANDIRILMIŞ  
> **Sürüm:** 1.0

---

## 1. Tarama Bilgileri

| Parametre | Değer |
|---|---|
| **Tarama Tarihi** | 28 Mayıs 2026, 02:15 UTC |
| **Tarama Bitiş** | 28 Mayıs 2026, 04:42 UTC |
| **Toplam Süre** | 2 saat 27 dakika |
| **Tarayıcı** | OpenVAS 23.4.1 (Greenbone Community Edition) |
| **Ek Modül** | Nessus Professional 10.9.2 (çapraz doğrulama) |
| **Tarama Profili** | Full and Deep — Tüm Portlar + CVE Eşleştirme |
| **Hedef Tanımı** | iOS 19.0 – 19.3.2 çalıştıran simüle edilmiş cihaz ortamı |
| **Hedef IP Aralığı** | 10.10.50.0/24 (izole laboratuvar ağı) |
| **Hedef Cihaz Sayısı** | 12 adet (iPhone 16 Pro, iPhone 15, iPad Pro M4) |
| **Kimlik Doğrulama** | Kimlik doğrulamasız (unauthenticated) tarama |
| **NVT Veritabanı Sürümü** | 202605280100 |
| **SCAP Veri Sürümü** | 2026-05-27T23:00:00Z |
| **Taramayı Gerçekleştiren** | Mahmut — Güvenlik Araştırmacısı |

---

## 2. Tarama Özeti

### 2.1 Genel Sonuçlar

| Önem Seviyesi | Renk Kodu | Bulgu Sayısı | Yüzde |
|---|---|---|---|
| 🔴 **Kritik** (CVSS 9.0–10.0) | Kırmızı | **1** | %3.1 |
| 🟠 **Yüksek** (CVSS 7.0–8.9) | Turuncu | **3** | %9.4 |
| 🟡 **Orta** (CVSS 4.0–6.9) | Sarı | **5** | %15.6 |
| 🔵 **Düşük** (CVSS 0.1–3.9) | Mavi | **8** | %25.0 |
| ⚪ **Bilgi** (CVSS 0.0) | Gri | **15** | %46.9 |
| | **TOPLAM** | **32** | %100 |

### 2.2 Etkilenen Cihaz Dağılımı

| Cihaz Modeli | iOS Sürümü | Kritik | Yüksek | Orta | Düşük | Bilgi |
|---|---|---|---|---|---|---|
| iPhone 16 Pro | 19.3.2 | 1 | 2 | 3 | 4 | 8 |
| iPhone 16 Pro | 19.2.1 | 1 | 3 | 4 | 5 | 10 |
| iPhone 15 | 19.3.0 | 1 | 2 | 3 | 4 | 7 |
| iPhone 15 | 19.1.0 | 1 | 3 | 5 | 6 | 12 |
| iPad Pro M4 | 19.3.2 | 1 | 2 | 2 | 3 | 6 |
| iPad Pro M4 | 19.0 | 1 | 3 | 5 | 7 | 15 |

> **Not:** CVE-2026-1199 (Kritik) tüm test edilen cihazlarda tespit edilmiştir. Bu durum, zafiyetin iOS 19.0'dan itibaren tüm sürümlerde mevcut olduğunu doğrulamaktadır.

---

## 3. Kritik Bulgular

### 3.1 CVE-2026-1199 — iOS ImageIO HEIC Bellek Bozulması (Sıfır Tıklama)

| Alan | Detay |
|---|---|
| **Plugin ID** | 190847 |
| **CVE Tanımlayıcı** | CVE-2026-1199 |
| **CVSS v3.1 Skoru** | **9.8** (Kritik) |
| **CVSS Vektörü** | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H` |
| **CWE Sınıflandırması** | CWE-787: Out-of-bounds Write |
| **Ek CWE** | CWE-416: Use After Free |
| **Zafiyet Türü** | Uzaktan Kod Yürütme (RCE) — Sıfır Tıklama |
| **Keşif Tarihi** | 15 Nisan 2026 |
| **Açıklama Tarihi** | 22 Mayıs 2026 (Apple Güvenlik Bülteni HT214201) |
| **Saldırı Vektörü** | Ağ (Network) — iMessage üzerinden |
| **Etkilenen Bileşen** | ImageIO Framework (`/System/Library/Frameworks/ImageIO.framework`) |
| **Etkilenen Fonksiyon** | `CGImageSourceCreateWithData()` → HEIC codec ayrıştırıcı |
| **Etkilenen Sürümler** | iOS 19.0 – iOS 19.3.2, iPadOS 19.0 – 19.3.2, macOS 16.0 – 16.3 |
| **Etkilenen Host** | iOS/iPadOS çalıştıran tüm Apple cihazları |
| **Port / Protokol** | iMessage — TCP/5223 (APNs TLS), TCP/443 (HTTPS fallback) |
| **Exploit Durumu** | Vahşi doğada aktif istismar tespit edildi (ITW) |
| **Yama Durumu** | ✅ iOS 19.4 ile düzeltildi (2 Haziran 2026) |
| **Çözüm** | iOS 19.4 veya üzeri sürüme güncelleme yapılması |

#### Teknik Detay

```
Zafiyet, ImageIO çerçevesinin HEIC (High Efficiency Image Container) formatındaki 
görüntüleri işlerken tetiklenmektedir. Özel olarak hazırlanmış bir HEIC dosyası, 
iMessage üzerinden gönderildiğinde, alıcı cihazda otomatik olarak ayrıştırılır.

Kök Neden: CGImageSourceCreateWithData() fonksiyonunda HEIC metadata bloğunun 
boyut doğrulaması yapılmadan heap üzerine yazılması sonucu oluşan sınır dışı 
yazma (out-of-bounds write) hatası.

İstismar Zinciri:
  1. Saldırgan özel hazırlanmış HEIC dosyasını iMessage ile gönderir
  2. BlastDoor sandbox'ı bypass edilir (CVE-2026-1200)
  3. ImageIO heap overflow tetiklenir
  4. ROP/JOP zinciri ile ASLR ve PAC atlatılır
  5. Kernel exploit ile tam cihaz erişimi sağlanır
  
Bellek Analizi:
  - Heap spray boyutu: ~256 MB
  - Corrupted allocation: IOSurface backing store
  - Pivot noktası: WebKit JSC JIT bölgesi
```

#### Tespit Kanıtı (Evidence)

```
[OpenVAS Plugin 190847] HEIC Parser Vulnerability Check
Host: 10.10.50.101 (iPhone 16 Pro, iOS 19.3.2)
Port: 5223/tcp (apns)
Status: VULNERABLE

Detection Method: Version-based check against Apple Security Advisory HT214201
Confidence: 99%

Banner/Fingerprint:
  User-Agent: IMTransferAgent/1900.42
  X-Apple-Device: iPhone16,1
  OS-Version: 19.3.2 (23E223)
  
Remote check result:
  Installed version : 19.3.2 (Build 23E223)
  Fixed version     : 19.4   (Build 23F79)
  Installation path : /System/Library/Frameworks/ImageIO.framework
```

#### MITRE ATT&CK Eşleştirmesi

| Taktik | Teknik | ID |
|---|---|---|
| Initial Access | Exploit Public-Facing Application | T1190 |
| Execution | Exploitation for Client Execution | T1203 |
| Persistence | Implant Container Image | T1525 |
| Privilege Escalation | Exploitation for Privilege Escalation | T1068 |
| Defense Evasion | Process Injection | T1055 |
| Collection | Screen Capture | T1113 |
| Collection | Audio Capture | T1123 |
| Exfiltration | Exfiltration Over C2 Channel | T1041 |

---

## 4. Yüksek Riskli Bulgular

### 4.1 CVE-2026-1200 — BlastDoor Sandbox Escape

| Alan | Detay |
|---|---|
| **Plugin ID** | 190848 |
| **CVE Tanımlayıcı** | CVE-2026-1200 |
| **CVSS v3.1 Skoru** | **8.6** (Yüksek) |
| **CVSS Vektörü** | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N` |
| **CWE Sınıflandırması** | CWE-269: Improper Privilege Management |
| **Açıklama** | iMessage mesajlarını izole eden BlastDoor sandbox mekanizmasında mantıksal hata tespit edilmiştir. ImageIO zafiyeti ile birlikte zincirlenerek sandbox'tan kaçış sağlanmaktadır. |
| **Etkilenen Host** | iOS 19.0 – 19.3.2 çalıştıran tüm cihazlar |
| **Port / Protokol** | iMessage — TCP/5223 |
| **Çözüm** | iOS 19.4 güncellemesi |

```
Tespit Detayı:
  Plugin: BlastDoor Sandbox Integrity Validator
  Host: 10.10.50.101
  Finding: BlastDoor process isolation insufficient for crafted ImageIO payloads
  
  Sandbox profili analizi:
  - com.apple.BlastDoor sandbox profili v3.2
  - Eksik kısıtlama: mach_port lookup (com.apple.ImageIO.service)
  - IPC mesaj boyutu limiti: kontrol edilmiyor
  
  Risk: ImageIO exploit zincirinin ilk aşamasında kullanılmaktadır.
  CVE-2026-1199 ile birlikte istismar edilir.
```

### 4.2 CVE-2026-1201 — WebKit JIT Derleyici Tip Karışıklığı

| Alan | Detay |
|---|---|
| **Plugin ID** | 190852 |
| **CVE Tanımlayıcı** | CVE-2026-1201 |
| **CVSS v3.1 Skoru** | **8.1** (Yüksek) |
| **CVSS Vektörü** | `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:N` |
| **CWE Sınıflandırması** | CWE-843: Access of Resource Using Incompatible Type |
| **Açıklama** | WebKit JavaScript JIT (JavaScriptCore) derleyicisinde tip karışıklığı (type confusion) zafiyeti. Safari veya WebView üzerinden tetiklenebilir. CVE-2026-1199 exploit zincirinde ASLR bypass için kullanılmaktadır. |
| **Etkilenen Host** | iOS 19.0 – 19.3.1 çalıştıran cihazlar |
| **Port / Protokol** | HTTPS — TCP/443 |
| **Çözüm** | iOS 19.3.2 veya üzeri (kısmen düzeltildi), iOS 19.4 (tam düzeltme) |

```
Tespit Detayı:
  Plugin: WebKit JIT Compiler Security Audit
  Host: 10.10.50.104 (iPhone 15, iOS 19.1.0)
  
  JSC Sürümü: 620.3.7
  DFG/FTL Optimizer: Type inference weakness in SpeculativeJIT
  
  PoC Trigger: ArrayBuffer + DataView type confusion
  Etki: Arbitrary read primitive → ASLR info leak
  
  Not: iOS 19.3.2'de kısmen yamalandı ancak alternatif tetikleme
  yolu hala mevcut. Tam düzeltme iOS 19.4'te.
```

### 4.3 CVE-2026-1203 — Kernel IOSurface Use-After-Free

| Alan | Detay |
|---|---|
| **Plugin ID** | 190855 |
| **CVE Tanımlayıcı** | CVE-2026-1203 |
| **CVSS v3.1 Skoru** | **7.8** (Yüksek) |
| **CVSS Vektörü** | `CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H` |
| **CWE Sınıflandırması** | CWE-416: Use After Free |
| **Açıklama** | XNU kernel'da IOSurface nesne yönetiminde use-after-free zafiyeti. Exploit zincirinin son aşamasında kernel seviyesinde ayrıcalık yükseltme için kullanılmaktadır. |
| **Etkilenen Host** | iOS 19.0 – 19.3.2 çalıştıran tüm cihazlar |
| **Port / Protokol** | Yerel (Local) — Mach IPC |
| **Çözüm** | iOS 19.4 güncellemesi |

```
Tespit Detayı:
  Plugin: XNU Kernel IOSurface Integrity Check
  Host: 10.10.50.101
  
  Kernel Sürümü: Darwin 25.3.0 (XNU 11215.1.10)
  Etkilenen Sürücü: IOSurfaceRoot (com.apple.iokit.IOSurface)
  
  Zafiyet Noktası: IOSurfaceClient::release() race condition
  Tetikleme: Eşzamanlı IOSurface oluşturma/silme döngüsü
  
  Exploit Etkisi:
  - Kernel task port ele geçirme
  - Tüm işlem belleğine okuma/yazma
  - Güvenlik politikalarını devre dışı bırakma (AMFI bypass)
  - Kalıcı implant yükleme yeteneği
```

---

## 5. Orta Riskli Bulgular (Özet)

| # | Plugin ID | CVE | CVSS | Açıklama | Durum |
|---|---|---|---|---|---|
| 1 | 190860 | CVE-2026-1205 | 6.5 | AirDrop BLE keşif protokolünde bilgi sızıntısı | Açık |
| 2 | 190863 | CVE-2026-1208 | 5.9 | iCloud Keychain senkronizasyon protokolü downgrade saldırısı | Açık |
| 3 | 190867 | CVE-2026-1212 | 5.3 | Safari Content Blocker bypass — özel CSS seçiciler ile | Yamalı |
| 4 | 190871 | CVE-2026-1215 | 4.7 | Siri kilitli ekran üzerinden kısıtlı bilgi erişimi | Açık |
| 5 | 190874 | CVE-2026-1218 | 4.3 | Mail uygulamasında uzak kaynak yükleme (tracking pixel) | Açık |

---

## 6. Düşük Riskli Bulgular (Özet)

| # | Plugin ID | CVSS | Açıklama |
|---|---|---|---|
| 1 | 190880 | 3.7 | TLS 1.2 geriye dönük uyumluluk — zayıf cipher suite desteği |
| 2 | 190882 | 3.3 | USB Restricted Mode zamanlama bilgi sızıntısı |
| 3 | 190884 | 3.1 | Bluetooth LE MAC adresi rotasyon zamanlaması tahmin edilebilirliği |
| 4 | 190886 | 2.8 | Wi-Fi probe request'lerde cihaz tanımlayıcı kalıntıları |
| 5 | 190888 | 2.6 | Spotlight arama indeksinde silinen dosya metadata kalıntısı |
| 6 | 190890 | 2.4 | Notification Center önizlemelerinde hassas veri görünürlüğü |
| 7 | 190892 | 2.1 | Ekran süresi (Screen Time) PIN'inin brute-force direnci düşük |
| 8 | 190894 | 1.9 | Pano (clipboard) erişim bildiriminin gecikme süresi |

---

## 7. Bilgilendirme Bulguları (Özet)

| # | Plugin ID | Açıklama |
|---|---|---|
| 1 | 190900 | İşletim sistemi parmak izi: iOS 19.3.2 tespit edildi |
| 2 | 190901 | Açık TCP portları: 443, 5223, 62078 |
| 3 | 190902 | mDNS/Bonjour servisi aktif |
| 4 | 190903 | AirDrop servisi keşfedilebilir durumda |
| 5 | 190904 | APNS (Apple Push Notification Service) bağlantısı aktif |
| 6 | 190905 | iCloud Private Relay yapılandırması tespit edildi |
| 7 | 190906 | Find My ağ katılımı aktif |
| 8 | 190907 | Handoff/Continuity servisleri çalışıyor |
| 9 | 190908 | USB lockdown sertifikası mevcut |
| 10 | 190909 | Geliştirici modu (Developer Mode) devre dışı |
| 11 | 190910 | Jailbreak tespit edilmedi |
| 12 | 190911 | MDM profili yüklü değil |
| 13 | 190912 | Şifreleme: Dosya düzeyi şifreleme aktif (Class C) |
| 14 | 190913 | Secure Enclave donanım anahtarı mevcut |
| 15 | 190914 | Son güvenlik güncellemesi: 45 gün önce |

---

## 8. Tarama Metodolojisi

### 8.1 Kullanılan Araçlar ve Teknikler

| Araç / Teknik | Sürüm | Kullanım Amacı |
|---|---|---|
| OpenVAS (GVM) | 23.4.1 | Birincil zafiyet taraması |
| Nessus Professional | 10.9.2 | Çapraz doğrulama ve ek plugin'ler |
| Nmap | 7.97 | Port tarama ve servis tespiti |
| libimobiledevice | 1.4.0 | iOS cihaz iletişimi ve bilgi toplama |
| Frida | 16.6.2 | Dinamik analiz ve çalışma zamanı incelemesi |
| Wireshark | 4.4.3 | Ağ trafiği yakalama ve analiz |
| IPSW Toolkit | 3.1 | Firmware analiz ve karşılaştırma |

### 8.2 Tarama Aşamaları

```
Aşama 1: Keşif (Discovery)
├── Ağ taraması (Nmap SYN scan — tüm portlar)
├── Servis tespiti ve parmak izi alma
├── İşletim sistemi sürüm tespiti
└── Süre: ~15 dakika

Aşama 2: Zafiyet Taraması (Assessment)
├── OpenVAS tam ve derin tarama profili
├── 78,542 NVT (Network Vulnerability Test) kontrolü
├── CVE veritabanı eşleştirmesi
├── Nessus çapraz doğrulama taraması
└── Süre: ~1 saat 45 dakika

Aşama 3: Doğrulama (Verification)
├── Yanlış pozitif analizi
├── Sürüm bazlı doğrulama
├── Firmware hash karşılaştırması
├── Manuel inceleme (kritik ve yüksek bulgular)
└── Süre: ~25 dakika

Aşama 4: Raporlama (Reporting)
├── Bulguların sınıflandırılması
├── CVSS skorlarının hesaplanması
├── MITRE ATT&CK eşleştirmesi
├── Düzeltme önerilerinin hazırlanması
└── Süre: Tarama sonrası
```

### 8.3 Tarama Kapsamı ve Kısıtlamalar

**Kapsam Dahilinde:**
- iMessage protokolü ve ilişkili servisler (TCP/5223, TCP/443)
- ImageIO framework ve medya işleme bileşenleri
- WebKit ve JavaScript işleme altyapısı
- Kernel seviyesi güvenlik mekanizmaları
- Ağ servisleri (AirDrop, Bonjour, APNS)

**Kapsam Dışında:**
- Üçüncü taraf uygulamalar (App Store uygulamaları)
- Fiziksel erişim gerektiren saldırılar (USB, Lightning/USB-C)
- Hücresel ağ (baseband) bileşenleri
- iCloud sunucu tarafı altyapısı

**Kısıtlamalar:**
- Tarama, izole laboratuvar ortamında gerçekleştirilmiştir
- Kimlik doğrulamasız tarama yapılmıştır (ek zafiyetler gözden kaçmış olabilir)
- Bazı bulgular sürüm bazlı tespit ile doğrulanmıştır (exploit doğrulaması yapılmamıştır)
- iOS'un kapalı kaynak yapısı nedeniyle tam kaynak kod analizi mümkün olmamıştır

---

## 9. Sonuç ve Öneriler

### 9.1 Genel Değerlendirme

Bu tarama, iOS 19.0 – 19.3.2 sürümlerinde **kritik bir sıfır tıklama uzaktan kod yürütme zafiyeti** (CVE-2026-1199) tespit etmiştir. Bu zafiyet, kullanıcı etkileşimi gerektirmeden, yalnızca bir iMessage mesajı göndererek hedef cihazda tam kontrol elde edilmesine olanak tanımaktadır.

**Risk Seviyesi: KRİTİK**

Zafiyetin vahşi doğada aktif olarak istismar edildiği (in-the-wild exploitation) doğrulanmıştır. Apple'ın Threat Analysis Group tarafından devlet destekli saldırılarda kullanıldığı raporlanmıştır.

### 9.2 Acil Öneriler

| Öncelik | Öneri | Süre | Sorumlu |
|---|---|---|---|
| 🔴 **P0** | Tüm iOS cihazlarını iOS 19.4 sürümüne güncelleyin | 24 saat | BT Operasyonları |
| 🔴 **P0** | Güncelleme yapılamayan cihazlarda iMessage'ı devre dışı bırakın | Hemen | Son Kullanıcılar |
| 🟠 **P1** | Apple Lockdown Mode'u etkinleştirin (yüksek riskli kullanıcılar) | 48 saat | Güvenlik Ekibi |
| 🟠 **P1** | MDM üzerinden zorunlu güncelleme politikası uygulayın | 48 saat | BT Yönetimi |
| 🟡 **P2** | Ağ trafiğini iMessage trafiği için izlemeye alın | 1 hafta | SOC Ekibi |
| 🟡 **P2** | Uç nokta algılama ve yanıt (EDR) kurallarını güncelleyin | 1 hafta | Güvenlik Ekibi |
| 🔵 **P3** | Güvenlik farkındalık eğitimi düzenleyin | 2 hafta | İnsan Kaynakları |
| 🔵 **P3** | Olay müdahale planını gözden geçirin ve güncelleyin | 1 ay | CISO |

### 9.3 Uzun Vadeli Stratejik Öneriler

1. **Sıfır Güven Mimarisi:** Mobil cihazlar için sıfır güven ağ erişimi (ZTNA) çözümü değerlendirilmelidir
2. **Tehdit İstihbaratı:** iOS spesifik tehdit istihbaratı beslemelerine abone olunmalıdır
3. **Düzenli Tarama:** Aylık zafiyet taramaları planlanmalıdır
4. **Yedek İletişim:** iMessage'a alternatif güvenli iletişim kanalları değerlendirilmelidir
5. **Olay Müdahale Tatbikatı:** Sıfır tıklama saldırı senaryoları için müdahale tatbikatı düzenlenmelidir

---

## 10. Referanslar

| # | Kaynak | URL / Tanımlayıcı |
|---|---|---|
| 1 | Apple Güvenlik Bülteni | HT214201 (Mayıs 2026) |
| 2 | NVD - CVE-2026-1199 | NIST National Vulnerability Database |
| 3 | MITRE ATT&CK | Mobile Matrices v15 |
| 4 | OpenVAS NVT | Plugin ID 190847 |
| 5 | CWE-787 | Out-of-bounds Write |
| 6 | CWE-416 | Use After Free |
| 7 | CVSS v3.1 Specification | FIRST.org |
| 8 | Apple Platform Security Guide | 2026 Edition |

---

> **Raporu Hazırlayan:** Mahmut — İstinye Üniversitesi, Siber Güvenlik  
> **Rapor Tarihi:** 28 Mayıs 2026  
> **Son Güncelleme:** 5 Haziran 2026  
> **Sonraki Tarama:** 28 Haziran 2026 (planlanan)

---

*Bu belge, İstinye Üniversitesi Siber Güvenlik Bölümü akademik projesi kapsamında hazırlanmıştır. Tüm veriler akademik araştırma amacıyla oluşturulmuş kurgusal senaryolara dayanmaktadır.*
