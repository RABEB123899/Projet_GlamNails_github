# 💅 GlamNails

## Description du projet

GlamNails est un site web vitrine et de réservation en ligne pour un salon de beauté spécialisé dans les soins des ongles. Le site permet aux clientes de découvrir les services proposés, de réserver un rendez-vous en ligne, et de commander des produits nail art directement depuis le catalogue.

---

## Membres du groupe

| Nom complet |
|---|
| Chames El Houda Daboussi |
| Arij Bel Haj |
| Rabeb Ameur |

---

## Structure du projet
```
GlamNails/
├── html/
│   ├── index.html          # Page d'accueil
│   ├── inscription.html    # Formulaire de réservation
│   └── produits.html       # Catalogue produits & commande
├── css/
│   ├── style.css           # Styles principaux
│   └── style1.css          # Styles page produits
├── js/
│   ├── script.js           # Gestion du panier
│   └── test.js             # Validation du formulaire
├── images/                 # Images du site
└── README.md
```

---

## Fonctionnalités

- Page d'accueil avec présentation des services et de l'équipe
- Formulaire de réservation avec validation JavaScript (nom, email, mot de passe, téléphone, service, date, heure)
- Catalogue de produits avec ajout au panier
- Récapitulatif de commande dynamique avec modification et suppression
- Design responsive adapté aux mobiles

---

## Étapes d'installation

1. Cloner le dépôt :
```bash
git clone https://github.com/chamesdaboussi/Projet_GlamNails.git
```

2. Accéder au dossier :
```bash
cd Projet_GlamNails
```

3. Ouvrir `html/index.html` dans un navigateur web (aucun serveur requis).

---

## Commandes Git utilisées

### 🔧 Configuration initiale
```bash

git clone https://github.com/chamesdaboussi/Projet_GlamNails.git

git status


### 📁 Gestion des fichiers
```bash

git add .

# Créer un commit avec un message clair et professionnel
git commit -m "feat: add homepage structure"
```

### 🌿 Gestion des branches
```bash
# Créer une nouvelle branche de fonctionnalité
git checkout -b feature/homepage
git checkout -b feature/navbar
git checkout -b feature/contact-page
git checkout -b feature/footer
git checkout -b feature/responsive-design

# Voir toutes les branches
git branch

# Changer de branche
git checkout develop

# Fusionner une branche dans develop
git merge feature/homepage
```

### 🔄 Synchronisation avec l'équipe
```bash
# Envoyer les modifications vers GitHub
git push origin feature/homepage

# Récupérer les dernières modifications de l'équipe
git pull origin develop

```

---


## Technologies utilisées

- HTML
- CSS
- JavaScript 

---

© 2026 GlamNails — Tous droits réservés