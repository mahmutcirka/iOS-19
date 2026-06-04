# Proje Yol Haritası (ROADMAP)

"Önce anla, sonra kodla." Her problemi küçük, düzenli parçalara ayır. Bir dedektif gibi düşün : gözlemle, ham verileri yorumla, kalıpları belirle, bulguları raporla.

## Aşama 0: İnşa Etmeden Önce Anlayın
- CVE-2026-1199 (iOS 19 Zero-Click) zafiyetinin teknik detaylarının analiz edilmesi
- iMessage ImageIO ve BlastDoor mimarilerinin incelenmesi
- RedRiveRR/Tesla projesinin tasarım felsefesinin incelenmesi ve UI gereksinimlerinin belirlenmesi

## Aşama 1: Araştırma ve İnceleme (→ docs/research/)
- Siber güvenlik raporlarının hazırlanması (Risk matrisi, OpenVAS raporu, Düzeltme planı)
- CVSS v3.1 puanlamalarının ve MITRE ATT&CK eşleşmelerinin yapılması
- Kurgusal zafiyet analiz senaryolarının belirlenmesi

## Aşama 2: Ortam Kurulumu
- Proje klasör yapısının (src/, docs/, vb.) standartlara uygun olarak oluşturulması
- Docker, Docker Compose ve .env.example entegrasyonu
- Versiyon kontrol sistemi (Git) kurulumu

## Aşama 3: Uygulama
1. Statik HTML iskeletinin oluşturulması (`src/index.html`)
2. Cyberpunk temalı global CSS mimarisinin yazılması (`src/css/app.css`)
3. Animasyon bileşenlerinin entegrasyonu
4. CVSS Radar Grafiği için Chart.js kurulumu
5. Veri modelinin yapılandırılması (`src/js/data.js`)
6. UI bileşen motorunun yazılması (`src/js/components.js`)
7. Kırmızı Takım vs Mavi Takım simülasyon mantığının geliştirilmesi

## Aşama 4: Test ve Raporlama
- UI uyumluluğunun test edilmesi
- İnteraktif öğelerin (animasyonlar, grafik) stres testleri
- Teknik raporların son revizyonları
- Bitirme Projesi yönergelerine tam uyumluluğun denetlenmesi

## Aşama 5: Teslimat Kontrol Listesi
- [x] README.md gereksinimlerinin sağlanması
- [x] ROADMAP.md aşamalarının tanımlanması
- [x] Docker ve Çevresel bağımlılıkların eklenmesi
- [x] Tüm dosyaların doğru dizinlere (`src/`, `docs/`) yerleştirilmesi
- [x] Danışmanın (keyvanarasteh) işbirlikçi olarak GitHub'a eklenmesi
