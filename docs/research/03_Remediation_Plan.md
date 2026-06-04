# 🛡️ Düzeltme Planı (Remediation Plan)

> **Proje:** SessizMesaj — iOS 19 Sıfır Tıklama Zafiyet Analizi  
> **Kurum:** İstinye Üniversitesi — Siber Güvenlik Bölümü  
> **Belge Türü:** Düzeltme ve İyileştirme Planı  
> **Gizlilik Seviyesi:** AKADEMİK — SINIFLANDIRILMIŞ  
> **Sürüm:** 1.0

---

## 1. Düzeltme Stratejisi Özeti

### 1.1 Genel Bakış

Bu düzeltme planı, CVE-2026-1199 (SessizMesaj) zafiyeti ve ilişkili exploit zincirindeki diğer zafiyetler (CVE-2026-1200, CVE-2026-1201, CVE-2026-1203) için kapsamlı bir iyileştirme stratejisi sunmaktadır.

Plan, dört aşamalı bir yaklaşım benimsemektedir:

```
Düzeltme Zaman Çizelgesi:

  SAAT 0                24-48 saat        1-7 gün          1-4 hafta         1-3 ay
    │                      │                │                  │                │
    ▼                      ▼                ▼                  ▼                ▼
  ┌─────────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────┐
  │   ACİL EYLEM    │ │  KISA VADELİ │ │  ORTA VADELİ │ │ UZUN VADELİ  │ │  DOĞRULAMA │
  │    PLANI        │ │  DÜZELTMELER │ │  DÜZELTMELER │ │  DÜZELTMELER │ │    VE       │
  │                 │ │              │ │              │ │              │ │  İZLEME     │
  │ • Triage        │ │ • iOS 19.4   │ │ • MDM        │ │ • Mimari     │ │ • Penetras- │
  │ • İzolasyon     │ │   yaması     │ │   dağıtımı   │ │   gözden     │ │   yon testi │
  │ • Lockdown Mode │ │ • Lockdown   │ │ • İzleme     │ │   geçirme    │ │ • Uyumluluk │
  │ • Bildirimler   │ │   Mode       │ │   altyapısı  │ │ • Politika   │ │   denetimi  │
  │                 │ │ • iMessage   │ │ • Eğitim     │ │   güncelleme │ │ • Sürekli   │
  │                 │ │   kontrolü   │ │              │ │              │ │   iyileştirme│
  └─────────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ └────────────┘
       FAZA 0              FAZA 1            FAZA 2           FAZA 3         FAZA 4
```

### 1.2 Temel İlkeler

| İlke | Açıklama |
|---|---|
| **Hız Öncelikli** | Kritik zafiyetlerde yama uygulama süresi 24 saati geçmemelidir |
| **Katmanlı Savunma** | Tek bir kontrole bağımlılık yerine çoklu güvenlik katmanları |
| **En Az Ayrıcalık** | Düzeltme sürecinde gereksiz erişimler kısıtlanır |
| **Doğrulanabilirlik** | Her düzeltme adımı test ve doğrulama ile desteklenir |
| **İş Sürekliliği** | Düzeltmeler iş operasyonlarını minimum düzeyde etkiler |
| **Belgelendirme** | Tüm adımlar karar gerekçeleri ile birlikte kayıt altına alınır |

### 1.3 Kapsam

| Kapsam Dahilinde | Kapsam Dışında |
|---|---|
| iOS 19.0 – 19.3.2 çalıştıran tüm kurumsal cihazlar | Kişisel (BYOD) cihazlar (ayrı plan gerekli) |
| iMessage ve ilişkili servisler | Üçüncü taraf mesajlaşma uygulamaları |
| ImageIO, WebKit, Kernel bileşenleri | macOS cihazlar (ayrı plan gerekli) |
| Ağ altyapısı güvenlik kontrolleri | Fiziksel güvenlik kontrolleri |
| MDM (Mobile Device Management) politikaları | Sunucu tarafı altyapı |

---

## 2. Acil Eylem Planı (Faz 0: Saat 0 – 48)

### 2.1 İlk Müdahale Kontrol Listesi

