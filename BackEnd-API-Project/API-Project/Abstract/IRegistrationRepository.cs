using API_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_Project.Abstract
{
    public interface IRegistrationRepository
    {
        IQueryable<User> Users { get; }
        IQueryable<Registration> Registrations { get; }
        User NewRegistration(User _User);
        Registration Registration(Registration _User);
    }
}