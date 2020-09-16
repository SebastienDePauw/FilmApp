# 1920-b1-fe-SebastienDePauw

---

## About me

**Voornaam:** Sébastien

**Achternaaam:** De Pauw

**Klas:** 2B1

**Academiejaar:** 2019-2020

---

## FilmApp

**Backend:** [API](https://github.com/Web-IV/1920-b1-be-ziggymoens)

Gebruik volgende credentials om in te loggen:

| Username | Password |
| :---: | :---:|
| admin@hotmail.com | P@ssword1 |
| sebastien@hotmail.com | P@ssword1 |

## Info nodig voor startup
- De backend dient te draaien en beschikbaar te zijn
- bij de eerste opstart: npm install
- na de install: npm start


---

## What is it?

Deze applicatie werd geschreven in opdracht van Stefaan De Cock voor het opleidingsonderdeel Webapplicaties IV. Ik heb gekozen om een applicatie te schrijven waarop je een lijst van films kan bijhouden. Het film object bestaat uit een titel, een duur, een categorie, een uitgave jaar, een poster en een detail object. Dit detail object bestaat dan op zijn beurt uit een beschrijving, een storyline, een rating, een acteur object en een regisseur object. Deze laatste houden alle twee een naam bij en acteur houdt ook een rol naam bij. Aan de lijst kunnen er films worden toegevoegd en verwijderd. Indien je wenst is het ook mogelijk om de details van één van de films te bekijken. Aangezien een lijst van films verbonden is aan één gebruiker is het verplicht om eerst aan te melden alvorens men in de applicatie kan. Anders zouden er films ongewenst dubbel worden toegevoegd aan de lijst.

---

## Extra technologie
### Persisteren van foto's
Als extra technologie koos ik voor het persisteren van een PNG. Als je een film wil toevoegen moet je een poster ook toevoegen. Dit is een foto die op de voorpagina onder de titel zal getoond worden. Wanneer je verkenner opent zullen alleen files kunnen gekozen worden met formaat. Deze file wordt dan omgezet naar een Base64 string die wordt doorgegeven naar de backend server via de POST methode waar hij ook wordt opgeslagen als Base64 string. Wanneer een GET wordt gedaan wordt deze Base64 string terug omgezet naar een afbeelding.

---

## Requirements frontend Web IV
- [x] een werkende web applicatie
- [x] Angular 9 front end
- [x] .NET Core backend met swagger
- [x] Loginsysteem
- [x] minstens 4 API calls(naast de login / register)
- [x] best practices toepassen
- [x] backend routes afschermen
- [x] minstens 4 components
- [x] minstens 1 form (reactive) met validatie
- [x] minstens 2 modules
- [x] routing met minstens 2 pagina’s
- [x] responsive en een minimum aan stijl
- [x] regelmatige commits in git (één of een paar commits helemaal op het einde wordt niet aanvaard) gepusht, )
- [x] minstens één ‘extra’ technologie die niet aan bod kwam in de cursus (zie verder voor voorbeelden)
- [x] een aantal (uniten/of e2e) testen
- [x] goede README.md’s op de github repositories
- [x] een volledig en tijdig ingediend dossier(zie verder voor de vereisten)

Mijn eerste aantal commites werden uit verstrooidheid wel op een verkeerde repository gepusht. Hiervan wil ik wel bewijs leveren indien nodig. Ik stuurde hieromtrent ook een mail naar meneer De Cock.

---

## Beknopte opbouw applicatie:
- *Modules:* 
  * [RoutingModule](FilmApp/src/app/app-routing.module.ts)
  * [FilmModule](FilmApp/src/app/film/film.module.ts)
  * [UserModule](FilmApp/src/app/user/user.module.ts)
  * [MaterialModule](FilmApp/src/app/material/material.module.ts)
  * [AppModule](FilmApp/src/app/app.module.ts)

- *Componenten onder Film:* 
  * [FilmComponent](FilmApp/src/app/film/film/)
  * [ActeurComponent](FilmApp/src/app/film/acteur/)
  * [FilmListComponent](FilmApp/src/app/film/filmlist/)
  * [AddFilmComponent](FilmApp/src/app/film/add-film/)
  * [FilmDetailComponent](FilmApp/src/app/film/film-detail/)
  * [DetailComponent](FilmApp/src/app/film/detail/)
  * [RegisseurComponent](FilmApp/src/app/film/regisseur/)

- *Dataservices:* 
  * [FilmDataService](FilmApp/src/app/film/film/film-data.service.ts)
