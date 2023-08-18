using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.IO.Pipelines;
using System.Reflection;

using System;
using System.ComponentModel.DataAnnotations;
using Org.BouncyCastle.Utilities.Collections;
using System.Data;
using Microsoft.EntityFrameworkCore.Metadata;
using Iteration6_API.ViewModels;
using MailKit.Search;


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
        public DbSet<AuditEntryType> AuditEntryTypes { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //student and user 
            modelBuilder.Entity<Student>()
                .HasOne(i => i.Users)
                .WithOne(i => i.Students)
                .HasForeignKey<Student>(i => i.User_ID)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.Restrict);

            // Help and Employee
            modelBuilder.Entity<Help>()
                .HasOne(j => j.Employees)
                .WithMany(i => i.Help)
                .HasForeignKey(i => i.Employee_ID)
                .OnDelete(DeleteBehavior.Restrict);

            // Audit Trail and Employees
            modelBuilder.Entity<AuditTrail>()
                .HasOne(k => k.Employees)
                .WithMany(i => i.AuditTrail)
                .HasForeignKey(o => o.Employee_ID)
                .OnDelete(DeleteBehavior.Restrict);

            // Audit Trail and Audit Entry Types
            modelBuilder.Entity<AuditTrail>()
                .HasOne(k => k.AuditEntryTypes)
                .WithMany(i => i.AuditTrail)
                .HasForeignKey(o => o.Audit_Entry_Type_ID)
                .OnDelete(DeleteBehavior.Restrict);

            // User Roles has many Users
            modelBuilder.Entity<User>()
                .HasOne(k => k.UserRole)
                .WithMany(k => k.Users)
                .HasForeignKey(i => i.User_Role_ID)
                .OnDelete(DeleteBehavior.Restrict);

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

            // Employee generates many Newsletters
            modelBuilder.Entity<Newsletter>()
            .HasOne(i => i.Employees)
              .WithMany(k => k.Newsletters)
              .HasForeignKey(k => k.Employee_ID)
              .OnDelete(DeleteBehavior.Restrict);

            // Employee Type has many Employees
            modelBuilder.Entity<Employee>()
                .HasOne(B => B.EmployeeType)
                .WithMany(B => B.Employees)
                .HasForeignKey(B => B.Employee_Type_ID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<AuditEntryType>().HasData(
                new AuditEntryType { Audit_Entry_Type_ID = 1, Audit_Entry_Type = "BackUpSystemData" },
                new AuditEntryType { Audit_Entry_Type_ID = 2, Audit_Entry_Type = "RestoreSystemData" },

                new AuditEntryType { Audit_Entry_Type_ID = 3, Audit_Entry_Type = "UpdateVAT" },
                new AuditEntryType { Audit_Entry_Type_ID = 4, Audit_Entry_Type = "ViewVAT" },

                new AuditEntryType { Audit_Entry_Type_ID = 5, Audit_Entry_Type = "AddUserRole" },
                new AuditEntryType { Audit_Entry_Type_ID = 6, Audit_Entry_Type = "UpdateUserRole" },
                new AuditEntryType { Audit_Entry_Type_ID = 7, Audit_Entry_Type = "DeleteUserRole" },

                new AuditEntryType { Audit_Entry_Type_ID = 8, Audit_Entry_Type = "AddHelpTip" },
                new AuditEntryType { Audit_Entry_Type_ID = 9, Audit_Entry_Type = "UpdateHelpTip" },
                new AuditEntryType { Audit_Entry_Type_ID = 10, Audit_Entry_Type = "DeleteHelpTip" },

                new AuditEntryType { Audit_Entry_Type_ID = 11, Audit_Entry_Type = "SendNewsletter" },

                new AuditEntryType { Audit_Entry_Type_ID = 12, Audit_Entry_Type = "PerformStockTake" },

                new AuditEntryType { Audit_Entry_Type_ID = 13, Audit_Entry_Type = "WriteOffInventory" },

                new AuditEntryType { Audit_Entry_Type_ID = 14, Audit_Entry_Type = "ViewAuditTrail" },

                new AuditEntryType { Audit_Entry_Type_ID = 15, Audit_Entry_Type = "UploadPrescribedBookList" },

                new AuditEntryType { Audit_Entry_Type_ID = 16, Audit_Entry_Type = "AddPrescribedBook" },
                new AuditEntryType { Audit_Entry_Type_ID = 17, Audit_Entry_Type = "AddBook" },
                new AuditEntryType { Audit_Entry_Type_ID = 18, Audit_Entry_Type = "UpdateBook" },
                new AuditEntryType { Audit_Entry_Type_ID = 19, Audit_Entry_Type = "DeleteBook" },

                new AuditEntryType { Audit_Entry_Type_ID = 20, Audit_Entry_Type = "AddModule" },
                new AuditEntryType { Audit_Entry_Type_ID = 21, Audit_Entry_Type = "UpdateModule" },
                new AuditEntryType { Audit_Entry_Type_ID = 22, Audit_Entry_Type = "DeleteModule" },

                new AuditEntryType { Audit_Entry_Type_ID = 23, Audit_Entry_Type = "AddFaculty" },
                new AuditEntryType { Audit_Entry_Type_ID = 24, Audit_Entry_Type = "UpdateFaculty" },
                new AuditEntryType { Audit_Entry_Type_ID = 25, Audit_Entry_Type = "DeleteFaculty" },

                new AuditEntryType { Audit_Entry_Type_ID = 26, Audit_Entry_Type = "AddDepartment" },
                new AuditEntryType { Audit_Entry_Type_ID = 27, Audit_Entry_Type = "UpdateDepartment" },
                new AuditEntryType { Audit_Entry_Type_ID = 28, Audit_Entry_Type = "DeleteDepartment" },

                new AuditEntryType { Audit_Entry_Type_ID = 29, Audit_Entry_Type = "AddEvaluationSchedule" },
                new AuditEntryType { Audit_Entry_Type_ID = 30, Audit_Entry_Type = "UpdateEvaluationSchedule" },
                new AuditEntryType { Audit_Entry_Type_ID = 31, Audit_Entry_Type = "RemoveEvaluationSchedule" },
                new AuditEntryType { Audit_Entry_Type_ID = 32, Audit_Entry_Type = "EvaluationScheduleSummary" },

                new AuditEntryType { Audit_Entry_Type_ID = 33, Audit_Entry_Type = "GenerateBookVoucher" },
                new AuditEntryType { Audit_Entry_Type_ID = 34, Audit_Entry_Type = "UpdateBookVoucher" },
                new AuditEntryType { Audit_Entry_Type_ID = 35, Audit_Entry_Type = "DeleteBookVoucher" },

                new AuditEntryType { Audit_Entry_Type_ID = 36, Audit_Entry_Type = "AddEmployee" },
                new AuditEntryType { Audit_Entry_Type_ID = 37, Audit_Entry_Type = "UpdateEmployee" },
                new AuditEntryType { Audit_Entry_Type_ID = 38, Audit_Entry_Type = "DeleteEmployee" },

                new AuditEntryType { Audit_Entry_Type_ID = 39, Audit_Entry_Type = "AddEmployeeType" },
                new AuditEntryType { Audit_Entry_Type_ID = 40, Audit_Entry_Type = "UpdateEmployeeType" },
                new AuditEntryType { Audit_Entry_Type_ID = 41, Audit_Entry_Type = "DeleteEmployeeType" },

                new AuditEntryType { Audit_Entry_Type_ID = 42, Audit_Entry_Type = "AddEquipment" },
                new AuditEntryType { Audit_Entry_Type_ID = 43, Audit_Entry_Type = "UpdateEquipment" },
                new AuditEntryType { Audit_Entry_Type_ID = 44, Audit_Entry_Type = "DeleteEquipment" }, 

                new AuditEntryType { Audit_Entry_Type_ID = 45, Audit_Entry_Type = "AddEquipmentType" },
                new AuditEntryType { Audit_Entry_Type_ID = 46, Audit_Entry_Type = "UpdateEquipmentType" },
                new AuditEntryType { Audit_Entry_Type_ID = 47, Audit_Entry_Type = "DeleteEquipmentType" },

                new AuditEntryType { Audit_Entry_Type_ID = 48, Audit_Entry_Type = "CaptureEquipment" },

                new AuditEntryType { Audit_Entry_Type_ID = 49, Audit_Entry_Type = "AddStudent" },
                new AuditEntryType { Audit_Entry_Type_ID = 50, Audit_Entry_Type = "UpdateStudent" }, 
                new AuditEntryType { Audit_Entry_Type_ID = 51, Audit_Entry_Type = "DeleteStudent" },

                new AuditEntryType { Audit_Entry_Type_ID = 52, Audit_Entry_Type = "WalkInSalesReport" },
                new AuditEntryType { Audit_Entry_Type_ID = 53, Audit_Entry_Type = "BookInventoryReport" },
                new AuditEntryType { Audit_Entry_Type_ID = 54, Audit_Entry_Type = "LabEquipmentInventoryReport" },
                new AuditEntryType { Audit_Entry_Type_ID = 55, Audit_Entry_Type = "OnlineOrdersReport" },
                new AuditEntryType { Audit_Entry_Type_ID = 56, Audit_Entry_Type = "ResellersReport" },
                new AuditEntryType { Audit_Entry_Type_ID = 57, Audit_Entry_Type = "AuditTrailReport" },

                new AuditEntryType { Audit_Entry_Type_ID = 58, Audit_Entry_Type = "AddSupplier" },
                new AuditEntryType { Audit_Entry_Type_ID = 59, Audit_Entry_Type = "UpdateSupplier" },
                new AuditEntryType { Audit_Entry_Type_ID = 60, Audit_Entry_Type = "DeleteSupplier" }

                );

        }


    }

}