| Sıra | Eylem | Süre | Sorumlu | Durum |
|---|---|---|---|---|
| 1 | 🔴 Olay müdahale ekibini toplayın ve brifingi yapın | 0–1 saat | Olay Müdahale Lideri | ☐ |
| 2 | 🔴 Etkilenen cihaz envanterini çıkarın | 0–2 saat | BT Varlık Yönetimi | ☐ |
| 3 | 🔴 Yüksek riskli kullanıcıları belirleyin (yöneticiler, finans, hukuk) | 0–2 saat | İnsan Kaynakları + BT | ☐ |
| 4 | 🔴 Lockdown Mode aktivasyon talimatını dağıtın | 0–4 saat | Güvenlik Ekibi | ☐ |
| 5 | 🟠 Yüksek riskli kullanıcılarda iMessage'ı geçici olarak devre dışı bırakın | 2–6 saat | BT Destek | ☐ |
| 6 | 🟠 Ağ trafiğinde IOC (Indicator of Compromise) araması başlatın | 2–8 saat | SOC Ekibi | ☐ |
| 7 | 🟠 iOS 19.4 yama uygunluk testini başlatın | 4–12 saat | BT Test Ekibi | ☐ |
| 8 | 🟡 Üst yönetime durum raporu sunun | 4–8 saat | CISO | ☐ |
| 9 | 🟡 Kullanıcılara güvenlik uyarısı gönderin | 6–12 saat | İletişim Ekibi | ☐ |
| 10 | 🟡 Cihaz ele geçirme belirtilerini kontrol edin (forensic triage) | 8–24 saat | Dijital Adli Bilişim | ☐ |
| 11 | 🔵 Düzenleyici bildirim gereksinimlerini değerlendirin | 12–24 saat | Hukuk Departmanı | ☐ |
| 12 | 🔵 Sigorta şirketine ön bildirim yapın (siber sigorta) | 24–48 saat | Risk Yönetimi | ☐ |

### 2.2 Lockdown Mode Aktivasyon Prosedürü

```
Apple Lockdown Mode Aktivasyon Adımları:

1. Ayarlar → Gizlilik ve Güvenlik → Lockdown Mode
2. "Lockdown Mode'u Aç" düğmesine dokunun
3. Bilgi ekranını okuyun → "Lockdown Mode'u Aç" onaylayın
4. Cihaz parolasını girin
5. "Aç ve Yeniden Başlat" düğmesine dokunun
6. Cihaz yeniden başlatılacaktır (~2 dakika)

Lockdown Mode Etkileri (kullanıcı bilgilendirmesi):
├── ✅ iMessage: Resim/dosya önizlemesi engellenir (zafiyet hafifletilir)
├── ✅ Web: JIT JavaScript derlemesi devre dışı (WebKit zafiyeti hafifletilir)
├── ⚠️ FaceTime: Yalnızca önceden aranmış kişilerden gelen çağrılar
├── ⚠️ Paylaşılan Albümler: Devre dışı bırakılır
├── ⚠️ USB: Kilitli cihazda USB bağlantısı engellenir
├── ⚠️ Yapılandırma Profilleri: MDM dışı profil yüklenemez
└── ❌ Bazı web siteleri düzgün çalışmayabilir

Bilinen Kısıtlama: Lockdown Mode, CVE-2026-1199'u %100 
engellemez, ancak exploit zincirini önemli ölçüde zorlaştırır.
Tahmini koruma oranı: ~%70
```

### 2.3 Tehlike Göstergeleri (IOC) Kontrol Listesi

| IOC Türü | Gösterge | Tespit Yöntemi |
|---|---|---|
| **Ağ** | TCP/5223 üzerinden anormal boyutlu iMessage paketleri (>5MB HEIC) | Wireshark / IDS kuralı |
| **Ağ** | Bilinmeyen C2 sunucularına HTTPS bağlantıları | Firewall / DNS logları |
| **Ağ** | iMessage relay sunucularına yoğun bağlantı (>100/saat) | NetFlow analizi |
| **Cihaz** | `/private/var/tmp/` altında beklenmeyen `.heic` dosyaları | libimobiledevice |
| **Cihaz** | `imagent` sürecinin anormal bellek tüketimi (>500MB) | Xcode Instruments |
| **Cihaz** | `BlastDoor` sürecinin beklenmeyen crash logları | `/var/mobile/Library/Logs/CrashReporter/` |
| **Cihaz** | Bilinmeyen LaunchDaemon veya LaunchAgent girişleri | Plist analizi |
| **Cihaz** | Anormal pil tüketimi (>%30 artış) | Pil kullanım istatistikleri |
| **Cihaz** | Bilinmeyen ağ uzantıları veya VPN profilleri | Ayarlar → VPN & Ağ |
| **Sistem** | `sysdiagnose` çıktısında ImageIO crash kayıtları | Apple sysdiagnose |

