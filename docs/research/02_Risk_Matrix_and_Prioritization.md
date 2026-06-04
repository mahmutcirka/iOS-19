# 📊 Risk Matrisi ve Önceliklendirme Raporu

> **Proje:** SessizMesaj — iOS 19 Sıfır Tıklama Zafiyet Analizi  
> **Kurum:** İstinye Üniversitesi — Siber Güvenlik Bölümü  
> **Belge Türü:** Risk Değerlendirme ve Önceliklendirme  
> **Gizlilik Seviyesi:** AKADEMİK — SINIFLANDIRILMIŞ  
> **Sürüm:** 1.0

---

## 1. Risk Değerlendirme Metodolojisi

### 1.1 Kullanılan Standartlar ve Çerçeveler

Bu risk değerlendirmesi aşağıdaki uluslararası standart ve çerçeveler temel alınarak hazırlanmıştır:

| Standart / Çerçeve | Sürüm | Kullanım Alanı |
|---|---|---|
| **CVSS v3.1** | 3.1 (Haziran 2019) | Zafiyet puanlama ve önceliklendirme |
| **NIST SP 800-30** | Rev. 1 | Risk değerlendirme metodolojisi |
| **ISO 27005** | 2022 | Bilgi güvenliği risk yönetimi |
| **MITRE ATT&CK** | v15 (Mobile) | Saldırı teknik ve taktik eşleştirmesi |
| **OWASP Risk Rating** | 2.0 | Risk derecelendirme metodolojisi |
| **FIRST EPSS** | v3 | Exploit olasılık tahminleme |

### 1.2 Risk Hesaplama Formülü

```
Risk Seviyesi = Olasılık (Likelihood) × Etki (Impact)

Olasılık Faktörleri:
├── Saldırı Karmaşıklığı (Attack Complexity)
├── Gerekli Ayrıcalıklar (Privileges Required)
├── Kullanıcı Etkileşimi (User Interaction)
├── Exploit Olgunluğu (Exploit Maturity)
└── Tehdit Aktörü Kapasitesi (Threat Actor Capability)

Etki Faktörleri:
├── Gizlilik Etkisi (Confidentiality Impact)
├── Bütünlük Etkisi (Integrity Impact)
├── Erişilebilirlik Etkisi (Availability Impact)
├── İş Sürekliliği Etkisi (Business Continuity)
└── İtibar Etkisi (Reputational Impact)
```

### 1.3 Olasılık ve Etki Seviyeleri

**Olasılık Seviyeleri:**

| Seviye | Puan | Tanım | Yıllık Olasılık |
|---|---|---|---|
| **Çok Yüksek** | 5 | Aktif istismar mevcut, saldırı devam ediyor | >%90 |
| **Yüksek** | 4 | PoC mevcut, istismar bekleniyor | %60–%90 |
| **Orta** | 3 | Zafiyet bilinen, istismar olası | %30–%60 |
| **Düşük** | 2 | İstismar zor, özel koşullar gerekli | %10–%30 |
| **Çok Düşük** | 1 | Teorik zafiyet, pratik istismar çok zor | <%10 |

**Etki Seviyeleri:**

| Seviye | Puan | Tanım | Mali Etki Aralığı |
|---|---|---|---|
| **Felaket** | 5 | Tam sistem ele geçirme, veri kaybı, itibar zararı | >$10M |
| **Büyük** | 4 | Ciddi veri sızıntısı, operasyonel aksama | $1M–$10M |
| **Orta** | 3 | Sınırlı veri sızıntısı, kısmi aksama | $100K–$1M |
| **Küçük** | 2 | Minimum veri etkisi, düşük aksama | $10K–$100K |
| **İhmal Edilebilir** | 1 | Bilgi düzeyinde, operasyonel etki yok | <$10K |

---

## 2. Risk Matrisi (5×5)

### 2.1 Genel Risk Matrisi

Aşağıdaki matris, tespit edilen tüm zafiyetlerin olasılık ve etki değerlerine göre konumlandırılmasını göstermektedir:

