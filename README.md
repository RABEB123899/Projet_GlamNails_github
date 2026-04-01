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
## Gestion des conflits Git

**Cause du conflit :**  
Le conflit est survenu car deux branches (`feature-script-index` et `develop`) ont modifié le même fichier (`css/style.css`) sur les mêmes lignes. Git ne pouvait pas décider automatiquement quelle version conserver.

**Méthode de résolution :**  
Le conflit a été résolu manuellement en choisissant et combinant les modifications des deux branches. Les marqueurs de conflit (`<<<<<<<`, `=======`, `>>>>>>>`) ont été supprimés et le fichier a été validé avec les commandes suivantes :

```bash
git add css/style.css
git commit -m "resolve conflict css"
git push


**Cause du conflit :**  
Le conflit est survenu car deux branches (`feature-script-index` et `develop`) ont modifié le même fichier (`css/style.css`) sur les mêmes lignes. Git ne pouvait pas décider automatiquement quelle version conserver.

**Méthode de résolution :**  
Le conflit a été résolu manuellement en choisissant et combinant les modifications des deux branches. Les marqueurs de conflit (`<<<<<<<`, `=======`, `>>>>>>>`) ont été supprimés et le fichier a été validé avec les commandes suivantes :

```bash
git add css/style.css
git commit -m "resolve conflict css"
git push
```
<img width="1592" height="865" alt="image" src="https://github.com/user-attachments/assets/2572b4c6-1948-45d3-abe9-3937250aec8c" />

<img width="1907" height="834" alt="image" src="https://github.com/user-attachments/assets/780d86c3-aec5-4996-be7a-d3e289cba813" />


<img width="1641" height="992" alt="image" src="https://github.com/user-attachments/assets/37a3a552-cee3-4e3f-9caf-22f4d2563a55" />


<img width="1645" height="952" alt="image" src="https://github.com/user-attachments/assets/0bf4f47e-dd18-4edd-83b3-7349e91b1268" />


© 2026 GlamNails — Tous droits réservés
