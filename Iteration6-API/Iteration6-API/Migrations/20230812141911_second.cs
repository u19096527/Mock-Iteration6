using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Iteration6_API.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Student_ID",
                table: "Employees",
                newName: "Employee_ID");

            migrationBuilder.AlterColumn<int>(
                name: "Employee_ID",
                table: "HelpTips",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Employee_ID",
                table: "Employees",
                newName: "Student_ID");

            migrationBuilder.AlterColumn<int>(
                name: "Employee_ID",
                table: "HelpTips",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
