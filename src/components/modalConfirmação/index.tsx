import axios from "axios";
import * as C from "./style";

interface IModalProps {
  id: number | undefined;
  closeModal: () => void;
}

const ModalConfirmação = ({ id, closeModal }: IModalProps) => {
  const deletarCandidato = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}${id}`);
      closeModal();
    } catch (error) {
      console.error("Erro ao excluir candidato:", error);
    }
  };
  return (
    <C.ModalBG>
      <C.Container>
        <C.Title>Tem certeza de que deseja excluir este candidato?</C.Title>

        <C.Message>Esta ação será irreversível.</C.Message>
        <C.ContentButton>
          <button onClick={deletarCandidato}>Apagar</button>
          <button onClick={closeModal}>Cancelar</button>
        </C.ContentButton>
      </C.Container>
    </C.ModalBG>
  );
};

export { ModalConfirmação };