```
                              E T K İ (Impact)
                 ┌──────────┬──────────┬──────────┬──────────┬──────────┐
                 │ İhmal    │  Küçük   │   Orta   │  Büyük   │ Felaket  │
                 │ Edilebilir│   (2)    │   (3)    │   (4)    │   (5)    │
                 │   (1)    │          │          │          │          │
    ┌────────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
    │ Çok Yüksek │          │          │          │          │ ■■■■■■■  │
    │    (5)     │  ORTA-5  │ YÜKSEK-10│KRİTİK-15│KRİTİK-20│KRİTİK-25│
O   │            │          │          │          │          │CVE-1199 │
L   ├────────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
A   │  Yüksek    │          │          │          │ ■■■■■■■  │          │
S   │    (4)     │ DÜŞÜK-4  │  ORTA-8  │YÜKSEK-12│KRİTİK-16│KRİTİK-20│
I   │            │          │          │          │CVE-1200 │          │
L   ├────────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
I   │   Orta     │          │          │ ■■■■■■■  │ ■■■■■■■  │          │
K   │    (3)     │ DÜŞÜK-3  │  ORTA-6  │  ORTA-9  │YÜKSEK-12│KRİTİK-15│
    │            │          │          │CVE-1201 │CVE-1203 │          │
    ├────────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
    │  Düşük     │          │ ■■■■■■■  │ ■■■■■■■  │          │          │
    │    (2)     │ DÜŞÜK-2  │ DÜŞÜK-4  │  ORTA-6  │  ORTA-8  │YÜKSEK-10│
    │            │          │CVE-1215 │CVE-1205 │          │          │
    │            │          │CVE-1218 │CVE-1208 │          │          │
    ├────────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
    │ Çok Düşük  │ ■■■■■■■  │          │ ■■■■■■■  │          │          │
    │    (1)     │ DÜŞÜK-1  │ DÜŞÜK-2  │ DÜŞÜK-3  │  ORTA-4  │  ORTA-5  │
    │            │ 8 Düşük  │          │CVE-1212 │          │          │
    └────────────┴──────────┴──────────┴──────────┴──────────┴──────────┘

    Renk Kodları:
    ■ KRİTİK (16-25) → Derhal müdahale gerekli
    ■ YÜKSEK  (10-15) → 48 saat içinde aksiyon
    ■ ORTA    (5-9)   → 1 hafta içinde planlama
    ■ DÜŞÜK   (1-4)   → Rutin bakım döngüsünde
```

### 2.2 CVE-2026-1199 Matris Konumlandırması

| Faktör | Değerlendirme | Puan | Gerekçe |
|---|---|---|---|
| **Olasılık** | Çok Yüksek | **5** | Vahşi doğada aktif istismar, devlet destekli saldırılarda kullanım |
| **Etki** | Felaket | **5** | Tam cihaz kontrolü, tüm verilere erişim, kalıcı implant |
| **Risk Skoru** | **KRİTİK** | **25/25** | Matrisin en yüksek risk bölgesinde |

---

## 3. CVSS v3.1 Vektör Analizi

### 3.1 CVE-2026-1199 — Detaylı CVSS Analizi

