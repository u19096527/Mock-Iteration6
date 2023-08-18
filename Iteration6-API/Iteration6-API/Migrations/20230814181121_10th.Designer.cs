﻿// <auto-generated />
using System;
using Iteration6_API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Iteration6_API.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230814181121_10th")]
    partial class _10th
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.20")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Iteration6_API.Models.AuditTrail", b =>
                {
                    b.Property<int>("AuditTrail_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AuditTrail_ID"), 1L, 1);

                    b.Property<string>("Comment")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("DateTimeStamp")
                        .HasColumnType("datetime2");

                    b.Property<int>("Employee_ID")
                        .HasColumnType("int");

                    b.HasKey("AuditTrail_ID");

                    b.HasIndex("Employee_ID");

                    b.ToTable("AuditTrails");
                });

            modelBuilder.Entity("Iteration6_API.Models.Employee", b =>
                {
                    b.Property<int>("Employee_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Employee_ID"), 1L, 1);

                    b.Property<string>("BirthDate")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Cell_Number")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Emergency_Contact_Cell")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Emergency_Contact_Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("Employee_Type_ID")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Physical_Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("User_ID")
                        .HasColumnType("int");

                    b.HasKey("Employee_ID");

                    b.HasIndex("Employee_Type_ID");

                    b.HasIndex("User_ID")
                        .IsUnique();

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Iteration6_API.Models.Employee_Type", b =>
                {
                    b.Property<int>("Employee_Type_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Employee_Type_ID"), 1L, 1);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Employee_Type_ID");

                    b.ToTable("EmployeeTypes");
                });

            modelBuilder.Entity("Iteration6_API.Models.Help", b =>
                {
                    b.Property<int>("Help_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Help_ID"), 1L, 1);

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("Employee_ID")
                        .HasColumnType("int");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("FilePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Help_ID");

                    b.HasIndex("Employee_ID");

                    b.ToTable("HelpTips");
                });

            modelBuilder.Entity("Iteration6_API.Models.Newsletter", b =>
                {
                    b.Property<int>("Newsletter_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Newsletter_ID"), 1L, 1);

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Employee_ID")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FilePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Student_ID")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<string>("Subject")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Newsletter_ID");

                    b.HasIndex("Employee_ID");

                    b.HasIndex("Student_ID");

                    b.ToTable("Newsletters");
                });

            modelBuilder.Entity("Iteration6_API.Models.Student", b =>
                {
                    b.Property<int>("Student_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Student_ID"), 1L, 1);

                    b.Property<string>("Cell_Number")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("Subscribed")
                        .HasColumnType("bit");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("User_ID")
                        .HasColumnType("int");

                    b.HasKey("Student_ID");

                    b.HasIndex("User_ID")
                        .IsUnique()
                        .HasFilter("[User_ID] IS NOT NULL");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("Iteration6_API.Models.User", b =>
                {
                    b.Property<int>("User_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("User_ID"), 1L, 1);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("User_Role_ID")
                        .HasColumnType("int");

                    b.HasKey("User_ID");

                    b.HasIndex("User_Role_ID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Iteration6_API.Models.User_Role", b =>
                {
                    b.Property<int>("UserRole_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserRole_ID"), 1L, 1);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("UserRole_ID");

                    b.ToTable("UserRoles");
                });

            modelBuilder.Entity("Iteration6_API.Models.Voucher", b =>
                {
                    b.Property<int>("Voucher_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Voucher_ID"), 1L, 1);

                    b.Property<string>("Expiry_Date")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<int>("Percent")
                        .HasColumnType("int");

                    b.Property<string>("Voucher_Code")
                        .IsRequired()
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.HasKey("Voucher_ID");

                    b.ToTable("Vouchers");
                });

            modelBuilder.Entity("Iteration6_API.Models.AuditTrail", b =>
                {
                    b.HasOne("Iteration6_API.Models.Employee", "Employees")
                        .WithMany("AuditTrail")
                        .HasForeignKey("Employee_ID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Employees");
                });

            modelBuilder.Entity("Iteration6_API.Models.Employee", b =>
                {
                    b.HasOne("Iteration6_API.Models.Employee_Type", "EmployeeType")
                        .WithMany("Employees")
                        .HasForeignKey("Employee_Type_ID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Iteration6_API.Models.User", "Users")
                        .WithOne("Employees")
                        .HasForeignKey("Iteration6_API.Models.Employee", "User_ID")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("EmployeeType");

                    b.Navigation("Users");
                });

            modelBuilder.Entity("Iteration6_API.Models.Help", b =>
                {
                    b.HasOne("Iteration6_API.Models.Employee", "Employees")
                        .WithMany("Help")
                        .HasForeignKey("Employee_ID")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Employees");
                });

            modelBuilder.Entity("Iteration6_API.Models.Newsletter", b =>
                {
                    b.HasOne("Iteration6_API.Models.Employee", "Employees")
                        .WithMany("Newsletters")
                        .HasForeignKey("Employee_ID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Iteration6_API.Models.Student", "Students")
                        .WithMany("Newsletters")
                        .HasForeignKey("Student_ID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Employees");

                    b.Navigation("Students");
                });

            modelBuilder.Entity("Iteration6_API.Models.Student", b =>
                {
                    b.HasOne("Iteration6_API.Models.User", "Users")
                        .WithOne("Students")
                        .HasForeignKey("Iteration6_API.Models.Student", "User_ID")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Users");
                });

            modelBuilder.Entity("Iteration6_API.Models.User", b =>
                {
                    b.HasOne("Iteration6_API.Models.User_Role", "UserRole")
                        .WithMany("Users")
                        .HasForeignKey("User_Role_ID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("UserRole");
                });

            modelBuilder.Entity("Iteration6_API.Models.Employee", b =>
                {
                    b.Navigation("AuditTrail");

                    b.Navigation("Help");

                    b.Navigation("Newsletters");
                });

            modelBuilder.Entity("Iteration6_API.Models.Employee_Type", b =>
                {
                    b.Navigation("Employees");
                });

            modelBuilder.Entity("Iteration6_API.Models.Student", b =>
                {
                    b.Navigation("Newsletters");
                });

            modelBuilder.Entity("Iteration6_API.Models.User", b =>
                {
                    b.Navigation("Employees")
                        .IsRequired();

                    b.Navigation("Students")
                        .IsRequired();
                });

            modelBuilder.Entity("Iteration6_API.Models.User_Role", b =>
                {
                    b.Navigation("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
