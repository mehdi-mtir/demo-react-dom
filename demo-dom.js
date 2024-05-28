var livres = [
    {
        id : 1, 
        title : "Slight Edge",
        author : "Jeff Olsen"
    },
    {
        id : 2, 
        title : "Atomic Habits",
        author : "James Clear"
    },
    {
        id : 3, 
        title : "Power of habits",
        author : "Charles Duhigg"
    },
];

//version sans React
/*function changerLeTitre(){
    //var title = document.getElementById("page-title");
    //title.innerText = "Nouveau title";

    //Récupérer l'élémént div (racine)
    let div = document.getElementById("page-title");

    //Créer un nouvel objet DOM h1 (un nouveau noeud);
    const h1Element = document.createElement("h1");
    h1Element.textContent = "Démo DOM sans React";
    h1Element.className = "title";

    //rattacher le nouvel élément h1 à la div (racine)
    div.append(h1Element);
}*/




//Programmation impérative
function afficherLaListeDesLivres(){
    var listeLivres = document.querySelector("#books");
    var listElements = "";
    for(let i = 0; i < livres.length; i++){
        listElements += "<li>" + livres[i].id + " -- "  + livres[i].title + " -- " + livres[i].author + "</li>";
    }
    listeLivres.innerHTML = listElements;
}


window.addEventListener("load", afficherLaListeDesLivres); //afficherLaListeDesLivres est une callback

//JSON : Javascript Object Notation --> le standard qui a remplacé XML
//AJAX : Asynchronous Javascript and XML --> pour les applications modernes JSON a remplacé XML pour l'échange de données entre 
//client et serveur
