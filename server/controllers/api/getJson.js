import XLSX from 'xlsx';
import path from 'path';

const filePath = (filePath) => path.join(path.dirname(process.mainModule.filename), filePath);
const getJson = (req, res, next) => {


    // /Users/dengzr/devJS/NodeJS/nodeTemp/server/data/data.xlsxRouter
    const workbook = XLSX.readFile(filePath('data/data.xlsx'));
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    console.log(xlData);


    res.status(200).json({ body: xlData });
    
};

export default getJson;

