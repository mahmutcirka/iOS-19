// ============================================================
// CVE-2026-1199 — iOS 19 SessizMesaj Güvenlik Açığı Verileri
// ============================================================
// Bu dosya, siber güvenlik zafiyet panosu için tüm vaka
// verilerini içermektedir. Akademik proje amacıyla kurgusal
// olarak oluşturulmuştur.
// ============================================================

const CASE_DATA = {
  id: 'CVE-2026-1199',
  title: 'iOS 19 SessizMesaj',
  subtitle: 'iMessage Sıfır Tıklama Güvenlik Açığı',
  cveId: 'CVE-2026-1199',
  cvssScore: 9.8,
  severity: 'KRİTİK',
  discoveryDate: '2026-01-15',
  patchDate: '2026-03-24',
  status: 'Yamalı (iOS 19.4)',

  // ──────────────────────────────────────────────
  // Özet Bilgiler
  // ──────────────────────────────────────────────
  summary: {
    overview:
      'iOS ImageIO çerçevesinde, yüksek oranda sıkıştırılmış HEIC (High Efficiency Image Container) görüntülerini ayrıştırırken ortaya çıkan kritik bir bellek bozulması (memory corruption) güvenlik açığı keşfedilmiştir. Bu zafiyet, özel olarak hazırlanmış bir HEIC dosyasının iMessage üzerinden gönderilmesiyle, hedef cihazda kullanıcı etkileşimi olmaksızın (zero-click) uzaktan kod yürütme (RCE) imkânı sağlamaktadır. Saldırı, Apple\'ın BlastDoor güvenlik sandbox\'unu atlatarak doğrudan çekirdek (kernel) düzeyinde erişim elde etmektedir.',
    impact:
      'Bu güvenlik açığı, devlet destekli aktörler tarafından gazetecilere, aktivistlere ve siyasi muhaliflere yönelik hedefli casus yazılım (spyware) saldırılarında aktif olarak kullanılmıştır. Başarılı istismar sonucunda saldırgan; mikrofon ve kamera erişimi, konum takibi, mesaj/e-posta okuma, şifreli iletişim verilerine erişim ve cihazın tam kontrolünü elde edebilmektedir.',
    affectedSystems: [
      'iOS 19.0 — 19.3.2',
      'iPadOS 19.0 — 19.3.2',
      'macOS Sequoia 16.0 — 16.3',
      'watchOS 12.0 — 12.2',
      'visionOS 3.0 — 3.1'
    ]
  },

  // ──────────────────────────────────────────────
  // CVSS v3.1 Vektör Değerleri (Radar Chart)
  // ──────────────────────────────────────────────
  cvssVector: {
    attackVector: 9.5,       // Network
    attackComplexity: 8.0,   // Low
    privilegesRequired: 9.5, // None
    userInteraction: 9.5,    // None
    scope: 10.0,             // Changed
    confidentiality: 9.0,    // High
    integrity: 8.5,          // High
    availability: 7.5        // High
  },

  cvssVectorString: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H',

  // ──────────────────────────────────────────────
  // CVSS Metrik Detayları
  // ──────────────────────────────────────────────
  cvssMetrics: [
    { name: 'Saldırı Vektörü (AV)',        value: 'Ağ (Network)',         level: 'high' },
    { name: 'Saldırı Karmaşıklığı (AC)',   value: 'Düşük (Low)',          level: 'high' },
    { name: 'Gereken Yetkiler (PR)',        value: 'Yok (None)',           level: 'high' },
    { name: 'Kullanıcı Etkileşimi (UI)',    value: 'Yok (None)',           level: 'high' },
    { name: 'Kapsam (S)',                   value: 'Değişmiş (Changed)',   level: 'high' },
    { name: 'Gizlilik Etkisi (C)',          value: 'Yüksek (High)',        level: 'high' },
    { name: 'Bütünlük Etkisi (I)',          value: 'Yüksek (High)',        level: 'high' },
    { name: 'Erişilebilirlik Etkisi (A)',   value: 'Yüksek (High)',        level: 'high' }
  ],

  // ──────────────────────────────────────────────
  // Saldırı Akışı (Cyber Kill Chain)
  // ──────────────────────────────────────────────
  attackFlow: [
    {
      phase: 1,
      icon: '🔍',
      title: 'Keşif (Reconnaissance)',
      description:
        'Hedef cihazın iMessage adresi (telefon numarası veya Apple ID) belirlenir. Cihaz modeli ve iOS sürümü pasif istihbarat teknikleriyle tespit edilir.',
      techniques: ['OSINT', 'Pasif Tarama', 'Apple ID Enumerasyonu']
    },
    {
      phase: 2,
      icon: '🔧',
      title: 'Silahlandırma (Weaponization)',
      description:
        'ImageIO HEIC ayrıştırıcısındaki heap buffer overflow zafiyetini tetikleyecek özel olarak hazırlanmış (crafted) HEIC payload oluşturulur. Payload, sıkıştırma tablosu boyutlarını manipüle ederek bellek bozulmasına neden olur.',
      techniques: ['HEIC Fuzzing', 'Heap Spray', 'ROP Chain', 'JIT Spray']
    },
    {
      phase: 3,
      icon: '📨',
      title: 'Teslimat (Delivery)',
      description:
        'Hazırlanan zararlı HEIC dosyası, anonim bir Apple ID üzerinden iMessage aracılığıyla hedefe gönderilir. Mesaj, otomatik olarak BlastDoor sandbox\'unda işlenir.',
      techniques: ['iMessage Protocol', 'Anonim Apple ID', 'Proxy Zinciri']
    },
    {
      phase: 4,
      icon: '💥',
      title: 'İstismar (Exploitation)',
      description:
        'ImageIO çerçevesi HEIC dosyasını ayrıştırırken heap buffer overflow tetiklenir. BlastDoor sandbox\'u, HEIC meta veri manipülasyonu ile atlatılır. Çekirdek (kernel) düzeyinde keyfi kod yürütme sağlanır.',
      techniques: ['Heap Buffer Overflow', 'Sandbox Escape', 'Kernel Exploit', 'ASLR Bypass']
    },
    {
      phase: 5,
      icon: '🦠',
      title: 'Yükleme (Installation)',
      description:
        'Casus yazılım implantı cihaza sessizce yüklenir. Kalıcılık (persistence) mekanizması oluşturularak sistem yeniden başlatmalarında hayatta kalması sağlanır.',
      techniques: ['Rootkit Implant', 'Persistence Hook', 'Process Injection', 'Code Signing Bypass']
    },
    {
      phase: 6,
      icon: '📡',
      title: 'Komuta & Kontrol (C2)',
      description:
        'İmplant, HTTPS üzerinden şifreli C2 kanalı kurar. Toplanan veriler (mesajlar, aramalar, konum, mikrofon, kamera) düzenli aralıklarla saldırganın sunucusuna exfiltre edilir.',
      techniques: ['HTTPS C2', 'DNS Tünelleme', 'Veri Şifreleme', 'Steganografi']
    }
  ],

  // ──────────────────────────────────────────────
  // Olay Zaman Çizelgesi
  // ──────────────────────────────────────────────
  timeline: [
    {
      date: '2026-01-15',
      title: 'İlk Keşif',
      description: 'Citizen Lab araştırmacıları, bir gazetecinin cihazında şüpheli aktivite tespit etti.'
    },
    {
      date: '2026-01-22',
      title: 'Adli Analiz',
      description: 'Enfekte cihazların adli analizi başlatıldı. ImageIO çerçevesindeki anormal bellek kullanımı belirlendi.'
    },
    {
      date: '2026-02-03',
      title: 'Zafiyet Teyidi',
      description: 'HEIC ayrıştırıcısındaki heap buffer overflow zafiyeti resmi olarak teyit edildi ve PoC exploit geliştirildi.'
    },
    {
      date: '2026-02-10',
      title: 'Apple\'a Bildirim',
      description: 'Zafiyet Apple Product Security ekibine sorumlu ifşa (responsible disclosure) protokolü ile bildirildi.'
    },
    {
      date: '2026-02-15',
      title: 'CVE Ataması',
      description: 'MITRE tarafından CVE-2026-1199 numarası atandı. CVSS skoru 9.8 (Kritik) olarak belirlendi.'
    },
    {
      date: '2026-02-28',
      title: 'Aktif İstismar Teyidi',
      description: 'NSO Group\'un Pegasus altyapısıyla ilişkili C2 sunucuları tespit edildi. 14+ ülkede hedefli saldırılar belirlendi.'
    },
    {
      date: '2026-03-10',
      title: 'Acil Güvenlik Güncellemesi',
      description: 'Apple, iOS 19.3.3 beta sürümünde geçici düzeltme yayınladı.'
    },
    {
      date: '2026-03-24',
      title: 'Tam Yama Yayını',
      description: 'iOS 19.4, iPadOS 19.4, macOS 16.4 güncellemeleri ile zafiyet tam olarak yamalandı.'
    },
    {
      date: '2026-04-05',
      title: 'Kamuoyu Duyurusu',
      description: 'Citizen Lab ve Apple ortak güvenlik tavsiyesi yayınladı. Lockdown Mode güncellemesi önerildi.'
    }
  ],

  // ──────────────────────────────────────────────
  // MITRE ATT&CK Eşlemesi
  // ──────────────────────────────────────────────
  mitreAttack: [
    {
      tacticId: 'TA0001',
      tacticName: 'İlk Erişim (Initial Access)',
      color: '#ff3333',
      techniques: [
        { id: 'T1190', name: 'Genel Erişimli Uygulamayı İstismar Etme', description: 'iMessage üzerinden zero-click exploit' },
        { id: 'T1566.001', name: 'Spearphishing Eki', description: 'Zararlı HEIC dosyası gönderimi' }
      ]
    },
    {
      tacticId: 'TA0002',
      tacticName: 'Yürütme (Execution)',
      color: '#ff6633',
      techniques: [
        { id: 'T1203', name: 'İstemci Tarafı Yürütme', description: 'ImageIO çerçevesinde bellek bozulması' },
        { id: 'T1059', name: 'Komut ve Betik Yorumlayıcı', description: 'Kernel düzeyinde shellcode yürütme' }
      ]
    },
    {
      tacticId: 'TA0003',
      tacticName: 'Kalıcılık (Persistence)',
      color: '#ffaa00',
      techniques: [
        { id: 'T1547', name: 'Önyükleme Otomatik Başlatma', description: 'Boot-persistent implant' },
        { id: 'T1546', name: 'Olay Tetiklemeli Yürütme', description: 'LaunchDaemon hijacking' }
      ]
    },
    {
      tacticId: 'TA0004',
      tacticName: 'Yetki Yükseltme (Privilege Escalation)',
      color: '#ff00e5',
      techniques: [
        { id: 'T1068', name: 'Yetki Yükseltme İstismarı', description: 'Kernel exploit ile root erişim' },
        { id: 'T1611', name: 'Konteyner Kaçışı', description: 'BlastDoor sandbox escape' }
      ]
    },
    {
      tacticId: 'TA0005',
      tacticName: 'Savunma Atlatma (Defense Evasion)',
      color: '#00f0ff',
      techniques: [
        { id: 'T1027', name: 'Dosya/Bilgi Gizleme', description: 'Encrypted payload obfuscation' },
        { id: 'T1014', name: 'Rootkit', description: 'Kernel düzeyinde gizlenme' },
        { id: 'T1562', name: 'Savunma Devre Dışı Bırakma', description: 'Güvenlik loglarını silme' }
      ]
    },
    {
      tacticId: 'TA0009',
      tacticName: 'Toplama (Collection)',
      color: '#0088ff',
      techniques: [
        { id: 'T1123', name: 'Ses Yakalama', description: 'Mikrofon aktivasyonu' },
        { id: 'T1125', name: 'Video Yakalama', description: 'Kamera erişimi' },
        { id: 'T1430', name: 'Konum Takibi', description: 'GPS/WiFi konum verileri' },
        { id: 'T1636', name: 'Kullanıcı Verileri', description: 'Mesaj, e-posta, fotoğraf erişimi' }
      ]
    },
    {
      tacticId: 'TA0011',
      tacticName: 'Komuta ve Kontrol (C2)',
      color: '#00ff88',
      techniques: [
        { id: 'T1071', name: 'Uygulama Katmanı Protokolü', description: 'HTTPS üzerinden C2 trafiği' },
        { id: 'T1572', name: 'Protokol Tünelleme', description: 'DNS tünelleme ile gizli kanal' }
      ]
    },
    {
      tacticId: 'TA0010',
      tacticName: 'Veri Sızdırma (Exfiltration)',
      color: '#aa00ff',
      techniques: [
        { id: 'T1041', name: 'C2 Kanalı Üzerinden Sızdırma', description: 'Toplanan verilerin C2 sunucusuna iletimi' },
        { id: 'T1567', name: 'Web Servisi Üzerinden Sızdırma', description: 'Bulut depolama hizmetleri üzerinden exfiltration' }
      ]
    }
  ],

  // ──────────────────────────────────────────────
  // Kırmızı Takım (Red Team) Bilgileri
  // ──────────────────────────────────────────────
  redTeam: {
    objectives: [
      'Hedef cihazda kullanıcı etkileşimi olmadan uzaktan kod yürütme',
      'Apple BlastDoor sandbox korumasını atlatma',
      'Kernel düzeyinde kalıcı erişim elde etme',
      'Cihaz üzerinden kapsamlı istihbarat toplama',
      'Tespit edilmeden uzun süreli erişim sürdürme'
    ],
    tools: [
      {
        name: 'HEIC-Fuzzer',
        desc: 'ImageIO HEIC ayrıştırıcısı için özel fuzzing aracı. AFL++ tabanlı mutasyon motoru.',
        category: 'Fuzzing'
      },
      {
        name: 'BlastDoor-Bypass',
        desc: 'Apple BlastDoor sandbox escape exploit zinciri. IOKit driver zafiyetlerini zincirleme.',
        category: 'Exploit'
      },
      {
        name: 'KernelSmith',
        desc: 'iOS kernel exploit geliştirme ve hata ayıklama çerçevesi.',
        category: 'Exploit'
      },
      {
        name: 'SilentDrop',
        desc: 'iMessage üzerinden sıfır tıklama payload teslimat sistemi.',
        category: 'Delivery'
      },
      {
        name: 'PhantomImplant',
        desc: 'Kernel düzeyinde kalıcı casus yazılım implantı. Anti-forensic özelliklere sahip.',
        category: 'Implant'
      },
      {
        name: 'ExfilTracer',
        desc: 'Çok kanallı veri sızdırma aracı. DNS, HTTPS ve steganografi desteği.',
        category: 'Exfiltration'
      }
    ],
    techniques: [
      { name: 'Heap Spray', desc: 'Kontrollü bellek düzeni oluşturmak için heap spray tekniği uygulanır.' },
      { name: 'Return-Oriented Programming (ROP)', desc: 'DEP/NX korumasını atlatmak için mevcut kod parçacıkları zincirlenir.' },
      { name: 'JIT Spray', desc: 'JavaScript JIT derleyicisi üzerinden yürütülebilir bellek alanı elde edilir.' },
      { name: 'PAC Bypass', desc: 'Apple Pointer Authentication Code (PAC) koruması atlatılır.' },
      { name: 'ASLR Bypass', desc: 'Address Space Layout Randomization bilgi sızıntısı ile devre dışı bırakılır.' }
    ]
  },

  // ──────────────────────────────────────────────
  // Mavi Takım (Blue Team) Bilgileri
  // ──────────────────────────────────────────────
  blueTeam: {
    detectionRules: [
      {
        name: 'YARA: SessizMesaj HEIC Payload',
        desc: 'Manipüle edilmiş sıkıştırma tablosu içeren HEIC dosyalarını tespit eden YARA kuralı.',
        type: 'YARA'
      },
      {
        name: 'Suricata: Anomali iMessage Trafiği',
        desc: 'Normal dışı boyuttaki iMessage ek trafiğini tespit eden ağ imzası.',
        type: 'Network'
      },
      {
        name: 'SIGMA: ImageIO Crash Tespiti',
        desc: 'ImageIO çerçevesinde anormal bellek erişimi ve çökme kalıplarını tespit eden log analiz kuralı.',
        type: 'Endpoint'
      },
      {
        name: 'SIGMA: Anormal DNS Trafiği',
        desc: 'DNS tünelleme göstergesi olan yüksek frekanslı TXT/CNAME sorgularını tespit.',
        type: 'Network'
      },
      {
        name: 'IOC: C2 Sunucu IP Listesi',
        desc: 'Bilinen komuta ve kontrol sunucu IP adreslerinin engelleme listesi.',
        type: 'IOC'
      }
    ],
    mitigations: [
      {
        name: 'iOS 19.4 Güncellemesi',
        desc: 'Apple tarafından yayınlanan resmi güvenlik yaması. ImageIO HEIC ayrıştırıcısında sınır kontrolleri güçlendirildi.',
        priority: 'Kritik'
      },
      {
        name: 'Lockdown Mode Aktivasyonu',
        desc: 'Apple Lockdown Mode, iMessage üzerinden gelen bilinmeyen ekleri otomatik olarak engeller ve saldırı yüzeyini %95 azaltır.',
        priority: 'Yüksek'
      },
      {
        name: 'MDM ile Güncelleme Zorunluluğu',
        desc: 'Kurumsal cihazlarda Mobile Device Management üzerinden zorunlu güncelleme politikası uygulanması.',
        priority: 'Yüksek'
      },
      {
        name: 'Ağ İzleme ve IDS/IPS',
        desc: 'Anomali tabanlı ağ izleme sistemleri ile C2 trafiğinin tespit ve engellenmesi.',
        priority: 'Orta'
      },
      {
        name: 'Kullanıcı Farkındalık Eğitimi',
        desc: 'Yüksek riskli hedeflere (gazeteciler, aktivistler) yönelik güvenlik farkındalık programı.',
        priority: 'Orta'
      }
    ],
    iocs: [
      {
        type: 'SHA256',
        value: 'a3f7c8d2e1b9f4a5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9',
        desc: 'Zararlı HEIC payload hash değeri'
      },
      {
        type: 'SHA256',
        value: 'b4e8d9c3f2a0e5b6d7c8f9a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1',
        desc: 'PhantomImplant binary hash değeri'
      },
      {
        type: 'Domain',
        value: 'update-service[.]cloud-analytics[.]net',
        desc: 'Birincil C2 sunucu domain'
      },
      {
        type: 'Domain',
        value: 'api[.]secure-telemetry[.]io',
        desc: 'Yedek C2 sunucu domain'
      },
      {
        type: 'IP',
        value: '185.220.101[.]xxx',
        desc: 'C2 altyapısı IP bloğu (Tor exit node)'
      },
      {
        type: 'IP',
        value: '91.219.237[.]xxx',
        desc: 'Veri sızdırma sunucu IP bloğu'
      },
      {
        type: 'URL',
        value: 'hxxps://cdn[.]app-metrics[.]cloud/v2/collect',
        desc: 'Veri exfiltration endpoint'
      },
      {
        type: 'Mutex',
        value: 'com.apple.private.imageid.session',
        desc: 'İmplant mutex adı'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // Kaynaklar ve Referanslar
  // ──────────────────────────────────────────────
  references: [
    { title: 'CVE-2026-1199 — MITRE',                          url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2026-1199', icon: '🔗' },
    { title: 'Apple Güvenlik Tavsiyesi HT214XXX',               url: 'https://support.apple.com/en-us/HT214XXX',                    icon: '🍎' },
    { title: 'Citizen Lab — SessizMesaj Raporu',                 url: 'https://citizenlab.ca/2026/03/sessizsesaj-imessage-zero-click/', icon: '🔬' },
    { title: 'Project Zero — ImageIO HEIC Analizi',              url: 'https://googleprojectzero.blogspot.com/',                     icon: '🔍' },
    { title: 'MITRE ATT&CK — Mobile',                           url: 'https://attack.mitre.org/matrices/mobile/',                   icon: '🗺️' },
    { title: 'NVD — CVE-2026-1199',                             url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-1199',              icon: '📊' },
    { title: 'Amnesty International — Digital Security',          url: 'https://www.amnesty.org/en/tech/',                            icon: '🛡️' },
    { title: 'FORCEDENTRY Teknik Analizi (Referans)',             url: 'https://googleprojectzero.blogspot.com/2021/12/a-deep-dive-into-nso-zero-click.html', icon: '📄' }
  ],

  // ──────────────────────────────────────────────
  // Genel İstatistikler
  // ──────────────────────────────────────────────
  stats: {
    affectedDevices: '1.4 Milyar+',
    countriesTargeted: '14+',
    daysToPath: '68 Gün',
    exploitComplexity: 'Yüksek'
  }
};
