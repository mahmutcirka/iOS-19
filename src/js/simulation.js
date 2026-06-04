/* ============================================
   SIMULATION.JS — Live Red vs Blue Team Sim
   ============================================ */

(function() {
    let isRunning = false;
    let simulationTimer = null;
    let currentStep = 0;
    let redProgress = 0;
    let blueProgress = 0;
    
    const redSteps = [
        { msg: 'Hedef iMessage adresi belirleniyor...', delay: 800, progress: 5 },
        { msg: 'Apple ID enumerasyonu başlatıldı', delay: 600, progress: 8 },
        { msg: 'Cihaz modeli tespit edildi: iPhone 17 Pro (iOS 19.2)', delay: 1000, progress: 12 },
        { msg: 'HEIC payload oluşturuluyor...', delay: 1200, progress: 18 },
        { msg: 'Heap spray dizilimi hesaplanıyor', delay: 800, progress: 24 },
        { msg: 'ROP chain hazırlanıyor (142 gadget)', delay: 1000, progress: 30 },
        { msg: 'BlastDoor bypass shellcode enjekte ediliyor', delay: 900, progress: 36 },
        { msg: 'Payload sıkıştırma tablosu manipüle edildi', delay: 700, progress: 42 },
        { msg: '[SEND] Zararlı HEIC iMessage ile gönderiliyor...', delay: 1500, progress: 50 },
        { msg: '⚡ ImageIO HEIC parser tetiklendi!', delay: 1000, progress: 55 },
        { msg: '💥 Heap buffer overflow başarılı!', delay: 800, progress: 62 },
        { msg: 'BlastDoor sandbox escape başlatılıyor...', delay: 1200, progress: 68 },
        { msg: '🔓 Sandbox atlatıldı — Kernel erişimi', delay: 1000, progress: 75 },
        { msg: 'PhantomImplant yükleniyor...', delay: 1500, progress: 82 },
        { msg: 'Persistence mekanizması kuruldu', delay: 800, progress: 88 },
        { msg: '📡 C2 kanalı kuruldu (HTTPS)', delay: 1000, progress: 92 },
        { msg: 'Mikrofon aktivasyonu... ✓', delay: 600, progress: 95 },
        { msg: 'Veri exfiltration başladı', delay: 800, progress: 98 },
        { msg: '✅ Tam erişim elde edildi!', delay: 500, progress: 100 }
    ];
    
    const blueSteps = [
        { msg: 'Ağ trafiği izleniyor...', delay: 1000, progress: 3 },
        { msg: 'IDS/IPS kuralları aktif', delay: 500, progress: 6 },
        { msg: 'Endpoint monitoring çalışıyor', delay: 800, progress: 10 },
        { msg: '⚠️ Anormal iMessage ek boyutu tespit edildi!', delay: 2000, progress: 18 },
        { msg: 'YARA taraması başlatılıyor...', delay: 1500, progress: 25 },
        { msg: '🔍 HEIC dosya yapısı analiz ediliyor', delay: 1200, progress: 32 },
        { msg: '🚨 Manipüle edilmiş sıkıştırma tablosu tespit!', delay: 1800, progress: 40 },
        { msg: 'Suricata ALERT: Anomali iMessage trafiği', delay: 1000, progress: 48 },
        { msg: '⚠️ ImageIO bellek anomalisi tespit edildi', delay: 1500, progress: 55 },
        { msg: 'Forensic analiz başlatılıyor...', delay: 2000, progress: 62 },
        { msg: '🛡️ Lockdown Mode etkinleştirme önerisi gönderildi', delay: 1000, progress: 68 },
        { msg: 'C2 trafiği DNS analizi yapılıyor...', delay: 1500, progress: 74 },
        { msg: '🚫 C2 domain engellendi: update-service.cloud-analytics.net', delay: 1200, progress: 80 },
        { msg: 'IOC hash eşleşmesi bulundu!', delay: 1000, progress: 85 },
        { msg: '📋 Olay müdahale ekibi uyarıldı', delay: 800, progress: 90 },
        { msg: '🔒 Etkilenen cihaz izole edildi', delay: 1200, progress: 94 },
        { msg: 'Acil yama dağıtımı başlatıldı (MDM)', delay: 1000, progress: 97 },
        { msg: '✅ Tehdit bertaraf edildi — Rapor oluşturuldu', delay: 800, progress: 100 }
    ];
    
    function getTimestamp() {
        const now = new Date();
        return now.toLocaleTimeString('tr-TR', { hour12: false }) + '.' + 
               String(now.getMilliseconds()).padStart(3, '0');
    }
    
    function addLogEntry(panelId, message, type = '') {
        const log = document.getElementById(panelId);
        if (!log) return;
        
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.innerHTML = `<span class="timestamp">[${getTimestamp()}]</span>${message}`;
        log.appendChild(entry);
        log.scrollTop = log.scrollHeight;
    }
    
    function updateProgress(barId, value) {
        const bar = document.getElementById(barId);
        if (bar) bar.style.width = value + '%';
    }
    
    function updateStatus(statusId, text) {
        const el = document.getElementById(statusId);
        if (el) el.textContent = text;
    }
    
    async function runSimulation() {
        const startBtn = document.getElementById('sim-start');
        const stopBtn = document.getElementById('sim-stop');
        const resultDiv = document.getElementById('sim-result');
        
        if (startBtn) startBtn.disabled = true;
        if (stopBtn) stopBtn.disabled = false;
        if (resultDiv) resultDiv.style.display = 'none';
        
        isRunning = true;
        let redIdx = 0;
        let blueIdx = 0;
        
        updateStatus('sim-red-status', '🔴 Saldırı başlatılıyor...');
        updateStatus('sim-blue-status', '🔵 Savunma aktif...');
        
        function processStep() {
            if (!isRunning) return;
            
            // Red team step
            if (redIdx < redSteps.length) {
                const step = redSteps[redIdx];
                addLogEntry('sim-red-log', step.msg, 'red');
                updateProgress('sim-red-progress', step.progress);
                updateStatus('sim-red-status', `🔴 İlerleme: %${step.progress}`);
                redIdx++;
            }
            
            // Blue team step (slightly delayed reaction)
            if (blueIdx < blueSteps.length && redIdx > 2) {
                const step = blueSteps[blueIdx];
                addLogEntry('sim-blue-log', step.msg, 'blue');
                updateProgress('sim-blue-progress', step.progress);
                updateStatus('sim-blue-status', `🔵 İlerleme: %${step.progress}`);
                blueIdx++;
            }
            
            // Check if complete
            if (redIdx >= redSteps.length && blueIdx >= blueSteps.length) {
                finishSimulation();
                return;
            }
            
            const delay = 600 + Math.random() * 800;
            simulationTimer = setTimeout(processStep, delay);
        }
        
        processStep();
    }
    
    function finishSimulation() {
        isRunning = false;
        const startBtn = document.getElementById('sim-start');
        const stopBtn = document.getElementById('sim-stop');
        const resultDiv = document.getElementById('sim-result');
        const resultTitle = document.getElementById('sim-result-title');
        const resultText = document.getElementById('sim-result-text');
        
        if (startBtn) startBtn.disabled = false;
        if (stopBtn) stopBtn.disabled = true;
        
        if (resultDiv && resultTitle && resultText) {
            resultDiv.style.display = 'block';
            resultTitle.innerHTML = '⚔️ Simülasyon Tamamlandı';
            resultTitle.style.color = 'var(--primary)';
            resultText.innerHTML = `
                <strong style="color:var(--danger)">Red Team</strong> saldırıyı başarıyla gerçekleştirdi, ancak 
                <strong style="color:#0088ff">Blue Team</strong> tehdidi tespit edip bertaraf etti.<br><br>
                <span style="color:var(--text-secondary)">
                    Bu simülasyon, CVE-2026-1199 sıfır tıklama saldırısının gerçek dünya senaryosunu modellemektedir.
                    Savunma ekibinin proaktif izleme ve hızlı müdahalesi sayesinde hasar minimize edilmiştir.
                </span>
            `;
            resultDiv.classList.add('animate-on-scroll', 'visible');
        }
        
        updateStatus('sim-red-status', '🔴 Saldırı tamamlandı');
        updateStatus('sim-blue-status', '🔵 Tehdit bertaraf edildi');
    }
    
    function stopSimulation() {
        isRunning = false;
        if (simulationTimer) {
            clearTimeout(simulationTimer);
            simulationTimer = null;
        }
        
        const startBtn = document.getElementById('sim-start');
        const stopBtn = document.getElementById('sim-stop');
        
        if (startBtn) startBtn.disabled = false;
        if (stopBtn) stopBtn.disabled = true;
        
        updateStatus('sim-red-status', '🔴 Durduruldu');
        updateStatus('sim-blue-status', '🔵 Durduruldu');
    }
    
    function resetSimulation() {
        stopSimulation();
        
        const redLog = document.getElementById('sim-red-log');
        const blueLog = document.getElementById('sim-blue-log');
        const resultDiv = document.getElementById('sim-result');
        
        if (redLog) redLog.innerHTML = '';
        if (blueLog) blueLog.innerHTML = '';
        if (resultDiv) resultDiv.style.display = 'none';
        
        updateProgress('sim-red-progress', 0);
        updateProgress('sim-blue-progress', 0);
        updateStatus('sim-red-status', 'Bekleniyor...');
        updateStatus('sim-blue-status', 'Bekleniyor...');
    }
    
    // Initialize event listeners
    function initSimulation() {
        const startBtn = document.getElementById('sim-start');
        const stopBtn = document.getElementById('sim-stop');
        const resetBtn = document.getElementById('sim-reset');
        
        if (startBtn) startBtn.addEventListener('click', runSimulation);
        if (stopBtn) stopBtn.addEventListener('click', stopSimulation);
        if (resetBtn) resetBtn.addEventListener('click', resetSimulation);
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSimulation);
    } else {
        initSimulation();
    }
})();

// Event listeners for simulation controls
