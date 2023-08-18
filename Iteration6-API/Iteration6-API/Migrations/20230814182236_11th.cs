using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Iteration6_API.Migrations
{
    public partial class _11th : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Audit_Entry_Type_ID",
                table: "AuditTrails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "AuditEntryTypes",
                columns: table => new
                {
                    Audit_Entry_Type_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Audit_Entry_Type = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuditEntryTypes", x => x.Audit_Entry_Type_ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AuditTrails_Audit_Entry_Type_ID",
                table: "AuditTrails",
                column: "Audit_Entry_Type_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_AuditTrails_AuditEntryTypes_Audit_Entry_Type_ID",
                table: "AuditTrails",
                column: "Audit_Entry_Type_ID",
                principalTable: "AuditEntryTypes",
                principalColumn: "Audit_Entry_Type_ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AuditTrails_AuditEntryTypes_Audit_Entry_Type_ID",
                table: "AuditTrails");

            migrationBuilder.DropTable(
                name: "AuditEntryTypes");

            migrationBuilder.DropIndex(
                name: "IX_AuditTrails_Audit_Entry_Type_ID",
                table: "AuditTrails");

            migrationBuilder.DropColumn(
                name: "Audit_Entry_Type_ID",
                table: "AuditTrails");
        }
    }
}
