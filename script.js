// Butonu ve body elementini seçiyoruz
const toggleButton = document.getElementById('theme-toggle');
const bodyElement = document.documentElement;

// Butona tıklandığında çalışacak fonksiyon
toggleButton.addEventListener('click', () => {
    // Mevcut temayı kontrol et
    const currentTheme = bodyElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        bodyElement.removeAttribute('data-theme');
        toggleButton.textContent = '🌙 Gece Modu';
    } else {
        bodyElement.setAttribute('data-theme', 'dark');
        toggleButton.textContent = '☀️ Gündüz Modu';
    }
});
