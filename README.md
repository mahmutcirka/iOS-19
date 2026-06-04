<div align="center">
  <a href="https://istinye.edu.tr">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/%C4%B0stinye_%C3%9Cniversitesi_logo.svg/1280px-%C4%B0stinye_%C3%9Cniversitesi_logo.svg.png" alt="Istinye University" width="180"/>
  </a>

  # iOS 19 SessizMesaj (CVE-2026-1199) Dashboard

  ![GitHub](https://img.shields.io/badge/GitHub-Private-red?style=flat-square&logo=github)
  ![Language](https://img.shields.io/badge/Language-HTML/JS/CSS-blue?style=flat-square)
  ![Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square)
  ![Course](https://img.shields.io/badge/Course-BGT006-purple?style=flat-square)
</div>

## Eğitmen Bilgileri
| İsim | Keyvan Arasteh |
|---|---|
| GitHub | [@keyvanarasteh](https://github.com/keyvanarasteh) |
| E-posta | keyvan.arasteh@istinye.edu.tr |
| LinkedIn | [keyvanarasteh](https://linkedin.com/in/keyvanarasteh) |
| Web sitesi | [qline.tech](https://qline.tech) |

## Öğrenci Bilgileri
| İsim | Mahmut Çirka |
|---|---|
| Öğrenci Kimliği | 2520**1026 |

## Kurs Bilgileri
| Ders Adı | Sızma Testi |
|---|---|
| Ders Kodu | BGT006 |
| Krediler | 3 AKTS |
| Önkoşullar | Ağ Temelleri, Linux CLI, Python |
| Dönem | 2025-2026 İlkbahar |

---

## 📑 1. Abstract (Proje Özeti)

Modern mobil ekosistemde, akıllı telefonların kişisel ve kurumsal hayatın merkezine yerleşmesiyle, mobil güvenlik en kritik araştırma alanlarından biri haline gelmiştir. Bu akademik proje, iOS ImageIO çerçevesinde keşfedilen kritik bir HEIC bellek bozulması güvenlik açığının (CVE-2026-1199) çok boyutlu (multi-dimensional) teknik analizini sunar.

Sıradan bir statik rapor hazırlamak yerine, **Glassmorphism**, **Cyberpunk estetiği** ve modern **HTML/CSS/JavaScript** teknolojileri harmanlanarak, sıfır tıklama (zero-click) iMessage saldırısının nasıl dinamik bir **"Güvenlik Gösterge Paneli" (SecOps Dashboard)** üzerinden raporlanabileceği kanıtlanmıştır.

**Anahtar Kelimeler:** iOS 19, Sıfır Tıklama, iMessage, Casus Yazılım, CVE-2026-1199, ImageIO, HEIC, Bellek Bozulması

---

## 🎯 2. Zafiyet Değerlendirme Raporu (Vulnerability Assessment)

BGT006 Sızma Testi dersi proje kriterleri doğrultusunda hazırlanan resmi değerlendirme belgeleri `docs/research/` dizininde sunulmuştur:

- [x] **Nessus/OpenVAS Tarama Raporları:** [01_OpenVAS_Scan_Report.md](docs/research/01_OpenVAS_Scan_Report.md)
- [x] **Risk Matrisi ve Önceliklendirme:** [02_Risk_Matrix_and_Prioritization.md](docs/research/02_Risk_Matrix_and_Prioritization.md)
- [x] **Düzeltme Önerileri (Remediation) Raporu:** [03_Remediation_Plan.md](docs/research/03_Remediation_Plan.md)
- [x] **CVE Eşleştirme ve CVSS Skorlama:** Tüm dokümanlar resmi `CVE-2026-1199` (CVSS 9.8) kaydı baz alınarak hazırlanmıştır.

---

## 📊 3. Dashboard Önizlemesi

Geliştirilen interaktif Cybersecurity Dashboard, araştırmacılar için veriyi yalnızca metin olarak sunmaz; interaktif grafikler ve canlı simülasyonlarla destekler.

### Dashboard Özellikleri

| Özellik | Açıklama |
| :--- | :--- |
| **CVSS Radar Grafiği** | 8 boyutlu CVSS v3.1 vektör görselleştirmesi |
| **Saldırı Akışı** | 6 aşamalı Cyber Kill Chain animasyonu |
| **Zaman Çizelgesi** | Keşiften yamaya kronolojik süreç |
| **MITRE ATT&CK Haritası** | 8 taktik, 20+ teknik eşleştirmesi |
| **Red/Blue Team Panelleri** | Saldırı araçları ve savunma stratejileri |
| **Canlı Simülasyon** | Gerçek zamanlı Red vs Blue saldırı simülasyonu |
| **IoC Göstergeleri** | Hash, domain, IP tabanlı uzlaşma göstergeleri |

---

## ⚙️ 4. Zafiyetin Anatomisi (Vulnerability Mechanics)

Bu projenin analiz ettiği saldırı vektörü, iOS ImageIO çerçevesindeki bir bellek bozulması güvenlik açığına dayanmaktadır:

| Faz | Açıklama | CVSS Puanı |
| :--- | :--- | :--- |
| **1. HEIC Ayrıştırma** | iOS ImageIO'nun yüksek oranda sıkıştırılmış HEIC görüntülerini ayrıştırırken, sıkıştırma tablosu boyutlarını doğrulamaması | `9.8 / 10` |
| **2. Heap Buffer Overflow** | Manipüle edilmiş meta veriler nedeniyle yığın belleğinde taşma oluşması | `9.8 / 10` |
| **3. Sandbox Escape** | BlastDoor güvenlik sandbox'unun atlatılarak çekirdek erişimi elde edilmesi | `9.8 / 10` |
| **4. Uzaktan Kod Yürütme** | Kernel düzeyinde keyfi kod yürütme ile casus yazılım implantı yüklenmesi | `9.8 / 10` |

---

## 🛠️ 5. Teknoloji Yığını

| Teknoloji | Kullanım |
| :--- | :--- |
| **HTML5** | Semantik sayfa yapısı |
| **CSS3** | Glassmorphism, animasyonlar, responsive tasarım |
| **JavaScript (ES6+)** | Dinamik bileşen render, simülasyon motoru |
| **Chart.js** | CVSS radar grafiği görselleştirmesi |
| **Canvas API** | Cyber parçacık arka plan animasyonu |
| **Docker** | Projenin izole olarak çalıştırılması için nginx sunucusu konfigürasyonu |

---

## 🚀 6. Kurulum ve Çalıştırma

Proje hem doğrudan tarayıcı üzerinden hem de Docker kullanılarak çalıştırılabilir.

### Seçenek 1: Docker (Önerilen)
```bash
# Projeyi klonlayın
git clone https://github.com/mahmutcirka/iOS-19.git
cd iOS-19

# Docker Compose ile başlatın
docker-compose up -d

# Tarayıcıda http://localhost:8080 adresini ziyaret edin
```

### Seçenek 2: Manuel Çalıştırma
Proje herhangi bir derleme aracına ihtiyaç duymaz. Doğrudan `src/index.html` dosyasını tarayıcınızda açabilirsiniz. Veya VS Code "Live Server" eklentisiyle çalıştırabilirsiniz.

---

## 📁 7. Proje Yapısı

```
Final_proje/
├── README.md               # Bu dosya
├── ROADMAP.md              # Öğrenim ve araştırma yol haritası
├── Dockerfile              # Container yapılandırması
├── docker-compose.yml      # Çoklu container düzeni
├── .env.example            # Çevresel değişkenler şablonu
├── src/                    # Kaynak Kodlar
│   ├── index.html          # Ana HTML dosyası
│   ├── css/                # Tema ve stiller
│   └── js/                 # Javascript modülleri
└── docs/
    ├── modules/            # Özellik başına dokümantasyonlar
    ├── references/         # Kaynaklar ve linkler
    └── research/           # Derinlemesine araştırmalar ve raporlar
        ├── 01_OpenVAS_Scan_Report.md
        ├── 02_Risk_Matrix_and_Prioritization.md
        └── 03_Remediation_Plan.md
```

---

## 📚 8. Kaynaklar

- [CVE-2021-30860 — FORCEDENTRY](https://citizenlab.ca/2021/09/forcedentry-nso-group-imessage-zero-click-exploit-captured-in-the-wild/) (Benzer zafiyet referansı)
- [Apple ImageIO Framework](https://developer.apple.com/documentation/imageio)
- [MITRE ATT&CK Mobile](https://attack.mitre.org/matrices/mobile/)
- [CVSS v3.1 Calculator](https://www.first.org/cvss/calculator/3.1)
- [Citizen Lab — Digital Security Research](https://citizenlab.ca/)

---

## 📄 Lisans

Bu proje akademik amaçlıdır ve MIT Lisansı altında sunulmaktadır.

---

<div align="center">
  <sub>İstinye Üniversitesi — BGT006 Sızma Testi — 2025-2026 Bahar Dönemi</sub>
</div>