---

## 3. Kısa Vadeli Düzeltmeler (Faz 1: 1–7 Gün)

### 3.1 iOS 19.4 Yama Dağıtım Planı

#### Dağıtım Stratejisi: Aşamalı Dağıtım (Phased Rollout)

| Dalga | Hedef Grup | Cihaz Sayısı | Zamanlama | Onay |
|---|---|---|---|---|
| **Dalga 0 — Test** | BT ve güvenlik ekibi cihazları | 5–10 | Gün 1 | BT Müdürü |
| **Dalga 1 — Yüksek Risk** | Yöneticiler, finans, hukuk, İK | 20–50 | Gün 1–2 | CISO |
| **Dalga 2 — Orta Risk** | Satış, pazarlama, mühendislik | 50–200 | Gün 2–4 | BT Müdürü |
| **Dalga 3 — Genel** | Tüm kalan cihazlar | Kalan | Gün 4–7 | BT Operasyon |
| **Dalga 4 — Temizlik** | Güncellenmemiş/sorunlu cihazlar | Değişken | Gün 7+ | BT Destek |

#### Yama Öncesi Kontrol Listesi

| # | Kontrol | Sorumlu | Durum |
|---|---|---|---|
| 1 | iCloud yedekleme kontrolü (son yedek <24 saat) | Son Kullanıcı | ☐ |
| 2 | Yeterli depolama alanı (>5 GB boş alan) | BT Destek | ☐ |
| 3 | Pil seviyesi >%50 veya güç kaynağına bağlı | Son Kullanıcı | ☐ |
| 4 | Wi-Fi bağlantısı mevcut | Son Kullanıcı | ☐ |
| 5 | Kritik uygulamalar uyumluluk testi (Dalga 0 sonrası) | BT Test | ☐ |
| 6 | MDM profili aktif ve güncel | MDM Yöneticisi | ☐ |

#### Yama Sonrası Doğrulama

```
Doğrulama Adımları (her cihaz için):

1. iOS Sürüm Kontrolü
   Ayarlar → Genel → Hakkında → Yazılım Sürümü
   Beklenen: iOS 19.4 (Build 23F79)

2. ImageIO Framework Sürüm Kontrolü (MDM üzerinden)
   /System/Library/Frameworks/ImageIO.framework/Info.plist
   CFBundleVersion >= 19.4.0

3. iMessage Fonksiyonellik Testi
   - Metin mesajı gönderme/alma: ✅
   - Fotoğraf gönderme/alma: ✅
   - Grup mesajı: ✅

4. Uygulama Uyumluluk Kontrolü
   - Kritik iş uygulamaları: ✅
   - VPN bağlantısı: ✅
   - E-posta: ✅

5. Güvenlik Tarama Doğrulaması
   - OpenVAS yeniden tarama ile CVE-2026-1199 kapatılmış olmalı
```

### 3.2 iMessage Güvenlik Kontrolleri

| Kontrol | Uygulama | Risk Azaltma |
|---|---|---|
| **Lockdown Mode** | Tüm yüksek riskli kullanıcılarda etkinleştir | %70 risk azaltma |
| **Bilinmeyen Gönderenler Filtresi** | Ayarlar → Mesajlar → Bilinmeyen Göndericileri Filtrele | Kısmi koruma |
| **iMessage Devre Dışı** | En yüksek riskli cihazlarda geçici olarak | %100 iMessage vektörü kapatılır |
| **Mesaj Saklama Süresi** | 30 gün → otomatik silme | Saldırı kanıtlarını sınırlar |

### 3.3 Ağ Seviyesinde Hafifletme

| Kontrol | Yapılandırma | Sorumlu |
|---|---|---|
| **IDS/IPS Kuralı** | iMessage trafiğinde >2MB HEIC payload tespiti | SOC |
| **DNS Filtreleme** | Bilinen C2 domain'lerini engelleyin | Ağ Güvenliği |
| **Firewall Kuralı** | Anormal TCP/5223 bağlantılarını logla ve uyar | Ağ Güvenliği |
| **SSL İnceleme** | iMessage trafiği için deep packet inspection (dikkatli) | Ağ Güvenliği |

