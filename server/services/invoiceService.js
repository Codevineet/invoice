const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/invoices.json");

const getInvoices = () => {
  return new Promise((resolve, reject) => {
 
    fs.readFile(dataPath, "utf-8", (err, data) => {
      if (err) {
        reject(err); 
      } else {
        try {
          const invoices = JSON.parse(data);
          resolve(invoices); 
        } catch (parseError) {
          reject(parseError); 
        }
      }
    });
  });
};

module.exports = { getInvoices };
