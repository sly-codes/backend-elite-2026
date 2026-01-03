## Contribution

Ce projet est ouvert aux contributions de la communauté. Que vous soyez un développeur expérimenté ou un apprenant comme moi, vos contributions sont les bienvenues pour améliorer ce guide.

### Pourquoi contribuer ?

- Corriger des erreurs ou des imprécisions
- Ajouter de nouvelles ressources pertinentes
- Améliorer les descriptions et explications
- Suggérer de nouveaux concepts ou phases
- Améliorer l'interface utilisateur

### Processus de contribution

1. **Forkez le projet** : Créez une copie du dépôt sur votre compte GitHub

2. **Créez une branche** : Créez une nouvelle branche pour votre modification

```bash
git checkout -b feature/ma-contribution
```

3. **Effectuez vos modifications** :

   - Modifiez les fichiers nécessaires (notamment `constants/roadmap.ts` pour le contenu)
   - Testez localement avec `npm run dev`
   - Assurez-vous que le code respecte les standards du projet

4. **Commitez vos changements** :

```bash
git add .
git commit -m "Description claire de votre modification"
```

5. **Soumettez une Pull Request** :
   - Poussez votre branche sur votre fork
   - Ouvrez une Pull Request sur le dépôt principal
   - Décrivez clairement vos modifications et leur utilité

### Validation des contributions

Chaque Pull Request sera examinée et validée avant d'être intégrée au projet. Cela permet de garantir la qualité des ressources et la cohérence du parcours d'apprentissage.

Les critères de validation incluent :

- La pertinence des ressources proposées
- La qualité des descriptions et explications
- La cohérence avec la structure existante
- Le respect des standards de code du projet

## Structure du projet

```
java-backend-roadmap-2026/
├── app/                    # Application Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── Header.tsx         # En-tête avec progression globale
│   ├── PhaseSection.tsx   # Section d'une phase (accordéon)
│   ├── ConceptTable.tsx   # Tableau des concepts (accordéon)
│   ├── ProgressBar.tsx    # Barre de progression globale
│   ├── PhaseProgressBar.tsx # Barre de progression par phase
│   ├── Countdown.tsx      # Compteur de jours
│   ├── ProjectCard.tsx    # Carte du challenge élite
│   ├── ResourceHub.tsx    # Hub de ressources
│   └── Footer.tsx         # Pied de page
├── constants/             # Données et configuration
│   └── roadmap.ts         # Contenu complet du roadmap
├── lib/                   # Utilitaires et hooks
│   └── hooks.ts           # Hooks de persistance (localStorage)
└── public/                # Assets statiques
    └── logos/             # Logos des technologies
```

## Technologies utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique
- **Tailwind CSS** : Styles utilitaires
- **Framer Motion** : Animations fluides
- **Lucide React** : Icônes modernes

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question, suggestion ou demande de support :

- **Email** : ik3576898@gmail.com
- **GitHub** : [@sly-codes](https://github.com/sly-codes)
- **LinkedIn** : [kisscoder](https://linkedin.com/in/kisscoder)

---

**Note** : Ce projet est en constante évolution. Les contributions et retours de la communauté sont essentiels pour son amélioration continue. Merci de votre intérêt et de votre soutien.
