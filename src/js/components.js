/* ============================================
   COMPONENTS.JS — Dynamic Component Rendering
   ============================================ */

(function() {
    
    // ─── Overview Section ───
    function renderOverview() {
        const overviewText = document.getElementById('overview-text');
        const impactText = document.getElementById('impact-text');
        const statGrid = document.getElementById('stat-grid');
        const affectedList = document.getElementById('affected-list');
        
        if (overviewText) overviewText.textContent = CASE_DATA.summary.overview;
        if (impactText) impactText.textContent = CASE_DATA.summary.impact;
        
        if (statGrid) {
            const stats = [
                { value: CASE_DATA.cvssScore, label: 'CVSS Skoru' },
                { value: CASE_DATA.severity, label: 'Şiddet' },
                { value: CASE_DATA.stats.affectedDevices, label: 'Etkilenen Cihaz' },
                { value: CASE_DATA.stats.countriesTargeted, label: 'Hedef Ülke' },
                { value: CASE_DATA.stats.daysToPath, label: 'Yama Süresi' },
                { value: CASE_DATA.stats.exploitComplexity, label: 'Karmaşıklık' }
            ];
            
            statGrid.innerHTML = stats.map(s => `
                <div class="stat-item animate-on-scroll">
                    <span class="stat-value">${s.value}</span>
                    <span class="stat-label">${s.label}</span>
                </div>
            `).join('');
        }
        
        if (affectedList) {
            affectedList.innerHTML = CASE_DATA.summary.affectedSystems.map(sys => `
                <li class="animate-on-scroll">${sys}</li>
            `).join('');
        }
    }
    
    // ─── CVSS Details ───
    function renderCVSSDetails() {
        const vectorCode = document.getElementById('cvss-vector-code');
        const metricsList = document.getElementById('cvss-metrics-list');
        
        if (vectorCode) {
            vectorCode.textContent = CASE_DATA.cvssVectorString;
        }
        
        if (metricsList) {
            metricsList.innerHTML = CASE_DATA.cvssMetrics.map(m => `
                <div class="metric-row">
                    <span class="metric-name">${m.name}</span>
                    <span class="metric-value metric-${m.level}">${m.value}</span>
                </div>
            `).join('');
        }
    }
    
    // ─── Attack Flow ───
    function renderAttackFlow() {
        const container = document.getElementById('attack-flow-container');
        if (!container) return;
        
        container.innerHTML = CASE_DATA.attackFlow.map((step, index) => `
            <div class="attack-step animate-on-scroll" style="transition-delay: ${index * 100}ms">
                <div class="step-content">
                    <div class="glass-card">
                        <div class="step-number">Faz ${step.phase}</div>
                        <div class="step-title">${step.title}</div>
                        <div class="step-desc">${step.description}</div>
                        <div class="step-tech">
                            ${step.techniques.map(t => `<span>${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="step-node">${step.icon}</div>
                <div class="step-content" style="visibility: hidden;"></div>
            </div>
        `).join('');
    }
    
    // ─── Timeline ───
    function renderTimeline() {
        const container = document.getElementById('timeline-container');
        if (!container) return;
        
        container.innerHTML = CASE_DATA.timeline.map((event, index) => `
            <div class="timeline-event animate-on-scroll" style="transition-delay: ${index * 80}ms">
                <div class="timeline-date">${event.date}</div>
                <div class="timeline-title">${event.title}</div>
                <div class="timeline-desc">${event.description}</div>
            </div>
        `).join('');
    }
    
    // ─── MITRE ATT&CK ───
    function renderMitre() {
        const grid = document.getElementById('mitre-grid');
        if (!grid) return;
        
        grid.innerHTML = CASE_DATA.mitreAttack.map((tactic, index) => `
            <div class="glass-card mitre-card animate-on-scroll" style="transition-delay: ${index * 80}ms">
                <div class="mitre-tactic-header">
                    <span class="mitre-tactic-id">${tactic.tacticId}</span>
                    <span class="mitre-tactic-name">${tactic.tacticName}</span>
                </div>
                <ul class="mitre-techniques">
                    ${tactic.techniques.map(tech => `
                        <li class="mitre-technique" style="border-color: ${tactic.color}">
                            <span class="technique-id">${tech.id}</span>
                            <span class="technique-name">${tech.name}</span>
                            <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:0.2rem">${tech.description}</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }
    
    // ─── Red Team ───
    function renderRedTeam() {
        const container = document.getElementById('red-team-content');
        if (!container) return;
        
        container.innerHTML = `
            <div class="glass-card team-card animate-on-scroll">
                <h3 class="team-card-title" style="color:var(--danger)">🎯 Hedefler</h3>
                <ul class="objectives-list">
                    ${CASE_DATA.redTeam.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
            <div class="glass-card team-card animate-on-scroll" style="transition-delay:100ms">
                <h3 class="team-card-title" style="color:var(--danger)">🛠️ Saldırı Araçları</h3>
                ${CASE_DATA.redTeam.tools.map(tool => `
                    <div class="tool-item" style="border-color:var(--danger)">
                        <div class="tool-name">${tool.name} <span class="tool-category">${tool.category}</span></div>
                        <div class="tool-desc">${tool.desc}</div>
                    </div>
                `).join('')}
            </div>
            <div class="glass-card team-card animate-on-scroll" style="transition-delay:200ms">
                <h3 class="team-card-title" style="color:var(--danger)">⚡ Teknikler</h3>
                ${CASE_DATA.redTeam.techniques.map(tech => `
                    <div class="technique-item" style="border-color:var(--danger)">
                        <div class="technique-name-rt">${tech.name}</div>
                        <div class="technique-desc-rt">${tech.desc}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // ─── Blue Team ───
    function renderBlueTeam() {
        const container = document.getElementById('blue-team-content');
        if (!container) return;
        
        container.innerHTML = `
            <div class="glass-card team-card animate-on-scroll">
                <h3 class="team-card-title" style="color:#0088ff">🛡️ Tespit Kuralları</h3>
                ${CASE_DATA.blueTeam.detectionRules.map(rule => `
                    <div class="rule-item" style="border-color:#0088ff">
                        <div class="rule-name">${rule.name} <span class="rule-type">${rule.type}</span></div>
                        <div class="rule-desc">${rule.desc}</div>
                    </div>
                `).join('')}
            </div>
            <div class="glass-card team-card animate-on-scroll" style="transition-delay:100ms">
                <h3 class="team-card-title" style="color:#0088ff">🔒 Azaltma Önlemleri</h3>
                ${CASE_DATA.blueTeam.mitigations.map(mit => `
                    <div class="rule-item" style="border-color:#0088ff">
                        <div class="rule-name">${mit.name} <span class="priority-badge priority-${mit.priority}">${mit.priority}</span></div>
                        <div class="rule-desc">${mit.desc}</div>
                    </div>
                `).join('')}
            </div>
            <div class="glass-card team-card animate-on-scroll" style="transition-delay:200ms">
                <h3 class="team-card-title" style="color:#0088ff">🔍 IoC Göstergeleri</h3>
                ${CASE_DATA.blueTeam.iocs.map(ioc => `
                    <div class="ioc-item" style="border-color:#0088ff;border-left:3px solid #0088ff;padding:0.8rem 1rem;margin-bottom:0.5rem;background:rgba(255,255,255,0.02);border-radius:var(--radius-sm)">
                        <div><span class="ioc-type">${ioc.type}</span><span class="ioc-value">${ioc.value}</span></div>
                        <div class="ioc-desc">${ioc.desc}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // ─── References ───
    function renderReferences() {
        const grid = document.getElementById('references-grid');
        if (!grid) return;
        
        grid.innerHTML = CASE_DATA.references.map((ref, i) => `
            <a href="${ref.url}" target="_blank" rel="noopener noreferrer" class="ref-link glass-card animate-on-scroll" style="transition-delay:${i * 50}ms">
                <span class="ref-icon">${ref.icon}</span>
                <div class="ref-info">
                    <span class="ref-title">${ref.title}</span>
                    <span class="ref-url">${ref.url.replace('https://', '').substring(0, 40)}...</span>
                </div>
            </a>
        `).join('');
    }
    
    // ─── Initialize All Components ───
    function initComponents() {
        renderOverview();
        renderCVSSDetails();
        renderAttackFlow();
        renderTimeline();
        renderMitre();
        renderRedTeam();
        renderBlueTeam();
        renderReferences();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponents);
    } else {
        initComponents();
    }
    
    window.initComponents = initComponents;
})();
