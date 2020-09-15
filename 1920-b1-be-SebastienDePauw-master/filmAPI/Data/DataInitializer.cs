using filmAPI.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace filmAPI.Data
{
    public class DataInitializer
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly UserManager<IdentityUser> _userManager;

        public DataInitializer(ApplicationDbContext dbContext, UserManager<IdentityUser> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        public async Task initializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
                #region films, acteurs en regisseurs
                Detail eg1Detail = new Detail("Beschrijving", "Korte inhoud");
                eg1Detail.AddRating(8.9);
                Film eg1 = new Film("End Game", 2019, 181, "Sciencefiction", Film.ImageViaPad("Data/Images/endGame.PNG"), eg1Detail);
                Acteur evans1 = new Acteur("Chris Evans", "Captain America");
                Acteur junior1 = new Acteur("Robert Downey jr.", "Iron Man");
                Acteur hemsworth1 = new Acteur("Chris Hemsworth", "Thor");
                Acteur cooper1 = new Acteur("Bradley Cooper", "Rocket Raccoon");
                Acteur ruffalo1 = new Acteur("Mark Ruffalo", "Hulk");
                Acteur johansson1 = new Acteur("Scarlett Johansson", "Black Widow");
                Acteur renner1 = new Acteur("Jeremy Renner", "Hawkeye");
                Acteur rudd1 = new Acteur("Paul Rudd", "Ant-Man");
                Regisseur ar1 = new Regisseur("Anthony Russo");
                Regisseur jr1 = new Regisseur("Joe Russo");
                eg1.AddActeur(evans1);
                eg1.AddActeur(junior1);
                eg1.AddActeur(hemsworth1);
                eg1.AddActeur(cooper1);
                eg1.AddActeur(ruffalo1);
                eg1.AddActeur(johansson1);
                eg1.AddActeur(renner1);
                eg1.AddActeur(rudd1);
                eg1.AddRegisseur(ar1);
                eg1.AddRegisseur(jr1);

                Detail eg2Detail = new Detail("Beschrijving", "Korte inhoud");
                eg2Detail.AddRating(7.5);
                Film eg2 = new Film("End Game", 2019, 181, "Sciencefiction", Film.ImageViaPad("Data/Images/endGame.PNG"), eg2Detail);
                Acteur evans2 = new Acteur("Chris Evans", "Captain America");
                Acteur junior2 = new Acteur("Robert Downey jr.", "Iron man");
                Acteur hemsworth2 = new Acteur("Chris Hemsworth", "Thor");
                Acteur cooper2 = new Acteur("Bradley Cooper", "Rocket Raccoon");
                Acteur ruffalo2 = new Acteur("Mark Ruffalo", "Hulk");
                Acteur johansson2 = new Acteur("Scarlett Johansson", "Black Widow");
                Acteur renner2 = new Acteur("Jeremy Renner", "Hawkeye");
                Acteur rudd2 = new Acteur("Paul Rudd", "Ant-Man");
                Regisseur ar2 = new Regisseur("Anthony Russo");
                Regisseur jr2 = new Regisseur("Joe Russo");
                eg2.AddActeur(evans2);
                eg2.AddActeur(junior2);
                eg2.AddActeur(hemsworth2);
                eg2.AddActeur(cooper2);
                eg2.AddActeur(ruffalo2);
                eg2.AddActeur(johansson2);
                eg2.AddActeur(renner2);
                eg2.AddActeur(rudd2);
                eg2.AddRegisseur(ar2);
                eg2.AddRegisseur(jr2);

                Detail pf1Detail = new Detail("Beschrijving", "Korte inhoud");
                pf1Detail.AddRating(6.5);
                Film pf1 = new Film("Pulp Fiction", 1994, 154, "Misdaad", Film.ImageViaPad("Data/Images/pulpFiction.PNG"), pf1Detail);
                Acteur jackson1 = new Acteur("Samuel L. Jackson", "Jules Winnfield");
                Acteur willis1 = new Acteur("Bruce Willis", "Budge Coolidge");
                Acteur travolta1 = new Acteur("John Travolta", "Vincent Vega");
                Regisseur tarantino1 = new Regisseur("Quentin Tarantino");
                pf1.AddActeur(jackson1);
                pf1.AddActeur(willis1);
                pf1.AddActeur(travolta1);
                pf1.AddRegisseur(tarantino1);

                Detail pf2Detail = new Detail("Beschrijving", "Korte inhoud");
                Film pf2 = new Film("Pulp Fiction", 1994, 154, "Misdaad", Film.ImageViaPad("Data/Images/pulpFiction.PNG"), pf2Detail);
                Acteur jackson2 = new Acteur("Samuel L. Jackson", "Jules Winnfield");
                Acteur willis2 = new Acteur("Bruce Willis", "Budge Coolidge");
                Acteur travolta2 = new Acteur("John Travolta", "Vincent Vega");
                Regisseur tarantino2 = new Regisseur("Quentin Tarantino");
                pf2.AddActeur(jackson2);
                pf2.AddActeur(willis2);
                pf2.AddActeur(travolta2);
                pf2.AddRegisseur(tarantino2);

                Detail joker1Detail = new Detail("Beschrijving", "Korte inhoud");
                Film joker1 = new Film("Joker", 2019, 122, "Misdaad", Film.ImageViaPad("Data/Images/joker.PNG"), joker1Detail);
                Acteur phoenix1 = new Acteur("Joaquin Phoenix", "Joker");
                Acteur niro1 = new Acteur("Robert De Niro", "Murray Franklin");
                Regisseur phillips1 = new Regisseur("Todd Phillips");
                joker1.AddActeur(phoenix1);
                joker1.AddActeur(niro1);
                joker1.AddRegisseur(phillips1);

                Detail joker2Detail = new Detail("Beschrijving", "Korte inhoud");
                Film joker2 = new Film("Joker", 2019, 122, "Misdaad", Film.ImageViaPad("Data/Images/joker.PNG"), joker2Detail);
                Acteur phoenix2 = new Acteur("Joaquin Phoenix", "Joker");
                Acteur niro2 = new Acteur("Robert De Niro", "Murray Franklin");
                Regisseur phillips2 = new Regisseur("Todd Phillips");
                joker2.AddActeur(phoenix2);
                joker2.AddActeur(niro2);
                joker2.AddRegisseur(phillips2);

                Detail fgDetail = new Detail("Beschrijving", "Korte inhoud");
                Film fg = new Film("Forrest Gump", 1994, 144, "Drama", Film.ImageViaPad("Data/Images/forrestGump.PNG"), fgDetail);
                Acteur hanks = new Acteur("Tom Hanks", "Forrest Gump");
                Acteur wright = new Acteur("Robin Wright", "Jenny Curran");
                Regisseur zemeckis = new Regisseur("Robert Zemeckis");
                fg.AddRegisseur(zemeckis);
                fg.AddActeur(hanks);
                fg.AddActeur(wright);

                Detail dhDetail = new Detail("Beschrijving", "Korte inhoud");
                Film dh = new Film("Die Hard", 1988, 132, "Actie", Film.ImageViaPad("Data/Images/diehard.PNG"), dhDetail);
                Acteur willis = new Acteur("Bruce Willis", "John McClane");
                Acteur rickman = new Acteur("Alan Rockman", "Hans Gruber");
                Regisseur mctiernan = new Regisseur("John McTiernan");
                fg.AddRegisseur(mctiernan);
                fg.AddActeur(rickman);
                fg.AddActeur(willis);

                Detail titanicDetail = new Detail("Beschrijving", "Korte inhoud");
                Film titanic = new Film("Titanic", 1997, 210, "Romantiek", Film.ImageViaPad("Data/Images/titanic.PNG"), titanicDetail);
                Acteur dicaprio = new Acteur("Leonardo DiCaprio", "Jack Dawson");
                Acteur winslet = new Acteur("Kate Winslet", "Rose DeWitt Bukater");
                Regisseur cameron = new Regisseur("James Cameron");
                fg.AddRegisseur(cameron);
                fg.AddActeur(winslet);
                fg.AddActeur(dicaprio);
                #endregion

                #region gebruikers
                Gebruiker admin = new Gebruiker("admin", "admin@hotmail.com");
                admin.AddFilmWatchlist(eg1);
                admin.AddFilmWatchlist(pf1);
                admin.AddFilmWatchlist(joker1);
                admin.AddFilmWatchlist(fg);
                admin.AddFilmWatchlist(dh);
                admin.AddFilmWatchlist(titanic);
                _dbContext.Gebruikers.Add(admin);
                await CreateUser(admin.Email, "P@ssword1");

                Gebruiker seba = new Gebruiker("Sebastien De Pauw", "sebastien@hotmail.com");
                seba.AddFilmWatchlist(eg2);
                seba.AddFilmWatchlist(pf2);
                seba.AddFilmWatchlist(joker2);
                _dbContext.Gebruikers.Add(seba);
                await CreateUser(seba.Email, "P@ssword1"); 
                #endregion

                _dbContext.SaveChanges();
            }
        }
        private async Task CreateUser(string email, string password)
        {
            var gebruiker = new IdentityUser { UserName = email, Email = email };
            await _userManager.CreateAsync(gebruiker, password);
        }
    }
}
