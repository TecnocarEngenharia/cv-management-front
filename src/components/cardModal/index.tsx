import React, { useRef } from "react";
import * as C from "./style";

interface ICardProps {
  title: string;
  img: string;
  alt: string;
  onClick?: () => void;
  onFileSelect?: (file: FileList | null) => void;
}

const CardModal = ({ img, title, alt, onClick, onFileSelect }: ICardProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = () => {
    if (fileInputRef.current && onFileSelect) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileSelect) {
      onFileSelect(e.target.files);
    }
  };

  return (
    <C.ContentImports>
      <div>
        <C.Paragraph>{title}</C.Paragraph>
      </div>
      <C.Buttons onClick={onClick || handleFileSelect}>
        <img src={img} alt={alt} />
      </C.Buttons>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleInputChange}
        accept=".xlsx"
      />
    </C.ContentImports>
  );
};

export { CardModal };
