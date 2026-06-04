/* ============================================
   CHARTS.JS — CVSS Radar Chart with Chart.js
   ============================================ */

(function() {
    function initCVSSRadar() {
        const canvas = document.getElementById('cvss-radar');
        if (!canvas || typeof Chart === 'undefined') return;
        
        const ctx = canvas.getContext('2d');
        
        const labels = [
            'Saldırı Vektörü',
            'Saldırı Karmaşıklığı',
            'Gereken Yetkiler',
            'Kullanıcı Etkileşimi',
            'Kapsam',
            'Gizlilik',
            'Bütünlük',
            'Erişilebilirlik'
        ];
        
        const data = [
            CASE_DATA.cvssVector.attackVector,
            CASE_DATA.cvssVector.attackComplexity,
            CASE_DATA.cvssVector.privilegesRequired,
            CASE_DATA.cvssVector.userInteraction,
            CASE_DATA.cvssVector.scope,
            CASE_DATA.cvssVector.confidentiality,
            CASE_DATA.cvssVector.integrity,
            CASE_DATA.cvssVector.availability
        ];
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'CVE-2026-1199 CVSS Vektörü',
                    data: data,
                    backgroundColor: 'rgba(0, 240, 255, 0.1)',
                    borderColor: 'rgba(0, 240, 255, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(0, 240, 255, 1)',
                    pointBorderColor: '#0a0a0f',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: '#ff00e5',
                    pointHoverBorderColor: '#fff',
                    fill: true
                }, {
                    label: 'Maksimum Risk',
                    data: [10, 10, 10, 10, 10, 10, 10, 10],
                    backgroundColor: 'rgba(255, 0, 229, 0.03)',
                    borderColor: 'rgba(255, 0, 229, 0.2)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.6)',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 11
                            },
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(10, 10, 15, 0.95)',
                        titleColor: '#00f0ff',
                        bodyColor: '#e0e0e0',
                        borderColor: 'rgba(0, 240, 255, 0.2)',
                        borderWidth: 1,
                        cornerRadius: 8,
                        padding: 12,
                        titleFont: {
                            family: "'Inter', sans-serif",
                            weight: '700'
                        },
                        bodyFont: {
                            family: "'JetBrains Mono', monospace",
                            size: 12
                        },
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.raw + '/10';
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        min: 0,
                        ticks: {
                            stepSize: 2,
                            color: 'rgba(255, 255, 255, 0.3)',
                            backdropColor: 'transparent',
                            font: {
                                family: "'JetBrains Mono', monospace",
                                size: 9
                            }
                        },
                        grid: {
                            color: 'rgba(0, 240, 255, 0.08)',
                            lineWidth: 1
                        },
                        angleLines: {
                            color: 'rgba(0, 240, 255, 0.08)',
                            lineWidth: 1
                        },
                        pointLabels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 11,
                                weight: '500'
                            },
                            padding: 15
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCVSSRadar);
    } else {
        initCVSSRadar();
    }
    
    // Make available globally
    window.initCVSSRadar = initCVSSRadar;
})();

// Radar chart config initialization
