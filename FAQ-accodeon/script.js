// sélectionner plusieurs éléments html de la classe question pour qu'il réagisse comme un tableau
const questions = document.querySelectorAll('.question')

// Boucle forEach pour itérer chaque élément du tableau pour qu'il réagisse à l'évènement au clique 
questions.forEach(function (item) {
    item.addEventListener('click', function () {
        console.log('item cliqué')
        // Création d'un code dynamique (nous ne savons pas où l'utilisateur va cliquer)
        //On cible un élément indirectement à partir du point de référence qui est la DIV question 
        const next = item.nextElementSibling;
        console.log(next);
        // Je créer une classe dans CSS et je rend visible ou invisible la réponse 
        next.classList.toggle('visible');
        // Je cible et stocke l'icône qui est dans la DIV question(item)
        icone = item.lastElementChild;
        console.log(icone);
        //lors du clique sur la question le chevron se modifie vers le haut 
        icone.classList.toggle('fa-chevron-up');
       
    })
});






