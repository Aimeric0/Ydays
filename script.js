document.addEventListener('DOMContentLoaded', function() {
    const bannerFile = document.getElementById('banner-file');
    const bannerImage = document.getElementById('banner-image');

    // Charger l'image sauvegardée si elle existe
    const savedBanner = localStorage.getItem('bannerImage');
    if (savedBanner) {
        bannerImage.style.backgroundImage = `url(${savedBanner})`;
    }

    bannerFile.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                bannerImage.style.backgroundImage = `url(${imageUrl})`;
                
                // Sauvegarder l'image dans le localStorage
                localStorage.setItem('bannerImage', imageUrl);
            };
            
            reader.readAsDataURL(file);
        }
    });
}); 