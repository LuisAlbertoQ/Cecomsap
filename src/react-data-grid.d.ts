declare module 'react-data-grid'; 

console.log('tableData:', tableData);
console.log('columns:', columns);
console.log('rows:', rows); 

const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); 
console.log('Datos leídos del Excel:', data); 

const columns = tableData[0]
  ? tableData[0]
      .map((col: any, idx: number) =>
        col !== undefined && col !== null && col !== ''
          ? {
              key: `col${idx}`,
              name: String(col),
              resizable: true,
              width: 180,
            }
          : null
      )
      .filter(Boolean)
  : []; 

const rows = tableData.slice(1).map((row) => {
  const obj: Record<string, any> = {};
  columns.forEach((col, j) => {
    obj[col.key] = row[j] !== undefined ? row[j] : '';
  });
  return obj;
}); 