---

## 4. Orta Vadeli Düzeltmeler (Faz 2: 1–4 Hafta)

### 4.1 MDM (Mobile Device Management) Güçlendirme

| Politika | Açıklama | Öncelik |
|---|---|---|
| **Zorunlu Güncelleme Politikası** | iOS güncellemelerini 72 saat içinde zorunlu kıl, ertelemeyi 3 günle sınırla | 🔴 Yüksek |
| **Uyumluluk Politikası** | Minimum iOS sürümü: 19.4. Uyumsuz cihazlarda kurumsal e-posta ve VPN erişimini engelle | 🔴 Yüksek |
| **Uygulama Beyaz Listesi** | Yalnızca onaylı uygulamaların yüklenmesine izin ver | 🟠 Orta |
| **İleri Veri Koruma** | Advanced Data Protection for iCloud'u zorunlu kıl | 🟠 Orta |
| **Lockdown Mode Politikası** | Yüksek riskli kullanıcılar için Lockdown Mode'u zorunlu kıl | 🟠 Orta |
| **USB Kısıtlaması** | USB Restricted Mode'u 1 saate düşür (varsayılan 72 saat) | 🟡 Düşük |

#### MDM Yapılandırma Profili (Örnek)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" 
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadType</key>
            <string>com.apple.applicationaccess</string>
            <key>allowLockdownMode</key>
            <true/>
            <key>enforcedSoftwareUpdateDelay</key>
            <integer>3</integer>
            <key>forceDelayedSoftwareUpdates</key>
            <false/>
            <key>allowUSBRestrictedMode</key>
            <true/>
        </dict>
        <dict>
            <key>PayloadType</key>
            <string>com.apple.os.update.policy</string>
            <key>CriticalUpdateInstallPolicy</key>
            <string>RequireInstall</string>
            <key>MaximumDeferrals</key>
            <integer>3</integer>
            <key>DeferralPeriodInDays</key>
            <integer>3</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>SessizMesaj Güvenlik Politikası</string>
    <key>PayloadIdentifier</key>
    <string>com.istinye.security.sessizmesaj</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

### 4.2 İzleme Altyapısı Kurulumu

| Bileşen | Araç / Çözüm | Amaç | Kurulum Süresi |
|---|---|---|---|
| **SIEM Entegrasyonu** | Splunk / Elastic SIEM | iOS cihaz loglarını merkezi izleme | 1–2 hafta |
| **EDR (Endpoint Detection)** | CrowdStrike Falcon Mobile / MS Defender for Endpoint | Cihaz seviyesinde tehdit algılama | 1 hafta |
| **Ağ İzleme** | Zeek (Bro) + Suricata | iMessage trafik anomali tespiti | 3–5 gün |
| **Tehdit İstihbaratı** | MISP + STIX/TAXII beslemeleri | IOC güncellemeleri ve paylaşımı | 1 hafta |
| **Zafiyet Tarayıcı** | OpenVAS sürekli tarama profili | Haftalık otomatik zafiyet taraması | 2–3 gün |

#### SIEM Korelasyon Kuralları

```
Kural 1: iMessage HEIC Exploit Girişimi
─────────────────────────────────────────
Koşul: iMessage trafiğinde >2MB boyutunda HEIC attachment
  VE alıcı cihaz iOS <19.4
  VE gönderen bilinmeyen/yeni kişi
Eylem: YÜKSEK öncelikli uyarı, otomatik cihaz karantinası
Yanıt: SOC L2 analisti incelemesi

Kural 2: BlastDoor Crash Tespiti
─────────────────────────────────
Koşul: BlastDoor sürecinin crash raporu (CrashReporter)
  VE crash türü: SIGABRT veya SIGSEGV
  VE son 1 saatte >3 crash
Eylem: KRİTİK uyarı, cihaz izolasyonu
Yanıt: Olay müdahale ekibi aktivasyonu

Kural 3: Şüpheli C2 İletişimi
──────────────────────────────
Koşul: iOS cihazından bilinmeyen harici IP'ye bağlantı
  VE bağlantı süresi >30 dakika
  VE DNS sorgusu yapılmamış (doğrudan IP)
Eylem: YÜKSEK öncelikli uyarı
Yanıt: Ağ adli analizi başlatma
```