**CVSS Vektörü:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`  
**Temel Skor:** 9.8 / 10.0

#### Temel Metrikler (Base Metrics)

| Metrik | Kısaltma | Değer | Puan | Açıklama |
|---|---|---|---|---|
| **Saldırı Vektörü** | AV | Network (N) | — | Saldırı ağ üzerinden gerçekleştirilebilir. iMessage internet üzerinden çalışır, fiziksel yakınlık gerekmez. |
| **Saldırı Karmaşıklığı** | AC | Low (L) | — | Özel koşul gerekmez. Hazırlanmış HEIC dosyasını göndermek yeterlidir. Zamanlama veya yarış durumu bağımlılığı yoktur. |
| **Gerekli Ayrıcalıklar** | PR | None (N) | — | Saldırganın hedef sistemde herhangi bir ayrıcalığa sahip olması gerekmez. Yalnızca hedefin telefon numarası veya Apple ID'si yeterlidir. |
| **Kullanıcı Etkileşimi** | UI | None (N) | — | **Sıfır tıklama saldırısı.** Kullanıcının mesajı açması, dosyayı görüntülemesi veya herhangi bir eylem gerçekleştirmesi gerekmez. Mesaj alındığında otomatik olarak tetiklenir. |
| **Kapsam** | S | Unchanged (U) | — | Zafiyet, etkilenen bileşen (ImageIO) ile aynı güvenlik kapsamında sınırlıdır. Ancak exploit zinciri ile kapsam genişletilir. |
| **Gizlilik Etkisi** | C | High (H) | — | Tüm cihaz verileri (fotoğraflar, mesajlar, konum, parolalar, biyometrik veriler) saldırgana açık hale gelir. |
| **Bütünlük Etkisi** | I | High (H) | — | Saldırgan cihaz üzerinde dosya değiştirme, uygulama yükleme, ayar değiştirme gibi tam yazma yetkisine sahip olur. |
| **Erişilebilirlik Etkisi** | A | High (H) | — | Saldırgan cihazı uzaktan yeniden başlatabilir, kilitleme yapabilir veya tamamen kullanılamaz hale getirebilir. |

#### Zamansal Metrikler (Temporal Metrics)

| Metrik | Kısaltma | Değer | Açıklama |
|---|---|---|---|
| **Exploit Kod Olgunluğu** | E | High (H) | Fonksiyonel exploit mevcut ve aktif kullanımda. Devlet düzeyinde saldırı araçlarına entegre edilmiş. |
| **Düzeltme Seviyesi** | RL | Official Fix (O) | Apple iOS 19.4 ile resmi yama yayınladı (2 Haziran 2026). |
| **Rapor Güvenilirliği** | RC | Confirmed (C) | Apple tarafından doğrulanmış, CVE atanmış, NVD'de yayınlanmış. |

**Zamansal Skor:** 9.1 / 10.0

#### Çevresel Metrikler (Environmental Metrics)

| Metrik | Değerlendirme | Açıklama |
|---|---|---|
| **Gizlilik Gereksinimi** | Yüksek (H) | Kurumsal mobil cihazlarda hassas iş verileri, e-posta, belgeler bulunur |
| **Bütünlük Gereksinimi** | Yüksek (H) | Cihaz bütünlüğü, kimlik doğrulama ve yetkilendirme için kritik |
| **Erişilebilirlik Gereksinimi** | Orta (M) | Mobil cihaz erişimi önemli ancak alternatif iletişim kanalları mevcut |

**Çevresel Skor:** 9.5 / 10.0

### 3.2 Tüm Zafiyetlerin CVSS Karşılaştırması

```
CVSS Skor Dağılımı (0-10 ölçeği):

