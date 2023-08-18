using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Iteration6_API.Migrations
{
    public partial class ninth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Note",
                table: "AuditTrails",
                newName: "Comment");

            migrationBuilder.AddColumn<DateTime>(
                name: "Time",
                table: "AuditTrails",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Time",
                table: "AuditTrails");

            migrationBuilder.RenameColumn(
                name: "Comment",
                table: "AuditTrails",
                newName: "Note");
        }
    }
}