### 4.3 Güvenlik Farkındalık Eğitimi

| Eğitim Modülü | Hedef Kitle | Süre | Format |
|---|---|---|---|
| **Sıfır Tıklama Saldırıları: Ne, Neden, Nasıl?** | Tüm personel | 30 dk | Online video + quiz |
| **iOS Güvenlik Ayarları Rehberi** | Tüm iOS kullanıcıları | 45 dk | Uygulamalı atölye |
| **Lockdown Mode Kullanımı** | Yüksek riskli kullanıcılar | 20 dk | Birebir eğitim |
| **Şüpheli Mesaj/Dosya Bildirimi** | Tüm personel | 15 dk | E-posta + infografik |
| **Olay Müdahale Prosedürü** | BT ve güvenlik ekibi | 2 saat | Masa başı tatbikatı |

---

## 5. Uzun Vadeli Düzeltmeler (Faz 3: 1–3 Ay)

### 5.1 Mimari Gözden Geçirme

| Alan | Mevcut Durum | Hedef Durum | Aksiyon |
|---|---|---|---|
| **Ağ Segmentasyonu** | Düz ağ, mobil cihazlar aynı VLAN'da | Mobil cihazlar için ayrı VLAN + mikro segmentasyon | Ağ yeniden tasarımı |
| **Sıfır Güven (Zero Trust)** | VPN tabanlı uzaktan erişim | ZTNA (Zero Trust Network Access) çözümü | Zscaler / Cloudflare Access değerlendirmesi |
| **Kimlik Doğrulama** | Parola + SMS 2FA | Donanım anahtarı (FIDO2) + biyometrik | YubiKey dağıtımı |
| **E-posta Güvenliği** | Temel spam filtreleme | Advanced Threat Protection + sandboxing | Microsoft Defender for O365 |
| **Veri Sınıflandırma** | Sınıflandırma yok | Otomatik DLP + veri sınıflandırma | Microsoft Purview |

### 5.2 Politika ve Prosedür Güncellemeleri

| Politika | Güncelleme İçeriği | Sorumlu | Hedef Tarih |
|---|---|---|---|
| **Mobil Cihaz Güvenlik Politikası** | Zorunlu güncelleme SLA'ları, Lockdown Mode gereksinimleri, BYOD kısıtlamaları eklenmeli | CISO | 15 Temmuz 2026 |
| **Zafiyet Yönetimi Politikası** | Kritik zafiyetler için 24 saat SLA, EPSS entegrasyonu, otomatik yama politikası | Güvenlik Yöneticisi | 1 Temmuz 2026 |
| **Olay Müdahale Planı** | Sıfır tıklama saldırı senaryosu, mobil cihaz forensic prosedürü eklenmeli | Olay Müdahale Lideri | 15 Temmuz 2026 |
| **İş Sürekliliği Planı** | iMessage kesintisi senaryosu, alternatif iletişim kanalları tanımlanmalı | İş Sürekliliği Yöneticisi | 1 Ağustos 2026 |
| **Tedarikçi Risk Yönetimi** | Apple bağımlılık riski değerlendirmesi, alternatif platform analizi | Risk Yöneticisi | 1 Eylül 2026 |

### 5.3 Sürekli İyileştirme Programı

```
Sürekli İyileştirme Döngüsü (PDCA):

  ┌────────────────────────────────────────────────────────┐
  │                                                        │
  │   PLANLA (Plan)              UYGULA (Do)               │
  │   ┌──────────────┐          ┌──────────────┐           │
  │   │ • Aylık       │          │ • Yama        │           │
  │   │   zafiyet     │───────▶  │   uygulama    │           │
  │   │   taraması    │          │ • Kontrol     │           │
  │   │ • Risk        │          │   güncellemesi│           │
  │   │   değerlendir-│          │ • Eğitim      │           │
  │   │   me          │          │   düzenleme   │           │
  │   └──────────────┘          └──────┬───────┘           │
  │          ▲                         │                    │
  │          │                         ▼                    │
  │   ┌──────────────┐          ┌──────────────┐           │
  │   │ • Metrik      │          │ • Yama        │           │
  │   │   analizi     │◀─────── │   doğrulama   │           │
  │   │ • Boşluk      │          │ • Penetrasyon │           │
  │   │   analizi     │          │   testi       │           │
  │   │ • Plan        │          │ • IOC izleme  │           │
  │   │   güncelleme  │          │               │           │
  │   └──────────────┘          └──────────────┘           │
  │   ÖNLEM AL (Act)             KONTROL ET (Check)        │
  │                                                        │
  └────────────────────────────────────────────────────────┘
```

