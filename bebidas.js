let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener('click', () => {
        let existingCheck = card.querySelector('.check');
        if (existingCheck) { // se já estiver com o checkmark
            card.removeChild(existingCheck); // Remove o checkmark
        } else {
            let checkClone = document.createElement('img'); // Cria novo checkmark
            checkClone.src = "./img/check.jpg";
            checkClone.classList.add('check');
            checkClone.style.position = 'absolute';
            checkClone.style.top = '50%';
            checkClone.style.left = '50%';
            checkClone.style.transform = 'translate(-50%, -50%)';
            checkClone.style.width = '40px';
            checkClone.style.height = '40px';
            checkClone.style.borderRadius = '50%';
            card.appendChild(checkClone); // adiciona om checkmark ao card
        }
    });
});
