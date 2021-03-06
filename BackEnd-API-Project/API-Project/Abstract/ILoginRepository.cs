﻿using API_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_Project.Abstract
{
    public interface ILoginRepository
    {
        IQueryable<User> Users { get; }
        User AuthenticUser(User user);
        Registration AuthenticUser(Registration Registration);
    }
}