CVE-2026-1199 ████████████████████████████████████████████████░░  9.8  KRİTİK
CVE-2026-1200 ██████████████████████████████████████████░░░░░░░░  8.6  YÜKSEK
CVE-2026-1201 ████████████████████████████████████████░░░░░░░░░░  8.1  YÜKSEK
CVE-2026-1203 ██████████████████████████████████████░░░░░░░░░░░░  7.8  YÜKSEK
CVE-2026-1205 ████████████████████████████████░░░░░░░░░░░░░░░░░░  6.5  ORTA
CVE-2026-1208 ████████████████████████████░░░░░░░░░░░░░░░░░░░░░░  5.9  ORTA
CVE-2026-1212 ██████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░  5.3  ORTA
CVE-2026-1215 ██████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.7  ORTA
CVE-2026-1218 ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.3  ORTA
```

---

## 4. Risk Önceliklendirme Tablosu

### 4.1 Ana Önceliklendirme Tablosu

| Sıra | CVE ID | Zafiyet Adı | CVSS Skoru | Risk Skoru | Öncelik | EPSS | Durum | Önerilen Eylem | SLA |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **CVE-2026-1199** | ImageIO HEIC Memory Corruption | **9.8** | 25/25 | 🔴 **P0 — Acil** | 0.974 | ⚠️ Yama Bekleniyor | iOS 19.4 güncellemesi, iMessage devre dışı | **24 saat** |
| 2 | **CVE-2026-1200** | BlastDoor Sandbox Escape | **8.6** | 16/25 | 🔴 **P1 — Kritik** | 0.821 | ⚠️ Yama Bekleniyor | iOS 19.4 güncellemesi | **48 saat** |
| 3 | **CVE-2026-1201** | WebKit JIT Type Confusion | **8.1** | 9/25 | 🟠 **P2 — Yüksek** | 0.756 | 🔶 Kısmen Yamalı | iOS 19.4 güncellemesi | **72 saat** |
| 4 | **CVE-2026-1203** | Kernel IOSurface UAF | **7.8** | 12/25 | 🟠 **P2 — Yüksek** | 0.698 | ⚠️ Yama Bekleniyor | iOS 19.4 güncellemesi | **72 saat** |
| 5 | **CVE-2026-1205** | AirDrop BLE Info Disclosure | **6.5** | 6/25 | 🟡 **P3 — Orta** | 0.412 | ⚠️ Açık | AirDrop'u devre dışı bırakma | **1 hafta** |
| 6 | **CVE-2026-1208** | iCloud Keychain Downgrade | **5.9** | 6/25 | 🟡 **P3 — Orta** | 0.385 | ⚠️ Açık | iCloud Keychain senkronizasyon kontrolü | **1 hafta** |
| 7 | **CVE-2026-1212** | Safari Content Blocker Bypass | **5.3** | 3/25 | 🟡 **P4 — Normal** | 0.234 | ✅ Yamalı | Yama doğrulaması | **2 hafta** |
| 8 | **CVE-2026-1215** | Siri Lock Screen Bypass | **4.7** | 4/25 | 🔵 **P4 — Normal** | 0.198 | ⚠️ Açık | Kilitli ekranda Siri'yi devre dışı bırakma | **2 hafta** |
| 9 | **CVE-2026-1218** | Mail Remote Resource Loading | **4.3** | 4/25 | 🔵 **P5 — Düşük** | 0.156 | ⚠️ Açık | Mail gizlilik ayarlarını yapılandırma | **1 ay** |

### 4.2 Exploit Zinciri Önceliklendirmesi

CVE-2026-1199 bağımsız bir zafiyet olarak tek başına kritiktir, ancak tam etki için bir exploit zincirinin parçası olarak çalışır. Zincirdeki her halka birlikte değerlendirilmelidir:

```
Exploit Zinciri Haritası:
                                                        
  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
  │  AŞAMA 1    │     │  AŞAMA 2    │     │  AŞAMA 3    │     │  AŞAMA 4    │
  │             │     │             │     │             │     │             │
  │ CVE-2026-   │────▶│ CVE-2026-   │────▶│ CVE-2026-   │────▶│ CVE-2026-   │
  │   1199      │     │   1200      │     │   1201      │     │   1203      │
  │             │     │             │     │             │     │             │
  │ ImageIO     │     │ BlastDoor   │     │ WebKit JIT  │     │ Kernel      │
  │ HEIC RCE    │     │ Sandbox     │     │ ASLR Bypass │     │ IOSurface   │
  │             │     │ Escape      │     │             │     │ Priv Esc    │
  │ CVSS: 9.8   │     │ CVSS: 8.6   │     │ CVSS: 8.1   │     │ CVSS: 7.8   │
  └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
       │                    │                    │                    │
       ▼                    ▼                    ▼                    ▼
  Uzaktan Kod          Sandbox'tan          Bellek Adresi        Kernel Seviye
  Yürütme              Çıkış                Sızıntısı            Tam Kontrol

  ZİNCİR RİSK SKORU: 9.9 / 10.0 (Bileşik Kritik)
