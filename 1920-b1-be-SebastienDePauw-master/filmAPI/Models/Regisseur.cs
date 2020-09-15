using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace filmAPI.Models
{
    public class Regisseur
    {
        public int Id { get; set; }
        public String Naam { get; set; }
        public Regisseur() { }

        public Regisseur(string naam)
        {
            Naam = naam;
        }

    }
}
