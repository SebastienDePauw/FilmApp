# 1920-b1-be-SebastienDePauw

---

## Concept
Dit is de backend van mijn [FilmApp](https://github.com/Web-IV/1920-b1-fe-SebastienDePauw). Deze applicatie runt in Visual Studio 2019 en maakt gebruik van een Microsoft SQL server. De bedoeling van deze backend applicatie is het opslaan van gegevens van films, de daarbijhorende details.
Elke film heeft een acteur en een regisseur object.
Alles is toegankelijk vanuit de frontend mits de gebruikers ingelogd is (of zich geregistreerd heeft).

---

## Users
| Naam gebruiker | Email | Passwoord |
| :---: | :---: | :---: |
| admin | admin@hotmail.com | P@ssword1 |
| Sebastien | sebastien@hotmail.com | P@ssword1 |

Passwoord moet minimum 8 karakters lang zijn, minimum 1 kleine en grote letter bevatten, minimum 1 nummer bevatten en minimim 1 speciaal karakters (vb. !@#$%^&*)

---

## Requirements backend Web IV

### Printscreen API zoals weergegeven in swagger

![Swagger printout](images/Swagger.png)

### Klassendiagram van de domeinlaag

![DCD printout domeinlaag](images/dcd.PNG)

### Instellingen nodig om het project lokaal te runnen:

- Een versie van Visual Studio 2019
- **De "ConnectionStrings" veranderen in de 'appsettings.json' naar -->**
_"DefaultConnection": "Server=localhost;Database=Film;Trusted_Connection=True"_

### De readme
- [x] Printscreen van de API zoals weergegeven in swagger. Per endpoint een printscreen van de parameters en de responses
- [x] Printscreen van het klassendiagram van de domeinlaag (toont de klassen met properties en methodes (inclusief de datatypes) en de associaties)
- [x] Opsomming van de instellingen die nodig zijn om je backend project lokaal te runnen, indien nodigx
- [x] Voorbereiding feedback moment :
 - Dit document waarin je aanvinkt wat je reeds hebt gerealiseerd
 - Opsomming van de vragen die je hebt over je backend project en waarover je feedback wenst

### Domein laag
- [x] Het domein bevat minstens 2 geassocieerde klassen
- [x] Klassen bevatten toestand en gedrag
- [x] Klassendiagram is aangemaakt, toont de properties, methodes en de associaties

### Data laag
- [x] DataContext is aangemaakt
- [x] Mapping is geïmplementeerd (In DataContext zoals in Recipe REST API voorbeeld, of a.d.h.v. Mapper klassen)
- [x] Databank wordt geseed met data (In DataContext zoals in Recipe REST API voorbeeld, of via initializer)

### Controller
- [x] Minstens 1 controller met endpoints voor de CRUD operaties
- [x] De endpoints zijn gedefinieerd volgens de best practices
- [x] Enkel de benodigde data wordt uitgewisseld (DTO’s indien nodig)

### Swagger 
- [x] De documentatie is opgesteld 
