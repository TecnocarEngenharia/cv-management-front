import React, { useEffect } from "react";
import * as XLSX from "xlsx";

interface ExportToExcelButtonProps {
  data?: any[];
  fileName?: string;
}

const ExportToExcelButton: React.FC<ExportToExcelButtonProps> = ({
  data,
  fileName,
}) => {
  useEffect(() => {
    const handleExport = () => {
      if (data) {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
        XLSX.writeFile(wb, fileName || "exported_data.xlsx");
      }
    };

    handleExport(); 
  }, [data, fileName]);

  return null;
};

export { ExportToExcelButton };
