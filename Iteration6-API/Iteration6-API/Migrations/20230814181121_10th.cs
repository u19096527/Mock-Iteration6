using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Iteration6_API.Migrations
{
    public partial class _10th : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "AuditTrails");

            migrationBuilder.RenameColumn(
                name: "Time",
                table: "AuditTrails",
                newName: "DateTimeStamp");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateTimeStamp",
                table: "AuditTrails",
                newName: "Time");

            migrationBuilder.AddColumn<string>(
                name: "Date",
                table: "AuditTrails",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "");
        }
    }
}
