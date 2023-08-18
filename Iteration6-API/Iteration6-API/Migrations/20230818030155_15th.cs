using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Iteration6_API.Migrations
{
    public partial class _15th : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateTimeStamp",
                table: "AuditTrails",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 7,
                column: "Audit_Entry_Type",
                value: "DeleteUserRole");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 8,
                column: "Audit_Entry_Type",
                value: "AddHelpTip");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 9,
                column: "Audit_Entry_Type",
                value: "UpdateHelpTip");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 10,
                column: "Audit_Entry_Type",
                value: "DeleteHelpTip");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 11,
                column: "Audit_Entry_Type",
                value: "SendNewsletter");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 12,
                column: "Audit_Entry_Type",
                value: "PerformStockTake");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 13,
                column: "Audit_Entry_Type",
                value: "WriteOffInventory");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 14,
                column: "Audit_Entry_Type",
                value: "ViewAuditTrail");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 15,
                column: "Audit_Entry_Type",
                value: "UploadPrescribedBookList");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 16,
                column: "Audit_Entry_Type",
                value: "AddPrescribedBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 17,
                column: "Audit_Entry_Type",
                value: "AddBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 18,
                column: "Audit_Entry_Type",
                value: "UpdateBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 19,
                column: "Audit_Entry_Type",
                value: "DeleteBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 20,
                column: "Audit_Entry_Type",
                value: "AddModule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 21,
                column: "Audit_Entry_Type",
                value: "UpdateModule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 22,
                column: "Audit_Entry_Type",
                value: "DeleteModule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 23,
                column: "Audit_Entry_Type",
                value: "AddFaculty");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 24,
                column: "Audit_Entry_Type",
                value: "UpdateFaculty");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 25,
                column: "Audit_Entry_Type",
                value: "DeleteFaculty");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 26,
                column: "Audit_Entry_Type",
                value: "AddDepartment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 27,
                column: "Audit_Entry_Type",
                value: "UpdateDepartment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 28,
                column: "Audit_Entry_Type",
                value: "DeleteDepartment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 29,
                column: "Audit_Entry_Type",
                value: "AddEvaluationSchedule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 30,
                column: "Audit_Entry_Type",
                value: "UpdateEvaluationSchedule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 31,
                column: "Audit_Entry_Type",
                value: "RemoveEvaluationSchedule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 32,
                column: "Audit_Entry_Type",
                value: "EvaluationScheduleSummary");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 33,
                column: "Audit_Entry_Type",
                value: "GenerateBookVoucher");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 34,
                column: "Audit_Entry_Type",
                value: "UpdateBookVoucher");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 35,
                column: "Audit_Entry_Type",
                value: "DeleteBookVoucher");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 36,
                column: "Audit_Entry_Type",
                value: "AddEmployee");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 37,
                column: "Audit_Entry_Type",
                value: "UpdateEmployee");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 38,
                column: "Audit_Entry_Type",
                value: "DeleteEmployee");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 39,
                column: "Audit_Entry_Type",
                value: "AddEmployeeType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 40,
                column: "Audit_Entry_Type",
                value: "UpdateEmployeeType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 41,
                column: "Audit_Entry_Type",
                value: "DeleteEmployeeType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 42,
                column: "Audit_Entry_Type",
                value: "AddEquipment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 43,
                column: "Audit_Entry_Type",
                value: "UpdateEquipment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 44,
                column: "Audit_Entry_Type",
                value: "DeleteEquipment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 45,
                column: "Audit_Entry_Type",
                value: "AddEquipmentType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 46,
                column: "Audit_Entry_Type",
                value: "UpdateEquipmentType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 47,
                column: "Audit_Entry_Type",
                value: "DeleteEquipmentType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 48,
                column: "Audit_Entry_Type",
                value: "CaptureEquipment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 49,
                column: "Audit_Entry_Type",
                value: "AddStudent");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 50,
                column: "Audit_Entry_Type",
                value: "UpdateStudent");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 51,
                column: "Audit_Entry_Type",
                value: "DeleteStudent");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 52,
                column: "Audit_Entry_Type",
                value: "WalkInSalesReport");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 53,
                column: "Audit_Entry_Type",
                value: "BookInventoryReport");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 54,
                column: "Audit_Entry_Type",
                value: "LabEquipmentInventoryReport");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 55,
                column: "Audit_Entry_Type",
                value: "OnlineOrdersReport");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 56,
                column: "Audit_Entry_Type",
                value: "ResellersReport");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 57,
                column: "Audit_Entry_Type",
                value: "AuditTrailReport");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 58,
                column: "Audit_Entry_Type",
                value: "AddSupplier");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 59,
                column: "Audit_Entry_Type",
                value: "UpdateSupplier");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 60,
                column: "Audit_Entry_Type",
                value: "DeleteSupplier");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "DateTimeStamp",
                table: "AuditTrails",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 7,
                column: "Audit_Entry_Type",
                value: "ViewUserRole");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 8,
                column: "Audit_Entry_Type",
                value: "DeleteUserRole");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 9,
                column: "Audit_Entry_Type",
                value: "AddHelpTip");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 10,
                column: "Audit_Entry_Type",
                value: "ViewHelpTip");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 11,
                column: "Audit_Entry_Type",
                value: "UpdateHelpTip");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 12,
                column: "Audit_Entry_Type",
                value: "DeleteHelpTip");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 13,
                column: "Audit_Entry_Type",
                value: "SendNewsletter");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 14,
                column: "Audit_Entry_Type",
                value: "PerformStockTake");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 15,
                column: "Audit_Entry_Type",
                value: "WriteOffInventory");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 16,
                column: "Audit_Entry_Type",
                value: "ViewAuditTrail");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 17,
                column: "Audit_Entry_Type",
                value: "UploadPrescribedBookList");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 18,
                column: "Audit_Entry_Type",
                value: "AddPrescribedBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 19,
                column: "Audit_Entry_Type",
                value: "AddBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 20,
                column: "Audit_Entry_Type",
                value: "UpdateBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 21,
                column: "Audit_Entry_Type",
                value: "ViewBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 22,
                column: "Audit_Entry_Type",
                value: "DeleteBook");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 23,
                column: "Audit_Entry_Type",
                value: "AddModule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 24,
                column: "Audit_Entry_Type",
                value: "UpdateModule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 25,
                column: "Audit_Entry_Type",
                value: "ViewModule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 26,
                column: "Audit_Entry_Type",
                value: "DeleteModule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 27,
                column: "Audit_Entry_Type",
                value: "AddFaculty");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 28,
                column: "Audit_Entry_Type",
                value: "UpdateFaculty");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 29,
                column: "Audit_Entry_Type",
                value: "ViewFaculty");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 30,
                column: "Audit_Entry_Type",
                value: "DeleteFaculty");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 31,
                column: "Audit_Entry_Type",
                value: "AddDepartment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 32,
                column: "Audit_Entry_Type",
                value: "UpdateDepartment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 33,
                column: "Audit_Entry_Type",
                value: "ViewDepartment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 34,
                column: "Audit_Entry_Type",
                value: "DeleteDepartment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 35,
                column: "Audit_Entry_Type",
                value: "AddEvaluationSchedule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 36,
                column: "Audit_Entry_Type",
                value: "UpdateEvaluationSchedule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 37,
                column: "Audit_Entry_Type",
                value: "ViewEvaluationSchedule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 38,
                column: "Audit_Entry_Type",
                value: "RemoveEvaluationSchedule");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 39,
                column: "Audit_Entry_Type",
                value: "EvaluationScheduleSummary");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 40,
                column: "Audit_Entry_Type",
                value: "GenerateBookVoucher");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 41,
                column: "Audit_Entry_Type",
                value: "ViewBookVoucher");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 42,
                column: "Audit_Entry_Type",
                value: "UpdateBookVoucher");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 43,
                column: "Audit_Entry_Type",
                value: "DeleteBookVoucher");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 44,
                column: "Audit_Entry_Type",
                value: "AddEmployee");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 45,
                column: "Audit_Entry_Type",
                value: "ViewEmployee");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 46,
                column: "Audit_Entry_Type",
                value: "UpdateEmployee");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 47,
                column: "Audit_Entry_Type",
                value: "DeleteEmployee");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 48,
                column: "Audit_Entry_Type",
                value: "AddEmployeeType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 49,
                column: "Audit_Entry_Type",
                value: "ViewEmployeeType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 50,
                column: "Audit_Entry_Type",
                value: "UpdateEmployeeType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 51,
                column: "Audit_Entry_Type",
                value: "DeleteEmployeeType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 52,
                column: "Audit_Entry_Type",
                value: "AddEquipment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 53,
                column: "Audit_Entry_Type",
                value: "ViewEquipment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 54,
                column: "Audit_Entry_Type",
                value: "UpdateEquipment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 55,
                column: "Audit_Entry_Type",
                value: "DeleteEquipment");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 56,
                column: "Audit_Entry_Type",
                value: "AddEquipmentType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 57,
                column: "Audit_Entry_Type",
                value: "ViewEquipmentType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 58,
                column: "Audit_Entry_Type",
                value: "UpdateEquipmentType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 59,
                column: "Audit_Entry_Type",
                value: "DeleteEquipmentType");

            migrationBuilder.UpdateData(
                table: "AuditEntryTypes",
                keyColumn: "Audit_Entry_Type_ID",
                keyValue: 60,
                column: "Audit_Entry_Type",
                value: "CaptureEquipment");

            migrationBuilder.InsertData(
                table: "AuditEntryTypes",
                columns: new[] { "Audit_Entry_Type_ID", "Audit_Entry_Type" },
                values: new object[,]
                {
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
    }
}
