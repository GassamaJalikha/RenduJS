// ETAPE 1 : Faire le HTML - structure (header, main et footer, nav avec lien cliquable)
// ETAPE 2 : Parcourir le tableau JSON (mettre le fetch)
const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json`
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        // Tester les données//
        console.log(data.realisations);
        console.log(data.temoignages);

        // ETAPE 3 : Créer le nom de l'entreprise (h1), slogan (h2) et les boutons
        const logo = document.getElementById("logo");
        logo.textContent = data.entreprise;

        let titre = document.createElement("h2");
        titre.textContent = data.titre;
        let slogan = document.createElement("p");
        slogan.textContent = data.propositionDeValeur;
        let boutton = document.createElement("button");
        boutton.textContent = data.texteBouton;

        let accroche = document.getElementById("accroche");
        accroche.appendChild(titre);
        accroche.appendChild(slogan);
        accroche.appendChild(boutton);


        // ETAPE 4 : Pour chaque élement du tableau "réalisation"créer une DIV 
        data.promessesClients.forEach(promess => {
            let promesses = document.createElement("p");
            promesses.textContent = promess
            console.log(promesses);

        });

        data.realisations.forEach(real => {
            let card = document.createElement("div");
            // - Créer un titre (h3) pour afficher le nom
            let title = document.createElement("h3");
            title.textContent = real.titre
            console.log(title);
            // - Créer un paragraphe (p) pour la description
            let paragraph = document.createElement("p");
            paragraph.textContent = real.description
            console.log(paragraph);

            // - Créer un élément image (img) pour afficher la photo
            let image = document.createElement("img");
            image.src = real["image-url"];
            console.log(image);

            // ETAPE 5 : Envoyer dans le HTML les élements crées (appenchild)

            container.appendChild(card);
            card.appendChild(title);
            card.appendChild(paragraph);
            card.appendChild(image);
        });





        // ETAPE 6 : Pour chaque élement du tableau "témoignages"créer une DIV 
        data.temoignages.forEach(testimony => {
            let div = document.createElement("div")
            // - Créer un titre (h3) pour afficher le prénom 
            let tittleTestimony = document.createElement("h3");
            tittleTestimony.textContent = testimony.prenom
            console.log(tittleTestimony);

            // - Créer un titre (h4) pour afficher le type de prestation
            let prestation = document.createElement("h4");
            prestation.textContent = testimony.typePrestation
            console.log(prestation);

            // - Créer un paragraphe (p) pour les commentaires 
            let comment = document.createElement("p");
            comment.textContent = testimony.commentaire
            console.log(comment);
            // Créer un autre paragraphe (p) pour la note
            let note = document.createElement("p");
            note.textContent = testimony.note
            console.log(note);

            // ETAPE 7 : Envoyer dans le HTML les élements crées (appenchild)

            container.appendChild(div);
            div.appendChild(tittleTestimony);
            div.appendChild(prestation);
            div.appendChild(comment);
            div.appendChild(note);
        });
    })