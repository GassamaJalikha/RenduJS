// ETAPE 1 : Faire le HTML - structure (header, main et footer, nav avec lien cliquable)
// ETAPE 2 : Parcourir le tableau JSON (mettre le fetch)
const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json`
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        // ETAPE 3 : nom de l'entreprise (h1), slogan (H2) et les boutons
        // ETAPE 4 : Pour chaque élement du tableau "réalisation"créer une DIV 
        // - Créer un titre (h3) pour afficher le nom
        let title = document.createElement("h3")
        // - Créer un paragraphe (p) pour la description
        // - Créer un élément image (img) pour afficher la photo
        // ETAPE 5 : Envoyer dans le HTML les élements crées (appenchild)
        // ETAPE 6 : Pour chaque élement du tableau "témoignages"créer une DIV 
        // - Créer un titre (h3) pour afficher le prénom 
        // - Créer un titre (h4) pour afficher le type de prestation
        // - Créer un paragraphe (p) pour les commentaires 
        // ETAPE 7 : Envoyer dans le HTML les élements crées (appenchild)
    })