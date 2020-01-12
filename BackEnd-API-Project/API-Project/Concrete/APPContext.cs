using API_Project.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace API_Project.DAL
{
    public class APPContext:DbContext
    {
        public APPContext() : base("Connection")
        {
            Database.SetInitializer(new MyDbContextInitializer());
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Registration> Registrations { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }

    public class MyDbContextInitializer : DropCreateDatabaseIfModelChanges<APPContext>
    {
        protected override void Seed(APPContext dbContext)
        {
            IList<Registration> defaultRegistrations = new List<Registration>();

            defaultRegistrations.Add(new Registration() { 
                RegistrationId=Guid.NewGuid(),FirstName="Admin", LastName="Admin",UserName="Admin",Password="12345"
            });

            dbContext.Registrations.AddRange(defaultRegistrations);
            base.Seed(dbContext);
        }
    }
}