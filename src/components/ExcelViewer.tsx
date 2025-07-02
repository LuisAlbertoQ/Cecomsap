import React, { useState } from 'react';
import * as XLSX from 'xlsx';
// Si no está instalado: npm install react-data-grid@7.0.0-canary.43 --legacy-peer-deps
import DataGrid from 'react-data-grid';

const excelFiles = [
  {
    name: 'Análisis Interno EFI Cecomsap',
    file: 'efi.xlsx',
    onlineUrl: 'https://upeuedupe-my.sharepoint.com/:x:/r/personal/alberto_quilla_upeu_edu_pe/_layouts/15/Doc.aspx?sourcedoc=%7BF320AA38-4B93-43B0-BFC1-2848975B617E%7D&file=analisis%20interno%20efi%20Cecomsap.xlsx&action=default&mobileredirect=true',
  },
  {
    name: 'Análisis EFE Multiservicios CECOMSAP',
    file: 'efe.xlsx',
    onlineUrl: 'https://upeuedupe-my.sharepoint.com/:x:/r/personal/alberto_quilla_upeu_edu_pe/_layouts/15/Doc.aspx?sourcedoc=%7B9CD7537C-4DAF-4F12-A7A0-E0FB8339D0AF%7D&file=AnalisisEFE_MultisevisiosCECOMSAP.xlsx&action=default&mobileredirect=true',
  },
  {
    name: 'BSC Cecomsap',
    file: 'bsc.xlsx',
    onlineUrl: 'https://upeuedupe-my.sharepoint.com/:x:/r/personal/alberto_quilla_upeu_edu_pe/_layouts/15/Doc.aspx?sourcedoc=%7BDCA3CCFD-3FD6-43C1-AB66-153AF3D89716%7D&file=BSC%20Cecomsap.xlsx&action=default&mobileredirect=true',
  },
  {
    name: 'Cadena de Valor Cecomsap',
    file: 'cadena_de_valor.xlsx',
    onlineUrl: 'https://upeuedupe-my.sharepoint.com/:x:/r/personal/alberto_quilla_upeu_edu_pe/_layouts/15/Doc.aspx?sourcedoc=%7B01003553-C908-4B4A-9393-0B4160B42BA0%7D&file=cadena%20de%20valor%20Cecomsap.xlsx&action=default&mobileredirect=true',
  },
  {
    name: 'Came Cecomsap',
    file: 'came.xlsx',
    onlineUrl: 'https://upeuedupe-my.sharepoint.com/:x:/r/personal/alberto_quilla_upeu_edu_pe/_layouts/15/Doc.aspx?sourcedoc=%7BE19DFB63-ED65-4880-900C-BF551C2EE9F3%7D&file=Came%20Cecomsap.xlsx&action=default&mobileredirect=true',
  },
];

const ExcelViewer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tableData, setTableData] = useState<(string | number | boolean | null)[][]>([]);
  const [modalTitle, setModalTitle] = useState('');
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [currentSheet, setCurrentSheet] = useState<string>('');
  const [workbook, setWorkbook] = useState<XLSX.WorkBook | null>(null);

  const handleViewOnline = async (excel: { name: string; file: string; onlineUrl: string }) => {
    try {
      const response = await fetch(`/${encodeURIComponent(excel.file)}`);
      if (!response.ok) throw new Error('No se pudo descargar el archivo');
      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const wb = XLSX.read(arrayBuffer, { type: 'array' });
      setWorkbook(wb);
      setSheetNames(wb.SheetNames);
      setCurrentSheet(wb.SheetNames[0]);
      const worksheet = wb.Sheets[wb.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setTableData(data as (string | number | boolean | null)[][]);
      setModalTitle(excel.name);
      setModalOpen(true);
    } catch {
      alert('No se pudo cargar el archivo Excel.');
    }
  };

  const handleSheetChange = (sheetName: string) => {
    if (!workbook) return;
    setCurrentSheet(sheetName);
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    setTableData(data as (string | number | boolean | null)[][]);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTableData([]);
    setModalTitle('');
    setSheetNames([]);
    setCurrentSheet('');
    setWorkbook(null);
  };

  // Encuentra el máximo número de columnas en cualquier fila
  const maxCols = tableData.reduce((max, row) => Math.max(max, row.length), 0);

  // Genera encabezados: usa los de la primera fila, o nombres genéricos si están vacíos
  const columns = Array.from({ length: maxCols }).map((_, idx) => ({
    key: `col${idx}`,
    name:
      (tableData[0] && tableData[0][idx] !== undefined && tableData[0][idx] !== null && tableData[0][idx] !== '')
        ? String(tableData[0][idx])
        : `Columna ${idx + 1}`,
    resizable: true,
    width: 180,
  }));

  // Genera filas asegurando que todas tengan la misma cantidad de columnas
  const rows = tableData.slice(1).map((row) => {
    const obj: Record<string, string | number | boolean | null> = {};
    columns.forEach((col, j) => {
      obj[col.key] = row[j] !== undefined ? row[j] : '';
    });
    return obj;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-400 py-8 px-2">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">ARCHIVOS ESTRATÉGICOS EN EXCEL</h1>
          <p className="text-lg md:text-xl font-medium">MULTISERVICIOS CECOMSAP</p>
        </div>
        <div className="p-6 md:p-12 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {excelFiles.map((excel) => (
              <div key={excel.file} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200 hover:shadow-2xl transition-all">
                <div className="text-6xl mb-4">📊</div>
                <div className="font-bold text-lg text-blue-900 mb-2 text-center">{excel.name}</div>
                <a
                  href={`/${encodeURIComponent(excel.file)}`}
                  download
                  className="mt-2 px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-900 transition"
                >
                  Descargar
                </a>
                <button
                  onClick={() => handleViewOnline(excel)}
                  className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-800 transition"
                >
                  Ver Tabla
                </button>
                <a
                  href={excel.onlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 bg-indigo-700 text-white rounded-lg font-semibold shadow hover:bg-indigo-900 transition"
                >
                  Ver en línea (OneDrive)
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal fullscreen para mostrar la tabla y navegación entre hojas */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90">
          <div className="absolute top-0 right-0 m-6 z-50">
            <button onClick={closeModal} className="text-white text-4xl font-bold hover:text-yellow-300 bg-black bg-opacity-40 rounded-full px-4 py-2">&times;</button>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-full max-w-none mx-auto bg-white rounded-none shadow-2xl flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-4 bg-gradient-to-r from-green-700 to-green-900">
                <h2 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-0">{modalTitle}</h2>
                {sheetNames.length > 1 && (
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    {sheetNames.map((sheet) => (
                      <button
                        key={sheet}
                        onClick={() => handleSheetChange(sheet)}
                        className={`px-3 py-1 rounded-lg font-semibold border-2 transition text-sm md:text-base ${currentSheet === sheet ? 'bg-green-700 text-white border-green-900' : 'bg-white text-green-900 border-green-300 hover:bg-green-100'}`}
                      >
                        {sheet}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-1 w-full h-full overflow-auto p-0 md:p-4">
                {columns.length > 0 ? (
                  <DataGrid
                    columns={columns}
                    rows={rows}
                    className="rdg-light"
                    style={{ height: 'calc(100vh - 120px)', minHeight: 400 }}
                  />
                ) : (
                  <div className="text-center text-gray-500">No hay datos para mostrar.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelViewer; 