const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  const text=await fs.readFile(fileName)
  return text
};


module.exports =  reader ;