---

## 6. Düzeltme Doğrulama Planı

### 6.1 Doğrulama Aşamaları

| Aşama | Aktivite | Yöntem | Başarı Kriteri | Zamanlama |
|---|---|---|---|---|
| **D1** | Yama Kurulum Doğrulaması | MDM cihaz sorgusu | iOS 19.4 tüm cihazlarda yüklü | Yama sonrası 24 saat |
| **D2** | Zafiyet Tarama Doğrulaması | OpenVAS yeniden tarama | CVE-2026-1199 "kapatılmış" durumda | Yama sonrası 48 saat |
| **D3** | Fonksiyonel Test | Manuel test senaryoları | Tüm iş uygulamaları çalışır durumda | Yama sonrası 72 saat |
| **D4** | Penetrasyon Testi | Harici güvenlik firması | Exploit zinciri başarısız | Yama sonrası 1–2 hafta |
| **D5** | IOC Taraması | EDR + SIEM retrospektif analiz | Ele geçirme belirtisi yok | Yama sonrası 1 hafta |
| **D6** | Uyumluluk Denetimi | MDM politika uyumluluk raporu | %100 uyumluluk | Yama sonrası 2 hafta |

### 6.2 Penetrasyon Testi Kapsamı

| Test Alanı | Test Türü | Açıklama | Beklenen Sonuç |
|---|---|---|---|
| **iMessage HEIC Exploit** | Black-box | Yamalanmış cihaza PoC HEIC gönderimi | Exploit başarısız, crash yok |
| **BlastDoor Bypass** | Grey-box | Sandbox kaçış denemeleri | Sandbox izolasyonu sağlam |
| **WebKit JIT** | Black-box | Tip karışıklığı PoC'leri | JIT güvenlik kontrolleri aktif |
| **Kernel IOSurface** | Grey-box | UAF tetikleme denemeleri | Kernel korumaları aktif |
| **Lockdown Mode** | Functional | Lockdown Mode bypass denemeleri | Bypass başarısız |
| **MDM Politikaları** | Configuration | Politika uyumluluk kontrolü | Tüm politikalar uygulanmış |

### 6.3 Doğrulama Metrikleri

| Metrik | Hedef | Ölçüm Yöntemi | Sıklık |
|---|---|---|---|
| Yamalanmış cihaz oranı | %100 | MDM cihaz envanteri | Günlük |
| Ortalama yama süresi (MTTP) | <72 saat | MDM güncelleme logları | Her yama döngüsünde |
| Lockdown Mode etkinleştirme (yüksek risk) | %100 | MDM politika raporu | Haftalık |
| IOC tespit sayısı | 0 | SIEM korelasyon raporları | Günlük |
| Güvenlik eğitimi tamamlama oranı | >%95 | LMS (öğrenim yönetim sistemi) | Aylık |
| Güvenlik olayı (iOS kaynaklı) | 0 | Olay yönetim sistemi | Sürekli |

---

## 7. Sorumlu Ekipler ve Roller

### 7.1 RACI Matrisi

| Aktivite | CISO | Güvenlik Ekibi | BT Operasyon | SOC | Son Kullanıcı | Hukuk | İK |
|---|---|---|---|---|---|---|---|
| Olay müdahale kararı | **S** | **R** | I | C | — | I | — |
| iOS 19.4 yama dağıtımı | I | C | **R** | — | **S** | — | — |
| Lockdown Mode aktivasyonu | I | **R** | **S** | — | **R** | — | I |
| IOC izleme ve analiz | I | C | — | **R** | — | — | — |
| Penetrasyon testi koordinasyonu | **S** | **R** | C | I | — | — | — |
| Kullanıcı bilgilendirme | **S** | C | I | — | — | C | **R** |
| MDM politika güncellemesi | **S** | **R** | **R** | — | — | C | — |
| Güvenlik eğitimi | I | **R** | — | — | **R** | — | **S** |
| Düzenleyici bildirim | **S** | C | — | — | — | **R** | I |
| Mimari gözden geçirme | **S** | **R** | **R** | C | — | — | — |

