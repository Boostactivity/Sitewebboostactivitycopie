# 🔧 Configuration Stripe pour les Paiements Réels

## ✅ Ce qui est déjà configuré

- ✅ Clé publique Stripe LIVE installée dans le frontend
- ✅ Edge Function Supabase créée (`create-checkout-session`)
- ✅ Pages de succès/annulation créées
- ✅ Intégration complète Stripe Checkout

## 🚀 Dernière étape : Ajouter la clé secrète Stripe

### Option 1 : Via le Dashboard Supabase (RECOMMANDÉ)

1. Allez sur [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet : **Boost Activity**
3. Dans le menu latéral, cliquez sur **"Edge Functions"**
4. Cliquez sur **"Manage secrets"** ou **"Environment variables"**
5. Ajoutez une nouvelle variable :
   - **Nom** : `STRIPE_SECRET_KEY`
   - **Valeur** : `sk_live_...` (votre clé secrète Stripe LIVE)
6. Cliquez sur **"Save"**
7. Redéployez la fonction `create-checkout-session`

### Option 2 : Via Supabase CLI

```bash
# Se connecter
supabase login

# Lier le projet
supabase link --project-ref wkgrhojnhfvokbehxqin

# Ajouter le secret
supabase secrets set STRIPE_SECRET_KEY=sk_live_VOTRE_CLE_SECRETE

# Déployer la fonction
supabase functions deploy create-checkout-session
```

## 🔑 Où trouver votre clé secrète Stripe ?

1. Allez sur [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. **Activez le mode LIVE** (toggle en haut à droite)
3. Copiez la **"Secret key"** qui commence par `sk_live_...`

⚠️ **ATTENTION** : Ne partagez JAMAIS cette clé publiquement !

## ✅ Test du paiement réel

Une fois la clé configurée :

1. Allez sur `/test-ecommerce`
2. Ajoutez des produits au panier
3. Cliquez sur **"Payer maintenant"**
4. Vous serez redirigé vers **Stripe Checkout** (page sécurisée)
5. Utilisez une vraie carte bancaire pour tester

### 🧪 Cartes de test Stripe (mode test uniquement)

Si vous voulez tester SANS dépenser d'argent :

1. Utilisez `pk_test_...` au lieu de `pk_live_...`
2. Utilisez ces cartes de test :
   - **Succès** : `4242 4242 4242 4242`
   - **Échec** : `4000 0000 0000 0002`
   - Date : N'importe quelle date future
   - CVC : N'importe quel 3 chiffres

## 📊 Vérifier les paiements

Les paiements apparaissent dans :
- [Dashboard Stripe > Paiements](https://dashboard.stripe.com/payments)
- Vous recevrez un email de confirmation
- Le client reçoit aussi un email

## 🔒 Sécurité

✅ **Clé publique** (`pk_live_...`) : Dans le code frontend (OK)  
❌ **Clé secrète** (`sk_live_...`) : UNIQUEMENT dans Supabase (jamais dans le code)

## 🆘 Problèmes ?

### Erreur "STRIPE_SECRET_KEY not configured"

→ La clé secrète n'est pas configurée dans Supabase. Suivez les étapes ci-dessus.

### Erreur 401 lors du déploiement

→ Connectez-vous à nouveau à Supabase et redéployez.

### Le paiement ne se lance pas

→ Vérifiez la console du navigateur (F12) pour voir les erreurs.

## 📞 Contact

Pour toute question : contact@boostactivity.fr