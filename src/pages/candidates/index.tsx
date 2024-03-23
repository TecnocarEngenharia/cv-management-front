import * as C from "./styled";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { useEffect, useState } from "react";
import { CardCandidates } from "../../components/CardCandidates";
import { ListCandidates } from "../../components/listCandidates";
import Excel from "../../image/excel.svg";
import List_candidates from "../../image/list_candidates.svg";
import Bloco from "../../image/block.svg";
import { ModalExcel } from "../../components/modalExcel";
import Filter from "../../image/icon_filter.svg";
import RemoveFilter from "../../image/remove_filter.svg";
import { ModalFilter } from "../../components/ModalFilter";
import axios from "axios";

interface Candidate {
  id: number;
  profissional: string;
  idade: number;
  email: string;
  telefone: string;
  cidade: string;
  uf: string;
  esta_empregado: string;
  pretensao_salarial: string;
  tipo_desejado_linkedin: string;
  nivel_funcao: string;
}

const Candidate = () => {
  const foi_avaliado_recrutamento = "foi_avaliado_recrutamento=true";
  const { data, refetch } = useAxiosCandidate(
    `${import.meta.env.VITE_API_URL}?${foi_avaliado_recrutamento}`
  );
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<"bloco" | "list">(
    "bloco"
  );
  const [currentData, setCurrentData] = useState<Candidate[] | null>(null);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (data !== null) {
      //@ts-ignore
      setCurrentData(data);
    }
  }, [data]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleIconClick = (component: "list" | "bloco") => {
    setSelectedComponent(component);
  };

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const handleFilterApply = async (filters: any) => {
    const queryString = buildQueryString(filters);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}?${foi_avaliado_recrutamento}&${queryString}`
      );
      setCurrentData(response.data);
      setIsFiltered(true);
    } catch (error) {
      console.error("Erro ao obter dados filtrados:", error);
    }
  };

  const removeQueryAndFetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}?${foi_avaliado_recrutamento}`
      );
      setCurrentData(response.data);
      setFilter(false);
      setIsFiltered(false);
      localStorage.removeItem("filtros");
    } catch (error) {
      console.error("Erro ao obter dados sem filtro:", error);
    }
  };

  const buildQueryString = (filters: any) => {
    return Object.keys(filters)
      .map((key) => {
        if (
          filters[key] !== undefined &&
          filters[key] !== "" &&
          filters[key] !== "N/A" &&
          (typeof filters[key] !== "object" ||
            Object.values(filters[key]).some((val) => val !== ""))
        ) {
          return (
            encodeURIComponent(key) + "=" + encodeURIComponent(filters[key])
          );
        } else {
          return null;
        }
      })
      .filter((param) => param !== null)
      .join("&");
  };
  const handleModalClose = () => {
    refetch();
  };

  return (
    <C.Content>
      <C.ContainerExcel onClick={() => toggleModal()}>
        <img src={Excel} alt=" icone de excel" />
      </C.ContainerExcel>

      <C.ContainerList
        onClick={() => handleIconClick("list")}
        className={selectedComponent === "list" ? "list" : ""}
      >
        <img src={List_candidates} alt=" icone de lista" />
      </C.ContainerList>

      <C.ContainerBloco
        onClick={() => handleIconClick("bloco")}
        className={selectedComponent === "bloco" ? "bloco" : ""}
      >
        <img src={Bloco} alt="icone de bloco" />
      </C.ContainerBloco>

      <C.ContainerFilter onClick={() => toggleFilter()}>
        <img src={Filter} alt="icone do Filtro" />
      </C.ContainerFilter>

      {isFiltered && (
        <C.ContainerNoFilter onClick={removeQueryAndFetchData}>
          <img src={RemoveFilter} alt="icone do Filtro" />
        </C.ContainerNoFilter>
      )}
      <C.Container>
        {selectedComponent === "bloco" && (
          <CardCandidates
            currentData={currentData}
            onCloseModal={handleModalClose}
          />
        )}

        {selectedComponent === "list" && (
          <ListCandidates
            currentData={currentData}
            onCloseModal={handleModalClose}
          />
        )}
        {modal && (
          <ModalExcel onClose={toggleModal} dataToExport={currentData} />
        )}
        {filter && (
          <ModalFilter
            toggleFilter={toggleFilter}
            onFilterApply={handleFilterApply}
            removeQueryAndFetchData={removeQueryAndFetchData}
          />
        )}
      </C.Container>
    </C.Content>
  );
};

export { Candidate };