> **R** = Responsible (Sorumlu), **S** = Accountable (Hesap Verebilir), **C** = Consulted (Danışılan), **I** = Informed (Bilgilendirilen)

### 7.2 Ekip İletişim Planı

| Ekip | İletişim Kanalı | Toplantı Sıklığı | Eskalasyon Yolu |
|---|---|---|---|
| **Olay Müdahale Ekibi** | Güvenli kanal (Signal/Wire) | Saatlik (aktif olay süresince) | → CISO → CTO → CEO |
| **BT Operasyon** | Microsoft Teams — BT kanalı | Günlük standup (yama süresince) | → BT Müdürü → CTO |
| **SOC** | SIEM dashboard + PagerDuty | 7/24 izleme, 4 saatlik vardiya | → SOC Müdürü → CISO |
| **Üst Yönetim** | E-posta + toplantı | Haftalık durum raporu | — |
| **Son Kullanıcılar** | Kurumsal e-posta + intranet | Gerektiğinde bilgilendirme | → BT Destek → BT Müdürü |

### 7.3 Eskalasyon Matrisi

| Seviye | Koşul | Bildirim Süresi | Bildirilecek Kişi |
|---|---|---|---|
| **Seviye 1** | Zafiyet tespit edildi, yama planlandı | 4 saat | Güvenlik Ekip Lideri |
| **Seviye 2** | Aktif exploit girişimi tespit edildi | 1 saat | CISO + BT Müdürü |
| **Seviye 3** | Cihaz ele geçirme doğrulandı | 30 dakika | CISO + CTO + Hukuk |
| **Seviye 4** | Toplu veri ihlali doğrulandı | Hemen | CEO + Yönetim Kurulu + Düzenleyiciler |

---

## 8. Maliyet Tahmini

### 8.1 Düzeltme Maliyet Tablosu

| Kalem | Açıklama | Tahmini Maliyet (USD) | Faz |
|---|---|---|---|
| **iOS 19.4 Yama Dağıtımı** | BT ekibi çalışma saatleri (40 saat × 2 kişi) | $4,000 | Faz 1 |
| **Lockdown Mode Destek** | Kullanıcı destek ve eğitim (80 saat) | $4,000 | Faz 0–1 |
| **OpenVAS Doğrulama Taraması** | Lisans + operasyon (mevcut altyapı) | $500 | Faz 1 |
| **Penetrasyon Testi** | Harici firma — iOS güvenlik değerlendirmesi | $15,000 – $25,000 | Faz 2 |
| **EDR Çözümü** | CrowdStrike Falcon Mobile — 200 cihaz × 12 ay | $24,000 | Faz 2 |
| **SIEM Entegrasyonu** | Splunk / Elastic — iOS log kaynağı ekleme | $5,000 | Faz 2 |
| **MDM Güçlendirme** | Politika geliştirme ve test (60 saat) | $3,000 | Faz 2 |
| **Güvenlik Eğitimi** | Online platform + içerik geliştirme | $2,000 | Faz 2 |
| **ZTNA Çözümü** | Zscaler / Cloudflare Access — pilot proje | $10,000 – $20,000 | Faz 3 |
| **FIDO2 Anahtarları** | YubiKey 5 NFC × 50 adet (yüksek riskli kullanıcılar) | $2,500 | Faz 3 |
| **Mimari Danışmanlık** | Güvenlik mimarisi gözden geçirme (harici) | $15,000 – $30,000 | Faz 3 |
| **Politika ve Prosedür** | Belgelendirme ve gözden geçirme (40 saat) | $2,000 | Faz 3 |
| **Olay Müdahale Tatbikatı** | Tabletop exercise — 1 gün | $3,000 | Faz 3 |

### 8.2 Maliyet Özeti

| Faz | Açıklama | Minimum | Maksimum |
|---|---|---|---|
| **Faz 0** | Acil eylem | $2,000 | $4,000 |
| **Faz 1** | Kısa vadeli düzeltmeler | $6,500 | $8,500 |
| **Faz 2** | Orta vadeli düzeltmeler | $49,000 | $59,000 |
| **Faz 3** | Uzun vadeli düzeltmeler | $32,500 | $55,500 |
| | **TOPLAM** | **$90,000** | **$127,000** |

### 8.3 Maliyet-Fayda Analizi

