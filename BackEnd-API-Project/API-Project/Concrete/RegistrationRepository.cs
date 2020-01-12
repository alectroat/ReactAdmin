using API_Project.Abstract;
using API_Project.DAL;
using API_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API_Project.Concrete
{
    public class RegistrationRepository : IRegistrationRepository, IDisposable
    {
        private APPContext _Context;
        public RegistrationRepository()
        {
            _Context = new APPContext();
        }
        public IQueryable<User> Users
        {
            get { return _Context.Users; }
        }
        public IQueryable<Registration> Registrations
        {
            get { return _Context.Registrations; }
        }
        User IRegistrationRepository.NewRegistration(User user)
        {
            _Context.Users.Add
            (
                new User()
                {
                    UserId = Guid.NewGuid(),
                    FullName = user.FullName,
                    Email = user.Email,
                    Password = user.Password,
                    Image = user.Image,
                    DOB = user.DOB
                }
            );
            _Context.SaveChanges();
            return user;
        }

        Registration IRegistrationRepository.Registration(Registration Registration)
        {
            _Context.Registrations.Add
            (
                new Registration()
                {
                    RegistrationId = Guid.NewGuid(),
                    FirstName = Registration.FirstName,
                    LastName = Registration.LastName,
                    UserName = Registration.UserName,
                    Password = Registration.Password
                }
            );
            _Context.SaveChanges();
            return Registration;
        }
        public void Dispose()
        {
            _Context.Dispose();
            _Context = null;
        }
    }
}