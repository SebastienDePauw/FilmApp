using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace filmAPI.DTOs
{
    public class ActeurDTO
    {
        [Required]
        public string Naam { get; set; }
        public string Rol { get; set; }
    }
}
