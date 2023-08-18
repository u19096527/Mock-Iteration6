using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Iteration6_API.Migrations
{
    public partial class _13th : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AuditEntryTypes",
                columns: new[] { "Audit_Entry_Type_ID", "Audit_Entry_Type" },
                values: new object[,]
                {
                    { 1, "BackUpSystemData" },
                    { 2, "RestoreSystemData" },
                    { 3, "UpdateVAT" },
                    { 4, "ViewVAT" },
                    { 5, "AddUserRole" },
                    { 6, "UpdateUserRole" },
                    { 7, "ViewUserRole" },
                    { 8, "DeleteUserRole" },
                    { 9, "AddHelpTip" },
                    { 10, "ViewHelpTip" },
                    { 11, "UpdateHelpTip" },
                    { 12, "DeleteHelpTip" },
                    { 13, "SendNewsletter" },
                    { 14, "PerformStockTake" },
                    { 15, "WriteOffInventory" },
                    { 16, "ViewAuditTrail" },
                    { 17, "UploadPrescribedBookList" },
                    { 18, "AddPrescribedBook" },
                    { 19, "AddBook" },
                    { 20, "UpdateBook" },
                    { 21, "ViewBook" },
                    { 22, "DeleteBook" },
                    { 23, "AddModule" },
                    { 24, "UpdateModule" },
                    { 25, "ViewModule" },
                    { 26, "DeleteModule" },
                    { 27, "AddFaculty" },
                    { 28, "UpdateFaculty" },
                    { 29, "ViewFaculty" },
                    { 30, "DeleteFaculty" },
                    { 31, "AddDepartment" },
                    { 32, "UpdateDepartment" },
                    { 33, "ViewDepartment" },
                    { 34, "DeleteDepartment" },
                    { 35, "AddEvaluationSchedule" },
                    { 36, "UpdateEvaluationSchedule" },
                    { 37, "ViewEvaluationSchedule" },
                    { 38, "RemoveEvaluationSchedule" },
                    { 39, "EvaluationScheduleSummary" },
                    { 40, "GenerateBookVoucher" },
                    { 41, "ViewBookVoucher" },
                    { 42, "UpdateBookVoucher" }
                });

            migrationBuilder.InsertData(
                table: "AuditEntryTypes",
                columns: new[] { "Audit_Entry_Type_ID", "Audit_Entry_Type" },
                values: new object[,]
                {
                    { 43, "DeleteBookVoucher" },
                    { 44, "AddEmployee" },
                    { 45, "ViewEmployee" },
                    { 46, "UpdateEmployee" },
                    { 47, "DeleteEmployee" },
                    { 48, "AddEmployeeType" },
                    { 49, "ViewEmployeeType" },
                    { 50, "UpdateEmployeeType" },
                    { 51, "DeleteEmployeeType" },
                    { 52, "AddEquipment" },
                    { 53, "ViewEquipment" },
                    { 54, "UpdateEquipment" },
                    { 55, "DeleteEquipment" },
                    { 56, "AddEquipmentType" },
                    { 57, "ViewEquipmentType" },
                    { 58, "UpdateEquipmentType" },
                    { 59, "DeleteEquipmentType" },
                    { 60, "CaptureEquipment" },
                    { 61, "AddStudent" },
                    { 62, "ViewStudent" },
                    { 63, "UpdateStudent" },
                    { 64, "DeleteStudent" },
                    { 65, "WalkInSalesReport" },
                    { 66, "BookInventoryReport" },
                    { 67, "LabEquipmentInventoryReport" },
                    { 68, "OnlineOrdersReport" },
                    { 69, "ResellersReport" },
                    { 70, "AuditTrailReport" },
                    { 71, "AddSupplier" },
                    { 72, "ViewSupplier" },
                    { 73, "UpdateSupplier" },
                    { 74, "DeleteSupplier" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 51);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 54);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 59);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 60);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 61);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 62);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 63);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 64);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 65);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 66);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 67);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 68);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 69);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 70);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 71);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 72);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 73);

            migrationBuilder.DeleteData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 74);
        }
    }
}
