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
    if (!nom.value.trim()) message += "- Le nom est obligatoire.\n";

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!email.value.trim()) {
    message += "- L'email est obligatoire.\n";
} else if (!emailRegex.test(email.value)) {
    message += "- L'email n'est pas valide.\n";
}
if (mdp.value.length < 6) {
    message += "- Le mot de passe doit contenir au moins 6 caractères.\n";
}

if (mdp.value !== conf_mdp.value) {
    message += "- Les mots de passe ne correspondent pas.\n";
}
if (!/^\d{8}$/.test(tel.value)) message += "- Le numéro de téléphone doit contenir 8 chiffres.\n";

if (!service.value) message += "- Veuillez choisir un service.\n";
if (!date.value) message += "- Veuillez sélectionner une date.\n";
if (!heure.value) message += "- Veuillez sélectionner une heure.\n";
if (message !== "") {
    alert("Veuillez corriger les erreurs suivantes :\n\n" + message);
    return false;
}
var recap =
    "Confirmez-vous votre réservation avec les informations suivantes ?\n\n" +
    "Nom : " + nom.value + "\n" +
    "Email : " + email.value + "\n" +
    "Téléphone : " + tel.value + "\n" +
    "Service : " + service.value + "\n" +
    "Date : " + date.value + "\n" +
    "Heure : " + heure.value;

var ok = confirm(recap);

if (!ok) return false;
alert("🎉 Réservation enregistrée avec succès !");

window.location.href = "produits.html";

return true;

}
document.getElementById("reservationForm").addEventListener("submit", validerFormulaire);
