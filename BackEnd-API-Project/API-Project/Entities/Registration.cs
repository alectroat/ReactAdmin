using System;
using System.ComponentModel.DataAnnotations;

namespace API_Project.Models
{
    public class Registration
    {
        [Key]
        public Guid RegistrationId { get; set; }

        [Required]
        [StringLength(200)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(200)]
        public string LastName { get; set; }

        [Required]
        [StringLength(200)]
        public string UserName { get; set; }

        [Required]
        [StringLength(200)]
        public string Password { get; set; }
    }
}