| Senaryo | Tahmini Zarar | Düzeltme Maliyeti | ROI |
|---|---|---|---|
| Tek cihaz ele geçirme (kişisel veri) | $50,000 | $90,000 | Zarar daha düşük |
| Kurumsal cihaz ele geçirme (iş verileri) | $500,000 | $90,000 | **5.5x fayda** |
| Toplu veri ihlali (50+ cihaz) | $5,000,000 | $127,000 | **39x fayda** |
| Devlet destekli gözetim (fikri mülkiyet) | $10,000,000+ | $127,000 | **79x+ fayda** |

> **Sonuç:** Düzeltme maliyeti, olası zarar senaryolarının büyük çoğunluğunda yatırımın karşılığını fazlasıyla vermektedir. Yalnızca tek bir düşük profilli cihaz ele geçirme senaryosunda maliyet zarar ile karşılaştırılabilir düzeydedir; ancak bu senaryoda bile güvenlik yatırımı uzun vadeli risk azaltma açısından gereklidir.

---

## 9. Sonuç

### 9.1 Düzeltme Planı Özeti

Bu düzeltme planı, CVE-2026-1199 (SessizMesaj) zafiyeti için kapsamlı bir dört fazlı iyileştirme stratejisi sunmaktadır:

| Faz | Hedef | Anahtar Çıktı | Süre |
|---|---|---|---|
| **Faz 0 — Acil** | Riski minimize et | Lockdown Mode, iMessage kontrolü, IOC taraması | 0–48 saat |
| **Faz 1 — Kısa Vadeli** | Zafiyeti kapat | iOS 19.4 yama dağıtımı, doğrulama | 1–7 gün |
| **Faz 2 — Orta Vadeli** | Güvenlik duruşunu güçlendir | MDM, izleme, eğitim | 1–4 hafta |
| **Faz 3 — Uzun Vadeli** | Dayanıklılığı artır | Mimari iyileştirme, politika güncellemesi | 1–3 ay |

### 9.2 Kritik Başarı Faktörleri

1. **Üst Yönetim Desteği:** Bütçe onayı ve önceliklendirme için üst yönetim sponsorluğu şarttır
2. **Hızlı Yama Uygulama:** İlk 72 saat içinde yüksek riskli cihazların %100'ü yamalanmalıdır
3. **Kullanıcı İşbirliği:** Lockdown Mode ve güncelleme süreçlerinde kullanıcı uyumu kritiktir
4. **Sürekli İzleme:** Yama sonrası bile IOC izleme ve anomali tespiti sürdürülmelidir
5. **Belgelendirme:** Tüm adımlar, kararlar ve sonuçlar kayıt altına alınmalıdır

### 9.3 Sonraki Adımlar

| # | Adım | Sorumlu | Hedef Tarih |
|---|---|---|---|
| 1 | Bu planın üst yönetim tarafından onaylanması | CISO | 6 Haziran 2026 |
| 2 | Faz 0 acil eylem adımlarının başlatılması | Olay Müdahale Ekibi | 6 Haziran 2026 |
| 3 | iOS 19.4 test dağıtımının başlatılması (Dalga 0) | BT Operasyon | 7 Haziran 2026 |
| 4 | Tüm cihazlarda yama dağıtımının tamamlanması | BT Operasyon | 13 Haziran 2026 |
| 5 | Doğrulama taramasının gerçekleştirilmesi | Güvenlik Ekibi | 15 Haziran 2026 |
| 6 | Penetrasyon testi planlaması | Güvenlik Ekibi | 20 Haziran 2026 |
| 7 | MDM politika güncellemesinin tamamlanması | BT Operasyon | 1 Temmuz 2026 |
| 8 | Mimari gözden geçirme başlangıcı | CISO + CTO | 15 Temmuz 2026 |
| 9 | Tüm düzeltme adımlarının kapanış raporu | CISO | 1 Eylül 2026 |

---

> **Raporu Hazırlayan:** Mahmut — İstinye Üniversitesi, Siber Güvenlik  
> **Rapor Tarihi:** 5 Haziran 2026  
> **Onay Durumu:** Onay Bekliyor  
> **Sonraki Gözden Geçirme:** 12 Haziran 2026

---

*Bu belge, İstinye Üniversitesi Siber Güvenlik Bölümü akademik projesi kapsamında hazırlanmıştır. Tüm veriler akademik araştırma amacıyla oluşturulmuş kurgusal senaryolara dayanmaktadır.*
