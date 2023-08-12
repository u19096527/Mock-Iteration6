using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.IO.Pipelines;
using System.Reflection;

using System;
using System.ComponentModel.DataAnnotations;


namespace Iteration6_API.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Employee_Type> EmployeeTypes { get; set; }
        public DbSet<Help> HelpTips { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<User_Role> UserRoles { get; set; }
        public DbSet<Voucher> Vouchers { get; set; }
        public DbSet<Newsletter> Newsletters { get; set; }
        public DbSet<AuditTrail> AuditTrails { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //student and user 
            modelBuilder.Entity<Student>()
                .HasOne(i => i.Users)
                .WithOne(i => i.Students)
                .HasForeignKey<Student>(i => i.User_ID)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.Restrict);

            ////student and user 
            //modelBuilder.Entity<Student>()
            //    .HasOne(i => i.User)
            //    .WithOne(i => i.Stu)
            //    .HasForeignKey<Student>(i => i.User_ID)
            //    .IsRequired(false)
            //    .OnDelete(DeleteBehavior.Restrict);

            // Help and Employee
            modelBuilder.Entity<Help>()
                .HasOne(j => j.Employees)
                .WithMany(i => i.Help)
                .HasForeignKey(i => i.Employee_ID)
                .OnDelete(DeleteBehavior.Restrict);

            //// Help and Employee
            //modelBuilder.Entity<Help>()
            //    .HasOne(j => j.Employees)
            //    .WithMany(i => i.Help)
            //    .HasForeignKey(i => i.Employee_ID)
            //    .OnDelete(DeleteBehavior.Restrict);


            // Audit Trail
            modelBuilder.Entity<AuditTrail>()
                .HasOne(k => k.Employees)
                .WithMany(i => i.AuditTrail)
                .HasForeignKey(o => o.Employee_ID)
                .OnDelete(DeleteBehavior.Restrict);

            //// Audit Trail
            //modelBuilder.Entity<AuditTrail>()
            //    .HasOne(k => k.Employees)
            //    .WithMany(i => i.AuditTrail)
            //    .HasForeignKey(o => o.Employee_ID)
            //    .OnDelete(DeleteBehavior.Restrict);


            // User Roles has many Users
            modelBuilder.Entity<User>()
                .HasOne(k => k.UserRole)
                .WithMany(k => k.Users)
                .HasForeignKey(i => i.User_Role_ID)
                .OnDelete(DeleteBehavior.Restrict);

            //// User Roles has many Users
            //modelBuilder.Entity<User>()
            //    .HasOne(k => k.User_Role)
            //    .WithMany(k => k.Users)
            //    .HasForeignKey(i => i.User_Role_ID)
            //    .OnDelete(DeleteBehavior.Restrict);

            //// User and Employee
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Users)
                .WithOne(u => u.Employees)
                .HasForeignKey<Employee>(u => u.User_ID)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.Restrict);


            // Student can receive many Newsletters
            modelBuilder.Entity<Newsletter>()
                .HasOne(l => l.Students)
                .WithMany(m => m.Newsletters)
                .HasForeignKey(l => l.Student_ID)
                .OnDelete(DeleteBehavior.Restrict);

            //// Student can receive many Newsletters
            //modelBuilder.Entity<Newsletter>()
            //    .HasOne(l => l.Students)
            //    .WithMany(m => m.Newsletters)
            //    .HasForeignKey(l => l.Student_ID)
            //    .OnDelete(DeleteBehavior.Restrict);


            // Employee generates many Newsletters
            modelBuilder.Entity<Newsletter>()
            .HasOne(i => i.Employees)
              .WithMany(k => k.Newsletters)
              .HasForeignKey(k => k.Employee_ID)
              .OnDelete(DeleteBehavior.Restrict);

            //// Employee generates many Newsletters
            //modelBuilder.Entity<Newsletter>()
            //    .HasOne(i => i.Employees)
            //    .WithMany(k => k.Newsletters)
            //    .HasForeignKey(k => k.Employee_ID)
            //    .OnDelete(DeleteBehavior.Restrict);


            // Employee Type has many Employees
            modelBuilder.Entity<Employee>()
                .HasOne(B => B.EmployeeType)
                .WithMany(B => B.Employees)
                .HasForeignKey(B => B.Employee_Type_ID)
                .OnDelete(DeleteBehavior.Restrict);

            //// Employee Type has many Employees
            //modelBuilder.Entity<Employee>()
            //    .HasOne(B => B.EmployeeType)
            //    .WithMany(B => B.Employees)
            //    .HasForeignKey(B => B.Employee_Type_ID)
            //    .OnDelete(DeleteBehavior.Restrict);


        }









    }

}
