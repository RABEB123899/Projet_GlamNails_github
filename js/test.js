function validerFormulaire(event) {
    event.preventDefault(); // Empêche l'envoi par défaut

    // Récupération des champs
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var mdp = document.getElementById("mdp");
    var conf_mdp = document.getElementById("conf_mdp");
    var tel = document.getElementById("tel");
    var service = document.getElementById("service");
    var date = document.getElementById("date");
    var heure = document.getElementById("heure");

    var message = "";
}