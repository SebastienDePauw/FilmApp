using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace filmAPI.Models
{
    public class Acteur
    {
        public int Id { get; set; }
        public String Naam { get; set; }
        public string Rol { get; set; }

        public Acteur() { }
        public Acteur(string naam, string rol)
        {
            Naam = naam;
            Rol = rol;
        }
    }
}
