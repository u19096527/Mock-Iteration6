using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Iteration6_API.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmployeeTypes",
                columns: table => new
                {
                    Employee_Type_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeTypes", x => x.Employee_Type_ID);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                columns: table => new
                {
                    UserRole_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => x.UserRole_ID);
                });

            migrationBuilder.CreateTable(
                name: "Vouchers",
                columns: table => new
                {
                    Voucher_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Voucher_Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Percent = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Expiry_Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vouchers", x => x.Voucher_ID);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    User_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    User_Role_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.User_ID);
                    table.ForeignKey(
                        name: "FK_Users_UserRoles_User_Role_ID",
                        column: x => x.User_Role_ID,
                        principalTable: "UserRoles",
                        principalColumn: "UserRole_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Student_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Cell_Number = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Physical_Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Emergency_Contact_Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Emergency_Contact_Cell = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Employee_Type_ID = table.Column<int>(type: "int", nullable: false),
                    User_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Student_ID);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeTypes_Employee_Type_ID",
                        column: x => x.Employee_Type_ID,
                        principalTable: "EmployeeTypes",
                        principalColumn: "Employee_Type_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Employees_Users_User_ID",
                        column: x => x.User_ID,
                        principalTable: "Users",
                        principalColumn: "User_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Student_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Cell_Number = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Subscribed = table.Column<bool>(type: "bit", nullable: false),
                    User_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Student_ID);
                    table.ForeignKey(
                        name: "FK_Students_Users_User_ID",
                        column: x => x.User_ID,
                        principalTable: "Users",
                        principalColumn: "User_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AuditTrails",
                columns: table => new
                {
                    AuditTrail_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Employee_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuditTrails", x => x.AuditTrail_ID);
                    table.ForeignKey(
                        name: "FK_AuditTrails_Employees_Employee_ID",
                        column: x => x.Employee_ID,
                        principalTable: "Employees",
                        principalColumn: "Student_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "HelpTips",
                columns: table => new
                {
                    Help_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FilePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Employee_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HelpTips", x => x.Help_ID);
                    table.ForeignKey(
                        name: "FK_HelpTips_Employees_Employee_ID",
                        column: x => x.Employee_ID,
                        principalTable: "Employees",
                        principalColumn: "Student_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Newsletters",
                columns: table => new
                {
                    Newsletter_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Subject = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FilePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Employee_ID = table.Column<int>(type: "int", nullable: false),
                    Student_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Newsletters", x => x.Newsletter_ID);
                    table.ForeignKey(
                        name: "FK_Newsletters_Employees_Employee_ID",
                        column: x => x.Employee_ID,
                        principalTable: "Employees",
                        principalColumn: "Student_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Newsletters_Students_Student_ID",
                        column: x => x.Student_ID,
                        principalTable: "Students",
                        principalColumn: "Student_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AuditTrails_Employee_ID",
                table: "AuditTrails",
                column: "Employee_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_Employee_Type_ID",
                table: "Employees",
                column: "Employee_Type_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_User_ID",
                table: "Employees",
                column: "User_ID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_HelpTips_Employee_ID",
                table: "HelpTips",
                column: "Employee_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Newsletters_Employee_ID",
                table: "Newsletters",
                column: "Employee_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Newsletters_Student_ID",
                table: "Newsletters",
                column: "Student_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Students_User_ID",
                table: "Students",
                column: "User_ID",
                unique: true,
                filter: "[User_ID] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Users_User_Role_ID",
                table: "Users",
                column: "User_Role_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AuditTrails");

            migrationBuilder.DropTable(
                name: "HelpTips");

            migrationBuilder.DropTable(
                name: "Newsletters");

            migrationBuilder.DropTable(
                name: "Vouchers");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "EmployeeTypes");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "UserRoles");
        }
    }
}