```

### 4.3 EPSS (Exploit Prediction Scoring System) Analizi

| CVE | EPSS Skoru | Persentil | 30 Günlük İstismar Olasılığı | Yorum |
|---|---|---|---|---|
| CVE-2026-1199 | 0.974 | %99.2 | %97.4 | En yüksek risk grubunda, aktif istismar devam ediyor |
| CVE-2026-1200 | 0.821 | %96.5 | %82.1 | CVE-1199 ile birlikte istismar ediliyor |
| CVE-2026-1201 | 0.756 | %94.1 | %75.6 | WebKit zafiyetleri yüksek ilgi görüyor |
| CVE-2026-1203 | 0.698 | %91.8 | %69.8 | Kernel exploit'leri değerli hedefler |
| CVE-2026-1205 | 0.412 | %78.3 | %41.2 | Sınırlı istismar senaryosu |

---

## 5. İş Etkisi Analizi

### 5.1 Etki Kategorileri

| Kategori | CVE-2026-1199 Etkisi | Şiddet | Açıklama |
|---|---|---|---|
| **Veri Gizliliği** | 🔴 Kritik | 5/5 | Tüm cihaz verileri (kişisel, kurumsal, finansal) risk altında. Fotoğraflar, mesajlar, e-postalar, belgeler, parolalar, biyometrik veriler erişilebilir. |
| **Veri Bütünlüğü** | 🔴 Kritik | 5/5 | Saldırgan verileri değiştirebilir, sahte kanıt yerleştirebilir, uygulama ve ayarları manipüle edebilir. |
| **İş Sürekliliği** | 🟠 Yüksek | 4/5 | Etkilenen cihazlar güvenilir kabul edilemez, yeniden kurulum gerekebilir. Kritik iletişim kanalları geçici olarak devre dışı bırakılabilir. |
| **Mali Etki** | 🟠 Yüksek | 4/5 | Olay müdahale maliyetleri, cihaz değiştirme, üretkenlik kaybı, olası yasal yükümlülükler. |
| **İtibar** | 🟠 Yüksek | 4/5 | Veri ihlali durumunda müşteri ve paydaş güveninin sarsılması, medya ilgisi. |
| **Yasal / Uyumluluk** | 🟡 Orta | 3/5 | KVKK, GDPR kapsamında bildirim yükümlülükleri. Kişisel veri ihlali durumunda 72 saat içinde bildirim gerekli. |
| **Operasyonel** | 🟡 Orta | 3/5 | Güncelleme sürecinde kısmi operasyonel aksama, iMessage kullanılamaz olabilir. |

### 5.2 Etkilenen İş Süreçleri

| İş Süreci | Bağımlılık | Etki Seviyesi | Tahmini Kesinti |
|---|---|---|---|
| Kurumsal e-posta erişimi | iOS Mail uygulaması | 🔴 Yüksek | Güncelleme süresince (1-2 saat) |
| İç iletişim | iMessage, FaceTime | 🔴 Yüksek | iMessage devre dışı bırakılırsa süresiz |
| Uzaktan çalışma | VPN, kurumsal uygulamalar | 🟠 Orta | Cihaz yeniden yapılandırma (4-8 saat) |
| Müşteri iletişimi | Telefon, mesajlaşma | 🟡 Düşük | Alternatif kanallar kullanılabilir |
| Dosya paylaşımı | AirDrop, iCloud | 🟡 Düşük | Geçici olarak web erişimi kullanılır |

### 5.3 En Kötü Senaryo Analizi

| Senaryo | Olasılık | Tahmini Mali Etki | Risk Skoru |
|---|---|---|---|
| Tek cihaz ele geçirme — kişisel veriler | Yüksek (%70) | $5,000 – $50,000 | 🔴 Yüksek |
| Kurumsal cihaz ele geçirme — iş verileri | Orta (%40) | $100,000 – $1,000,000 | 🔴 Kritik |
| Toplu cihaz saldırısı — APT kampanyası | Düşük (%15) | $1,000,000 – $10,000,000 | 🔴 Kritik |
| Devlet destekli hedefli gözetim | Orta (%30) | Ölçülemez (ulusal güvenlik) | 🔴 Kritik |
| Fidye yazılımı dağıtımı (cihaz kilitleme) | Düşük (%10) | $500,000 – $5,000,000 | 🟠 Yüksek |

---

## 6. Risk Kabul Kriterleri

### 6.1 Organizasyonel Risk İştahı

| Risk Seviyesi | Risk Skoru | Kabul Durumu | Gerekli Onay Makamı | Aksiyon |
|---|---|---|---|---|
| 🔴 **Kritik** | 16–25 | ❌ **Kabul Edilemez** | — | Derhal müdahale, 24 saat SLA |
| 🟠 **Yüksek** | 10–15 | ❌ **Kabul Edilemez** | CISO onayı ile geçici kabul | 48–72 saat SLA |
| 🟡 **Orta** | 5–9 | ⚠️ **Koşullu Kabul** | Birim Yöneticisi onayı | 1–2 hafta SLA, telafi kontrolleri ile |
| 🔵 **Düşük** | 1–4 | ✅ **Kabul Edilebilir** | Risk sahibi kaydı yeterli | Rutin bakım döngüsünde, 1 ay SLA |

### 6.2 CVE-2026-1199 İçin Risk Kabul Değerlendirmesi

| Kriter | Değerlendirme | Sonuç |
|---|---|---|
| Risk skoru kabul eşiğinin altında mı? | Hayır (25/25, eşik: 15) | ❌ Kabul edilemez |
| Telafi edici kontroller yeterli mi? | Kısmi (Lockdown Mode %70 etkili) | ❌ Tam telafi yok |
| Kalıcı düzeltme mevcut mu? | Evet (iOS 19.4) | ✅ Uygulanmalı |
| Düzeltme riski kabul edilebilir mi? | Evet (standart güncelleme) | ✅ Düşük risk |
| **Nihai Karar** | **Derhal düzeltme uygulanmalıdır** | 🔴 **Acil** |

### 6.3 Artık Risk (Residual Risk) Değerlendirmesi

| Durum | Risk Öncesi | Kontrol | Risk Sonrası | Azalma |
|---|---|---|---|---|
| Yama uygulanmadan | 25/25 (Kritik) | Lockdown Mode | 15/25 (Yüksek) | %40 |
| Yama uygulanmadan | 25/25 (Kritik) | iMessage devre dışı | 8/25 (Orta) | %68 |
| iOS 19.4 yama sonrası | 25/25 (Kritik) | Resmi yama | 2/25 (Düşük) | %92 |
| Yama + Lockdown + MDM | 25/25 (Kritik) | Çoklu kontrol | 1/25 (Çok Düşük) | %96 |

---

## 7. Risk İzleme ve Gözden Geçirme

### 7.1 Risk Göstergeleri (KRI - Key Risk Indicators)

| Gösterge | Eşik Değeri | Mevcut Değer | Durum |
|---|---|---|---|
| Yamalanmamış cihaz oranı | <%5 | %78 | 🔴 Kritik |
| Ortalama yama uygulama süresi | <72 saat | Henüz başlanmadı | 🔴 Kritik |
| Aktif exploit istihbaratı | 0 | 3 aktif kampanya | 🔴 Kritik |
| Lockdown Mode etkinleştirme oranı | >%80 (yüksek risk) | %12 | 🟠 Yüksek |
| Güvenlik farkındalık puanı | >%70 | %45 | 🟡 Orta |
| MDM uyumluluk oranı | >%95 | %67 | 🟠 Yüksek |

### 7.2 Gözden Geçirme Takvimi

| Aktivite | Sıklık | Sonraki Tarih | Sorumlu |
|---|---|---|---|
| Risk matrisi güncelleme | Haftalık (aktif tehdit süresince) | 12 Haziran 2026 | Güvenlik Analisti |
| CVSS skoru yeniden değerlendirme | Yeni bilgi geldiğinde | Sürekli | Zafiyet Yöneticisi |
| İş etkisi analizi güncelleme | Aylık | 5 Temmuz 2026 | Risk Yöneticisi |
| Artık risk değerlendirmesi | Yama sonrası | iOS 19.4 dağıtım sonrası | CISO |
| Kapsamlı risk raporu | Üç aylık | 1 Eylül 2026 | Risk Komitesi |

---

## 8. Sonuç

### 8.1 Özet Bulgular

1. **CVE-2026-1199** risk matrisinin en yüksek bölgesinde (25/25) konumlanmaktadır ve **derhal müdahale** gerektirmektedir.

2. Exploit zincirindeki dört zafiyet birlikte değerlendirildiğinde **bileşik risk skoru 9.9/10.0** seviyesindedir.

3. EPSS verilerine göre önümüzdeki 30 gün içinde istismar olasılığı **%97.4** olup, bu oran bilinen zafiyetlerin **%99.2 persentilinin** üzerindedir.

4. Mevcut telafi edici kontroller (Lockdown Mode, iMessage devre dışı bırakma) riski **tamamen ortadan kaldırmamaktadır**; kalıcı çözüm yalnızca iOS 19.4 güncellemesidir.

5. iOS 19.4 yaması uygulandıktan sonra artık risk **2/25 (Düşük)** seviyesine düşmektedir.

### 8.2 Karar Matrisi

| Karar | Öneri | Aciliyet |
|---|---|---|
| Risk kabul edilebilir mi? | ❌ **Hayır** | — |
| Hangi kontrol uygulanmalı? | iOS 19.4 güncellemesi (birincil) + Lockdown Mode (geçici) | Derhal |
| Üst yönetime bildirim gerekli mi? | ✅ **Evet** — Kritik risk seviyesi | 24 saat içinde |
| Olay müdahale başlatılmalı mı? | ⚠️ **Koşullu** — Ele geçirme belirtisi varsa evet | Belirtiyle birlikte |
| Düzenleyicilere bildirim gerekli mi? | ⚠️ **Koşullu** — Veri ihlali doğrulanırsa (KVKK md. 12) | 72 saat içinde |

---

> **Raporu Hazırlayan:** Mahmut — İstinye Üniversitesi, Siber Güvenlik  
> **Rapor Tarihi:** 5 Haziran 2026  
> **Sonraki Gözden Geçirme:** 12 Haziran 2026

---

*Bu belge, İstinye Üniversitesi Siber Güvenlik Bölümü akademik projesi kapsamında hazırlanmıştır. Tüm veriler akademik araştırma amacıyla oluşturulmuş kurgusal senaryolara dayanmaktadır.*
