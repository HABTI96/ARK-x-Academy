const XLSX = require("xlsx");

const workbook = XLSX.readFile("./employee_data_.xlsx");
let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}