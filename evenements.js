document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const filtres = document.querySelectorAll('.filtre-btn');
    const evenements = document.querySelectorAll('.evenement-card');
    
    // Gestion du menu déroulant
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(e) {
        if (!dropdownContent.contains(e.target) && !dropdownBtn.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
    
    function filtrerEvenements(mois) {
        evenements.forEach(evenement => {
            if (mois === 'tous' || evenement.dataset.mois === mois) {
                evenement.style.display = 'flex';
            } else {
                evenement.style.display = 'none';
            }
        });
    }
    
    filtres.forEach(filtre => {
        filtre.addEventListener('click', function() {
            filtres.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filtrerEvenements(this.dataset.mois);
            dropdownContent.classList.remove('show');
        });
    });

    
    const inscriptionBtns = document.querySelectorAll('.inscription-btn');
    inscriptionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const evenement = this.closest('.evenement-card');
            const titre = evenement.querySelector('h3').textContent;
            const date = evenement.querySelector('.evenement-date').textContent;
          
            const alert = document.createElement('div');
            alert.className = 'inscription-alert';
            alert.innerHTML = `
                <div class="alert-content">
                    <h3>Inscription confirmée !</h3>
                    <p>Vous êtes inscrit à l'événement :</p>
                    <p><strong>${titre}</strong></p>
                    <p>Date : ${date}</p>
                    <button class="alert-close">Fermer</button>
                </div>
            `;
            
            document.body.appendChild(alert);
          
            const closeBtn = alert.querySelector('.alert-close');
            closeBtn.addEventListener('click', () => {
                alert.remove();
            });
        });
    });
}); 