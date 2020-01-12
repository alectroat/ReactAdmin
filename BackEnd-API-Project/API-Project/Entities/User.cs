using System;
using System.ComponentModel.DataAnnotations;

namespace API_Project.Models
{
    public class User
    {
        [Key]
        public Guid UserId { get; set; }

        [Required]
        [StringLength(200)]
        public string FullName { get; set; }

        [Required]
        [StringLength(200)]
        public string Email { get; set; }

        [Required]
        [StringLength(200)]
        public string Password { get; set; }
        public string Image { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]        
        public DateTime? DOB { get; set; }
    }
}