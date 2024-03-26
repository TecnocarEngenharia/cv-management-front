import React from "react";
import * as C from "./style";
import { CardModal } from "../cardModal";
import Import from "../../image/import.svg";
import Export from "../../image/export.svg";
import * as XLSX from "xlsx";
import axios from "axios";

interface ModalExcelProps {
  isOpen?: boolean;
  onClose?: () => void;
  classname?: string;
  dataToExport?: any[] | null;
}



const ModalExcel: React.FC<ModalExcelProps> = ({
  onClose,
  classname,
  dataToExport,
}) => {

  const handleExportClick = () => {
    if (dataToExport) {

      const dataWithCurriculumLink = dataToExport.map(candidate => ({
        ...candidate,
        curriculo: `${import.meta.env.VITE_API_URL}${candidate.id}/cv`,
      }));


      const ws = XLSX.utils.json_to_sheet(dataWithCurriculumLink);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
      XLSX.writeFile(wb, "base_de_candidatos.xlsx");
    }
  };
  const handleFileSelect = async (files: FileList | null) => {
    try {
      if (files && files.length > 0) {
        const formData = new FormData();
        formData.append("file", files[0]); 
  
        const uploadUrl = import.meta.env.VITE_UPLOAD_CANDIDATES_URL;
        await axios.post(uploadUrl, formData);

        alert("Dados importados com sucesso")
      }
    } catch (error) {
      console.error(error)
      console.error("Erro ao realizar upload:", error);
    }
  
  };

  return (
    <>
      <C.Container className={classname}>
        <C.Content>
          <C.Title>Excel Connect</C.Title>
          <CardModal
            title="Importe sua base de excel aqui"
            alt="Imagem de importação"
            img={Import}
            onFileSelect={handleFileSelect}
          />
          <CardModal
            title="Exportar para base de excel"
            alt="Imagem de exportação"
            img={Export}
            onClick={handleExportClick}
          />
          <C.Button onClick={onClose}>Fechar Card</C.Button>
        </C.Content>
      </C.Container>
    </>
  );
};

export { ModalExcel }
