const XLSX = require("xlsx");

const doc = "./doc.xlsx";

const workBook = XLSX.readFile(doc);
XLSX.writeFile(workBook, doc.replace(".xlsx", ".csv"), { bookType: "csv" });
