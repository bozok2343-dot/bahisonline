document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller

    // Kullanıcının yazdığı değerleri alıyoruz
    const girilenKullanici = document.getElementById('username').value;
    const girilenSifre = document.getElementById('password').value;
    const hataKutusu = document.getElementById('error-message');

    // Doğru olması gereken giriş bilgileri (Değiştirebilirsiniz)
    const dogruKullanici = "admin";
    const dogruSifre = "12345";

    if (girilenKullanici === dogruKullanici && girilenSifre === dogruSifre) {
        // Giriş başarılıysa kutuyu temizle ve yönlendir
        hataKutusu.style.display = "none";
        alert("Giriş Başarılı! Sisteme yönlendiriliyorsunuz.");
        
        // Buraya giriş yaptıktan sonra açılacak sayfanın linkini yazabilirsiniz:
        // window.location.href = "anasayfa.html"; 
    } else {
        // Giriş hatalıysa kırmızı uyarı kutusunu göster
        hataKutusu.innerText = "Hatalı kullanıcı adı veya şifre girdiniz!";
        hataKutusu.style.display = "block";
    }
});
